import { useState, useEffect } from 'react';

function ThemeSwitcher() {
  // Récupère le thème sauvegardé dans localStorage ou applique 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('user-theme') || 'dark';
  });

  useEffect(() => {
    // Retire toutes les anciennes classes de thème du <body>
    document.body.classList.remove('theme-dark', 'theme-light', 'theme-cyberpunk');
    
    // Si ce n'est pas le thème par défaut, on applique la classe correspondante
    if (theme !== 'dark') {
      document.body.classList.add(`theme-${theme}`);
    }

    // Sauvegarde le choix de l'utilisateur
    localStorage.setItem('user-theme', theme);
  }, [theme]);

  return (
    <select 
      value={theme} 
      onChange={(e) => setTheme(e.target.value)} 
      className="theme-select"
      aria-label="Sélectionner le thème"
    >
      <option value="dark">🌙 Dark</option>
      <option value="light">☀️ Light</option>
      <option value="cyberpunk">⚡ Cyberpunk</option>
    </select>
  );
}

export default ThemeSwitcher;