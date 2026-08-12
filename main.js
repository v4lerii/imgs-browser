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

const previewImg = document.querySelector('#preview-img > img');
const saveBtn = document.querySelector('#preview-img .img-btn');

grid.addEventListener('click', (e) => {
  const btn = e.target.closest('.grid-img');
  if (!btn) return;

  const clickedImg = btn.querySelector('img');
  previewImg.src = clickedImg.src;
  saveBtn.href = clickedImg.src;
});