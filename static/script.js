document.addEventListener('DOMContentLoaded', () => {
  const experience = [
    {
      period: '2010 - 2024',
      field: 'Hôtellerie - Restauration',
      role: 'Directeur • Manager • Chef de rang',
      details: [
        "Gestion du stress & priorisation en service full rush",
        "Écoute active et résolution de litiges en temps réel",
        "Contrôle qualité & standards HACCP",
        "Participation à l'analyse des tickets de caisse (premiers pas data-driven)"
      ]
    }
  ];

  const education = [
    {
      period: '2024 - 2025',
      degree: 'Formation Développeur Python',
      institution: 'OpenClassrooms'
    },
    {
      period: '2012',
      degree: 'Master 1 Cinéma',
      institution: 'Université Paris X Nanterre'
    }
  ];

  const academicProjects = [
    'Book_Scraper',
    'Chess_Up',
    'AlgoInvest-Trade',
    'JustStreamIt',
    'lit_review'
  ];
  const personalProjects = [
    'kviR-Up',
    'Hash-iz'
  ];
  const projects = {
    "Book_Scraper": {
      intro: "Pipeline ETL",
      role: "Back-End + C.L.I",
      skills: ["Requests", "BeautifulSoup"]
    },
    "Chess_Up": {
      intro: "Gestion de tournois d'échecs",
      role: "Back-End + C.L.I",
      skills: ["Prog Orientée Objet", "Modèle-Vues-Contrôleurs"]
    },
    "AlgoInvest-Trade": {
      intro: "Algorithmes et notation Big-O",
      role: "Back-end, algorithme",
      skills: ["Algo de force brute", "prog dynamique", "algorithme du sac à dos"]
    },
    "JustStreamIt": {
      intro: "Interface utilisateur pour un site de streaming",
      role: "Front-End et appels à une API REST",
      skills: ["Javascript", "Appels Ajax"]
    },
    "lit_review": {
      intro: "Réseau social pour critiques littéraires",
      role: "Fullstack - Django + SQLite",
      skills: ["Django", "SQLite"]
    },
    "kviR-Up": {
      intro: "App dynamique générant des listes de films sur des thématiques LGBTQIA+",
      role: "Fullstack - Implémentation complète de l'appli",
      skills: ["Flask", "Jinja", "API ThemovieDB"]
    },
    "Hash-iz": {
      intro: "Password Manager + Générateur de mots de passe",
      role: "Conception du projet et implémentation du cryptage avec ChatGPT",
      skills: ["Flask", "SQLAlchemy"]
    }
  }

  const expList = document.getElementById('experience-list');
  experience.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
        <p class="experience-year">${item.period}<p>
        <p class="experience-kind">${item.field}</p>
        <p class="experience-role">${item.role}</p>
        <ul>
          ${item.details.map(d => `<li class="experience-skills">${d}</li>`).join('')}
        </ul>
      `;
    expList.append(li);
  });

  const eduList = document.getElementById('education-list');
  education.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <p class="education-list-year"><strong>${item.period}</strong></p>
      <p class="education-list-degree">${item.degree}</p>
      <p class="education-list-institution">${item.institution}</p>
      `;
    eduList.append(li);
  });

  function loadProjects(repoNames, containerId) {
    const container = document.getElementById(containerId);
    repoNames.forEach(name => {
      const card = document.createElement('div');
      const repoURL = `https://github.com/dim-gggl/${name}`;
      card.className = 'project-box';
      const skillsString = projects[name].skills.join(" • ");
      card.innerHTML = `
               <a href='${repoURL}' class="repo-link" target="_blank">${name}</a>
               <p class="genos">${projects[name].intro || ''}</p>
               <p class="repo-skills">${skillsString}</p>
             `;
      card.addEventListener("click", () => {
        window.location.href = repoURL;
      })
      container.append(card);
    })
  };

  loadProjects(academicProjects, 'academic-projects');
  loadProjects(personalProjects, 'personal-projects');
});

(function () {
  const btn = document.getElementById('theme-toggle');

  const ASSETS = {
    dark: {
      'two-star': 'icons/2_s.png',
      'three-star': 'icons/3_s.png',
      'four-star': 'icons/4_s.png',
      mail: 'icons/email.svg',
      phone: 'icons/phone.svg',
      github: 'icons/github.svg',
      skills: 'icons/skills.svg'
    },
    light: {
      'two-star': 'icons/two-star.png',
      'three-star': 'icons/three-star.png',
      'four-star': 'icons/four-star.png',
      mail: 'icons/mail_red.png',
      phone: 'icons/phone_red.png',
      github: 'icons/github_red.png',
      skills: 'icons/skills_.png'
    }
  };

  function applyTheme(theme) {
    document.querySelectorAll('[data-icon]').forEach(img => {
      const key = img.dataset.icon;
      if (ASSETS[theme][key]) {
        img.src = ASSETS[theme][key];
      }
    });
  }


  applyTheme('dark');
  btn.textContent = '🌙 Sombre';

  btn.addEventListener('click', () => {
    const lightMode = document.documentElement.classList.toggle('light');
    const theme = lightMode ? 'light' : 'dark';
    btn.textContent = lightMode ? '☀️ Clair' : '🌙 Sombre';
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  });
})();
