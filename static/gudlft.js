
import { initCommon } from './modules/common.js';
import { createSkillsList } from './modules/ui.js';

// Compétences spécifiques au projet GUDLFT
const algoSkills = [
  ['Python', 'https://www.python.org'],
  ['Flask', 'https://flask.palletsprojects.com/en/2.3.x/'],
  ['Jinja', 'https://jinja.palletsprojects.com/en/3.1.x/'],
  ['Pytest', 'https://docs.pytest.org/en/7.4.x/'],
  ['Pytest-Flask', 'https://pytest-flask.readthedocs.io/en/latest/'],
  ['Locust', 'https://locust.io/'],
  ['Coverage', 'https://coverage.readthedocs.io/en/7.4.0/']
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des fonctionnalités communes
    initCommon();

    // Chargement des compétences spécifiques
    createSkillsList(algoSkills);
});
