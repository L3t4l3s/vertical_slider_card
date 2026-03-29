import { LitElement, html, nothing, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  HomeAssistant,
  LovelaceCard,
  handleAction,
  hasAction as helperHasAction,
  computeStateDisplay,
} from 'custom-card-helpers';
import {
  VerticalSliderCardConfig,
  FeatureConfig,
  CoverEntityFeature,
} from './types';
import { CARD_TAG, CARD_VERSION, EDITOR_TAG, DEBOUNCE_MS } from './const';
import { cardStyles } from './styles';
import { actionHandler, hasAction } from './action-handler';
import './slider';
import './editor';

console.info(
  `%c VERTICAL-SLIDER-CARD %c v${CARD_VERSION} `,
  'color: white; background: #7c4dff; font-weight: 700;',
  'color: #7c4dff; background: white; font-weight: 700;',
);

@customElement(CARD_TAG)
export class VerticalSliderCard extends LitElement implements LovelaceCard {
  static styles = cardStyles;

  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: VerticalSliderCardConfig;

  private _debounceTimer?: ReturnType<typeof setTimeout>;

  static getConfigElement(): HTMLElement {
    return document.createElement(EDITOR_TAG);
  }

  static getStubConfig(hass: HomeAssistant): Partial<VerticalSliderCardConfig> {
    const coverEntity = Object.keys(hass.states).find((eid) =>
      eid.startsWith('cover.'),
    );
    return {
      entity: coverEntity || 'cover.example',
      features: [{ type: 'cover-open-close' }],
    };
  }

  public setConfig(config: VerticalSliderCardConfig): void {
    if (!config.entity || !config.entity.startsWith('cover.')) {
      throw new Error('Please define a cover entity');
    }

    this._config = {
      tap_action: { action: 'more-info' },
      hold_action: { action: 'none' },
      double_tap_action: { action: 'none' },
      icon_tap_action: { action: 'more-info' },
      ...config,
    };
  }

  public getCardSize(): number {
    return 4;
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has('_config')) return true;
    if (!changedProps.has('hass')) return false;

    const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
    if (!oldHass) return true;

