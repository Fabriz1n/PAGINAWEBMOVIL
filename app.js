document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  let currentSlide = 0;

  function updateSlide() {
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
  }

  document.querySelector('.next')?.addEventListener('click', nextSlide);
  document.querySelector('.prev')?.addEventListener('click', prevSlide);

  setInterval(nextSlide, 5000); // auto

  // RESPONSIVE ajuste en resize
  window.addEventListener('resize', updateSlide);
  updateSlide();

  // MENÚ RESPONSIVE
  document.querySelector('.hamburger')?.addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('active');
  });

  const toggle = document.querySelector('.dropdown-toggle');
  const submenu = document.querySelector('.has-dropdown .dropdown');

  toggle?.addEventListener('click', function (e) {
    e.preventDefault();
    submenu?.classList.toggle('show');
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) {
      submenu?.classList.remove('show');
    }
  });
});
