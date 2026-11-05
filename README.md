# taya-dev-standards

My standards for every project: rules and skills for Claude Code and Codex, and lint and format configs.

- `rules/`: the working agreement, communication, code and styling rules. `global.md` lists the ones that load in every project.
- `skills/`: shared skills, such as planning and prototyping.
- `configs/`: ESLint, Stylelint and Prettier configs, installed as a package.
- `docs/todo.md`: what's planned next.

## Using the configs in a project

Add the package as a dev dependency, pinned to a tag:

    pnpm add -D github:tayagorbunova/taya-dev-standards#v0.1.0

Then extend the configs and add the project's own rules after them:

- ESLint: `import sharedConfig from "taya-dev-standards/eslint"`, placed after any framework config. Set `tsconfigRootDir` and the `import-x` resolver in the project.
- Stylelint: `extends: ["taya-dev-standards/stylelint"]`.
- Prettier: `.prettierrc.json` contains `"taya-dev-standards/prettier"`.

## Setup on a new machine

Clone the repo, then run:

    scripts/install.sh

It links each skill into `~/.claude/skills` and `~/.agents/skills`, adds an import of `global.md` to `~/.claude/CLAUDE.md`, and links `~/.codex/AGENTS.md` to the generated `dist/AGENTS.md`, because Codex can't import files. A pre-commit hook rebuilds that file.

A project adds only its own rules in its `AGENTS.md`; where they conflict with these, the project's win.
