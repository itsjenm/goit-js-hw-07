import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryGrid = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (image) => `<div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
        <img 
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
        />
    </a>
</div>`
  )
  .join("");

console.log(markup);

galleryGrid.innerHTML = markup;

galleryGrid.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target.dataset.source);
  basicLightbox
    .create(
      `
    <img width="1400" height="900" src="${event.target.dataset.source}">`
    )
    .show();
});

console.log(galleryItems);
