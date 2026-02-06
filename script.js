(() => {
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeBtn');
  const printBtn = document.getElementById('printBtn');
  const year = document.getElementById('year');

  year.textContent = new Date().getFullYear();

  // Theme persistence
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
  }

  const toggleTheme = () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  themeBtn?.addEventListener('click', toggleTheme);

  printBtn?.addEventListener('click', () => window.print());
})();
