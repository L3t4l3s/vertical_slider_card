# v1.0.0 - Initial Release

The **Vertical Slider Card** brings the native Home Assistant cover popup slider directly into your Lovelace dashboard as a standalone card.

## Features

### Vertical Slider
- Replicates the native HA cover entity popup slider
- Drag to set cover position (0-100%)
- Smooth animation tracking the real entity state after release
- Handle bar centered in fill area, matching HA native styling
- Responsive tooltip shows current % during drag (auto-positions left or right based on available space)

### Open / Close / Stop Buttons
- Vertical button column beside the slider
- HA-style squircle buttons (border-radius: 14px) with active highlight
- Buttons scale to match slider height
- Only shown when entity supports the respective features (via `supported_features`)

### Visual Config Editor
- **Entity**: Entity picker filtered to cover domain
- **Appearance**: Name, Icon, Icon visibility toggle, Hide state toggle
- **Features**: Toggle vertical slider and open/close buttons independently

### Configuration Options

| Option | Type | Default | Description |
|---|---|---|---|
| `entity` | string | **required** | Cover entity ID |
| `name` | string | Entity name | Override display name |
| `icon` | string | Entity icon | Override icon |
| `color` | string | Theme color | HA color token |
| `hide_state` | boolean | `false` | Hide state text and last-changed |
| `hide_icon` | boolean | `false` | Hide icon in header |
| `tap_action` | action | `more-info` | Tap action on card body |
| `hold_action` | action | `none` | Hold action |
| `double_tap_action` | action | `none` | Double tap action |
| `features` | list | `[]` | Feature controls |

### Available Features

| Feature | Description |
|---|---|
| `cover-position` | Show/hide the vertical slider |
| `cover-open-close` | Open / Stop / Close buttons beside slider |

### Theme Integration
- All colors derived from the active HA dashboard theme
- Slider fill: `--state-cover-color` / `--primary-color`
- Handle: `--text-primary-color`
- Backgrounds, text, borders: standard HA theme variables
- Works with light, dark, and custom themes

### Layout
- Icon + entity name at top
- Vertical slider with open/close buttons in the middle
- State + last-changed at bottom
- Card height scales with dashboard grid (default 5 rows, min 4)
- Slider width customizable via `--slider-width` CSS variable (default: 78px)

### Compatibility
- Home Assistant 2024.1+
- HACS compatible
- Lit 3 + TypeScript 5 + Webpack
- Localization follows HA language setting

## Installation

### HACS
1. Frontend > Custom repositories
2. Add `https://github.com/L3t4l3s/vertical_slider_card` as **Dashboard**
3. Install and restart

### Manual
1. Download `vertical-slider-card.js` from the release
2. Copy to `config/www/`
3. Add resource: `/local/vertical-slider-card.js` (JavaScript Module)
