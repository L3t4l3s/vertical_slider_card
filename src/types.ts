import { ActionConfig, LovelaceCardConfig } from 'custom-card-helpers';

export interface VerticalSliderCardConfig extends LovelaceCardConfig {
  type: string;
  entity: string;

  // Content
  name?: string;
  icon?: string;
  color?: string;
  show_entity_picture?: boolean;
  vertical?: boolean;
  hide_state?: boolean;

  // Interactions
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
  icon_tap_action?: ActionConfig;

  // Features
  features?: FeatureConfig[];
}

export interface FeatureConfig {
  type:
    | 'cover-open-close'
    | 'cover-position'
    | 'cover-tilt'
    | 'cover-tilt-position';
}

export const enum CoverEntityFeature {
  OPEN = 1,
  CLOSE = 2,
  SET_POSITION = 4,
  STOP = 8,
  OPEN_TILT = 16,
  CLOSE_TILT = 32,
  STOP_TILT = 64,
  SET_TILT_POSITION = 128,
}
