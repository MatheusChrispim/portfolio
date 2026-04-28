// scripts/main.js

// =========================
// Fade-in Animation (Intersection Observer)
// =========================
(function () {
  const elements = document.querySelectorAll('.card');

  if (!('IntersectionObserver' in window)) {
    // Fallback: show all if not supported
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target); // run once per element
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach(el => observer.observe(el));
})();

// =========================
// Smooth Scroll for Anchor Links
// =========================
(function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
})();

// =========================
// Basic Performance Hint (optional logging)
// =========================
(function () {
  if (window.performance && performance.getEntriesByType) {
    const nav = performance.getEntriesByType('navigation')[0];
    if (nav) {
      const loadTime = Math.round(nav.loadEventEnd - nav.startTime);
      console.log('Page Load Time:', loadTime + 'ms');
    }
  }
})();
