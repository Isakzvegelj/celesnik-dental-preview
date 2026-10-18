const menu = document.querySelector('.menu-button');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menu.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.focus();
  }
});
const dialog = document.querySelector('#lightbox');
let opener;
document.querySelectorAll('[data-photo]').forEach((button) => {
  button.addEventListener('click', () => {
    opener = button;
    dialog.querySelector('img').src = button.dataset.photo;
    dialog.querySelector('img').alt = button.querySelector('img').alt;
    dialog.showModal();
  });
});
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { if (opener) opener.focus(); });
