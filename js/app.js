const hamburgerIcon = document.querySelector('.nav-open');
const closeIcon = document.querySelector('.nav-close');
const responsiveNav = document.querySelector('.responsive-nav');
const backdrop = document.querySelector('.backdrop');
let open = false;

hamburgerIcon.addEventListener('click', navToggle);
closeIcon.addEventListener('click', navToggle);

function navToggle(event) {
  if(event.target.parentElement.classList.contains('nav-open')){
    event.target.parentElement.style.display = 'none';
    closeIcon.style.display = 'block';
    responsiveNav.style.display = 'block';
    open = true;
    backdrop.style.display = 'block';
  } else if(event.target.parentElement.classList.contains('nav-close')){
    event.target.parentElement.style.display = 'none';
    hamburgerIcon.style.display = 'block';
    responsiveNav.style.display = 'none';
    backdrop.style.display = 'none';
    open = false;
  }
  event.preventDefault();
}

function closeNav() {
  backdrop.style.display = 'none';
  hamburgerIcon.style.display = 'block';
  closeIcon.style.display = 'none';
  responsiveNav.style.display = 'none';
}