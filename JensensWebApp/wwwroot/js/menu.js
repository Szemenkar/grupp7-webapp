const menu = document.querySelector('.menu');
const headerHeight = document.querySelector('header').offsetHeight;//Höjden på headern
let prevScrollPos = window.scrollY; // Kollar föregående positionen på scroll

//"Lyssnar" på scroll
window.addEventListener('scroll', () => {
  const currentScrollPos = window.scrollY;
  const scrollUp = currentScrollPos - prevScrollPos;

  if (currentScrollPos > headerHeight) {
    // Scrollat förbi headern
    menu.style.position = 'fixed';
    menu.style.top = '0';
    menu.style.opacity = '0';
    if (scrollUp < 0) {
      // Scrollar uppåt
      menu.style.position = 'fixed';
      menu.style.opacity = '1';
      menu.style.background = 'linear-gradient(to bottom, #FB7E7E, #ba85e9, rgba(186, 133, 233, 0.7))';
      menu.style.marginTop = '0';
    }
  } else {
    // Om användaren är ovanför headern
    menu.style.position = 'fixed';
    menu.style.top = `${headerHeight}px`;
    menu.style.opacity = '1';
    menu.style.background = 'transparent';
    menu.style.marginTop = '15px';

  }

  prevScrollPos = currentScrollPos; //Uppdaterar positionen
});

// Första gången sidan laddas
window.addEventListener('load', () => {
  menu.style.top = `${headerHeight}px`;
  menu.style.opacity = '1';
});