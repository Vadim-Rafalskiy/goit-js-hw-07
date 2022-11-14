import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

const getItemTemplate = ({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}"><img class="gallery__image" alt="${description}"  src="${preview}"></a>`;

const render = () => {
  const lis = galleryItems.map(getItemTemplate);

  refs.gallery.innerHTML = '';
  refs.gallery.insertAdjacentHTML('beforeend', lis.join(''));
};

render();

const handleClick = e => {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  e.preventDefault();
  //    gallery;
  const gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
  gallery.on('shown.simpleLightbox');
};

refs.gallery.addEventListener('click', handleClick);
refs.gallery.removeEventListener('click', handleClick);
