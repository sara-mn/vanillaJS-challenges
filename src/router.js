
const routes = {
  '/': './views/home',
  '/challenge/1/drum-kit': './views/challenge1',
  '/challenge/Optimized/1/drum-kit': './views/challenge1 - Optimized version with the help of GBT chat',
  '/challenge/2/clock': './views/challenge2',
  '/challenge/3/playing-with-CSS-Variables': './views/challenge3',
  '/challenge/4/Array-Cardio-Day-1': './views/challenge4',
  //
};

export function router() {
  const path = location.hash.slice(1) || '/';
  const viewPath = routes[path];

  const app = document.getElementById('app');
  app.innerHTML = '';

  if (!viewPath) {
    app.innerHTML = '<h2>404 Not Found</h2>';
    return;
  }

  try {
    // Load HTML
    fetch(`${viewPath}/index.html`).then(res => res.text()).then((html) => {
      app.innerHTML = html;

      // Load CSS
      const cssPath = `${viewPath}/style.css`;
      const styleEl = document.createElement('link');
      styleEl.rel = 'stylesheet';
      styleEl.href = cssPath;
      document.head.appendChild(styleEl);

      // Load JS
      const scriptPath = `${viewPath}/script.js`;
      const scriptEl = document.createElement('script');
      scriptEl.src = scriptPath;
      scriptEl.type = 'module';
      document.body.appendChild(scriptEl);
    });

  } catch (err) {
    console.error('Error loading view:', err);
    app.innerHTML = '<h2>Error loading view</h2>';
  }
}
