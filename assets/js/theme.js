/**
 * SonicDrop - Theme Switcher (Dark / Light Mode)
 * Uses localStorage persistence and instant theme initialization
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'sonicdrop_theme';
  const root = document.documentElement;

  // Detect saved preference or system preference
  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return saved;
    }
    // Default to dark mode for energetic DJ aesthetic
    return 'dark';
  }

  // Apply theme to document
  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    updateThemeToggleIcons(theme);
  }

  // Update navbar icon
  function updateThemeToggleIcons(theme) {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'light') {
          icon.className = 'bi bi-moon-stars-fill';
          btn.setAttribute('title', 'Switch to Dark Mode');
          btn.setAttribute('aria-label', 'Switch to Dark Mode');
        } else {
          icon.className = 'bi bi-sun-fill';
          btn.setAttribute('title', 'Switch to Light Mode');
          btn.setAttribute('aria-label', 'Switch to Light Mode');
        }
      }
    });
  }

  // Initial immediate execution
  const currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  // Bind click listener after DOM loaded
  document.addEventListener('DOMContentLoaded', () => {
    updateThemeToggleIcons(getPreferredTheme());

    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const activeTheme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEY, newTheme);
        applyTheme(newTheme);

        if (window.showPulseToast) {
          window.showPulseToast(
            'Theme Updated',
            `Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`,
            'info'
          );
        }
      });
    });
  });
})();
