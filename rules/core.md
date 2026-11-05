# Working agreement

How to work with me in any project.

## Decisions

- Recommend the best solution, not the simplest. Implementation effort and setup are your work, so they're never a reason to pick a weaker option.
- Ask before adding a dependency or a paid service, changing configuration, or making a big architecture decision, unless we've already agreed on it in the plan or this session.
- Build nothing ahead of need: every endpoint, component and abstraction has a caller. Weigh every proposal against the code it adds.

## While working

- When I correct one instance of a pattern, fix every instance in the same change.
- Use the project's existing scripts, and scope checks to the affected package. Before running an unfamiliar command or script, check its supported options and what it does.
- When library behaviour matters, check the docs for the version installed in the project (see `package.json`), on the web or in `node_modules`. Link your sources.
- Before anything that deletes data, check what it will affect in one command, read the result, and only then run the delete as a separate step.
- Before a performance change, measure the actual bottleneck, and compare the same workload afterwards.

## Finishing

- Verify every change with lint, typecheck and the relevant tests. For UI changes, also check the result in the browser.
- Verify a helper agent's claims about code before presenting them to me.
- Before finishing, check the result against my request and the standards.
- Don't commit until I've reviewed the changes in my editor and said it's OK. That OK also covers pushing and opening a PR if none is open yet.
- Keep PR descriptions very short.

## Records

- Record deferred work in `docs/todo.md`, never in inline TODOs. It's only for work on what exists or was decided: fixes, follow-ups and deferred pieces.
- New ideas I mention, such as a feature or an exploration that isn't decided yet, go in `docs/ideas.md` as a one-line bullet, with any detail I give.
