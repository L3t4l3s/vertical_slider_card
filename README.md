# Vertical Slider Card

A custom Home Assistant Lovelace card that provides a vertical slider for cover entities (blinds, awnings, shutters) — replicating the native HA cover popup slider as a standalone dashboard card.

## Features

- Vertical slider matching the native HA cover popup behavior
- Drag to set target position, tracks real entity state after release
- Full HA theme support — all colors derived from the active dashboard theme
- Configurable like the standard HA Tile card (entity, name, icon, color, actions, features)
- Open/Close/Stop feature buttons
- Visual card editor
- HACS compatible

## Installation

### HACS (recommended)

1. Open HACS in your Home Assistant instance
2. Go to **Frontend** > **Custom repositories**
3. Add `https://github.com/L3t4l3s/vertical_slider_card` as a **Dashboard** repository
4. Install **Vertical Slider Card**
5. Restart Home Assistant

### Manual

1. Download `vertical-slider-card.js` from the [latest release](https://github.com/L3t4l3s/vertical_slider_card/releases/latest)
2. Copy it to your `config/www/` folder
3. Add the resource in **Settings > Dashboards > Resources**:
   - URL: `/local/vertical-slider-card.js`
   - Type: JavaScript Module

## Usage

```yaml
type: custom:vertical-slider-card
entity: cover.my_blind
```

### Full configuration

```yaml
type: custom:vertical-slider-card
entity: cover.my_blind

# Content
name: "Living Room Blind"
icon: mdi:blinds
color: purple
hide_state: false

# Interactions
tap_action:
  action: more-info
hold_action:
  action: none
double_tap_action:
  action: none

# Features
features:
  - type: cover-open-close
```

### Configuration options

| Option | Type | Default | Description |
|---|---|---|---|
| `entity` | string | **required** | Cover entity ID |
| `name` | string | Entity name | Override display name |
| `icon` | string | Entity icon | Override icon |
| `color` | string | Theme color | Color token (e.g. `purple`, `blue`) |
| `hide_state` | boolean | `false` | Hide the state text |
| `tap_action` | action | `more-info` | Tap action |
| `hold_action` | action | `none` | Hold action |
| `double_tap_action` | action | `none` | Double tap action |
| `features` | list | `[]` | Feature controls below the slider |

### Available features

| Type | Description |
|---|---|
| `cover-open-close` | Open / Stop / Close buttons |
| `cover-position` | Horizontal position slider |
| `cover-tilt` | Tilt open / stop / close buttons |
| `cover-tilt-position` | Tilt position slider |

## Development

```bash
npm install
npm run build        # Production build
npm run watch        # Development with file watching
npm start            # Dev server on port 5000
```

## License

MIT
