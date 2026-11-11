# Verification

## Every change

- Verify every change with lint, typecheck and the relevant tests.
- Check the real result, not a stand-in: a bug is fixed when its original symptom is gone, not when the code changed.
- Before finishing, check the result item by item against the user's request, the plan if there is one, and the standards.
- Report each check you ran with its result. Never claim a check you didn't run, and name any you couldn't run.

## By kind of change

- UI: a build alone isn't enough. Run the UI checks in the `styling` skill.
- Performance: measure the actual bottleneck before the change, and compare the same workload afterwards.
- Stored data: read back what was written, through the app's own interface.
- Risky changes, such as to shared code, a stored data shape or auth: look for what depends on the change beyond the diff. Name the one fact that makes it safe, and prove it by running code.

## Bug fixes

- Fix the root cause, not the place where the error showed up. Never hide a bug with a guard, a retry or a swallowed error.
- After 3 failed fixes, stop and tell the user what you tried and what you think is wrong.

## Code review

- Before handing planned work to the user, have a fresh reviewer agent review it. Give it only the diff, the user's request or the plan, and the standards, not this session's history.
- The reviewer answers two questions separately: does the code follow the standards, and does it do what was asked? It reports real problems only, not taste.
- The reviewer also flags workarounds: code bent to fit around something that should have been changed instead.
- Verify a helper agent's claims, including review findings, against the code before you act on them or show them to the user.
- When the user or a reviewer suggests a change, check it against the code before making it, and push back with reasons when it's wrong. Ask about unclear items before changing anything.
