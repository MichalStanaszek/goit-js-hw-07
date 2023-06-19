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

const handleEscKey = (event) => {
  if (event.key === "Escape") instance.close();
};

imagesGallery.addEventListener("click", (event) => {
  event.preventDefault();
  const handleEscKey = (event) => {
    if (event.key === "Escape") instance.close();
  };
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: () => {
        document.addEventListener("keydown", handleEscKey);
      },
      onClose: () => {
        document.removeEventListener("keydown", handleEscKey);
      },
    }
  );
  instance.show();
});
