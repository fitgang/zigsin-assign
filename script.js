// DOM elements
const imageElements = document.querySelectorAll(".img"),
  largeImageContainer = document.getElementById("large-image-container"),
  closeBtn = largeImageContainer.querySelector("button");

imageElements.forEach(elem => elem.addEventListener("click", showLargeImage));
closeBtn.addEventListener("click", hideLargeImage);

function showLargeImage(e) {
  // Current image element
  const imageElem = e.target;

  // Corresponding large image element with the same dimensions
  let largeImageElem = largeImageContainer.querySelector(`img[src='${imageElem.src.slice(0,-4)}l.jpg']`);
  // If large image doesn't exist
  if (!largeImageElem) {
    largeImageElem = createLargeImageAndPutInDOM(imageElem)
  }
  // Display image
  displayLargeImage(largeImageElem);
}

function createLargeImageAndPutInDOM(smallImage) {
  const imageElem = document.createElement("img");
  imageElem.src = `${smallImage.src.slice(0,-4)}l.jpg`;
  imageElem.className = "large-image";
  largeImageContainer.append(imageElem);
  return imageElem
}


function displayLargeImage(largeImageElem) {
  // Display large image
  largeImageElem.classList.add("show");

  // Make the image container visible
  largeImageContainer.style.display = "initial";
  setTimeout(() => {
    largeImageContainer.style.opacity = "1";
    largeImageContainer.style.transform = "scale(1)";
  }, 1)
}

function hideLargeImage() {
  largeImageContainer.style.opacity = null;
  largeImageContainer.style.transform = null;
  setTimeout(() => {
    largeImageContainer.style.display = null;

    largeImageContainer.querySelector("img.show").classList.remove("show");
  }, 500);
}