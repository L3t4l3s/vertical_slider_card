import { css } from 'lit';

export const cardStyles = css`
  :host {
    display: block;
    height: 100%;
  }

  ha-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 12px;
    box-sizing: border-box;
    height: 100%;
    min-height: 200px;
    overflow: hidden;
    position: relative;
  }

  /* Header: icon + name at top */
  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    justify-content: center;
    flex-shrink: 0;
    margin-bottom: 2px;
    color: var(--primary-text-color);
  }

  .header ha-icon {
    --mdc-icon-size: 20px;
    flex-shrink: 0;
  }

  .entity-name {
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Footer: state + last-changed at bottom */
  .footer {
    text-align: center;
    width: 100%;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .state-text {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    line-height: 1.2;
  }

  .last-changed {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-top: 2px;
  }

  /* Slider area: slider + side buttons */
  .slider-area {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 12px;
    width: 100%;
    min-height: 0;
    padding: 0;
  }

  .slider-container {
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  /* Side buttons: vertical column next to slider, full height */
  .side-buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;
  }

  .cover-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    min-height: 48px;
    width: 64px;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    color: var(--secondary-text-color);
    background: color-mix(in srgb, var(--secondary-text-color) 12%, transparent);
    border-radius: 14px;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    transition: background 120ms ease-in-out;
    --mdc-icon-size: 24px;
  }

  .cover-btn + .cover-btn {
    margin-top: 8px;
  }

  .cover-btn:active {
    background: color-mix(in srgb, var(--secondary-text-color) 25%, transparent);
  }

  /* Bottom features */
  .bottom-features {
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 4px;
  }

  .bottom-features ha-icon-button {
    --mdc-icon-button-size: 40px;
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
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
    width: var(--slider-width, 78px);
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
    border-radius: 20px;
    overflow: hidden;
    touch-action: none;
    cursor: pointer;
    outline: none;
  }

  .slider:focus-visible {
    box-shadow: 0 0 0 2px var(--slider-color);
  }

  .slider-track-bg {
    position: absolute;
    inset: 0;
    background: var(--slider-bg);
  }

  .slider-track-fill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: var(--slider-color);
    border-radius: 14px 14px 8px 8px;
    transition: height var(--transition-duration, 180ms) ease-in-out;
  }

  :host([pressed]) .slider-track-fill {
    transition: none;
  }

  .slider-handle {
    position: absolute;
    left: 22%;
    right: 22%;
    height: 4px;
    background: var(--text-primary-color, #fff);
    border-radius: 2px;
    pointer-events: none;
    transition: top var(--transition-duration, 180ms) ease-in-out;
  }

  :host([pressed]) .slider-handle {
    transition: none;
  }

  .tooltip {
    position: absolute;
    right: calc(100% + 2px);
    text-align: right;
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-text-color);
    background: var(--ha-card-background, var(--card-background-color, #1c1c1c));
    padding: 4px 8px;
    border-radius: 8px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 120ms ease-in-out, top var(--transition-duration, 180ms) ease-in-out;
    white-space: nowrap;
  }

  :host([pressed]) .tooltip {
    transition: opacity 120ms ease-in-out;
  }

  :host([pressed]) .tooltip {
    opacity: 1;
  }
`;
