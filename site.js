// Keep the footer shortcut useful for keyboard users on every page.
const contentShortcut = document.querySelector('.footer a[href="#main"]');
contentShortcut?.addEventListener('click', () => {
  document.getElementById('main').focus({ preventScroll: true });
});
