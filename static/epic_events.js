
import { initCommon } from './modules/common.js';
import { createSkillsList } from './modules/ui.js';

// Compétences spécifiques au projet Chess Up
const skills = [
  ['Python', 'https://www.python.org'],
  ['PostgreSQL', 'https://www.postgresql.org/'],
  ['Click', 'https://click.palletsprojects.com/en/8.1.x/'],
  ['Rich', 'https://rich.readthedocs.io/en/latest/'],
  ['JWT', 'https://www.jwt.io/introduction'],
  ['Sentry', 'https://sentry.io/'],
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des fonctionnalités communes
    initCommon();

    // Chargement des compétences spécifiques
    createSkillsList(skills);
});
