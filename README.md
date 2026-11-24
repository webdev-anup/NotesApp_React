# 📝 Notes App

A clean and simple notes app built with **React**. Add, delete and search your notes, switch between light and dark mode, and your notes stay saved even after you refresh the page.

🔗 **Live Demo:** [notes-app-react-seven-azure.vercel.app](https://notes-app-react-seven-azure.vercel.app/)

---

## ✨ Features

- ➕ **Add notes** with a 200-character limit and a live "characters remaining" counter
- 🗑️ **Delete notes** with a single click
- 🔍 **Search notes** instantly (case-insensitive)
- 🌗 **Dark mode** toggle
- 💾 **Persistent storage** using the browser's `localStorage`
- 📱 **Responsive layout** using CSS Grid

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 17 | UI components and state |
| React Icons | Delete and search icons |
| CSS (Grid + Flexbox) | Styling and responsive layout |
| localStorage | Saving notes in the browser |
| Vercel | Deployment |

---

## 🧠 Concepts Practiced

- Functional components and props
- `useState` and `useEffect` hooks
- Lifting state up (parent holds data, children send actions)
- Controlled inputs (textarea and search box)
- Rendering lists with `.map()` and unique `key`s
- Filtering data with `.filter()`
- Conditional class names for theming
- Persisting data with `localStorage` and `JSON.stringify` / `JSON.parse`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── AddNote.jsx    # Textarea, character counter and Save button
│   ├── Header.jsx     # Title and dark mode toggle
│   ├── Note.jsx       # Single note card
│   └── Search.jsx     # Search input
├── App.js             # Main state: notes, search text, dark mode
├── index.js           # App entry point
└── index.css          # Styles
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/webdev-anup/NotesApp_React.git

# 2. Go into the project folder
cd NotesApp_React

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
```

---

## 🔮 Future Improvements

- Edit existing notes
- Note colors and categories
- Save the dark mode preference
- Sort notes by date
- Unique IDs using `nanoid`

---

## 👨‍💻 Author

**Anup Patwa**

- GitHub: [@webdev-anup](https://github.com/webdev-anup)

---

⭐ If you found this project useful, consider giving it a star!
