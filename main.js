const grid = document.getElementById('img-grid');
const count = 40;

const images = Array.from({ length: 8 }, (_, i) => `${i + 1}.png`);
const mediaPath = 'media/';

for (let i = 0; i < count; i++) {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const src = mediaPath + randomImage;

  grid.insertAdjacentHTML('beforeend', `
    <button class="grid-img">
      <img src="${src}" alt="test">
    </button>
  `);
}