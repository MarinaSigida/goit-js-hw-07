import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems.map(({ preview, original, description }) => {
  return `
    <li class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        alt=${description}
      />
    </a>
  </li>
  `;
});

console.log(galleryItem);

gallery.insertAdjacentHTML("beforeend", galleryItem.join(""));

gallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  // Modal window with simple ligthbox
  const lightbox = new SimpleLightbox(".gallery a", {
    // captionType: text,
    captionsData: 'alt',
    captionPosition:'bottom',
    captionsDelay: 250,
  });
}
