const projects = {
  wos: {
    label: "Proyecto real · Desarrollo web",
    title: "WOS Control Operativo",
    intro: "Una plataforma de control operativo creada para centralizar actividades, personal, áreas, sucursales, alertas e incidencias dentro de una organización.",
    challenge: "La operación necesitaba visibilidad sobre las actividades diarias y una forma clara de adaptar el acceso de cada usuario según su rol, sucursal y asignación.",
    solution: "Se desarrolló una aplicación web con paneles para colaboradores y gerencia, seguimiento de tareas, cambios temporales de sucursal, evidencias e historial operativo.",
    role: "Desarrollo backend y frontend, definición de flujos, modelado de datos, APIs, autenticación, pruebas, mejoras visuales y despliegue.",
    result: "Una base operativa centralizada que facilita el seguimiento diario y permite continuar agregando nuevos módulos sin reconstruir el sistema.",
    screenshots: [
      { src: "assets/projects/wos/01.png", alt: "Panel principal de WOS", caption: "Vista general del panel operativo" },
      { src: "assets/projects/wos/02.png", alt: "Gestión operativa de WOS", caption: "Seguimiento de áreas, personal y actividades" },
      { src: "assets/projects/wos/03.png", alt: "Detalle de una función de WOS", caption: "Detalle de flujo o módulo destacado" }
    ]
  },
  habitree: {
    label: "Proyecto real · Producto móvil",
    title: "HabiTree",
    intro: "Aplicación móvil que transforma acciones sostenibles en misiones, progreso y recompensas para mejorar la participación del usuario.",
    challenge: "Convertir hábitos ambientales que pueden sentirse abstractos o repetitivos en una experiencia sencilla, motivadora y medible.",
    solution: "Se diseñó un producto gamificado con misiones diarias, recompensas, progresión, rachas y una identidad visual vinculada al crecimiento de un bosque.",
    role: "Project Manager: definición de funcionalidades, historias de usuario, prioridades, coordinación del trabajo y seguimiento de la experiencia UX/UI.",
    result: "Una propuesta de producto coherente que integra propósito, engagement y una estructura preparada para futuras funciones.",
    screenshots: []
  },
  lumbre: {
    label: "Concepto digital · Restaurante",
    title: "Lumbre Restaurante",
    intro: "Concepto de landing page para un restaurante de cocina mexicana contemporánea con una dirección visual elegante y editorial.",
    challenge: "Presentar la personalidad del restaurante y convertir la experiencia gastronómica en una interfaz que motive a consultar el menú y reservar.",
    solution: "Se creó una experiencia responsiva con narrativa de marca, menú filtrable, horarios, filosofía culinaria y formulario de reservación.",
    role: "Conceptualización, branding digital, arquitectura de información, diseño visual y desarrollo en HTML, CSS y JavaScript.",
    result: "Una demostración comercial lista para presentar cómo un restaurante puede fortalecer su presencia digital y facilitar reservaciones.",
    screenshots: [
      { src: "assets/projects/lumbre/01.png", alt: "Portada de Lumbre Restaurante", caption: "Hero y presentación de marca" },
      { src: "assets/projects/lumbre/02.png", alt: "Menú digital de Lumbre", caption: "Consulta del menú y experiencia gastronómica" },
      { src: "assets/projects/lumbre/03.png", alt: "Reservaciones de Lumbre", caption: "Flujo de reservación y contacto" }
    ]
  },
  atelier: {
    label: "Concepto digital · Arquitectura",
    title: "Atelier Norte",
    intro: "Concepto web editorial para un estudio de arquitectura, construcción e interiorismo con enfoque contemporáneo y una presentación visual de alto nivel.",
    challenge: "Transmitir la calidad del despacho, organizar sus servicios y mostrar el trabajo realizado sin saturar la experiencia ni restarle protagonismo a las imágenes.",
    solution: "Se desarrolló una landing page responsiva con portada inmersiva, servicios, proyectos destacados, proceso de supervisión y un flujo directo para solicitar una cotización.",
    role: "Conceptualización, arquitectura de información, diseño visual, experiencia de usuario y desarrollo frontend.",
    result: "Una presencia digital preparada para presentar Casa Patio Norte, Estudio Cobalto y otros proyectos con mayor autoridad y facilitar nuevas solicitudes.",
    screenshots: [
      { src: "assets/projects/atelier/01.png", alt: "Portada de Atelier Norte", caption: "Bienvenida y presentación del estudio" },
      { src: "assets/projects/atelier/02.png", alt: "Servicios y proyectos de Atelier Norte", caption: "Servicios y portafolio arquitectónico" },
      { src: "assets/projects/atelier/03.png", alt: "Proceso y contacto de Atelier Norte", caption: "Proceso de trabajo y solicitud de proyecto" }
    ]
  }
};

