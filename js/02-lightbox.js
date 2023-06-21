import { galleryItems } from "./gallery-items.js";

const imagesGallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (
      galleryItem
    ) => `<li><a class="gallery__item" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
  </a></li>`
  )
  .join("");
imagesGallery.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
