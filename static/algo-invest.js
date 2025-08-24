
import { initCommon } from './modules/common.js';
import { createSkillsList } from './modules/ui.js';

// Compétences spécifiques au projet AlgoInvest-Trade
const algoSkills = [
  ['Python', 'https://www.python.org'],
  ['CSV', 'https://www.csv.org/'],
  ['Force brute', 'https://fr.wikipedia.org/wiki/Force_brute'],
  ['Programmation dynamique', 'https://fr.wikipedia.org/wiki/Programmation_dynamique'],
  ['Sac à dos (Knapsack)', 'https://fr.wikipedia.org/wiki/Sac_%C3%A0_dos_(programmation_dynamique)'],
  ['Big O notation', 'https://fr.wikipedia.org/wiki/Comparaison_asymptotique'],
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des fonctionnalités communes
    initCommon();

    // Chargement des compétences spécifiques
    createSkillsList(algoSkills);
});
