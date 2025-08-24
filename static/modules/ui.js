// Utilitaires d'interface utilisateur

// Créer une liste de compétences avec liens
export function createSkillsList(skills, containerId = 'skills-container') {
  const skillsList = document.createElement('ul');
  const skillsContainer = document.getElementById(containerId);
  
  if (!skillsContainer) return null;

  skills.forEach(skill => {
    const skillLink = document.createElement('a');
    skillLink.href = skill[1];
    skillLink.target = '_blank';
    skillLink.rel = 'noopener noreferrer';
    skillLink.text = skill[0];
    skillLink.className = 'skill-link';
    
    const li = document.createElement('li');
    li.appendChild(skillLink);
    li.className = 'skill-link-container';
    skillsList.appendChild(li);
  });

  skillsContainer.appendChild(skillsList);

  // Ajouter des éléments de remplissage pour l'alignement (multiples de 6)
  const deficit = (6 - (skillsList.children.length % 6)) % 6;
  for (let i = 0; i < deficit; i++) {
    const filler = document.createElement('li');
    filler.className = 'skill-link-container';
    filler.style.visibility = 'hidden';
    filler.textContent = '.';
    skillsList.appendChild(filler);
  }

  return skillsList;
}

// Créer une liste de compétences simple (sans liens)
export function createSimpleSkillsList(skills, containerSelector = '.stack-list') {
  const skillsList = document.querySelector(containerSelector);
  if (!skillsList) return null;

  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  return skillsList;
}

// Charger des projets (fonction du portfolio principal)
export function loadProjects(projectNames, projects, containerId, sectionLabel) {
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
    link.href = `./${name}.html`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    card.className = 'project-item';
    link.innerHTML = `
      <h4 class="project-item-title">${name}</h4>
      <p class="project-intro">${projectData.intro || ''}</p>
      <p class="project-skills">${projectData.skills.join(' • ')}</p>
    `;
    card.appendChild(link);
    container.appendChild(card);
  });
}

// Charger l'expérience (fonction du portfolio principal)
export function loadExperience(experience) {
  const expList = document.getElementById('experience-list');
  if (!expList) return;

  experience.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <p class="career-period">${item.period}</p>
      <p class="career-title">${item.field} 
      <br> ${item.role}</p>
      <ul class="career-details">
        ${item.details.map(d => `<li>${d}</li>`).join('')}
      </ul>
    `;
    expList.appendChild(li);
  });
}

// Charger l'éducation (fonction du portfolio principal)
export function loadEducation(education) {
  const eduList = document.getElementById('education-list');
  if (!eduList) return;

  education.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <p class="edu-period">${item.period}</p>
      <p class="edu-title">${item.degree}, ${item.institution}</p>
    `;
    eduList.appendChild(li);
  });
}

// Ajuster la hauteur d'image de prévisualisation (pour aura.js)
export function adjustPreviewImage() {
  const previewImage = document.querySelector('.preview-image');
  if (previewImage) {
    previewImage.style.maxHeight = `105vh`;
  }
}
