const grid = document.getElementById('img-grid');
const count = 62;

// Array containing your image filenames
const images = ['bliss.jpg', 'ocean.jpg'];

for (let i = 0; i < count; i++) {
  // Choose a random index (either 0 or 1)
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  grid.insertAdjacentHTML('beforeend', `
    <button class="grid-img">
      <img src="${randomImage}" alt="test">
      <a href="${randomImage}" class="save-btn" download>Save</a>
    </button>
  `);
}
