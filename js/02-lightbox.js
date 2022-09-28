import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const item = ({preview, original, description}) => `<a class="gallery__item" href='${original}'>
  <img class="gallery__image"
      src='${preview}'
      alt='${description}' />
</a>`
const imgs = galleryItems.map(img => item(img)).join('');
gallery.insertAdjacentHTML('beforeend', imgs);

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
 });

gallery.next(); 


console.log(galleryItems);
console.log(gallery);