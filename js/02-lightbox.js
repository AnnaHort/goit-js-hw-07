import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1. створення розмітки + 
const galleryEl = document.querySelector('.gallery');


const galleryMarkUp = galleryItems.map(
    ({preview, original, description}) => 
    `<li class = "gallery__item">
    <a class = "gallery__link" href="${original}">
    <img class = "gallery__image"
    src = "${preview}"
    alt = "${description}">
    </a>
    </li>`)
  .join('');
  galleryEl.insertAdjacentHTML("beforeend", galleryMarkUp);

    // бібліотека
const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    showCounter: false,
 });
 console.log(lightbox);

// console.log(galleryItems);


