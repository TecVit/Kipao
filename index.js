/* NAVGATION */

const navbar = document.querySelector('.navgation');
const header = document.querySelector('main');

window.addEventListener('scroll', function () {
    animationNavgation();
});

function animationNavgation() {
    const windowTop = window.scrollY;
    if ((windowTop) > navbar.offsetTop) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
}

// FUNÇÃO DO BTN MENU
function mostrarMenu() {
    const div = document.querySelector('.navgation .links');

    if (div) {
      var currentDisplayStyle = window.getComputedStyle(div).display;

      if (currentDisplayStyle === 'flex') {
        div.style.display = 'none';
        } else {
        div.style.display = 'flex';
      }
    }
  }

function reload() {
  window.location.reload();
}