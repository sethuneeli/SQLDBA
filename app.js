(function () {
  'use strict';

  // ── Navbar scroll shadow ────────────────────────────────────
  const navbar = document.getElementById('navbar');
  const heroEl = document.getElementById('home');

  if (navbar && heroEl) {
    const obs = new IntersectionObserver(
      ([entry]) => navbar.classList.toggle('scrolled', !entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(heroEl);
  }

  // ── Mobile hamburger ────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger && hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
  });

  window.closeMobile = function () {
    mobileMenu && mobileMenu.classList.remove('open');
  };

  // Close mobile menu on outside click
  document.addEventListener('click', (e) => {
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      if (!mobileMenu.contains(e.target) && e.target !== hamburger) {
        closeMobile();
      }
    }
  });

  // ── Active nav link on scroll ───────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const sectionObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((sec) => sectionObs.observe(sec));

  // ── Contact form submit ─────────────────────────────────────
  window.handleSubmit = function (event) {
    event.preventDefault();
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending…';

    // Simulate async submission
    setTimeout(() => {
      form.reset();
      btn.style.display = 'none';
      successMsg.style.display = 'block';

      // Reset form after 6 seconds
      setTimeout(() => {
        successMsg.style.display = 'none';
        btn.style.display = '';
        btn.disabled = false;
        btn.textContent = 'Send Message';
      }, 6000);
    }, 900);
  };

  // ── Smooth scroll for anchor links ─────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
