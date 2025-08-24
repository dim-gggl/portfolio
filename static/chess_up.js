
import { initCommon } from './modules/common.js';
import { createSkillsList } from './modules/ui.js';

// Compétences spécifiques au projet Chess Up
const skills = [
  ['Python', 'https://www.python.org'],
  ['P.O.O.', 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming'],
  ['CLI', 'https://aws.amazon.com/fr/what-is/cli/'],
  ['M.V.C.', 'https://developer.mozilla.org/fr/docs/Glossary/MVC'],
  ['JSON', 'https://www.json.org/json-en.html'],
  ['flake8', 'https://flake8.pycqa.org/en/latest/'],
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des fonctionnalités communes
    initCommon();

    // Chargement des compétences spécifiques
    createSkillsList(skills);
});
