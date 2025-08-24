import { initCommon } from './modules/common.js';
import { portfolioData } from './modules/data.js';
import { loadProjects, loadExperience, loadEducation, createSkillsList } from './modules/ui.js';

document.addEventListener('DOMContentLoaded', () => {

    // Initialisation des fonctionnalités communes
    initCommon();

    // Chargement des projets
    loadProjects(portfolioData.personalProjects, portfolioData.projects, 'projects-container', 'Projets Perso');
    loadProjects(portfolioData.academicProjects, portfolioData.projects, 'projects-container', "Projets d'études");
  
    // Chargement de l'expérience
    loadExperience(portfolioData.experience);
  
    // Chargement de la formation
    loadEducation(portfolioData.education);
  
    // Chargement des compétences
    createSkillsList(portfolioData.skills);
  });