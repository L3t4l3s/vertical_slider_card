import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';
import { VerticalSliderCardConfig, FeatureConfig } from './types';
import { EDITOR_TAG } from './const';

const FEATURE_TYPES = [
  'cover-open-close',
  'cover-position',
] as const;

@customElement(EDITOR_TAG)
export class VerticalSliderCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: VerticalSliderCardConfig;

  static styles = css`
    .editor-section {
      margin-bottom: 16px;
    }

    .editor-section-title {
      font-weight: 500;
      font-size: 14px;
      color: var(--primary-text-color);
      margin-bottom: 8px;
      padding: 8px 0 4px;
      border-bottom: 1px solid var(--divider-color);
    }

    .editor-row {
      display: flex;
      flex-direction: column;
      margin-bottom: 8px;
    }

    .editor-row label {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-bottom: 4px;
    }

    .feature-toggles {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 4px 0;
    }

    .feature-toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .feature-toggle label {
      font-size: 14px;
      color: var(--primary-text-color);
      cursor: pointer;
    }

    ha-selector,
    ha-textfield,
    ha-icon-picker {
      width: 100%;
    }
  `;

  public setConfig(config: VerticalSliderCardConfig): void {
    this._config = config;
  }

  protected render() {
    if (!this.hass || !this._config) return nothing;

    return html`
      <!-- Entity -->
      <div class="editor-section">
        <div class="editor-section-title">
          ${this.hass.localize?.('ui.panel.lovelace.editor.card.generic.entity') || 'Entity'}
        </div>
        <div class="editor-row">
          <ha-selector
            .hass="${this.hass}"
            .selector="${{ entity: { domain: 'cover' } }}"
            .value="${this._config.entity || ''}"
            .required="${true}"
            @value-changed="${this._entityChanged}"
          ></ha-selector>
        </div>
      </div>

      <!-- Content -->
      <div class="editor-section">
        <div class="editor-section-title">
          ${this.hass.localize?.('ui.panel.lovelace.editor.card.generic.appearance') || this.hass.localize?.('ui.panel.lovelace.editor.card.tile.appearance') || 'Darstellung'}
        </div>

        <div class="editor-row">
          <ha-textfield
            .label="${this.hass.localize?.('ui.panel.lovelace.editor.card.generic.name') || 'Name'}"
            .value="${this._config.name || ''}"
            @input="${this._nameChanged}"
          ></ha-textfield>
        </div>

        <div class="editor-row">
          <ha-icon-picker
            .hass="${this.hass}"
            .label="${this.hass.localize?.('ui.panel.lovelace.editor.card.generic.icon') || 'Icon'}"
            .value="${this._config.icon || ''}"
            @value-changed="${this._iconChanged}"
          ></ha-icon-picker>
        </div>

        <div class="editor-row">
          <ha-formfield
            .label="${this.hass.localize?.('ui.panel.lovelace.editor.card.tile.hide_state') || 'Hide state'}"
          >
            <ha-switch
              .checked="${this._config.hide_state || false}"
              @change="${this._hideStateChanged}"
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>

      <!-- Features -->
      <div class="editor-section">
        <div class="editor-section-title">
          ${this.hass.localize?.('ui.panel.lovelace.editor.card.tile.features') || 'Features'}
        </div>

        <div class="feature-toggles">
          ${FEATURE_TYPES.map(
            (type) => html`
              <div class="feature-toggle">
                <label>${this._featureLabel(type)}</label>
                <ha-switch
                  .checked="${this._hasFeature(type)}"
                  @change="${(e: Event) => this._featureToggled(e, type)}"
                ></ha-switch>
              </div>
            `,
          )}
        </div>
      </div>
    `;
  }

  private _hasFeature(type: string): boolean {
    return (
      this._config.features?.some((f) => f.type === type) ?? false
    );
  }

  private _featureLabel(type: string): string {
    switch (type) {
      case 'cover-open-close':
        return this.hass.localize?.('ui.panel.lovelace.editor.features.types.cover-open-close.label') || 'Open/Close';
      case 'cover-position':
        return this.hass.localize?.('ui.panel.lovelace.editor.features.types.cover-position.label') || 'Position';
      case 'cover-tilt':
        return this.hass.localize?.('ui.panel.lovelace.editor.features.types.cover-tilt.label') || 'Tilt';
      case 'cover-tilt-position':
        return this.hass.localize?.('ui.panel.lovelace.editor.features.types.cover-tilt-position.label') || 'Tilt position';
      default:
        return type;
    }
  }

  private _entityChanged(ev: CustomEvent): void {
    const value = ev.detail.value;
    if (!value) return;
    this._updateConfig({ entity: value });
  }

  private _nameChanged(ev: Event): void {
    const target = ev.target as HTMLInputElement;
    this._updateConfig({ name: target.value || undefined });
  }

  private _iconChanged(ev: CustomEvent): void {
    this._updateConfig({ icon: ev.detail.value || undefined });
  }

  private _hideStateChanged(ev: Event): void {
    const target = ev.target as HTMLInputElement;
    this._updateConfig({ hide_state: target.checked || undefined });
  }

  private _featureToggled(ev: Event, type: string): void {
    const checked = (ev.target as HTMLInputElement).checked;
    const features = [...(this._config.features || [])];

    if (checked) {
      features.push({ type } as FeatureConfig);
    } else {
      const index = features.findIndex((f) => f.type === type);
      if (index >= 0) features.splice(index, 1);
    }

    this._updateConfig({ features });
  }

  private _updateConfig(changes: Partial<VerticalSliderCardConfig>): void {
    this._config = { ...this._config, ...changes };
    fireEvent(this, 'config-changed', { config: this._config });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [EDITOR_TAG]: VerticalSliderCardEditor;
  }
}
