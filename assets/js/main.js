/**
 * SonicDrop - Core Main JavaScript
 * Handles navigation, sticky header, mobile menu, stats counters, toasts, and back-to-top
 */

(function () {
  'use strict';

  // --- 1. Sticky Navbar ---
  function initStickyNavbar() {
    const navbar = document.querySelector('.pulse-navbar');
    const header = document.querySelector('header');
    if (!navbar) return;

    function handleScroll() {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
        if (header) header.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
        if (header) header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // --- 2. Mobile Navigation Enhancements ---
  function initMobileNav() {
    const navToggler = document.querySelector('.navbar-toggler');
    const navCollapse = document.querySelector('.navbar-collapse');
    if (!navToggler || !navCollapse) return;

    // Close when clicking outside
    document.addEventListener('click', (event) => {
      const isClickInside = navCollapse.contains(event.target) || navToggler.contains(event.target);
      if (!isClickInside && navCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse) || new bootstrap.Collapse(navCollapse);
        bsCollapse.hide();
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse) || new bootstrap.Collapse(navCollapse);
        bsCollapse.hide();
      }
    });

    // Close when clicking a nav link (except dropdown toggles)
    const navLinks = navCollapse.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse) || new bootstrap.Collapse(navCollapse);
          bsCollapse.hide();
        }
      });
    });
  }

  // --- 3. Animated Counters ---
  function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'), 10);
            const prefix = el.getAttribute('data-prefix') || '';
            const suffix = el.getAttribute('data-suffix') || '';
            let start = 0;
            const duration = 1800;
            const stepTime = 25;
            const steps = duration / stepTime;
            const increment = target / steps;

            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
                clearInterval(timer);
              } else {
                el.textContent = `${prefix}${Math.floor(start).toLocaleString()}${suffix}`;
              }
            }, stepTime);

            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    counters.forEach((c) => observer.observe(c));
  }

  // --- 4. Back to Top Button ---
  function initBackToTop() {
    const backBtn = document.querySelector('.back-to-top');
    if (!backBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backBtn.classList.add('show');
      } else {
        backBtn.classList.remove('show');
      }
    });

    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 5. Global Toast Notification Function ---
  window.showPulseToast = function (title, message, type = 'info') {
    let container = document.querySelector('.pulse-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'pulse-toast-container';
      document.body.appendChild(container);
    }

    const toastId = 'toast-' + Date.now();
    const iconClass =
      type === 'success'
        ? 'bi-check-circle-fill text-success'
        : type === 'warning'
        ? 'bi-exclamation-triangle-fill text-warning'
        : type === 'danger'
        ? 'bi-x-circle-fill text-danger'
        : 'bi-info-circle-fill text-info';

    const toastHtml = `
      <div id="${toastId}" class="toast align-items-center text-white border-0 shadow-lg mb-2" role="alert" aria-live="assertive" aria-atomic="true" style="background: var(--surface-elevated); border: 1px solid var(--border-color); border-radius: 14px; min-width: 280px;">
        <div class="d-flex p-3 align-items-center">
          <i class="bi ${iconClass} fs-4 me-3"></i>
          <div class="toast-body p-0 flex-grow-1">
            <strong class="d-block" style="color: var(--text-primary); font-size: 0.95rem;">${title}</strong>
            <small style="color: var(--text-secondary); font-size: 0.85rem;">${message}</small>
          </div>
          <button type="button" class="btn-close btn-close-white-custom ms-2" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', toastHtml);
    const toastEl = document.getElementById(toastId);
    if (toastEl && window.bootstrap) {
      const bsToast = new bootstrap.Toast(toastEl, { delay: 4000 });
      bsToast.show();
      toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
    }
  };

  // --- 6. Active Nav Link Auto-Highlight ---
  function setActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.pulse-navbar .nav-link');
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && href !== '#' && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
        link.classList.add('active');
      }
    });

    if (currentPath === 'index.html' || currentPath === '' || currentPath === 'home-2.html') {
      const homeDropdown = document.getElementById('homeDropdown');
      if (homeDropdown) homeDropdown.classList.add('active');
    }
  }

  // --- 7. Interactive Audio Equalizer Widget ---
  function initInteractiveEQ() {
    const eqWidgets = document.querySelectorAll('.interactive-eq-box');
    if (!eqWidgets.length) return;

    const presets = {
      'bass-boost': [95, 88, 75, 52, 40, 35, 48, 60, 72, 85, 90, 94],
      'festival-drop': [100, 96, 90, 70, 55, 65, 80, 92, 98, 95, 88, 100],
      'vocal-clarity': [40, 48, 58, 85, 98, 92, 88, 76, 64, 52, 45, 40],
      'flat-reference': [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65]
    };

    eqWidgets.forEach((widget) => {
      const bars = widget.querySelectorAll('.eq-bar-item');
      const presetBtns = widget.querySelectorAll('.eq-preset-btn');
      if (!bars.length) return;

      // Function to apply preset heights
      function applyPreset(presetKey) {
        const values = presets[presetKey] || presets['festival-drop'];
        bars.forEach((bar, idx) => {
          const val = values[idx % values.length] || 50;
          bar.style.height = `${val}%`;
        });
      }

      // Initial apply
      applyPreset('festival-drop');

      presetBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          presetBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          const pKey = btn.getAttribute('data-preset');
          applyPreset(pKey);
        });
      });

      // Subtle dynamic flutter on mouse move
      widget.addEventListener('mousemove', () => {
        bars.forEach((bar) => {
          const jitter = (Math.random() * 12) - 6;
          const currentHeight = parseFloat(bar.style.height) || 60;
          bar.style.height = `${Math.min(100, Math.max(15, currentHeight + jitter))}%`;
        });
      });
    });
  }

  // Initialize all on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initStickyNavbar();
    initMobileNav();
    initCounters();
    initBackToTop();
    setActiveNavLink();
    initInteractiveEQ();
  });
})();

