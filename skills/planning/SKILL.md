---
name: planning
description: How to plan bigger work before building it. Use whenever a task is a feature with several steps or a change across several parts of the app, whenever the user asks for a plan or a spec, and in plan mode. Skip it for small, obvious changes. Covers settling questions with the user, writing a short plan file, getting approval and working through it.
---

# Planning

Use this for bigger work: a feature with several steps, or a change across several parts of the app. Skip it when the change is small and the approach is obvious.

## 1. Questions first

- Look up facts yourself in the code, the docs and the installed versions. Ask the user only about decisions.
- Ask all your current questions in one numbered round. Give each a recommended answer, worded so "yes" accepts it.
- Ask another round only when the user's answers raise new questions. Then write the plan.

## 2. The plan

- Save it as `docs/plans/<YYYY-MM-DD>-<topic>.md`.
- Keep it as short as it can be without losing anything the user needs to approve it. Follow the communication rules.
- No code and no file lists. The user reviews the code itself afterwards.
- Use this shape:

  ```markdown
  # <Topic>

  **Goal:** what this achieves, in one or two sentences.
  **Out of scope:** what it deliberately leaves out.

  ## Steps

  1. **<Step name>**
     - Changes: what changes for the user.
     - Decisions: the key technical choices, in plain words.
     - Check: what the user can see or run when the step is done, and the name of each test it adds.
  ```

- Make each step something the user could approve or reject on its own, and order the steps so each one ends in a working state.
- Before you show the user the plan, check that every answer from the questions is covered by a step, and that no step goes beyond the goal.

## 3. Approval

- Show the user the plan and wait for their approval. Change it as they ask.
- Then ask how to work through it: stop after each step, review everything at the end, or stop at points the user chooses.

## 4. Working through it

- Tick off each step in the plan file when it's done, so a new session can continue from the file.
- If the plan turns out to be wrong, stop and tell the user. Update the plan file before you continue.
