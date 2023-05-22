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
        data-source=${original}
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

  // Open modal window with basicligthbox
  const instance = basicLightbox.create(
    ` <img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();

  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
    };
  }
}



// // Open modal window with basicligthbox
//         const instance = basicLightbox.create (`
//         <img src="${event.target.dataset.source}" width="800" height="600">
//         `)
//         instance.show();

// // Close modal window with basicligthbox

//         gallery.addEventListener('keydown', (event) =>{
//             if (event.code === 'Escape') {
//                 instance.close();
//             }
//         });
//     };
