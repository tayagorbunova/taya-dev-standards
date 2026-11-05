# taya-dev-standards

My standards for every project. `global.md` lists the rules in `rules/` that load in every project; `skills/` holds shared skills.

- After editing `rules/` or `global.md`, run `scripts/build.sh`. Codex can't import files, so it reads the generated `dist/AGENTS.md`.
- After adding a skill, run `scripts/install.sh` to link it for Claude Code and Codex.
- Rules here apply to any project and any stack. A rule only one project needs stays in that project.
