
import { initCommon } from './modules/common.js';
import { createSkillsList } from './modules/ui.js';

// Compétences spécifiques au projet JustStreamIt
const skills = [
  ['Python', 'https://www.python.org'],
  ['JavaScript', 'https://developer.mozilla.org/fr/docs/Web/JavaScript'],
  ['HTML', 'https://developer.mozilla.org/fr/docs/Web/HTML'],
  ['CSS', 'https://developer.mozilla.org/fr/docs/Web/CSS'],
  ['API REST', 'https://developer.mozilla.org/fr/docs/Web/API/Fetch_API'],
  ['API OCMovies', 'https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR'],
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des fonctionnalités communes
    initCommon();

    // Chargement des compétences spécifiques
    createSkillsList(skills);
});
