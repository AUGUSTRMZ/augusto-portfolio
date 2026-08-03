const root = document.documentElement;
const header = document.getElementById('header');
const themeToggle = document.getElementById('themeToggle');
const toast = document.getElementById('demoToast');
const toastTitle = document.getElementById('toastTitle');
let toastTimer;

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) root.dataset.theme = savedTheme;

themeToggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('portfolio-theme', nextTheme);
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

document.querySelectorAll('.demo-button.is-pending').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    toastTitle.textContent = `${button.dataset.template}: demo en preparación`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 4200);
  });
});
