document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const squasoBtn = document.getElementById('squaso-btn');
    const projectsBtn = document.getElementById('projects-btn');
    const infoContactBtn = document.getElementById('info-contact-btn');

    const menuContainer = document.getElementById('menu-container');
    const overlay = document.getElementById('overlay');
    
    const projectsSubmenu = document.getElementById('projects-submenu');
    const submenuItems = projectsSubmenu.querySelectorAll('.submenu-item');

    const contactSubmenu = document.getElementById('contact-submenu'); // Nuevo submenú de contacto

    const projectDetailsContainer = document.getElementById('project-details-container');
    const allProjectDetailContents = projectDetailsContainer.querySelectorAll('.project-detail-content');
    // const infoContactContentLarge = document.getElementById('info-contact-content-large'); // Ya no se usa para mostrar/ocultar dinámicamente

    // --- Función para ocultar todas las secciones principales de contenido y submenús ---
    function hideAllMainContentAndSubmenus() {
        projectsSubmenu.classList.remove('visible');
        contactSubmenu.classList.remove('visible'); // Ocultar submenú de contacto
        projectDetailsContainer.classList.remove('visible');
        allProjectDetailContents.forEach(content => content.classList.remove('visible'));
        // infoContactContentLarge.classList.remove('show'); // Ya no es necesario
    }

    // --- Función para resetear a la vista de inicio (menú centrado) ---
    function resetToHomeView() {
        hideAllMainContentAndSubmenus();
        overlay.classList.remove('view-active-top');
        menuContainer.classList.remove('menu-is-top-style');
    }

    // --- Función para activar la vista con menú superior (solo para detalles de proyecto) ---
    function activateTopMenuViewForProjectDetails() {
        overlay.classList.add('view-active-top');
        menuContainer.classList.add('menu-is-top-style');
    }

    // --- Event Listener para el Botón Squaso® (Inicio) ---
    squasoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resetToHomeView();
    });

    // --- Event Listener para el Botón "Proyectos" (para mostrar/ocultar submenú de proyectos) ---
    projectsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (projectsSubmenu.classList.contains('visible')) {
            resetToHomeView(); 
        } else {
            hideAllMainContentAndSubmenus(); // Oculta otros submenús/contenido
            overlay.classList.remove('view-active-top'); 
            menuContainer.classList.remove('menu-is-top-style'); 
            projectsSubmenu.classList.add('visible');
        }
    });

    // --- Event Listeners para los items del Submenú de Proyectos ---
    submenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const projectName = item.getAttribute('data-project');
            
            hideAllMainContentAndSubmenus(); 
            activateTopMenuViewForProjectDetails(); // Mueve el menú principal arriba

            projectDetailsContainer.classList.add('visible');
            const targetProjectDetails = document.getElementById(`project-${projectName}-details`);
            if (targetProjectDetails) {
                targetProjectDetails.classList.add('visible');
            }
        });
    });

    // --- Event Listener para el Botón de Info & Contacto (para mostrar/ocultar submenú de contacto) ---
    infoContactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (contactSubmenu.classList.contains('visible')) {
            resetToHomeView();
        } else {
            hideAllMainContentAndSubmenus(); // Oculta otros submenús/contenido
            overlay.classList.remove('view-active-top'); 
            menuContainer.classList.remove('menu-is-top-style');
            contactSubmenu.classList.add('visible');
        }
    });

    // Estado inicial al cargar la página
    resetToHomeView();
});
