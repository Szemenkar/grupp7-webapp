// const menu = document.querySelector('.menu');
// const headerHeight = document.querySelector('header').offsetHeight;
// let prevScrollPos = window.scrollY;

// window.addEventListener('scroll', () => {
//   const currentScrollPos = window.scrollY;
//   if (prevScrollPos > currentScrollPos) {
//     // Användaren scrollar uppåt
//     menu.style.top = '0';
//     menu.style.opacity = '1';
//   } else {
//     // Användaren scrollar nedåt
//     menu.style.top = '-100%';
//     menu.style.opacity = '0';
//   }
//   prevScrollPos = currentScrollPos;
// });

// window.addEventListener('load', () => {
//   // När sidan laddas första gången
//   menu.style.top = `${headerHeight}px`;
// });

// window.addEventListener('scroll', () => {
//   const currentScrollPos = window.scrollY;
//   if (currentScrollPos > headerHeight) {
//     // Användaren har scrollat förbi headern
//     menu.style.position = 'fixed';
//     menu.style.top = '0';
//   } else {
//     // Användaren är fortfarande över headern
//     menu.style.position = 'absolute';
//     menu.style.top = `${headerHeight}px`;
//   }
// });



const menu = document.querySelector('.menu');
const headerHeight = document.querySelector('header').offsetHeight;
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.scrollY;
  const scrollDelta = currentScrollPos - prevScrollPos;

  if (currentScrollPos > headerHeight) {
    // Användaren har scrollat förbi headern
    menu.style.position = 'fixed';
    menu.style.top = '0';
    menu.style.opacity = '0';
    if (scrollDelta < 0) {
      // Användaren scrollar uppåt
      menu.style.position = 'fixed';
      //menu.style.top = `${headerHeight}px`;
      menu.style.opacity = '1';
    }
  } else {
    // Användaren är fortfarande över headern
    menu.style.position = 'absolute';
    menu.style.top = `${headerHeight}px`;
    menu.style.opacity = '1';
  }

  prevScrollPos = currentScrollPos;
});

// Första gången sidan laddas
window.addEventListener('load', () => {
  menu.style.top = `${headerHeight}px`;
  menu.style.opacity = '1';
});
