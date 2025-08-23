
const algoSkills = [
  ['Python', 'https://www.python.org'],
  ['poetry', 'https://python-poetry.org/'],
  ['Django', 'https://www.djangoproject.com/'],
  ['MVP', 'https://fr.wikipedia.org/wiki/Minimum_viable_produit'],
  ['SQLite', 'https://www.sqlite.org/index.html']
];

const otherSkills = [
  ['uv', 'https://docs.astral.sh/uv/'],
  ['MySQL', 'https://www.mysql.com/'],
  ['HTML', 'https://developer.mozilla.org/fr/docs/Web/HTML'],
  ['CSS', 'https://developer.mozilla.org/fr/docs/Web/CSS'],
  ['JavaScript', 'https://developer.mozilla.org/fr/docs/Web/JavaScript'],
  ['Git', 'https://git-scm.com/'],
  ['GitHub', 'https://github.com/']
];
document.addEventListener('DOMContentLoaded', () => {

    // --- GESTION DU THÈME ---
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

    // --- ANIMATION DES TITRES ---
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

    // --- STACK ---
    const skillsList = document.createElement('ul');
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
      algoSkills.forEach(skill => {
        const skillLink = document.createElement('a');
        skillLink.href = skill[1];
        console.log(skill[1]);
        skillLink.target = '_blank';
        skillLink.rel = 'noopener noreferrer';
        skillLink.text = skill[0];
        skillLink.className = 'skill-link';
        console.log(skill[0]);
        const li = document.createElement('li');
        li.appendChild(skillLink);
        li.className = 'skill-link-container'
        skillsList.appendChild(li);
      });
      skillsContainer.appendChild(skillsList);
    }

    const deficit = (6 - (skillsList.children.length % 6)) % 6;
    for (let i = 0; i < deficit; i++) {
      const filler = document.createElement('li');
      filler.className = 'skill-link-container';
      filler.style.visibility = 'hidden'; // occupe l'espace mais invisible
      filler.textContent = '.'; // contenu fictif
      skillsList.appendChild(filler);
    }



    // --- CONTACT ---
    const contactList = document.getElementById('contact-list');
    if (contactList) {
        contactList.innerHTML = `
            <li><a href="mailto:dimitri.gaggioli@gmail.com">email</a></li>
            <li><a href="tel:+33620156172">telephone</a></li>
            <li><a href="https://github.com/dim-gggl" target="_blank" rel="noopener noreferrer">github</a></li>
        `;
    }
});
