import { galleryItems } from './gallery-items.js';
// Change code below this line

const ref = {
  gallery: document.querySelector('.gallery'),
};

const render = arg => {
  ref.gallery.innerHTML = '';
  ref.gallery.insertAdjacentHTML('beforeend', arg);
};

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" alt="${description}" data-sourse="${original}" src="${preview}"></a></div>`
  )
  .join('');

render(markup);

let instance;
const handleImage = e => {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  e.preventDefault();
  instance = basicLightbox.create(`
      <img src="${e.target.dataset.sourse}" width="800" height="600">
  `);
  instance.show();
};

const handleImageClose = e => {
  if (e.code == 'Escape' && basicLightbox.visible()) {
    instance.close();
  }
};

ref.gallery.addEventListener('click', handleImage);
ref.gallery.addEventListener('keydown', handleImageClose);
