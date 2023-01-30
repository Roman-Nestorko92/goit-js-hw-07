import { galleryItems } from "./gallery-items.js";
// Change code below this line
//console.log(basicLightbox)

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const pictures = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li>
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
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
  const clickImg = e.target.dataset.source;
  basicLightbox.create(`<img src="${clickImg}">`).show();
}
