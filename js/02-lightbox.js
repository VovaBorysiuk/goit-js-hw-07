import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const createGalleryItem = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item">
    <a class = "gallery__link" href="${original}" >
      <img class="gallery__image" src="${preview}"  alt="${description}" >
    </a>
  </li>`
  )
  .join("");

galleryList.innerHTML = createGalleryItem;
galleryList.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}

