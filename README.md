# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Skip Selector Redesign

This is a front-end redesign of the Skip Selector interface from [WeWantWaste.co.uk](https://wewantwaste.co.uk/), built using **React** and **Tailwind CSS**. The project enhances the UI/UX for selecting skip sizes and specifying heavy waste types and volume, ensuring a more modern, responsive, and intuitive experience.

## ✨ Features

- **Responsive Design**: Mobile-friendly layout using Tailwind's utility-first classes.
- **Dynamic Skip Filtering**: Skip options are filtered based on heavy waste selection and percentage.
- **Interactive UI**:
  - Toggle heavy waste types with stylish, animated buttons.
  - Select heavy waste volume using pill-style options.
  - Visual indicator bar showing approximate waste volume.
- **Accessibility & Usability**:
  - Clear visual feedback on interactions.

## 📁 Project Structure
src/
├── components/
│   ├── SkipCard.jsx
│   ├── SkipSelector.jsx
│   ├── WasteTypeSelector.jsx
│   ├── WastePercentageSelector.jsx
│   ├── SelectedWasteDisplay.jsx
│   ├── HeavyWasteVisual.jsx
│   ├── WarningBanner.jsx
│   └── InfoBanner.jsx
├── api/
│   └── api.js
└── App.jsx

## 🛠️ Tech Stack

- **React** (Vite-powered dev environment)
- **Tailwind CSS** for styling
- **JavaScript (ES6+)**

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/skip-selector-redesign.git
   cd skip-selector-redesign
2. Install dependencies 
    ```bash
    npm install
3. Run the app
    ```bash
    npm run dev
    
 📝 Notes
 - The API data wasn’t fully utilized in this version — since the focus was on redesigning the UI, I opted to use mock data to simulate functionality, as I wasn’t entirely sure how to integrate the fetched data.

 
