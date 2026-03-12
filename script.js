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
setInterval(updateCountdown, 1000);
