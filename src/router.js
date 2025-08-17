// import home from './views/home.js';
// import challenge1 from './views/challenge1.js';
// import challenge2 from './views/challenge2.js';

// const routes = {
//   '/': home,
//   '/challenge/1/drum-kit': challenge1,
//   '/challenge/2/clock': challenge2,
//   //
// };
//
// export function router() {
//   const path = location.hash.slice(1) || '/';
//   const view = routes[path];
//
//   const app = document.getElementById('app');
//   app.innerHTML = '';
//
//   if (view) {
//     app.appendChild(view());
//   } else {
//     app.innerHTML = '<h2>404 Not Found</h2>';
//   }
// }

const routes = {
  '/': 'views/home',
  '/challenge/1': 'views/challenge1',
  // ...
};

export async function router() {
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
    const html = await fetch(`${viewPath}/index.html`).then(res => res.text());
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

  } catch (err) {
    console.error('Error loading view:', err);
    app.innerHTML = '<h2>Error loading view</h2>';
  }
}
