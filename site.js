// site.js — comportements partagés du site L'Aubépine
(function () {
  var head = document.querySelector('.site-head');
  function onScroll() {
    if (!head) return;
    if (window.scrollY > 40) head.classList.add('solid');
    else head.classList.remove('solid');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Année dynamique dans le pied de page
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
