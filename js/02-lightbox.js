import { galleryItems } from './gallery-items.js';
// Change code below this line

const ref = {
  gallery: document.querySelector('.gallery'),
};

const render = arg => {
  //   ref.gallery.innerHTML = '';
  ref.gallery.insertAdjacentHTML('beforeend', arg);
};

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}"><img class="gallery__image" alt="${description}"  src="${preview}"></a>`
  )
  .join('');

render(markup);

const handleImage = e => {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  e.preventDefault();
  //    gallery;
  const gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
  gallery.on('shown.simpleLightbox');
};

ref.gallery.addEventListener('click', handleImage);
