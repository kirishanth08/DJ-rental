/**
 * PulseWave - Filters & Search Engine
 * Handles Package tier filtering, Service category tabs, and Blog search
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Package Size Filters (Small / Medium / Large Events)
    const packageFilterBtns = document.querySelectorAll('.package-filter-btn');
    const packageCards = document.querySelectorAll('.package-item');

    if (packageFilterBtns.length && packageCards.length) {
      packageFilterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const targetBtn = e.currentTarget || btn;
          packageFilterBtns.forEach((b) => b.classList.remove('active'));
          targetBtn.classList.add('active');

          const size = targetBtn.getAttribute('data-size');
          packageCards.forEach((card) => {
            const cardSize = card.getAttribute('data-size');
            if (size === 'all' || cardSize === size) {
              card.classList.remove('d-none');
              card.style.removeProperty('display');
            } else {
              card.classList.add('d-none');
              card.style.setProperty('display', 'none', 'important');
            }
          });
        });
      });
    }

    // 2. Service Category Tabs/Filters
    const serviceFilterBtns = document.querySelectorAll('.service-filter-btn');
    const serviceItems = document.querySelectorAll('.service-card-item');

    if (serviceFilterBtns.length && serviceItems.length) {
      serviceFilterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const targetBtn = e.currentTarget || btn;
          serviceFilterBtns.forEach((b) => b.classList.remove('active'));
          targetBtn.classList.add('active');

          const category = targetBtn.getAttribute('data-category');
          serviceItems.forEach((item) => {
            const itemCat = item.getAttribute('data-category');
            if (category === 'all' || itemCat === category) {
              item.classList.remove('d-none');
              item.style.removeProperty('display');
            } else {
              item.classList.add('d-none');
              item.style.setProperty('display', 'none', 'important');
            }
          });
        });
      });
    }

    // 3. Blog Search & Category Pills
    const blogSearchInput = document.getElementById('blogSearchInput');
    const blogCategoryPills = document.querySelectorAll('.blog-cat-pill');
    const blogArticles = document.querySelectorAll('.blog-article-item');
    const noResultsNotice = document.getElementById('blogNoResults');

    function filterBlogPosts() {
      const articles = document.querySelectorAll('.blog-article-item');
      if (!articles.length) return;

      const input = document.getElementById('blogSearchInput');
      const searchTerm = input ? input.value.toLowerCase().trim() : '';
      const activePill = document.querySelector('.blog-cat-pill.active');
      const selectedCategory = activePill ? activePill.getAttribute('data-category') : 'all';

      let visibleCount = 0;

      articles.forEach((article) => {
        const title = article.querySelector('.blog-title')?.textContent.toLowerCase() || '';
        const excerpt = article.querySelector('p')?.textContent.toLowerCase() || '';
        const badge = article.querySelector('.blog-badge-tag')?.textContent.toLowerCase() || '';
        const author = article.querySelector('.blog-author')?.textContent.toLowerCase() || '';
        const category = article.getAttribute('data-category') || '';

        const matchesSearch = !searchTerm || 
                              title.includes(searchTerm) || 
                              excerpt.includes(searchTerm) || 
                              badge.includes(searchTerm) ||
                              author.includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || category === selectedCategory;

        if (matchesSearch && matchesCategory) {
          article.classList.remove('d-none');
          article.style.removeProperty('display');
          visibleCount++;
        } else {
          article.classList.add('d-none');
          article.style.setProperty('display', 'none', 'important');
        }
      });

      const noResults = document.getElementById('blogNoResults');
      if (noResults) {
        if (visibleCount === 0) {
          noResults.classList.remove('d-none');
          noResults.style.setProperty('display', 'block', 'important');
        } else {
          noResults.classList.add('d-none');
          noResults.style.setProperty('display', 'none', 'important');
        }
      }
    }

    if (blogSearchInput) {
      blogSearchInput.addEventListener('input', filterBlogPosts);
      blogSearchInput.addEventListener('keyup', filterBlogPosts);
    }

    if (blogCategoryPills.length) {
      blogCategoryPills.forEach((pill) => {
        pill.addEventListener('click', (e) => {
          e.preventDefault();
          const targetPill = e.currentTarget || pill;
          blogCategoryPills.forEach((p) => p.classList.remove('active'));
          targetPill.classList.add('active');
          filterBlogPosts();
        });
      });
    }
  });
})();
