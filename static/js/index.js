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
    if (!window.bulmaCarousel) return;
    window.bulmaCarousel.attach('#benchmark-carousel', {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      autoplay: false,
      pagination: true,
      navigation: true
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var copyButton = document.querySelector('[data-copy-bibtex]');
    if (copyButton) copyButton.addEventListener('click', copyBibTeX);
    setupScrollToTop();
    setupBenchmarkCarousel();
  });
}());
