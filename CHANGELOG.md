# Changelog

## 0.3.1

- Decisions go in `DECISIONS.md` at the project's root instead of `docs/decisions.md`, so they're tracked in git. The lint messages say so.

To upgrade a project, bump the pin to `#v0.3.1` and move `docs/decisions.md` to `DECISIONS.md`.

## 0.3.0

- Code comments are errors. ESLint's `standards/no-comments` rejects every comment except ESLint directives (`eslint-disable`, `global` and the like, with a reason after `--`), `@ts-` directives, `/// <reference>`, `prettier-ignore` and a shebang. Stylelint's `comment-pattern` rejects every CSS comment except `stylelint-disable`, `stylelint-enable` and `prettier-ignore`.

To upgrade a project, bump the pin to `#v0.3.0`, move each comment's decision into `docs/decisions.md` and each workaround into `docs/todo.md`, and delete the comments.

## 0.2.1

- Stylelint accepts CSS Modules' `:global(...)`, which keeps a name such as a view transition type from being renamed.

To upgrade a project, bump the pin to `#v0.2.1`.

## 0.2.0

- ESLint 10 is now required. `eslint:recommended` adds `no-unassigned-vars`, `no-useless-assignment` and `preserve-caught-error`. See the [ESLint 10 migration guide](https://eslint.org/docs/latest/use/migrate-to-10.0.0).
- `@eslint/js` moves to 10 and `typescript-eslint` to 8.72.
- The Stylelint token check uses Stylelint's own `declaration-property-value-allowed-list` instead of `stylelint-declaration-strict-value`. It flags the same values in plain CSS, so pnpm no longer warns about that plugin's Stylelint range. For a value that starts on the line after its property, the error is now reported on the value's first line.

To upgrade a project:

1. Bump the pin to `#v0.2.0` and `eslint` to 10.
2. Rename `scale-unlimited/declaration-strict-value` to `declaration-property-value-allowed-list` in Stylelint overrides and disable comments. A `stylelint-disable-next-line` comment for a value that starts on the next line moves down to sit above that line.
3. Remove the `stylelint-declaration-strict-value>stylelint` entry from `peerDependencyRules`, if there is one.

## 0.1.0

- First release: shared ESLint, Stylelint and Prettier configs.
