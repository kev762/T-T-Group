document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-nav-links]');
  if (!button || !menu) return;

  const closeMenu = () => {
    menu.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  const openMenu = () => {
    menu.classList.add('open');
    button.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  };

  button.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    if (isOpen) closeMenu();
    else openMenu();
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!menu.classList.contains('open')) return;
    const target = event.target;
    if (target instanceof Node && !menu.contains(target) && !button.contains(target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) closeMenu();
  });
});
