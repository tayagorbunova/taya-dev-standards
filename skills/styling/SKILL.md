---
name: styling
description: Rules for styling web UI, covering units, design tokens, CSS, design-system components, layout, accessibility, performance, and the checks every UI change needs. Use when writing, reviewing or planning UI, CSS, components, design tokens or accessibility work, and before finishing any UI change.
---

# Styling

## Units

- Respect the reader's text size: use `rem` for anything that should grow with it, `px` for anything that shouldn't ([why](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)).

  | Unit                      | Use for                                                                         |
  | ------------------------- | ------------------------------------------------------------------------------- |
  | `rem`                     | Font sizes, spacing, control sizes, content widths, breakpoints                 |
  | `em`                      | Values that follow the element's own font size, such as an icon next to a label |
  | `px`                      | Borders, outlines, dividers, shadows                                            |
  | Unitless                  | `line-height`                                                                   |
  | `%`, `fr`, viewport units | Layout proportions                                                              |

- Define token values in `rem`.

## Design tokens

- Tokens are CSS custom properties on `:root` in the global stylesheet.
- Base tokens hold raw values, such as the colour palette and the spacing and type scales, named by their place in a scale. Semantic tokens are named by purpose and reference base tokens. Components use semantic tokens for every colour, never base palette tokens.
- Semantic colours are named `--color-{role}-{variant}-{state}`, for example `--color-action-primary-hover` or `--color-text-muted`. Roles: `text`, `background`, `surface`, `border`, `action`, `feedback`. States: `hover`, `pressed`, `disabled`.
- Other shared values get semantic tokens too: control and icon sizes, content widths, z-index layers (`--z-popover`), the focus ring.
- A unique component, such as a logo, keeps its own tokens next to its code, and they may use base palette tokens directly. Global CSS holds no feature tokens.
- Define only tokens that code uses. A value used by one component is a custom property in that component's CSS. It moves to the global tokens once a second component needs it. When a shared value fits no scale step, add a step to the scale instead of a one-off value.
- A value used by both CSS and TypeScript has one source in TypeScript and reaches CSS as a custom property.
- Write colours in `oklch()`. When converting an existing hex colour, convert it exactly so it renders the same.

## CSS

- Global CSS holds only the reset, the tokens and base element styles.
- A component never places or styles its parent, or another component's elements, and has no outer margin. The parent places and spaces its children, using `gap`.
- Put `:hover` inside `@media (hover: hover)`, and show focus with `:focus-visible`.

## Design-system components

- Design-system components don't accept a class or style from outside; appearance changes go through props such as `variant` and `size`.
- Button and link versions of a control share one source of styles.
- Style every state of an interactive component: default, hover, pressed, focus-visible, disabled, and where relevant selected, invalid and pending. Each component draws its own focus indicator; the code using it never adds one.
- Visually hidden text uses one shared primitive.

## Layout

- Work mobile first: base styles describe the narrowest layout, and `min-width` media queries add to it.
- Add a breakpoint only when a layout needs it.
- Prefer layouts that adapt without breakpoints (`flex-wrap`, `auto-fill`, `min()`, `clamp()`). Use container queries when a component's layout depends on its own width.
- Layouts work at 320 CSS px wide without horizontal scrolling. Two-dimensional content, such as a canvas, is exempt.
- Let long words wrap (`overflow-wrap`), and let flex or grid children that contain text shrink (`min-width: 0`).
- Reserve space for images and media with `width` and `height` or `aspect-ratio`.

## Accessibility

- Meet WCAG 2.2 AA, including contrast for hover, focus and selected states.
- Every interactive element shows a visible focus indicator on keyboard focus, drawn with `outline` from the focus ring tokens. A component that shows focus another way keeps a transparent outline, which forced colours mode turns into a visible ring.
- Show focus, selected and current states with an outline, border, text or icon, so they survive forced colours mode.
- Every panel and dialog defines where focus goes when it opens, where it returns when it closes, and its accessible name.
- Keep focused elements from being hidden behind sticky content, using `scroll-padding`.
- Primary controls are around 44 by 44 px.
- Body text has a `line-height` of at least 1.5. Elements that contain text use `min-height` and padding, never a fixed height.
- Form inputs use a font size of at least `1rem`, or iOS Safari zooms in on focus.
- Never restrict zoom in the viewport settings.
- Run non-essential animation only inside `@media (prefers-reduced-motion: no-preference)`.

## Performance

- Animate only `transform` and `opacity`, and list the transitioned properties explicitly. Small SVG line drawings on controls may animate their stroke for under half a second.
- Use large blurs, `backdrop-filter` and animated shadows sparingly on big or often-redrawn areas, and measure their cost.

## Browser support

- Check support for the project's browser targets before relying on a feature, and use newer features as progressive enhancement.

## Checking UI changes

Use the changed flow in the running app, then check:

1. Widths: 320 px, each breakpoint, and a wide desktop window.
2. Text size: Chrome's font size setting on "Very large", and 200% zoom. No clipped or overlapping text, and no horizontal scrolling outside two-dimensional content.
3. Keyboard only: everything is reachable in a logical order, and focus is always visible and never hidden.
4. DevTools → Rendering: emulate `forced-colors: active`, `prefers-reduced-motion: reduce` and vision deficiencies.
5. Contrast of every new colour pair.
6. On a phone: no hover state sticks after a tap, and targets are at least 24 by 24 px.

When a screenshot looks broken but DOM measurements look fine, trust the screenshot and resolve the contradiction.