const header = document.querySelector(".site-header");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const modal = document.getElementById("projectModal");
const gallery = document.getElementById("modalGallery");
const galleryEmpty = document.getElementById("galleryEmpty");
const galleryCount = document.getElementById("galleryCount");
const imageViewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const viewerCaption = document.getElementById("viewerCaption");
const glow = document.getElementById("cursorGlow");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("portfolio-theme", next);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

function openImageViewer(image) {
  viewerImage.src = image.src;
  viewerImage.alt = image.alt;
  viewerCaption.textContent = image.caption || image.alt;
  imageViewer.classList.add("active");
  imageViewer.setAttribute("aria-hidden", "false");
}

function closeImageViewer() {
  imageViewer.classList.remove("active");
  imageViewer.setAttribute("aria-hidden", "true");
  viewerImage.src = "";
}

function renderProjectGallery(project) {
  gallery.innerHTML = "";
  gallery.classList.remove("has-images");
  galleryEmpty.hidden = false;
  galleryCount.textContent = "";

  const screenshots = project.screenshots || [];
  let loadedImages = 0;
  let settledImages = 0;

  screenshots.forEach((image, index) => {
    const button = document.createElement("button");
    button.className = "gallery-item";
    button.type = "button";
    button.setAttribute("aria-label", `Abrir captura ${index + 1}: ${image.caption || image.alt}`);

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.loading = "lazy";

    const caption = document.createElement("span");
    caption.textContent = image.caption || `Captura ${index + 1}`;

    img.addEventListener("load", () => {
      loadedImages += 1;
      settledImages += 1;
      button.classList.add("ready");
      gallery.classList.add("has-images");
      galleryEmpty.hidden = true;
      galleryCount.textContent = `${loadedImages} ${loadedImages === 1 ? "captura" : "capturas"}`;
    });

    img.addEventListener("error", () => {
      settledImages += 1;
      button.remove();
      if (settledImages === screenshots.length && loadedImages === 0) {
        galleryEmpty.hidden = false;
      }
    });

    button.addEventListener("click", () => openImageViewer(image));
    button.append(img, caption);
    gallery.appendChild(button);
  });
}

function openModal(projectId) {
  const project = projects[projectId];
  if (!project) return;

  document.getElementById("modalLabel").textContent = project.label;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalIntro").textContent = project.intro;
  document.getElementById("modalChallenge").textContent = project.challenge;
  document.getElementById("modalSolution").textContent = project.solution;
  document.getElementById("modalRole").textContent = project.role;
  document.getElementById("modalResult").textContent = project.result;

  const gallerySection = document.getElementById("modalGallerySection");
  const hasScreenshots = project.screenshots && project.screenshots.length > 0;

  gallerySection.hidden = !hasScreenshots;

  if (hasScreenshots) {
    renderProjectGallery(project);
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  closeImageViewer();
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".project-open").forEach(button => {
  button.addEventListener("click", () => openModal(button.dataset.project));
});

document.querySelectorAll("[data-close-modal]").forEach(element => {
  element.addEventListener("click", closeModal);
});

document.querySelectorAll("[data-close-viewer]").forEach(element => {
  element.addEventListener("click", closeImageViewer);
});

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (imageViewer.classList.contains("active")) {
    closeImageViewer();
    return;
  }
  closeModal();
});

window.addEventListener("pointermove", event => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

document.getElementById("year").textContent = new Date().getFullYear();
