document.addEventListener('DOMContentLoaded', () => {
    const stackList = ['Django', 'Django Rest Framework', 'SQLite', 'MySQL', 'JWT', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Google Fonts', 'Bootstrap'];
    // --- LOGIQUE D'AFFICHAGE (ADAPTÉE AU NOUVEAU DESIGN) ---
  
    // Titres de section animés (via data-title pour éviter le doublon visuel)
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
  
    // Stack
    const skillsList = document.querySelector('.stack-list');
    if (skillsList) {
      stackList.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
      });
    }
    
    // Contact
    const contactList = document.getElementById('contact-list');
    if (contactList) {
        contactList.innerHTML = `
            <li><a href="mailto:dimitri.gaggioli@gmail.com">email</a></li>
            <li><a href="tel:+33620156172">telephone</a></li>
            <li><a href="https://github.com/dim-gggl" target="_blank" rel="noopener noreferrer">github</a></li>
        `;
    }
  
    // --- GESTION DU THÈME ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
  
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      body.classList.replace('dark-theme', 'light-theme');
    }

    const previewImage = document.querySelector('.preview-image');
    if (previewImage) {
      previewImage.style.maxHeight = `105vh`;
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
  });