import { galleryItems } from "./gallery-items.js";

const imagesGallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (galleryItem) => `<div class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"

      />
    </a>
  </div>`
  )
  .join("");
imagesGallery.insertAdjacentHTML("beforeend", markup);

// teraz czas podpiąć bibliotekę czyli punkt 3
