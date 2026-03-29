import { css } from 'lit';

export const cardStyles = css`
  :host {
    display: block;
  }

  ha-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  /* Header info area */
  .info {
    text-align: center;
    width: 100%;
    margin-bottom: 8px;
  }

  .state-text {
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-text-color);
    line-height: 1.2;
  }

  .last-changed {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-top: 2px;
  }

  /* Slider container */
  .slider-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    min-height: 0;
    padding: 8px 0;
  }

  /* Features row */
  .features {
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: center;
    margin-top: 8px;
  }

  .features ha-icon-button {
    --mdc-icon-button-size: 36px;
    --mdc-icon-size: 20px;
    color: var(--primary-text-color);
  }

  /* Unavailable state */
  :host([unavailable]) ha-card {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const sliderStyles = css`
  :host {
    display: flex;
    width: var(--slider-width, 110px);
    height: 100%;
    min-height: 0;
    --slider-color: var(--state-cover-color, var(--primary-color));
    --slider-bg: color-mix(in srgb, var(--slider-color) 20%, transparent);
  }

  .container {
    position: relative;
    width: 100%;
    flex: 1;
    min-height: 0;
  }

  .slider {
    position: absolute;
    inset: 0;
    border-radius: 24px;
    overflow: hidden;
    touch-action: none;
    cursor: pointer;
    outline: none;
    /* Padding so handle never sits flush at edges */
    --slider-padding: 8px;
  }

  .slider:focus-visible {
    box-shadow: 0 0 0 2px var(--slider-color);
  }

  .slider-track-bg {
    position: absolute;
    inset: 0;
    background: var(--slider-bg);
    border-radius: inherit;
  }

  .slider-track-fill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: var(--slider-color);
    border-radius: inherit;
    transition: height var(--transition-duration, 180ms) ease-in-out;
  }

  :host([pressed]) .slider-track-fill {
    transition: none;
  }

  .slider-handle {
    position: absolute;
    left: 25%;
    right: 25%;
    height: 4px;
    background: var(--text-primary-color, #fff);
    border-radius: 2px;
    pointer-events: none;
    transform: translateY(-50%);
    transition: top var(--transition-duration, 180ms) ease-in-out;
  }

  :host([pressed]) .slider-handle {
    transition: none;
  }

  .tooltip {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    pointer-events: none;
    opacity: 0;
    transition: opacity 120ms ease-in-out;
    white-space: nowrap;
    transform: translateY(-50%);
  }

  :host([pressed]) .tooltip {
    opacity: 1;
  }
`;
