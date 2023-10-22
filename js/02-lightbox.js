import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// Change code below this line
let galleryContainer = document.querySelector(".gallery");

function CreateItemFromTemplate(galleryItem) {
    return `
            <li class="gallery__item">
                <a class="gallery__link" href=${ galleryItem.original }>
                    <img class="gallery__image" src=${ galleryItem.original } alt=${ galleryItem.description } title=${ galleryItem.description }/>
                </a>
            </li>
            `
}


let galleryMarkup = galleryItems.map(CreateItemFromTemplate).join("");
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

(function() {
    var $gallery = new SimpleLightbox('.gallery a', {
        captionDelay: 250
    });
})();