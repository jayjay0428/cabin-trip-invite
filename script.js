// Mobile navigation toggle
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Close mobile menu when a link is selected
const navAnchors = document.querySelectorAll('.nav-links a');
navAnchors.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    if (navLinks) {
      navLinks.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
    }
  });
});

// Live countdown timer to trip start date
// Use numeric date parts for reliable parsing across browsers/timezones.
const tripStartDate = new Date(2026, 8, 24, 19, 0, 0);
const tripStartDate = new Date('2026-09-24T19:00:00');
let hasCelebrated = false;

function showCelebrationState() {
  if (hasCelebrated) return;

  const countdownGrid = document.getElementById('countdown-grid');
  const celebrationBanner = document.getElementById('celebration-banner');

  if (countdownGrid) {
    countdownGrid.classList.add('fade-out');
  }

  // Slight delay keeps transition smooth and intentional
  setTimeout(() => {
    if (celebrationBanner) {
      celebrationBanner.classList.add('show');
    }
  }, 240);

  hasCelebrated = true;
}

function updateCountdown() {
  const now = new Date();
  const distance = Math.max(0, tripStartDate - now);

function updateCountdown() {
  const now = new Date();
  const distance = tripStartDate - now;

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  if (distance === 0) {
  if (distance <= 0) {
    daysEl.textContent = '0';
    hoursEl.textContent = '0';
    minutesEl.textContent = '0';
    secondsEl.textContent = '0';
    showCelebrationState();
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = String(days);
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
const countdownInterval = setInterval(() => {
  updateCountdown();

  const now = new Date();
  if (tripStartDate - now <= 0) {
    clearInterval(countdownInterval);
  }
}, 1000);

// Autumn leaves animation setup
function renderAutumnLeaves() {
  const leavesContainer = document.getElementById('autumn-leaves');
  if (!leavesContainer) return;

  const isMobile = window.matchMedia('(max-width: 760px)').matches;
  const leafCount = isMobile ? 10 : 16;

  leavesContainer.innerHTML = '';

  for (let i = 0; i < leafCount; i += 1) {
    const leaf = document.createElement('span');
    leaf.className = 'leaf';
    leaf.style.left = `${Math.random() * 100}%`;
    leaf.style.animationDuration = `${8 + Math.random() * 8}s`;
    leaf.style.animationDelay = `${Math.random() * 7}s`;
    leaf.style.opacity = `${0.14 + Math.random() * 0.14}`;
    leaf.style.transform = `scale(${0.8 + Math.random() * 0.8})`;
    leavesContainer.appendChild(leaf);
  }
}

// Soft reveal animations when sections scroll into view
function initScrollReveal() {
  const revealTargets = document.querySelectorAll('.section, .card, figure');
  revealTargets.forEach((el) => el.classList.add('reveal-on-scroll'));

  if (!('IntersectionObserver' in window)) {
    revealTargets.forEach((el) => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: '0px 0px -6% 0px' }
  );

  revealTargets.forEach((el) => observer.observe(el));
}

renderAutumnLeaves();
initScrollReveal();
setInterval(updateCountdown, 1000);
