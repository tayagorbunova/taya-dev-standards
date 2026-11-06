# Testing

## When to test

- A test earns its place only if it fails when a user-visible behaviour or rule breaks, keeps passing through a refactor that keeps that behaviour, and protects something likely to break or costly if it does: data loss, security, paid provider calls, the core flow.
- Don't test what types, lint or an existing test already guarantee. Never test mocks, framework or library behaviour, trivial wrappers or internal structure, and never depend on a library's internals.
- When a change earns a test, write the test first and run it: it must fail, for the reason you expect, before you write the code. Then write only enough code to pass it. Work one test at a time.
- A bug fix starts with a failing test that reproduces the bug, when a cheap test can. Otherwise reproduce the bug another way first, such as in the browser, and tell me which check you used.

## Writing tests

- Test through the public entry point, the way users and callers do: an endpoint through HTTP, a function through its arguments. Check what they can observe, not internal calls or structure.
- Use real code and a real test database. Fake only what's outside the project, such as a payment provider, and use fake timers for anything time-based.
- Every uniqueness or quota rule has a test that sends requests at the same time.
- Name each test after the behaviour, with the reason for a non-obvious rule: "returns 404, not 403, for another user's record".
- Write expected values from the requirement, such as `15`, never computed the way the code computes them.
- Keep tests plain: straight-line code without logic. Repetition that keeps a test readable on its own is fine.
- Never weaken a test to make wrong code pass. Change a test only when the expected behaviour changed, and tell me why.
- No snapshot tests.
