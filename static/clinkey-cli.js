
import { initCommon } from './modules/common.js';
import { createSkillsList } from './modules/ui.js';

// Compétences spécifiques au projet Clinkey-cli
const skills = [
  ['Python', 'https://www.python.org'],
  ['Click', 'https://click.palletsprojects.com/en/8.1.x/'],
  ['Rich', 'https://rich.readthedocs.io/en/latest/'],
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des fonctionnalités communes
    initCommon();

    // Chargement des compétences spécifiques
    createSkillsList(skills);
});
