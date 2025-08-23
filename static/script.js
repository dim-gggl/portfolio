document.addEventListener('DOMContentLoaded', () => {

    // --- CONTENU (INCHANGÉ) ---
    const experience = [
      { period: '2010 - 2024', field: 'Hôtellerie - Restauration', role: 'Directeur • Manager • Chef de rang', details: ["Gestion du stress & priorisation en service full rush", "Écoute active et résolution de litiges en temps réel", "Analyse des tickets de caisse (premiers pas data-driven)"] }
    ];
    const education = [
      { period: '2024 - 2025', degree: 'Formation Développeur Python', institution: 'OpenClassrooms' },
      { period: '2012', degree: 'Master 1 Cinéma', institution: 'Université Paris X Nanterre' }
    ];
    const academicProjects = ['GUDLFT', 'softdesk_support', 'lit_review', 'JustStreamIt', 'AlgoInvest-Trade', 'Chess_Up', 'Book_Scraper'];
    const personalProjects = ['aura-app', 'kvir_up', 'Clinkey'];
    const projects = {
      "GUDLFT": { intro: "Refactorisation, débogage, tests et stabilisation d'une application Flask existante", role: "Back-End", skills: ["Flask", "Pytest", "Git","locust", "CI/CD"] },
      "Book_Scraper": { intro: "Web scraping, HTML Parsing via un Pipeline ETL", role: "Back-End + C.L.I", skills: ["Requests", "BeautifulSoup", "CLI"] },
      "Chess_Up": { intro: "Gestion de tournois d'échecs", role: "Back-End + C.L.I", skills: ["Prog Orientée Objet", "Modèle-Vues-Contrôleurs", "Persistance de données"] },
      "AlgoInvest-Trade": { intro: "Algorithmes et notation Big-O: Calcul du meilleur portefeuille d'actions pour un budget donné.", role: "Back-end, algorithme", skills: ["Force brute", "prog. dynamique", "algorithme du sac à dos", "Big'O"] },
      "JustStreamIt": { intro: "Interface utilisateur dynamique pour un site de streaming", role: "Front-End et appels à une API REST", skills: ["Javascript vanilla", "Appels Ajax", "API"] },
      "lit_review": { intro: "Réseau social pour critiques littéraires", role: "Fullstack - Django + SQLite", skills: ["Django", "SQLite", "CSS Fameworks", "Sécurité"] },
      "softdesk_support": { intro: "Développement d'une API RESTFul pour traiter des tickets inter-entreprises", role: "Back-End + C.L.I", skills: ["Django", "Django Rest Framework", "SQLite", "JSON Web Token", "PostMan", "OWASP"] },
      'aura-app': { intro: "Application de gestion de collection d'art + API", role: "Fullstack - Implémentation complète de l'appli", skills: ["Django + extensions", "SQLite", "MySQL", "Django rest-Framework", "JWT"] },
      "kvir_up": { intro: "App dynamique générant des listes de films sur des thématiques LGBTQIA+", role: "Fullstack - Implémentation complète de l'appli", skills: ["Django + extensions", "Jinja", "API ThemovieDB", "OpenAI"] },
      "Clinkey": { intro: "Générateur de mots de passe", role: "Conception et implémentation", skills: ["Front-End", "HTML", "CSS", "Javascript"] },
    };
    const skills = [('Python', 'https://www.python.org'), ('uv', 'https://docs.astral.sh/uv/'), ('poetry', 'https://python-poetry.org/'), ('Flask', 'https://flask.palletsprojects.com/en/stable/'), ('Django', 'https://www.djangoproject.com/'), ('Django Rest Framework', 'https://www.django-rest-framework.org/'), ('Jinja', 'https://jinja.palletsprojects.com/en/3.1.x/'), ('MySQL', 'https://www.mysql.com/'), ('SQLite', 'https://www.sqlite.org/index.html'), ('HTML', 'https://developer.mozilla.org/fr/docs/Web/HTML'), ('CSS', 'https://developer.mozilla.org/fr/docs/Web/CSS'), ('JavaScript', 'https://developer.mozilla.org/fr/docs/Web/JavaScript'), ('Git', 'https://git-scm.com/'), ('GitHub', 'https://github.com/')];
  
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
  
    // Projets
    function loadProjects(projectNames, containerId, sectionLabel) {
      const container = document.getElementById(containerId) || document.getElementById('projects-container');
      if (!container) return;
      if (sectionLabel) {
        const h3 = document.createElement('h3');
        h3.textContent = `// ${sectionLabel}`;
        container.appendChild(h3);
      }
      projectNames.forEach(name => {
        const projectData = projects[name];
        if (!projectData) return;
        const card = document.createElement('div');
        const link = document.createElement('a');
        link.href = `./${name}.html`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        card.className = 'project-item';
        link.innerHTML = `
          <h4 class="project-item-title">${name}</h4>
          <p class="project-intro">${projectData.intro || ''}</p>
          <p class="project-skills">${projectData.skills.join(' • ')}</p>
        `;
        card.appendChild(link);
        container.appendChild(card);
      });
    };
    
    loadProjects(personalProjects, 'projects-container', 'Projets Perso');
    loadProjects(academicProjects, 'projects-container', "Projets d'études");
  
    // Expérience
    const expList = document.getElementById('experience-list');
    if (expList) {
      experience.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
          <p class="career-period">${item.period}</p>
          <p class="career-title">${item.field} 
          <br> ${item.role}</p>
          <ul class="career-details">
            ${item.details.map(d => `<li>${d}</li>`).join('')}
          </ul>
        `;
        expList.appendChild(li);
      });
    }
  
    // Formation
    const eduList = document.getElementById('education-list');
    if (eduList) {
      education.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
          <p class="edu-period">${item.period}</p>
          <p class="edu-title">${item.degree}, ${item.institution}</p>
        `;
        eduList.appendChild(li);
      });
    }
  
    // Compétences
    const skillsList = document.createElement('ul');
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
      skills.forEach(skill => {
        const a = document.createElement('a');
        a.href = skill[1];
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = skill[0];
        const li = document.createElement('li');
        li.appendChild(a);
        skillsList.appendChild(li);
      });
      skillsContainer.appendChild(skillsList);
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