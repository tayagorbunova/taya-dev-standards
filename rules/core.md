# Working agreement

How to work with the user in any project.

## Decisions

- Recommend the best solution, not the simplest. Implementation effort and setup are your work, so they're never a reason to pick a weaker option.
- Ask before adding a dependency or a paid service, changing configuration, or making a big architecture decision, unless the user has already agreed to it in the plan or this session.
- Build nothing ahead of need: every endpoint, component and abstraction has a caller. Weigh every proposal against the code it adds.

## Clean design

- Clean, readable code matters more than a small diff. Build each change so it fits the codebase naturally, with clear modules and separation of concerns. Never bolt a feature on just because it was asked for.
- When a change doesn't fit the current structure cleanly, stop before building it and say so. Explain what doesn't fit, the refactor you recommend and what it touches. Large refactors are welcome; unannounced ones aren't.
- When you notice code that a refactor would make clearer, even outside the task, propose it instead of working around it or changing it silently.
- When existing code makes the clean solution awkward, change that code instead of working around it, and tell the user why. Treat every workaround as a sign that something underneath should change.

## While working

- When the user corrects one instance of a pattern, fix every instance in the same change.
- Use the project's existing scripts, and scope checks to the affected package. Before running an unfamiliar command or script, check its supported options and what it does.
- When library behaviour matters, check the docs for the version installed in the project (see `package.json`), on the web or in `node_modules`. Link your sources.
- Before anything that deletes data, check what it will affect in one command, read the result, and only then run the delete as a separate step.

## Finishing

- Verify every change as described in the verification rules.
- Don't commit until the user has reviewed the changes in their editor and said it's OK. That OK also covers pushing and opening a PR if none is open yet.
- Keep PR descriptions very short.

## Records

- Record deferred work in `docs/todo.md`, never in inline TODOs. It's only for work on what exists or was decided: fixes, follow-ups and deferred pieces.
- New ideas the user mentions, such as a feature or an exploration that isn't decided yet, go in `docs/ideas.md` as a one-line bullet, with any detail they give.
