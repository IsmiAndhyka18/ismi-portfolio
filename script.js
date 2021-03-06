const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");



hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
});




AOS.init({
 
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate', 
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99, 

  offset: 120, 
  delay: 0, 
  duration: 500, 
  easing: 'ease',
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 
});



