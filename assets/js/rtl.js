/**
 * PulseWave - RTL / LTR Bidirectional Switcher
 * Persists direction in localStorage and updates UI accordingly
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'pulsewave_direction';
  const root = document.documentElement;

  function getSavedDirection() {
    return localStorage.getItem(STORAGE_KEY) || 'ltr';
  }

  function applyDirection(dir) {
    if (dir === 'rtl') {
      root.setAttribute('dir', 'rtl');
      root.setAttribute('lang', 'ar');
    } else {
      root.setAttribute('dir', 'ltr');
      root.setAttribute('lang', 'en');
    }
    updateRtlButtons(dir);
  }

  function updateRtlButtons(dir) {
    const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
    rtlBtns.forEach((btn) => {
      const textSpan = btn.querySelector('.rtl-text');
      if (textSpan) {
        textSpan.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
      }
      btn.setAttribute('title', dir === 'rtl' ? 'Switch to LTR Mode' : 'Switch to RTL Mode');
      btn.setAttribute('aria-label', dir === 'rtl' ? 'Switch to LTR Mode' : 'Switch to RTL Mode');
    });
  }

  // Immediate execution before render
  const savedDir = getSavedDirection();
  applyDirection(savedDir);

  document.addEventListener('DOMContentLoaded', () => {
    updateRtlButtons(getSavedDirection());

    const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
    rtlBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentDir = root.getAttribute('dir') || 'ltr';
        const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        localStorage.setItem(STORAGE_KEY, newDir);
        applyDirection(newDir);

        if (window.showPulseToast) {
          window.showPulseToast(
            'Direction Changed',
            `Switched to ${newDir.toUpperCase()} layout`,
            'info'
          );
        }
      });
    });
  });
})();
