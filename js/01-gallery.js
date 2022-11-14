import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

const getItemTemplate = ({ preview, original, description }) =>
  `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" alt="${description}" data-sourse="${original}" src="${preview}"></a></div>`;

const render = () => {
  const lis = galleryItems.map(getItemTemplate);

  refs.gallery.innerHTML = '';
  refs.gallery.insertAdjacentHTML('beforeend', lis.join(''));
};

render();

const handleKeydown = e => {
  if (e.code == 'Escape' && basicLightbox.visible()) {
    instance.close();
  }
};

let instance;

const handleClick = e => {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  refs.gallery.addEventListener('keydown', handleKeydown);

  e.preventDefault();
  instance = basicLightbox.create(`
  <img src="${e.target.dataset.sourse}" width="800" height="600">
  `);
  instance.show();
};

refs.gallery.removeEventListener('keydown', handleKeydown);

refs.gallery.addEventListener('click', handleClick);
