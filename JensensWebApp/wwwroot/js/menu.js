const menu = document.querySelector('.menu');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Scrolling down
    menu.classList.add('hidden');
  } else {
    // Scrolling up or staying still
    menu.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
});