---
name: prototyping
description: The workflow for prototyping, exploring or trying a design or feature idea before building it properly. Use whenever the user says "prototype X", "try a few versions of Y", "explore Z" or asks to see options for a component, screen or effect, even without the word "prototype". Covers exploring versions, picking a winner, building the full version with every state, and moving it into the real app.
---

# Prototyping

Explore a piece visually, let the user pick a winner, then finish it properly. Never move to the next stage without the user's yes.

## Where

- If the project has a prototype README (such as `prototype/README.md`), follow it for where versions go and how to check them.
- Otherwise, show the versions on a page of their own in the project's local dev server, one at a time with a control to switch between them, and nothing else on the page.
- Each exploration gets its own branch.

## 1. Explore

- Three versions by default, five at most. Each is a clearly different direction, named by its character ("Quiet", "Editorial", "Playful"), never A, B, C.
- Use realistic content in realistic amounts.
- Versions are visuals only: no edge cases, error states, accessibility work or tests yet.
- Give every version live controls for its two to five key values. When the user sends tweaked values, make them the version's defaults.

## 2. Pick

When the user picks a winner, delete the other versions and ask: "Build the full version now?"

## 3. Full version

- Build every state the piece can be in (for example default, hover, pressed, focus, disabled, pending, empty, error, one item, many items, limit reached), each fed by mock data.
- Add a stress state: worst cases stacked in one labelled column (very long and very short text, missing data, emoji and other scripts, large numbers, many items, a 320px-wide frame). Fix what visibly breaks.
- Meet the accessibility rules in the `styling` skill. Run the project's check if it has one, read its report and screenshots, and judge the tab order yourself, since automated scans only catch mechanical problems.
- Report a short table of what was checked, what broke and what was fixed, with anything left open. Then ask: "Add it to the real app now?"

## 4. Real app

Build it in the real app under its standards, and repeat the stress and accessibility checks there. Then remove the exploration.
