import { LitElement, html, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { sliderStyles } from './styles';
import { SLIDER_TAG } from './const';

@customElement(SLIDER_TAG)
export class VerticalCoverSlider extends LitElement {
  static styles = sliderStyles;

  @property({ type: Number }) value = 0;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Number }) step = 1;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) color = '';

  @state() private _pressed = false;
  @state() private _localValue: number | null = null;

  private _activePointerId: number | null = null;

  protected updated(changedProps: PropertyValues): void {
    if (changedProps.has('_pressed')) {
      if (this._pressed) {
        this.setAttribute('pressed', '');
      } else {
        this.removeAttribute('pressed');
      }
    }
  }

  private get _displayValue(): number {
    return this._localValue ?? this.value;
  }

  /** Fill height as fraction (0-1). Closed=0% position means fill=100%. */
  private get _fillFraction(): number {
    const val = this._displayValue;
    return 1 - (val - this.min) / (this.max - this.min);
  }

  /** Minimum visual fill (%) so handle stays visible at 100% open */
  private static readonly MIN_VISUAL_FILL = 6;

  render() {
    const rawFillPct = this._fillFraction * 100;
    // Map 0-100% fill linearly to MIN_VISUAL_FILL–100% visual range
    // So the full drag range animates smoothly, with a small cap visible at 100% open
    const minFill = VerticalCoverSlider.MIN_VISUAL_FILL;
    const fillPct = minFill + (rawFillPct / 100) * (100 - minFill);
    const colorStyle = this.color ? `--slider-color: ${this.color}` : '';

    return html`
      <div class="container" style="${colorStyle}">
        <div
          class="slider"
          tabindex="0"
          role="slider"
          aria-valuenow="${this._displayValue}"
          aria-valuemin="${this.min}"
          aria-valuemax="${this.max}"
          @pointerdown="${this._onPointerDown}"
          @pointermove="${this._onPointerMove}"
          @pointerup="${this._onPointerUp}"
          @pointercancel="${this._onPointerUp}"
          @keydown="${this._onKeyDown}"
        >
          <div class="slider-track-bg"></div>
          <div class="slider-track-fill" style="height: ${fillPct}%"></div>
          <div class="slider-handle"
               style="top: max(10px, calc(${fillPct}% - 26px))"></div>
        </div>
        <div class="tooltip"
             style="top: max(10px, calc(${fillPct}% - 26px))">
          ${Math.round(this._displayValue)} %
        </div>
      </div>
    `;
  }

  private _computeValueFromEvent(e: PointerEvent): number {
    const slider = this.renderRoot.querySelector('.slider') as HTMLElement;
    if (!slider) return this.value;

    const rect = slider.getBoundingClientRect();
    // fraction: 0 = top of slider, 1 = bottom of slider
    const fraction = (e.clientY - rect.top) / rect.height;
    // Invert: top = 100% open, bottom = 0% closed (matches HA native)
    const rawValue = (1 - fraction) * (this.max - this.min) + this.min;

    return this._clampAndStep(rawValue);
  }

  private _clampAndStep(raw: number): number {
    const stepped = Math.round(raw / this.step) * this.step;
    return Math.max(this.min, Math.min(this.max, stepped));
  }

  private _onPointerDown(e: PointerEvent): void {
    if (this.disabled) return;
    e.preventDefault();

    const slider = e.currentTarget as HTMLElement;
    slider.setPointerCapture(e.pointerId);
    this._activePointerId = e.pointerId;
    this._pressed = true;
    this._localValue = this._computeValueFromEvent(e);

    this._fireEvent('slider-moved', { value: this._localValue });
  }

  private _onPointerMove(e: PointerEvent): void {
    if (!this._pressed || e.pointerId !== this._activePointerId) return;
    e.preventDefault();

    this._localValue = this._computeValueFromEvent(e);
    this._fireEvent('slider-moved', { value: this._localValue });
  }

  private _onPointerUp(e: PointerEvent): void {
    if (!this._pressed || e.pointerId !== this._activePointerId) return;

    const finalValue = this._localValue ?? this.value;
    this._pressed = false;
    this._localValue = null;
    this._activePointerId = null;

    this._fireEvent('value-changed', { value: finalValue });
  }

  private _onKeyDown(e: KeyboardEvent): void {
    if (this.disabled) return;

    let newValue: number | null = null;
    const current = this._displayValue;

    switch (e.key) {
      case 'ArrowUp':
        // Up arrow = decrease position (more closed)
        newValue = this._clampAndStep(current - this.step);
        break;
      case 'ArrowDown':
        // Down arrow = increase position (more open)
        newValue = this._clampAndStep(current + this.step);
        break;
      case 'PageUp':
        newValue = this._clampAndStep(current - 10);
        break;
      case 'PageDown':
        newValue = this._clampAndStep(current + 10);
        break;
      case 'Home':
        newValue = this.min;
        break;
      case 'End':
        newValue = this.max;
        break;
      default:
        return;
    }

    e.preventDefault();
    if (newValue !== null) {
      this._fireEvent('value-changed', { value: newValue });
    }
  }

  private _fireEvent(type: string, detail: { value: number }): void {
    this.dispatchEvent(
      new CustomEvent(type, {
        detail,
        bubbles: true,
        composed: true,
      }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [SLIDER_TAG]: VerticalCoverSlider;
  }
}
