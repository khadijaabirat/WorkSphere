# WorkSphere — Interactive Workspace Management

WorkSphere is a web-based interactive workspace management system that enables organizations to visually organize, assign, and manage employees across a dynamic office floor plan. The application enforces role-based access rules while providing a smooth and intuitive user experience for real-time workspace coordination.

---

## Live Demo

*  GitHub Repository: https://github.com/khadijaabirat/WorkSphere
*  Live Application: https://khadijaabirat.github.io/WorkSphere/

---

## Product Overview

WorkSphere is designed to replace static employee lists with a **visual, spatial management system**. It allows users to interact directly with an office layout, improving clarity, organization, and operational efficiency.

---

## Key Features

### Employee Lifecycle Management

* Create and manage employees dynamically
* Remove or unassign employees instantly
* View detailed employee profiles
* Attach images and professional experience entries dynamically

### Interactive Workspace Engine

* Visual floor plan with multiple office zones
* Drag-and-assign style interaction (logical mapping system)
* Real-time UI updates based on user actions
* Automatic highlighting of unfilled mandatory zones

### Role-Based Access Control (RBAC Simulation)

Business rules enforced at UI level:

| Role           | Access Permissions        |
| -------------- | ------------------------- |
| Receptionist   | Reception only            |
| IT Technician  | Server Room               |
| Security Agent | Security Area             |
| Manager        | Full access               |
| Cleaning Staff | All areas except Archives |
| Other Roles    | Standard access rules     |

---

## UX / UI Design

* Clean, modern and minimal interface
* Consistent spacing and visual hierarchy
* Responsive layout optimized for all devices
* Smooth CSS animations and micro-interactions
* Intuitive navigation and interaction flow

---

## Workspace Structure

The system is built around 6 functional zones:

* Reception
* Conference Room
* Server Room
* Security Room
* Staff Room
* Archive Room

---

## Tech Stack

### Frontend

* HTML5 (semantic structure)
* CSS3 (Flexbox, Grid, animations)
* Vanilla JavaScript (DOM-driven logic)

### Tools

* Git & GitHub (version control)
* GitHub Pages / Vercel (deployment)

---

## Architecture Overview

```
WorkSphere/
│
├── index.html        # UI structure
├── style.css         # Design system & layout
├── script.js         # Business logic & interactions
├── assets/           # Images & icons
└── README.md
```

The project follows a **modular client-side architecture**, where UI rendering and business rules are handled entirely in the browser using event-driven JavaScript.

---

## Technical Highlights

* DOM-based state management without external frameworks
* Rule-based access control logic (RBAC simulation)
* Event-driven architecture for UI updates
* Modular separation of UI, logic, and assets
* Fully client-side application (no backend dependency)

---

## Challenges & Solutions

* **Dynamic assignment logic:** implemented structured DOM manipulation to ensure consistent state updates
* **Role-based restrictions:** designed rule engine to validate assignments before rendering
* **Responsive layout complexity:** solved using CSS Grid + Flexbox hybrid system
* **State synchronization:** maintained UI consistency through centralized update functions

---

## Performance & Best Practices

* Semantic and accessible HTML structure
* Optimized CSS architecture (reusable patterns)
* Clean and maintainable JavaScript codebase
* Cross-browser compatibility
* W3C validated markup and styles

---

## Future Improvements

* Drag & Drop employee movement system
* Backend integration (Node.js / Firebase)
* Authentication & role management system
* Real-time collaboration features
* Admin dashboard for analytics
* Dark mode support

---

## Project Management

* Agile task tracking (Trello / GitHub Projects)
* Iterative development workflow
* Git-based version control with structured commits
* Feature-based development approach

---

## Author

**Khadija Abirat**
Frontend Developer | UI/UX Enthusiast
Focused on building interactive and user-centered web applications.
* GitHub:  https://github.com/khadijaabirat
* LinkedIn:  https://www.linkedin.com/in/abirat-khadija
---
## demo
<img width="1525" height="722" alt="Capture d&#39;écran 2026-05-19 093111" src="https://github.com/user-attachments/assets/64ee776c-91f6-43f5-947e-6d0a2bd44fab" />
<img width="1525" height="727" alt="Capture d&#39;écran 2026-05-19 093018" src="https://github.com/user-attachments/assets/b7c1338e-d782-43bb-86d0-ce49de6d8e1b" />
<img width="1517" height="717" alt="Capture d&#39;écran 2026-05-19 093433" src="https://github.com/user-attachments/assets/54ad9c5c-753e-49ca-b81a-78ac24f10735" />
<img width="283" height="637" alt="Capture d&#39;écran 2026-05-19 093701" src="https://github.com/user-attachments/assets/413c7ab5-4af1-4453-8898-9c9bd87ad3bf" />
<img width="287" height="638" alt="Capture d&#39;écran 2026-05-19 093750" src="https://github.com/user-attachments/assets/e5e5eb23-c351-4b49-9687-fbd512581734" />

 
