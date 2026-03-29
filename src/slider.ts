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

  render() {
    const fillPct = this._fillFraction * 100;
    const handleTop = fillPct;
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
          <div class="slider-handle" style="top: ${handleTop}%"></div>
        </div>
        <div class="tooltip" style="top: ${handleTop}%">
          ${Math.round(this._displayValue)} %
        </div>
      </div>
    `;
  }

  private _computeValueFromEvent(e: PointerEvent): number {
    const slider = this.renderRoot.querySelector('.slider') as HTMLElement;
    if (!slider) return this.value;

    const rect = slider.getBoundingClientRect();
    // Top of slider = 0% open (closed), bottom = 100% open
    const fraction = (e.clientY - rect.top) / rect.height;
    // Invert: dragging to top = more closed (lower position value)
    // fraction 0 (top) = 0% open, fraction 1 (bottom) = 100% open
    const rawValue = fraction * (this.max - this.min) + this.min;

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
