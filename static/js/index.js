(function () {
  'use strict';

  function copyBibTeX() {
    var entry = document.getElementById('bibtex-entry');
    var button = document.querySelector('[data-copy-bibtex]');
    if (!entry || !button) return;

    var text = entry.innerText.trim();
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      button.textContent = 'Select manually';
      window.setTimeout(function () {
        button.textContent = 'Copy';
      }, 1800);
      return;
    }

    navigator.clipboard.writeText(text).then(function () {
      var previous = button.textContent;
      button.textContent = 'Copied';
      window.setTimeout(function () {
        button.textContent = previous;
      }, 1600);
    }).catch(function () {
      button.textContent = 'Select manually';
      window.setTimeout(function () {
        button.textContent = 'Copy';
      }, 1800);
    });
  }

  function setupScrollToTop() {
    var sentinel = document.getElementById('top-sentinel');
    var button = document.getElementById('scroll-to-top');
    if (!sentinel || !button || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      button.classList.toggle('is-visible', !entries[0].isIntersecting);
    });
    observer.observe(sentinel);
    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function setupBenchmarkCarousel() {
    var carousel = document.getElementById('benchmark-carousel');
    if (!carousel) return;

    var slides = Array.prototype.slice.call(carousel.querySelectorAll('[data-slide]'));
    var dots = Array.prototype.slice.call(carousel.querySelectorAll('[data-carousel-dot]'));
    var current = carousel.querySelector('[data-carousel-current]');
    var activeIndex = 0;

    function showSlide(nextIndex) {
      activeIndex = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, index) {
        var active = index === activeIndex;
        slide.classList.toggle('is-active', active);
        slide.hidden = !active;
        slide.setAttribute('aria-hidden', String(!active));
      });
      dots.forEach(function (dot, index) {
        var active = index === activeIndex;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-selected', String(active));
      });
      if (current) current.textContent = String(activeIndex + 1);
    }

    var previous = carousel.querySelector('[data-carousel-prev]');
    var next = carousel.querySelector('[data-carousel-next]');
    if (previous) previous.addEventListener('click', function () { showSlide(activeIndex - 1); });
    if (next) next.addEventListener('click', function () { showSlide(activeIndex + 1); });
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        showSlide(Number(dot.getAttribute('data-carousel-dot')));
      });
    });
    carousel.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') showSlide(activeIndex - 1);
      if (event.key === 'ArrowRight') showSlide(activeIndex + 1);
    });
    showSlide(0);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var copyButton = document.querySelector('[data-copy-bibtex]');
    if (copyButton) copyButton.addEventListener('click', copyBibTeX);
    setupScrollToTop();
    setupBenchmarkCarousel();
  });
}());
