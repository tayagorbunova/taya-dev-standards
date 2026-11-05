---
name: planning
description: How to plan bigger work before building it. Use whenever a task is a feature with several steps or a change across several parts of the app, whenever I ask for a plan or a spec, and in Claude's plan mode. Skip it for small, obvious changes. Covers settling questions with me, writing a short plan file, getting my approval and working through it.
---

# Planning

Use this for bigger work: a feature with several steps, or a change across several parts of the app. Skip it when the change is small and the approach is obvious.

## 1. Questions first

- Look up facts yourself in the code, the docs and the installed versions. Ask me only about decisions.
- Ask every question you can already answer in one numbered round. Give each a recommended answer, worded so "yes" accepts it.
- Ask another round only when my answers raise new questions. Then write the plan.

## 2. The plan

- Save it as `docs/plans/<YYYY-MM-DD>-<topic>.md`.
- Keep it as short as it can be without losing anything I need to approve it. Follow my communication rules (`~/personal/taya-dev-standards/rules/communication.md`).
- No code and no file lists. I review the code itself afterwards.
- Use this shape:

  ```markdown
  # <Topic>

  **Goal:** what this achieves, in one or two sentences.
  **Out of scope:** what it deliberately leaves out.

  ## Steps

  1. **<Step name>**
     - Changes: what changes for the user.
     - Decisions: the key technical choices, in plain words.
     - Check: what I can see or run when the step is done.
  ```

- Make each step something I could approve or reject on its own, and order the steps so each one ends in a working state.
- Before you show me the plan, check that every answer from the questions is covered by a step, and that no step goes beyond the goal.

## 3. Approval

- Show me the plan and wait for my approval. Change it as I ask.
- Then ask how to work through it: stop after each step, review everything at the end, or stop at points I choose.

## 4. Working through it

- Tick off each step in the plan file when it's done, so a new session can continue from the file.
- If the plan turns out to be wrong, stop and tell me. Update the plan file before you continue.
