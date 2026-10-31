import './App.css'
import { AppRouter } from './app/router'
import { useState } from 'react';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark", !darkTheme);
  };

  return (
    <>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Сменить тему"
      >
        {darkTheme ? "☀️" : "🌙"}
      </button>
      <AppRouter />
    </>
  );
}

export default App;
