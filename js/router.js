import home from './views/home.js';
import challenge1 from './views/challenge1.js';
import challenge2 from './views/challenge2.js';

const routes = {
  '/': home,
  '/challenge/1/drum-kit': challenge1,
  '/challenge/2/clock': challenge2,
  //
};

export function router() {
  const path = location.hash.slice(1) || '/';
  const view = routes[path];

  const app = document.getElementById('app');
  app.innerHTML = '';

  if (view) {
    app.appendChild(view());
  } else {
    app.innerHTML = '<h2>404 Not Found</h2>';
  }
}
