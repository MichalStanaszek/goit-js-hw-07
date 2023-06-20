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

let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {});

class ModalImage extends SimpleLightbox {
  constructor({ elements, options }) {
    super(elements);
    super(options);
    this.options = Object.assign(this.defaultOptions, options);
    this.isPassiveEventsSupported = this.checkPassiveEventsSupport();

    if (typeof elements === "string") {
      this.initialSelector = elements;
      this.elements = Array.from(document.querySelectorAll(elements));
    } else {
      this.elements =
        typeof elements.length !== "undefined" && elements.length > 0
          ? Array.from(elements)
          : [elements];
    }

    this.relatedElements = [];

    this.transitionPrefix = this.calculateTransitionPrefix();
    this.transitionCapable = this.transitionPrefix !== false;
    this.initialLocationHash = this.hash;

    //     if (this.options.captions && captionContainer) {
    //       if (this.options.captionType === "data") {
    //         captionText = captionContainer.dataset[this.options.captionsData];
    //       } else if (this.options.captionType === "text") {
    //         captionText = captionContainer.innerHTML;
    //       } else {
    //         captionText = captionContainer.getAttribute(this.options.captionsData);
    //       }
    //     }
  }
}
