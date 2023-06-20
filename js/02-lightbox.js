import { galleryItems } from "./gallery-items.js";

const imagesGallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (galleryItem) => `<a class="gallery__item" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
  </a>
  `
  )
  .join("");
imagesGallery.insertAdjacentHTML("beforeend", markup);