    const entityId = this._config.entity;
    return oldHass.states[entityId] !== this.hass.states[entityId];
  }

  protected render() {
    if (!this.hass || !this._config) return nothing;

    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      return html`
        <ha-card>
          <div class="info">
            <div class="state-text">Entity not found: ${this._config.entity}</div>
          </div>
        </ha-card>
      `;
    }

    const isUnavailable =
      stateObj.state === 'unavailable' || stateObj.state === 'unknown';
    const position: number = stateObj.attributes.current_position ?? 0;
    const entityName =
      this._config.name || stateObj.attributes.friendly_name || '';
    const stateDisplay = this._computeStateDisplay(stateObj);
    const lastChanged = this._computeLastChanged(stateObj);
    const sliderColor = this._computeColor();
    const supportedFeatures: number =
      stateObj.attributes.supported_features ?? 0;

    if (isUnavailable) {
      this.setAttribute('unavailable', '');
    } else {
      this.removeAttribute('unavailable');
    }

    return html`
      <ha-card
        @action="${this._handleAction}"
        .actionHandler="${actionHandler({
          hasHold: hasAction(this._config.hold_action),
          hasDoubleClick: hasAction(this._config.double_tap_action),
        })}"
      >
        <div class="info">
          <div class="state-text">${stateDisplay}</div>
          ${lastChanged
            ? html`<div class="last-changed">${lastChanged}</div>`
            : nothing}
        </div>

        <div class="slider-container">
          <vertical-cover-slider
            .value="${position}"
            .disabled="${isUnavailable}"
            .color="${sliderColor}"
            @value-changed="${this._onSliderChanged}"
          ></vertical-cover-slider>
        </div>

        ${this._renderFeatures(supportedFeatures)}
      </ha-card>
    `;
  }

  private _computeStateDisplay(stateObj: any): string {
    const state = stateObj.state;
    const position: number | undefined =
      stateObj.attributes.current_position;

    // Use HA's localize for state names
    const localizedState =
      this.hass.localize(`component.cover.entity_component._.state.${state}`) ||
      state;

    if (
      (state === 'open' || state === 'closing') &&
      position !== undefined &&
      position !== 100
    ) {
      return `${localizedState} \u00B7 ${position} %`;
    }

    return localizedState;
  }

  private _computeLastChanged(stateObj: any): string {
    if (!stateObj.last_changed) return '';

    const lastChanged = new Date(stateObj.last_changed);
    const now = new Date();
    const diffMs = now.getTime() - lastChanged.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);

    // Use HA's relative time if available
    if (diffSec < 5) {
      return this.hass.localize?.('ui.components.relative_time.just_now') || 'Jetzt';
    }

    if (diffSec < 60) {
      return (
        this.hass.localize?.(
          'ui.components.relative_time.duration.second',
          'count',
          String(diffSec),
        ) ||
        `Vor ${diffSec} Sekunden`
      );
    }

    if (diffMin < 60) {
      return (
        this.hass.localize?.(
          'ui.components.relative_time.duration.minute',
          'count',
          String(diffMin),
        ) ||
        `Vor ${diffMin} Minuten`
      );
    }

    if (diffHour < 24) {
      return (
        this.hass.localize?.(
          'ui.components.relative_time.duration.hour',
          'count',
          String(diffHour),
        ) ||
        `Vor ${diffHour} Stunden`
      );
    }

    return (
      this.hass.localize?.(
        'ui.components.relative_time.duration.day',
        'count',
        String(diffDay),
      ) ||
      `Vor ${diffDay} Tagen`
    );
  }

  private _computeColor(): string {
    if (this._config.color) {
      // HA color tokens like 'purple', 'blue' map to CSS vars
      return `var(--${this._config.color}-color, var(--state-cover-color, var(--primary-color)))`;
    }
    return '';
  }

  private _onSliderChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    const value = ev.detail.value;

    if (this._debounceTimer) {
      clearTimeout(this._debounceTimer);
    }

    this._debounceTimer = setTimeout(() => {
      this.hass.callService('cover', 'set_cover_position', {
        entity_id: this._config.entity,
        position: value,
      });
    }, DEBOUNCE_MS);
  }

  private _handleAction(ev: CustomEvent): void {
    if (!this.hass || !this._config) return;

    const action = ev.detail?.action;
    if (!action) return;

    handleAction(this, this.hass, this._config, action);
  }

  private _renderFeatures(supportedFeatures: number) {
    if (!this._config.features?.length) return nothing;

    const featureElements = this._config.features.map((feature) =>
      this._renderFeature(feature, supportedFeatures),
    );

    // Filter out empty results
    if (featureElements.every((el) => el === nothing)) return nothing;

    return html`<div class="features">${featureElements}</div>`;
  }

  private _renderFeature(feature: FeatureConfig, supportedFeatures: number) {
    switch (feature.type) {
      case 'cover-open-close':
        return this._renderOpenClose(supportedFeatures);
      default:
        return nothing;
    }
  }

  private _renderOpenClose(supportedFeatures: number) {
    const canOpen = supportedFeatures & CoverEntityFeature.OPEN;
    const canClose = supportedFeatures & CoverEntityFeature.CLOSE;
    const canStop = supportedFeatures & CoverEntityFeature.STOP;

    return html`
      ${canOpen
        ? html`<ha-icon-button
            .label=${'Open'}
            @click="${this._onOpen}"
          >
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </ha-icon-button>`
        : nothing}
      ${canStop
        ? html`<ha-icon-button
            .label=${'Stop'}
            @click="${this._onStop}"
          >
            <ha-icon icon="mdi:stop"></ha-icon>
          </ha-icon-button>`
        : nothing}
      ${canClose
        ? html`<ha-icon-button
            .label=${'Close'}
            @click="${this._onClose}"
          >
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </ha-icon-button>`
        : nothing}
    `;
  }

  private _onOpen(ev: Event): void {
    ev.stopPropagation();
    this.hass.callService('cover', 'open_cover', {
      entity_id: this._config.entity,
    });
  }

  private _onStop(ev: Event): void {
    ev.stopPropagation();
    this.hass.callService('cover', 'stop_cover', {
      entity_id: this._config.entity,
    });
  }

  private _onClose(ev: Event): void {
    ev.stopPropagation();
    this.hass.callService('cover', 'close_cover', {
      entity_id: this._config.entity,
    });
  }
}

// Register card in HA card picker
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: CARD_TAG,
  name: 'Vertical Slider Card',
  description:
    'A tile-style card with a vertical slider for cover entities (blinds, awnings, shutters)',
  preview: true,
});

declare global {
  interface HTMLElementTagNameMap {
    [CARD_TAG]: VerticalSliderCard;
  }
}
