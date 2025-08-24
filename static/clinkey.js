import { initCommon } from './modules/common.js';
import { portfolioData } from './modules/data.js';
import { loadProjects, loadExperience, loadEducation, createSimpleSkillsList } from './modules/ui.js';

document.addEventListener('DOMContentLoaded', () => {
    // Stack spécifique au projet Clinkey
    const stackList = ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Google Fonts', 'Bootstrap'];
  
    // Initialisation des fonctionnalités communes
    initCommon();
  
    // Fonction loadProjects adaptée pour Clinkey (liens GitHub)
    function loadProjectsWithGithubLinks(projectNames, projects, containerId, sectionLabel) {
      const container = document.getElementById(containerId) || document.getElementById('projects-container');
      if (!container) return;
      
      if (sectionLabel) {
        const h3 = document.createElement('h3');
        h3.textContent = `// ${sectionLabel}`;
        container.appendChild(h3);
      }
      
      projectNames.forEach(name => {
        const projectData = projects[name];
        if (!projectData) return;
        
        const card = document.createElement('div');
        const link = document.createElement('a');
        link.href = `https://github.com/dim-gggl/${name}`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        card.className = 'project-item';
        link.innerHTML = `
          <h4 class="project-title">${name}</h4>
          <p class="project-intro">${projectData.intro || ''}</p>
          <p class="project-skills">${projectData.skills.join(' • ')}</p>
        `;
        card.appendChild(link);
        container.appendChild(card);
      });
    }

    // Chargement des projets avec liens GitHub
    loadProjectsWithGithubLinks(portfolioData.academicProjects, portfolioData.projects, 'projects-container', "Projets d'études");
    loadProjectsWithGithubLinks(portfolioData.personalProjects, portfolioData.projects, 'projects-container', 'Projets Perso');
  
    // Chargement de l'expérience
    loadExperience(portfolioData.experience);
  
    // Chargement de la formation
    loadEducation(portfolioData.education);
  
    // Chargement de la stack simple
    createSimpleSkillsList(stackList);
  });