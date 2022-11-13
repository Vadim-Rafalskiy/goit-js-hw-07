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
      `<div class="gallery__item"><a class="gallery__link"><img class="gallery__image" alt="${description}" data-action="${original}" src="${preview}"></a></div>`
  )
  .join('');

render(markup);

const handleImage = e => {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.action}" width="800" height="600">
  `);
  instance.show();
};

ref.gallery.addEventListener('click', handleImage);
