
import { initCommon } from './modules/common.js';
import { createSkillsList } from './modules/ui.js';

// Compétences spécifiques au projet Book Scraper
const skills = [
  ['Python', 'https://www.python.org'],
  ['BeautifulSoup', 'https://www.crummy.com/software/BeautifulSoup/bs4/doc/'],
  ['Requests', 'https://requests.readthedocs.io/en/latest/'],
  ['CSV', 'https://www.csv.org/'],
  ['flake8', 'https://flake8.pycqa.org/en/latest/'],
  ['flake8-html', 'https://flake8-html.readthedocs.io/en/latest/'],
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des fonctionnalités communes
    initCommon();

    // Chargement des compétences spécifiques
    createSkillsList(skills);
});
