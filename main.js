const grid = document.getElementById('img-grid');
const count = 62;

for (let i = 0; i < count; i++) {
  grid.insertAdjacentHTML('beforeend', `
    <button class="grid-img">
      <img src="bliss.jpg" alt="test">
      <a href="bliss.jpg" class="save-btn" download>Save</a>
    </button>
  `);
}