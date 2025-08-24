// Fonctionnalités communes du portfolio

import { contactInfo } from './data.js';

// Gestion du thème (fonction exportée pour réutilisation)
export function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.replace('dark-theme', 'light-theme');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light');
      } else {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark');
      }
    });
  }
}

// Animation des titres de section
export function animateSectionTitles() {
  document.querySelectorAll('.section-title').forEach(title => {
    const full = title.dataset.title || title.textContent || '';
    let i = 0;
    title.textContent = '';
    title.setAttribute('data-title', '');
    const typing = setInterval(() => {
      if (i < full.length) {
        title.setAttribute('data-title', full.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 60);
  });
}

// Gestion du contact (fonction exportée pour réutilisation)
export function initContact() {
  const contactList = document.getElementById('contact-list');
  if (contactList) {
    contactList.innerHTML = contactInfo;
  }
}

// Initialisation commune pour toutes les pages
export function initCommon() {
  initTheme();
  animateSectionTitles();
  initContact();
}
