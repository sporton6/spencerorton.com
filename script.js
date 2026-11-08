// Progressive enhancement: without JS, each thumbnail is a plain link to the full image.
const dialog = document.querySelector('.lightbox');
const big = dialog?.querySelector('img');
const caption = dialog?.querySelector('.lightbox-caption');

if (dialog && typeof dialog.showModal === 'function') {
  document.querySelectorAll('[data-gallery] a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const thumb = link.querySelector('img');
      big.src = link.href;
      big.alt = thumb.alt;
      caption.textContent = link.closest('figure')?.querySelector('figcaption')?.textContent ?? '';
      dialog.showModal();
    });
  });
  // Click on the backdrop closes the viewer.
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
}

document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
