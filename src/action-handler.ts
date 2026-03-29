import { directive, Directive, PartInfo, ElementPart } from 'lit/directive.js';
import { noChange } from 'lit';
import { ActionConfig } from 'custom-card-helpers';

const HOLD_DURATION = 500;
const DOUBLE_TAP_WINDOW = 250;

interface ActionHandlerOptions {
  hasHold?: boolean;
  hasDoubleClick?: boolean;
}

interface ActionHandlerElement extends HTMLElement {
  _actionHandler?: {
    options: ActionHandlerOptions;
    timer?: ReturnType<typeof setTimeout>;
    held: boolean;
    dblClickTimer?: ReturnType<typeof setTimeout>;
  };
}

class ActionHandlerDirective extends Directive {
  update(part: ElementPart, [options]: [ActionHandlerOptions]) {
    const element = part.element as ActionHandlerElement;

    if (!element._actionHandler) {
      element._actionHandler = {
        options,
        held: false,
      };

      element.addEventListener('pointerdown', (_ev: PointerEvent) => {
        const handler = element._actionHandler!;
        handler.held = false;

        if (handler.options.hasHold) {
          handler.timer = setTimeout(() => {
            handler.held = true;
            element.dispatchEvent(
              new CustomEvent('action', {
                detail: { action: 'hold' },
                bubbles: true,
                composed: true,
              }),
            );
          }, HOLD_DURATION);
        }
      });

      element.addEventListener('pointerup', () => {
        const handler = element._actionHandler!;
        if (handler.timer) {
          clearTimeout(handler.timer);
          handler.timer = undefined;
        }

        if (handler.held) return;

        if (handler.options.hasDoubleClick) {
          if (handler.dblClickTimer) {
            clearTimeout(handler.dblClickTimer);
            handler.dblClickTimer = undefined;
            element.dispatchEvent(
              new CustomEvent('action', {
                detail: { action: 'double_tap' },
                bubbles: true,
                composed: true,
              }),
            );
          } else {
            handler.dblClickTimer = setTimeout(() => {
              handler.dblClickTimer = undefined;
              element.dispatchEvent(
                new CustomEvent('action', {
                  detail: { action: 'tap' },
                  bubbles: true,
                  composed: true,
                }),
              );
            }, DOUBLE_TAP_WINDOW);
          }
        } else {
          element.dispatchEvent(
            new CustomEvent('action', {
              detail: { action: 'tap' },
              bubbles: true,
              composed: true,
            }),
          );
        }
      });

      element.addEventListener('pointercancel', () => {
        const handler = element._actionHandler!;
        if (handler.timer) {
          clearTimeout(handler.timer);
          handler.timer = undefined;
        }
      });
    } else {
      element._actionHandler.options = options;
    }

    return noChange;
  }

  render(_options: ActionHandlerOptions) {
    return noChange;
  }
}

export const actionHandler = directive(ActionHandlerDirective);

export function hasAction(config?: ActionConfig): boolean {
  return config !== undefined && config.action !== 'none';
}
