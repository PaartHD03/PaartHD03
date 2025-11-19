// theme switching and small UI interactions
(function () {
  const root = document.documentElement;
  const body = document.body;
  const themeButtons = document.querySelectorAll('[data-theme]');
  const defaultTheme = 'darkred';

  // Apply saved theme
  const saved = localStorage.getItem('paart_theme');
  const initial = saved || defaultTheme;
  applyTheme(initial);

  // hook buttons
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const t = btn.getAttribute('data-theme');
      applyTheme(t);
      localStorage.setItem('paart_theme', t);
    });
  });

  function applyTheme(name) {
    document.body.classList.remove('theme-darkred', 'theme-neon', 'theme-minimal');
    if (name === 'darkred') document.body.classList.add('theme-darkred');
    if (name === 'neon') document.body.classList.add('theme-neon');
    if (name === 'minimal') document.body.classList.add('theme-minimal');
    // highlight active button
    document.querySelectorAll('[data-theme]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-theme') === name);
    });
  }

})();
