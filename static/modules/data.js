// Données communes du portfolio

// Compétences de base communes à tous les projets
export const baseSkills = [
  ['uv', 'https://docs.astral.sh/uv/'],
  ['poetry', 'https://python-poetry.org/'],
  ['MySQL', 'https://www.mysql.com/'],
  ['SQLite', 'https://www.sqlite.org/index.html'],
  ['HTML', 'https://developer.mozilla.org/fr/docs/Web/HTML'],
  ['CSS', 'https://developer.mozilla.org/fr/docs/Web/CSS'],
  ['JavaScript', 'https://developer.mozilla.org/fr/docs/Web/JavaScript'],
  ['Git', 'https://git-scm.com/'],
  ['GitHub', 'https://github.com/']
];

// Informations de contact
export const contactInfo = `
  <li><a href="mailto:dimitri.gaggioli@gmail.com">email</a></li>
  <li><a href="tel:+33620156172">telephone</a></li>
  <li><a href="https://github.com/dim-gggl" target="_blank" rel="noopener noreferrer">github</a></li>
`;

// Données du portfolio principal (script.js)
export const portfolioData = {
  experience: [
    { 
      period: '2010 - 2024', 
      field: 'Hôtellerie - Restauration', 
      role: 'Directeur • Manager • Chef de rang', 
      details: [
        "Gestion du stress & priorisation en service full rush", 
        "Écoute active et résolution de litiges en temps réel", 
        "Analyse des tickets de caisse (premiers pas data-driven)"
      ] 
    }
  ],
  education: [
    { period: '2024 - 2025', degree: 'Formation Développeur Python', institution: 'OpenClassrooms' },
    { period: '2012', degree: 'Master 1 Cinéma', institution: 'Université Paris X Nanterre' }
  ],
  academicProjects: ['GUDLFT', 'softdesk_support', 'lit_review', 'JustStreamIt', 'AlgoInvest-Trade', 'Chess_Up', 'Book_Scraper'],
  personalProjects: ['aura-app', 'kvir_up', 'Clinkey'],
  projects: {
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
  },
  skills: [
    ['Python', 'https://www.python.org'],
    ['uv', 'https://docs.astral.sh/uv/'],
    ['poetry', 'https://python-poetry.org/'],
    ['Flask', 'https://flask.palletsprojects.com/en/stable/'],
    ['Django', 'https://www.djangoproject.com/'],
    ['Django Rest Framework', 'https://www.django-rest-framework.org/'],
    ['Jinja', 'https://jinja.palletsprojects.com/en/3.1.x/'],
    ['MySQL', 'https://www.mysql.com/'],
    ['SQLite', 'https://www.sqlite.org/index.html'],
    ['HTML', 'https://developer.mozilla.org/fr/docs/Web/HTML'],
    ['CSS', 'https://developer.mozilla.org/fr/docs/Web/CSS'],
    ['JavaScript', 'https://developer.mozilla.org/fr/docs/Web/JavaScript'],
    ['Git', 'https://git-scm.com/'],
    ['GitHub', 'https://github.com/']
  ]
};
