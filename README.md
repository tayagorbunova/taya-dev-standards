# dev-standards

My standards for every project, for Claude Code and Codex.

- `rules/`: the working agreement, code and styling rules. `global.md` lists the ones that load in every project.
- `skills/`: shared skills, such as prototyping.
- `docs/todo.md`: what's planned next.

## Setup on a new machine

Clone the repo, then run:

    scripts/install.sh

It links each skill into `~/.claude/skills` and `~/.agents/skills`, adds an import of `global.md` to `~/.claude/CLAUDE.md`, and links `~/.codex/AGENTS.md` to the generated `dist/AGENTS.md`, because Codex can't import files. A pre-commit hook rebuilds that file.

A project adds only its own rules in its `AGENTS.md`; where they conflict with these, the project's win.
