import { galleryItems } from './gallery-items.js';

// Change code below this line
let galleryContainer = document.querySelector(".gallery");

function CreateItemFromTemplate(galleryItem) {
    return `
            <li class="gallery__item">
                <a class="gallery__link" href=${ galleryItem.original }>
                <img
                    class="gallery__image"
                    src=${ galleryItem.preview }
                    data-source=${ galleryItem.original }
                    alt=${ galleryItem.description }
                />
                </a>
            </li>
        `
}


let galleryMarkup = galleryItems.map(CreateItemFromTemplate).join("");
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup)

galleryContainer.addEventListener("click", (event) => {
    event.preventDefault();

    const instance = basicLightbox
    .create(`<img src=${event.target.dataset.source} width="800" height="600">`,
    {
        closable : true,
        onShow : () => {
            console.log("add");
            document.addEventListener("keydown", OnEscapeKeyDown)
        }
    });  
    
    function OnEscapeKeyDown(event) {
        console.log(event.code);
        if (event.code === "Escape") {
            instance.close(() => { document.removeEventListener("keydown", OnEscapeKeyDown); });
        }
    }              

    instance.show();
});



console.log(galleryItems);
