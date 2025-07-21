export default function home() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Welcome!</h1>
    <ul>
      <li><a href="#/challenge/1/drum-kit">Challenge 1</a></li>
      <li><a href="#/challenge/2/clock">Challenge 2</a></li>
    </ul>
  `;
  return div;
}
