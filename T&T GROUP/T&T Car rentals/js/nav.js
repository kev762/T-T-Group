const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggleButton && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
  };

  toggleButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open', isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) closeMenu();
  });
}
