import { initCommon } from './modules/common.js';
import { createSimpleSkillsList, adjustPreviewImage } from './modules/ui.js';

document.addEventListener('DOMContentLoaded', () => {
    // Stack spécifique au projet Aura
    const stackList = ['Django', 'Django Rest Framework', 'SQLite', 'MySQL', 'JWT', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Google Fonts', 'Bootstrap'];
  
    // Initialisation des fonctionnalités communes
    initCommon();
  
    // Chargement de la stack simple
    createSimpleSkillsList(stackList);
    
    // Ajustement spécifique de l'image de prévisualisation
    adjustPreviewImage();
  });