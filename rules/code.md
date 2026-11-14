# Code

## Comments

- A rule that matters gets a test named after it, for example "returns 404, not 403, for another user's record", instead of a comment.
- Don't write code comments. Explain everything in chat.

## Naming and types

- Don't add unnecessary qualifiers to names.
- Avoid aliases like `const { selection } = state`; write `state.selection`. Destructuring props and hook results is fine.
- Derive related types with `Pick`, `Omit` and indexed access (`User["id"]`). Don't build elaborate types only to remove repetition.
- Model separate cases as a union type, not a magic value: `{ kind: "new" } | { kind: "saved"; id: string }`, not `id: -1` meaning "new".
- Prefer specific actions with minimal parameters, such as `startEditing(id)` and `stopEditing()`, over generic setters.
- Use a named option when a boolean argument would hide intent: `save({ mode: "draft" })`, not `save(true)`.
- Attributes or selectors used in several files are named constants, exported by the module that owns them.

## Readability

- Separate logical steps with blank lines.
- Extract substantial inline callbacks into named handlers; a one-statement callback used once stays inline. Split long handlers by behaviour.
- Name meaningful defaults and configuration, and keep constants next to the code that uses them. Mock data and obvious styling values stay inline.
