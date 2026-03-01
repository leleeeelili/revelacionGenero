// ================================
// ⏳ CONTADOR REGRESIVO
// ================================
const eventDate = new Date("2026-03-14T16:00:00").getTime();

const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  if (countdownEl) {
    countdownEl.innerHTML =
      `${d} días ${h} hrs ${m} min ${s} seg`;
  }
}, 1000);


// ================================
// 🌀 PARALLAX CON SCROLL
// ================================
const parallaxElements = document.querySelectorAll(".parallax");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  parallaxElements.forEach(el => {
    const speed = el.dataset.speed || 0.3;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});


// ================================
// 👶 REVEAL AL HACER SCROLL
// ================================
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (top < triggerPoint) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);