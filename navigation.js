
(() => {
  const sections = Array.from(document.querySelectorAll('[data-view]'));
  const shell = document.getElementById('case-shell');
  const links = Array.from(document.querySelectorAll('.stepper a'));
  function show() {
    const requested = location.hash.slice(1);
    const view = sections.some(section => section.id === requested) ? requested : 'cartera';
    shell.hidden = !links.some(link => link.hash === '#' + view);
    sections.forEach(section => { section.hidden = section.id !== view; });
    links.forEach(link => {
      if (link.hash === '#' + view) link.setAttribute('aria-current', 'step');
      else link.removeAttribute('aria-current');
    });
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', show);
  show();
})();
