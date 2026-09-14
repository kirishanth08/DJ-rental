/**
 * PulseWave - Gallery Filter & Lightbox Modal
 * Handles category filtering and high-res modal previews
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Category Filtering
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length && galleryItems.length) {
      filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          // Update active button
          filterButtons.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');

          const filterValue = btn.getAttribute('data-filter');

          galleryItems.forEach((item) => {
            const itemCategory = item.getAttribute('data-category');
            if (filterValue === 'all' || itemCategory === filterValue) {
              item.style.display = 'block';
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
              }, 20);
            } else {
              item.style.opacity = '0';
              item.style.transform = 'scale(0.95)';
              setTimeout(() => {
                item.style.display = 'none';
              }, 250);
            }
          });
        });
      });
    }

    // 2. Lightbox Modal Preview
    const galleryCards = document.querySelectorAll('.gallery-card');
    const lightboxModalEl = document.getElementById('galleryLightboxModal');

    if (galleryCards.length && lightboxModalEl && window.bootstrap) {
      const modal = new bootstrap.Modal(lightboxModalEl);
      const modalImg = lightboxModalEl.querySelector('.lightbox-image');
      const modalTitle = lightboxModalEl.querySelector('.lightbox-title');
      const modalCategory = lightboxModalEl.querySelector('.lightbox-category');
      const modalDesc = lightboxModalEl.querySelector('.lightbox-desc');

      galleryCards.forEach((card) => {
        card.addEventListener('click', () => {
          const img = card.querySelector('img');
          const title = card.querySelector('.gallery-title')?.textContent || 'Event Production Highlight';
          const category = card.querySelector('.gallery-badge')?.textContent || 'Live Event';
          const desc = card.getAttribute('data-description') || 'Custom engineered acoustic system and synchronized intelligent lighting.';

          if (modalImg && img) modalImg.src = img.src;
          if (modalTitle) modalTitle.textContent = title;
          if (modalCategory) modalCategory.textContent = category;
          if (modalDesc) modalDesc.textContent = desc;

          modal.show();
        });
      });
    }
  });
})();
