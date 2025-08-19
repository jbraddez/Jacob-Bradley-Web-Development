const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('primary-navigation');
window.addEventListener('DOMContentLoaded', ()=>{
    requestAnimationFrame(() => {
        nav.style.transition = '500ms ease-in-out';
    });
});

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', !expanded);
  toggle.classList.toggle('open');
  nav.classList.toggle('open');
});


const header = document.querySelector('header');

function onScroll() {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
    window.removeEventListener('scroll', onScroll);
  }
}
window.addEventListener('scroll', onScroll);


  const slideIns = document.querySelectorAll('.slide-in-left, .slide-in-right');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

slideIns.forEach(el => observer.observe(el));
