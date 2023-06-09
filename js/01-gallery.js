import { galleryItems } from './gallery-items.js';

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const galleryEl = document.querySelector('.gallery');

const galleryMarkUp = galleryItems.map(
    ({preview, original, description}) => 
    `<li class = "gallery__item">
    <a class = "gallery__link" href="${original}">
    <img class = "gallery__image"
    src = "${preview}"
    data-source="${original}"
    alt = "${description}">
    </a>
    </li>`)
  .join('');
  galleryEl.insertAdjacentHTML("beforeend", galleryMarkUp);

//   2. Реалізація делегування на ul.gallery і отримання url великого зображення.
const handleClick = (evt) => {
    evt.preventDefault();
    const imgSwatch = evt.target.classList.contains('gallery__image');
    if(!imgSwatch) {
return
    };
    const dataOriginalUrl = evt.target.dataset.source;
    const originalCurentItem = galleryItems.find(({original}) => original === dataOriginalUrl);
  console.log(originalCurentItem.original);
 
  // Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
const instance = basicLightbox.create(`
<div>
    <img src ="${originalCurentItem.original}" alt = "${originalCurentItem.description}">
</div>
`);
instance.show();
}
galleryEl.addEventListener('click', handleClick);
console.log(galleryItems);

