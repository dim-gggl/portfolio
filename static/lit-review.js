
import { initCommon } from './modules/common.js';
import { createSkillsList } from './modules/ui.js';

// Compétences spécifiques au projet LitReview
const algoSkills = [
  ['Python', 'https://www.python.org'],
  ['poetry', 'https://python-poetry.org/'],
  ['Django', 'https://www.djangoproject.com/'],
  ['MVP', 'https://fr.wikipedia.org/wiki/Minimum_viable_produit'],
  ['SQLite', 'https://www.sqlite.org/index.html']
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des fonctionnalités communes
    initCommon();

    // Chargement des compétences spécifiques
    createSkillsList(algoSkills);
});
