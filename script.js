// ================================
// ⏳ CONTADOR REGRESIVO
// ================================
const eventDate = new Date('2026-03-14T16:00:00').getTime();
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


// ☁️ PARALLAX GLOBAL CONTINUO SOLO PARA NUBES
const clouds = document.querySelectorAll(".cloud");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  clouds.forEach(cloud => {
    const speed = parseFloat(cloud.dataset.speed) || 0.1;
    cloud.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Ejecutar una vez al cargar
window.addEventListener("load", () => {
  const scrolled = window.pageYOffset;

  parallaxElements.forEach(el => {
    const speed = parseFloat(el.dataset.speed) || 0.15;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});