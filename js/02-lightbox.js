import { galleryItems } from "./gallery-items.js";
// Change code below this line

// create and render markup from the galleryItems data array
const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (image) => `
    <a class="gallery__item" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>`
  )
  .join("");

galleryList.innerHTML = markup;

// Add event listener
galleryList.addEventListener("click", (event) => {
  event.stopPropagation();
  event.preventDefault();
  lightbox.on("shown.simplelightbox");
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

console.log(galleryItems);
