import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);
const gallery = document.querySelector(".gallery");

const pictures = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li>
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
     </li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", pictures);

gallery.addEventListener("click", onClickPictures);

function onClickPictures(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
}

let qwe = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
qwe.on("show.simpleLightbox", function () {});
