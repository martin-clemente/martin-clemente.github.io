// Martín Clemente — Portfolio
// Small, dependency-free interactions: sticky header state, mobile nav,
// language switcher and carousel.

(function () {
  const header = document.getElementById('site-header');
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const langToggle = document.getElementById('lang-toggle');
  
  const langName = document.getElementById('lang-name');
  const langDropdown = document.getElementById('lang-dropdown');
  const themeToggle = document.getElementById('theme-toggle');

  // ---------- Translations ----------
  const I18N = {
    en: {
      'meta.title': 'Martín Clemente | Software, Web & IoT',
      'meta.description': 'Final-year Technical Informatics student building projects across software, web development, IoT and hardware.',
      'skip': 'Skip to content',

      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.education': 'Education',
      'nav.contact': 'Contact',
      'nav.curriculum': 'Curriculum',
      'nav.open': 'Open menu',
      'nav.close': 'Close menu',
      'nav.primary': 'Primary',
      'lang.switch': 'Switch language',
      'lang.menu': 'Language',
      'lang.toEs': 'Switch to Spanish',
      'lang.toEn': 'Switch to English',
      'theme.dark': 'Switch to dark mode',
      'theme.light': 'Switch to light mode',

      'hero.eyebrow': 'Final-year Technical Informatics Student',
      'hero.tagline': 'I turn problems into working systems — across software, the web, and the hardware they run on.',
      'hero.areas': 'Areas of focus',
      'hero.viewProjects': 'View Projects',
      'hero.contactMe': 'Contact Me',

      'about.heading': 'About',
      'about.p1': "I'm Martín Clemente, a final-year Technical Informatics student in Argentina, close to finishing my technical secondary education.",
      'about.p2': "I'm interested in building technology that integrates software, hardware, web development and the Internet of Things — turning real problems into working projects by combining programming, electronics, sensors, embedded systems and web technologies.",
      'about.p3': "I'm also starting to build knowledge in cybersecurity and information security.",

      'projects.heading': 'Projects',

      'tag.featured': 'Featured Project',
      'tag.collaborative': 'Collaborative Project',
      'tag.project': 'Project',
      'tag.independent': 'Independent Initiative',
      'tag.previewSoon': 'Preview coming soon',

      'project.airsense.type': 'Collaborative Project',
      'project.airsense.desc': 'An environmental monitoring system built to improve understanding of indoor/outdoor conditions through real-time data collection and visualization. Tracks temperature, humidity, ambient noise and CO₂ using ESP32-based sensors, with a web dashboard for visualization and alerts, plus AI-assisted analysis to support recommendations. AirSense competed at <strong>ACTE 2026</strong> and advanced to a second instance.',
      'project.airsense.contribution': 'I designed and built the dashboard and the whole website: the data visualization panel with alerts, plus the frontend integrated with the ESP32-based sensor data.',

      'contribution.label': 'My contribution',

      'project.wrc26.desc': 'WRC26 is a ticket management system for the FIFA World Cup 2026 (Canada · Mexico · USA). Built with Django, it lets users browse the 48 teams, group-stage matches and the 16 host stadiums on an interactive Leaflet.js map, buy tickets through a shopping cart and manage their purchases.',
      'project.wrc26.contribution': 'I was in charge of the frontend: designing and building all the HTML/CSS templates, the interactive stadiums map with Leaflet.js, the JavaScript interactions and client-side form validations, integrated with the Django backend.',
      'project.arcson.desc': "Bridge Arcson's institutional website, built with Django. The design follows the company's brand manual (color palette, Montserrat / Open Sans typography) and presents the whole product story — ArcBridge One IoT — through home, product, company and contact pages with a form.",
      'project.arcson.contribution': 'I designed and built the whole site: the visual identity applied from the brand manual, the frontend of every page and the Django integration, with all institutional text centralized in a single content file for easy editing.',

      'project.corefix.desc': "A technical service I'm building alongside my studies, focused on diagnostics, maintenance and optimization for PCs, notebooks and other tech equipment — including its identity, web presence and support processes.",
      'project.corefix.contribution': "Designed and built the CoreFix identity and website, and I'm setting up its documentation, processes and infrastructure.",
      'status.inProgress': 'In progress',

      'btn.viewRepo': 'View Repository',
      'btn.visitSite': 'Visit Site',

      'skills.heading': 'Skills',
      'skills.software': 'Software & Web',
      'skills.hardware': 'Hardware & IoT',
      'skills.tools': 'Tools',
      'skills.learning': 'Learning & Areas of Interest',
      'tag.sensors': 'Sensors',
      'tag.hwTroubleshooting': 'Hardware troubleshooting',
      'tag.hwService': 'Hardware Service',
      'tag.branding': 'Branding',
      'tag.collaboration': 'Collaboration',
      'tag.data': 'Data',
      'tag.ai': 'AI',
      'tag.cybersecurity': 'Cybersecurity',
      'tag.infoSecurity': 'Information Security',
      'tag.aiFull': 'Artificial Intelligence',
      'tag.embedded': 'Embedded Systems',

      'education.heading': 'Education',
      'education.meta1': 'Final-year student · E.E.S.T N°1 · 2020 – present',
      'education.meta2': 'Course / Training · 6 academic hours · Hacker Mentor',

      'contact.heading': 'Contact',
      'contact.lead': 'Open to junior/trainee opportunities, internships, collaborative projects and networking with people building interesting things.',
      'contact.email': 'Email',
      'contact.cta': "Let's connect",

      'footer.built': 'Built with HTML, CSS & JavaScript',

      'carousel.wrc26Label': 'WRC26 screenshots',
      'carousel.corefixLabel': 'CoreFix screenshots',
      'carousel.arcsonLabel': 'Arcson Bridge screenshots',
      'carousel.airsenseLabel': 'AirSense screenshots',
      'carousel.prev': 'Previous screenshot',
      'carousel.next': 'Next screenshot',
      'carousel.goto': 'Go to screenshot {n}'
    },
    es: {
      'meta.title': 'Martín Clemente | Software, Web e IoT',
      'meta.description': 'Estudiante de último año de Técnico en Informática que desarrolla proyectos en software, desarrollo web, IoT y hardware.',
      'skip': 'Saltar al contenido',

      'nav.about': 'Sobre mí',
      'nav.projects': 'Proyectos',
      'nav.skills': 'Habilidades',
      'nav.education': 'Educación',
      'nav.contact': 'Contacto',
      'nav.curriculum': 'Currículum',
      'nav.open': 'Abrir menú',
      'nav.close': 'Cerrar menú',
      'nav.primary': 'Principal',
      'lang.switch': 'Cambiar idioma',
      'lang.menu': 'Idioma',
      'lang.toEs': 'Cambiar a español',
      'lang.toEn': 'Cambiar a inglés',
      'theme.dark': 'Cambiar a modo oscuro',
      'theme.light': 'Cambiar a modo claro',

      'hero.eyebrow': 'Estudiante de último año de Técnico en Informática',
      'hero.tagline': 'Convierto problemas en sistemas que funcionan — a través del software, la web y el hardware en el que se ejecutan.',
      'hero.areas': 'Áreas de enfoque',
      'hero.viewProjects': 'Ver proyectos',
      'hero.contactMe': 'Contáctame',

      'about.heading': 'Sobre mí',
      'about.p1': 'Soy Martín Clemente, estudiante de último año de Técnico en Informática en Argentina, a punto de terminar mi educación secundaria técnica.',
      'about.p2': 'Me interesa construir tecnología que integre software, hardware, desarrollo web e Internet de las Cosas — convirtiendo problemas reales en proyectos funcionales al combinar programación, electrónica, sensores, sistemas embebidos y tecnologías web.',
      'about.p3': 'También estoy empezando a sumar conocimientos en ciberseguridad y seguridad de la información.',

      'projects.heading': 'Proyectos',

      'tag.featured': 'Proyecto destacado',
      'tag.collaborative': 'Proyecto colaborativo',
      'tag.project': 'Proyecto',
      'tag.independent': 'Iniciativa independiente',
      'tag.previewSoon': 'Vista previa próximamente',

      'project.airsense.type': 'Proyecto colaborativo',
      'project.airsense.desc': 'Sistema de monitoreo ambiental construido para comprender mejor las condiciones interiores/exteriores mediante recolección y visualización de datos en tiempo real. Registra temperatura, humedad, ruido ambiental y CO₂ con sensores basados en ESP32, con un panel web para visualización y alertas, más análisis asistido por IA para respaldar recomendaciones. AirSense compitió en <strong>ACTE 2026</strong> y avanzó a una segunda instancia.',
      'project.airsense.contribution': 'Diseñé y construí el dashboard y toda la página web: el panel de visualización de datos con alertas, más el frontend integrado con los datos de los sensores basados en ESP32.',

      'contribution.label': 'Mi contribución',

      'project.wrc26.desc': 'WRC26 es un sistema de gestión de entradas para el Mundial FIFA 2026 (Canadá · México · EE. UU.). Desarrollado con Django, permite ver los 48 equipos, los partidos de fase de grupos y los 16 estadios sede en un mapa interactivo con Leaflet.js, comprar entradas con un carrito de compras y gestionar las compras.',
      'project.wrc26.contribution': 'Estuve a cargo del frontend: diseñé y construí todas las plantillas HTML/CSS, el mapa interactivo de estadios con Leaflet.js, las interacciones en JavaScript y las validaciones de formularios del lado del cliente, integradas con el backend de Django.',
      'project.arcson.desc': 'Sitio web institucional de Bridge Arcson, desarrollado con Django. El diseño sigue el manual de identidad de la empresa (paleta de colores, tipografías Montserrat / Open Sans) y presenta todo el contenido del producto — ArcBridge One IoT — en las páginas de inicio, producto, empresa y contacto con formulario.',
      'project.arcson.contribution': 'Diseñé y construí el sitio completo: la identidad visual aplicada a partir del manual de marca, el frontend de todas las páginas y la integración con Django, con todo el texto institucional centralizado en un único archivo de contenido para editar fácilmente.',

      'project.corefix.desc': 'Un servicio técnico que estoy construyendo junto a mis estudios, enfocado en diagnóstico, mantenimiento y optimización de PC, notebooks y otros equipos tecnológicos — incluyendo su identidad, presencia web y procesos de soporte.',
      'project.corefix.contribution': 'Diseñé y construí la identidad y el sitio web de CoreFix, y estoy configurando su documentación, procesos e infraestructura.',
      'status.inProgress': 'En progreso',

      'btn.viewRepo': 'Ver repositorio',
      'btn.visitSite': 'Visitar sitio',

      'skills.heading': 'Habilidades',
      'skills.software': 'Software y Web',
      'skills.hardware': 'Hardware e IoT',
      'skills.tools': 'Herramientas',
      'skills.learning': 'Aprendizaje e Intereses',
      'tag.sensors': 'Sensores',
      'tag.hwTroubleshooting': 'Reparación de hardware',
      'tag.hwService': 'Servicio de hardware',
      'tag.branding': 'Marca',
      'tag.collaboration': 'Colaboración',
      'tag.data': 'Datos',
      'tag.ai': 'IA',
      'tag.cybersecurity': 'Ciberseguridad',
      'tag.infoSecurity': 'Seguridad de la información',
      'tag.aiFull': 'Inteligencia artificial',
      'tag.embedded': 'Sistemas embebidos',

      'education.heading': 'Educación',
      'education.meta1': 'Estudiante de último año · E.E.S.T N°1 · 2020 – presente',
      'education.meta2': 'Curso / Formación · 6 horas académicas · Hacker Mentor',

      'contact.heading': 'Contacto',
      'contact.lead': 'Abierto a oportunidades junior/trainee, pasantías, proyectos colaborativos y networking con personas que construyen cosas interesantes.',
      'contact.email': 'Correo',
      'contact.cta': 'Conectemos',

      'footer.built': 'Hecho con HTML, CSS y JavaScript',

      'carousel.wrc26Label': 'Capturas de WRC26',
      'carousel.corefixLabel': 'Capturas de CoreFix',
      'carousel.arcsonLabel': 'Capturas de Arcson Bridge',
      'carousel.airsenseLabel': 'Capturas de AirSense',
      'carousel.prev': 'Captura anterior',
      'carousel.next': 'Siguiente captura',
      'carousel.goto': 'Ir a la captura {n}'
    }
  };

  let currentLang = 'es';
  try {
    currentLang = localStorage.getItem('lang') === 'en' ? 'en' : 'es';
  } catch (e) {}

  const t = (key) => (I18N[currentLang] ? I18N[currentLang][key] : '') || '';

  function applyLanguage(lang) {
    currentLang = lang;
    const dict = I18N[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key in dict) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (key in dict) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (key in dict) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('[data-i18n-content]').forEach((el) => {
      const key = el.getAttribute('data-i18n-content');
      if (key in dict) el.content = dict[key];
    });

    if (navToggle) {
      navToggle.setAttribute('aria-label', t(navToggle.getAttribute('aria-expanded') === 'true' ? 'nav.close' : 'nav.open'));
    }
    document.querySelectorAll('[data-carousel-dot]').forEach((dot) => {
      dot.setAttribute('aria-label', t('carousel.goto').replace('{n}', String(Number(dot.getAttribute('data-index')) + 1)));
    });

    langName.textContent = lang === 'es' ? 'Español' : 'English';
    document.querySelectorAll('[data-lang-option]').forEach((opt) => {
      const optLang = opt.getAttribute('data-lang-option');
      const active = optLang === lang;
      opt.classList.toggle('active', active);
      opt.setAttribute('aria-checked', String(active));
      opt.setAttribute('aria-label', t(optLang === 'es' ? 'lang.toEs' : 'lang.toEn'));
    });
    if (langToggle) {
      langToggle.setAttribute('aria-label', t('lang.switch'));
      langToggle.title = t('lang.switch');
    }

    try { localStorage.setItem('lang', lang); } catch (e) {}
    updateThemeToggleState();
  }

  if (langToggle && langDropdown) {
    const closeMenu = () => {
      langDropdown.classList.remove('open');
      langToggle.setAttribute('aria-expanded', 'false');
    };

    langToggle.addEventListener('click', () => {
      const isOpen = langDropdown.classList.toggle('open');
      langToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('[data-lang-option]').forEach((opt) => {
      opt.addEventListener('click', () => {
        applyLanguage(opt.getAttribute('data-lang-option'));
        closeMenu();
      });
    });

    document.addEventListener('click', (event) => {
      if (!langDropdown.contains(event.target)) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  // Header gets a background/border once the page has scrolled.
  const onScroll = () => {
    if (window.scrollY > 8) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu toggle.
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', t(isOpen ? 'nav.close' : 'nav.open'));
    });

    // Close the mobile menu after choosing a link.
    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', t('nav.open'));
      });
    });
  }

  // Carousels (e.g. the WRC26 screenshot carousel) with autoplay, manual
  // navigation, dot indicators and keyboard support.
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('[data-carousel-slide]'));
    if (slides.length === 0) return;

    const track = carousel.querySelector('[data-carousel-track]');
    const prevBtn = carousel.querySelector('[data-carousel-prev]');
    const nextBtn = carousel.querySelector('[data-carousel-next]');
    const dotsWrap = carousel.querySelector('[data-carousel-dots]');
    let index = 0;
    let timer = null;
    let inView = true;

    function show(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      dotsWrap.querySelectorAll('.carousel-dot').forEach((dot, di) => {
        dot.classList.toggle('active', di === index);
        dot.setAttribute('aria-pressed', String(di === index));
      });
    }

    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    function start() {
      stop();
      if (!prefersReducedMotion && slides.length > 1 && inView) {
        timer = setInterval(() => show(index + 1), 4000);
      }
    }

    // Don't keep animating carousels that are off-screen or in a hidden tab.
    if ('IntersectionObserver' in window) {
      const inViewObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          inView = entry.isIntersecting;
          if (inView) start(); else stop();
        });
      }, { threshold: 0.15 });
      inViewObserver.observe(carousel);
    }
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else if (inView) start();
    });

    slides.forEach((_, di) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot';
      dot.setAttribute('data-index', String(di));
      dot.setAttribute('data-carousel-dot', '');
      dot.setAttribute('aria-label', t('carousel.goto').replace('{n}', String(di + 1)));
      dot.addEventListener('click', () => { show(di); start(); });
      dotsWrap.appendChild(dot);
    });

    if (prevBtn) prevBtn.addEventListener('click', () => { show(index - 1); start(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { show(index + 1); start(); });

    // Drag / swipe to navigate between slides (Pointer Events).
    let dragStartX = 0;
    let dragDelta = 0;
    let dragging = false;
    let dragPointerId = null;

    function endDrag(commit) {
      dragPointerId = null;
      if (!dragging) return;
      dragging = false;
      track.classList.remove('dragging');
      const width = track.clientWidth || 0;
      let target = index;
      if (commit && width && Math.abs(dragDelta) > width * 0.18) {
        target = index - Math.round(dragDelta / width);
      }
      show(target);
      start();
    }

    track.addEventListener('pointerdown', (event) => {
      if (dragging) return;
      dragging = true;
      dragPointerId = event.pointerId;
      dragStartX = event.clientX;
      dragDelta = 0;
      stop();
      track.classList.add('dragging');
      try { track.setPointerCapture(event.pointerId); } catch (e) {}
    });

    track.addEventListener('pointermove', (event) => {
      if (!dragging || event.pointerId !== dragPointerId) return;
      dragDelta = event.clientX - dragStartX;
      track.style.transform = `translateX(calc(${-index * 100}% + ${dragDelta}px))`;
    });

    track.addEventListener('dragstart', (event) => event.preventDefault());
    track.addEventListener('pointerup', (event) => {
      if (event.pointerId === dragPointerId) endDrag(true);
    });
    track.addEventListener('pointercancel', (event) => {
      if (event.pointerId === dragPointerId) endDrag(false);
    });

    // Hover pause only applies to real mice; on touch, taps leave a synthetic
    // hover behind that would keep autoplay permanently stopped after a swipe.
    if (window.matchMedia('(hover: hover)').matches) {
      carousel.addEventListener('mouseenter', stop);
      carousel.addEventListener('mouseleave', start);
    }
    carousel.addEventListener('focusin', stop);
    carousel.addEventListener('focusout', start);
    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') { show(index - 1); start(); }
      if (event.key === 'ArrowRight') { show(index + 1); start(); }
    });

    show(0);
    start();
  });

  // ---------- Theme (dark / light) ----------
  // The initial value is already set on <html> by the inline script in <head>;
  // this keeps the toggle, aria labels and preferences in sync.
  function getInitialTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }
  let currentTheme = getInitialTheme();

  function updateThemeToggleState() {
    if (!themeToggle) return;
    const target = currentTheme === 'dark' ? 'light' : 'dark';
    const label = t(target === 'dark' ? 'theme.dark' : 'theme.light');
    themeToggle.setAttribute('aria-label', label);
    themeToggle.title = label;
  }

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === 'light' ? '#F5F5F7' : '#000000';
    updateThemeToggleState();
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  updateThemeToggleState();

  applyLanguage(currentLang);

  // ---------- Scroll reveal ----------
  // Subtle opacity/translateY entrance for major blocks (about, project
  // showcases, skill groups, education items, contact) as they enter the
  // viewport. Skipped entirely when the user prefers reduced motion.
  const revealTargets = document.querySelectorAll('.reveal');
  if (revealTargets.length) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealTargets.forEach((el) => el.classList.add('is-visible'));
    } else {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

      revealTargets.forEach((el) => revealObserver.observe(el));
    }
  }
})();