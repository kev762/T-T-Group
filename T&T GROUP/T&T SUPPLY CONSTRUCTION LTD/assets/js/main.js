// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-nav-links]');
  if (!button || !menu) return;

  const closeMenu = () => {
    menu.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  button.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    if (isOpen) closeMenu();
    else {
      menu.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      document.body.classList.add('menu-open');
    }
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) closeMenu();
  });
});


// Hero background rotator
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('[data-hero-rotator]');
  if (!hero) return;

  const raw = hero.getAttribute('data-images') || '';
  const imagePaths = raw.split(',').map(s => s.trim()).filter(Boolean);
  if (imagePaths.length <= 1) return; // nothing to rotate

  let currentIndex = 0;
  const intervalMs = 6000; // 6 seconds per image

  const setBackground = (src) => {
    const grad = 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))';
    hero.style.backgroundImage = `${grad}, url('${src}')`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
  };

  // Preload images for smoother transitions
  imagePaths.forEach(path => { const img = new Image(); img.src = path; });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    setBackground(imagePaths[currentIndex]);
  }, intervalMs);
});

