
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const listGallery = document.querySelector('.gallery');

const itemGallery = galleryItems
  .map(({preview, original, description}) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `)
  .join('');

listGallery.insertAdjacentHTML('beforeend', itemGallery);

const lightboxOptions = {
  captions: true,
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
};

const lightbox = new SimpleLightbox('.gallery a', lightboxOptions);

