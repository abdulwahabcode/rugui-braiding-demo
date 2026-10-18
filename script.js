/* Rugui African Hair Braiding — interactions
   - Mobile nav toggle
   - Scroll-reveal animations (IntersectionObserver)
*/

(function () {
  'use strict';

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close the menu when a link is tapped
    links.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show everything if IntersectionObserver is unavailable
    revealEls.forEach(function (el) { el.classList.add('revealed'); });
  }
})();
