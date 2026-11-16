// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // Fecha o menu ao clicar em um link
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Ano automático no rodapé
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Configuração do link do WhatsApp
const whatsappLink = document.getElementById('whatsapp-link');
if (whatsappLink) {
  const phone = '5554991277226';
  const message = encodeURIComponent('Olá, biel.dev! Quero conversar sobre um projeto.');
  whatsappLink.href = `https://wa.me/${phone}?text=${message}`;
}
