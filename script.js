// Progressive enhancement: without JS, each thumbnail is a plain link to the full image.
const dialog = document.querySelector('.lightbox');
const big = dialog?.querySelector('img');

if (dialog && typeof dialog.showModal === 'function') {
  document.querySelectorAll('[data-gallery] a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const thumb = link.querySelector('img');
      big.src = link.href;
      big.alt = thumb.alt;
      dialog.showModal();
    });
  });
  // Click on the backdrop closes the viewer.
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
}

document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

// ===== Full-screen menu overlay =====
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const menuOverlay = document.getElementById('menu-overlay');

function openMenu() {
  if (!menuOverlay) return;
  menuOverlay.classList.add('open');
  menuOverlay.setAttribute('aria-hidden', 'false');
  if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close menu');
  }
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  if (!menuOverlay) return;
  menuOverlay.classList.remove('open');
  menuOverlay.setAttribute('aria-hidden', 'true');
  if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
  }
  document.body.style.overflow = '';
}

if (menuToggle) menuToggle.addEventListener('click', openMenu);
if (menuClose) menuClose.addEventListener('click', closeMenu);

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuOverlay?.classList.contains('open')) closeMenu();
});

// Close when a menu link is clicked (so navigation feels snappy)
menuOverlay?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});
