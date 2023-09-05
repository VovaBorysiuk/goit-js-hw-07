import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

const createGalleryItem = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item">
    <a class = "gallery__link" href="${original}" >
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" >
    </a>
  </li>`
  )
  .join("");

galleryList.innerHTML = createGalleryItem;

galleryList.addEventListener("click", onImageClick);
function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const largeImageUrl = event.target.dataset.source
  const instance = basicLightbox.create(
    `<img src="${largeImageUrl}" width="800" height="600" >`);
  instance.show();

  galleryList.addEventListener("keydown", (event) => {
    
    if (event.code === "Escape") {
      instance.close();
    }
  })
}

