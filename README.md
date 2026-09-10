# ✅ JS Todo

A clean, component-driven task management app built with Next.js and TypeScript to practice and demonstrate core front-end fundamentals — typed component state, hooks, and persistence — within a modern React framework.

---

## Why This Project Exists

JS Todo was built as a **fundamentals-first exercise** inside a Next.js + TypeScript project: a deliberately simple app idea (a to-do list) used as a vehicle to get hands-on with core JavaScript, React, and TypeScript concepts — typed state management, array/object manipulation, component composition, and persistence — the same building blocks more complex apps depend on.

It doubles as a portfolio piece showing the ability to structure a clean, type-safe Next.js app end to end, from component design to state handling.

> **Good to know:** This project pairs well with a broader CS-fundamentals self-study track (data structures, OOP, SOLID) — it's the "apply it" counterpart to that theory.

---

## Key Features

- **Add, edit, and delete tasks** — Full CRUD task management with a minimal, distraction-free UI.
- **Mark tasks complete** — Toggle completion state with instant visual feedback.
- **Persistent storage** — Tasks are saved locally so the list survives page refreshes.
- **Filter views** — Switch between All / Active / Completed tasks.
- **Responsive design** — Usable on both desktop and mobile viewports.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (React) |
| Language | TypeScript (`.tsx`) |
| Core Logic | React Hooks, typed component state |
| Styling | CSS / Tailwind CSS |
| Persistence | Browser `localStorage` |
| Tooling | Next.js dev server, npm |

*Good to know: update this table if you used a specific Tailwind version or the App Router vs Pages Router, so the README matches the real implementation.*

---

## How It Works

1. The user types a task into an input component and submits it.
2. The task is added to component state (via `useState`/`useEffect`) and the task list re-renders automatically through React's declarative model.
3. Each task's completion state is tracked and reflected visually through conditional styling.
4. State changes are synced to `localStorage` on update, so the list persists across sessions and page reloads.

---

## Impact / Outcome

- Reinforced core JavaScript, React, and TypeScript concepts (typed state management, hooks, component composition, persistence) within a real Next.js project structure.
- Served as a practical checkpoint within a broader self-study plan covering data structures, OOP, and SOLID principles.
- Provided a reusable component and typed-state pattern that carried over directly into later, larger Next.js projects.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/ShreeRaz/js-todo.git
cd js-todo

# Install dependencies
npm install

# Run the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

> **Good to know:** Update the clone URL to match your actual repository.

---

## Roadmap

- [ ] Drag-and-drop task reordering
- [ ] Due dates and priority tags
- [ ] Backend + auth for cross-device sync (API routes / database)
- [ ] Dark mode

---

## Author

Built by **Ankitraj Kadel** — Full-Stack Developer (MERN, Next.js, TypeScript)
