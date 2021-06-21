"use strict";
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `The "${selection}" is not a valid selector! Please enter again.`
  );
}

// Gallery Class
class Gallery {
  constructor(element) {
    // select images
    this.container = element;
    this.list = [...element.querySelectorAll(".img")];
    // select modal content
    this.modal = getElement(".modal");
    this.mainImg = getElement(".main-img");
    this.heading = getElement(".heading");
    this.modalImages = getElement(".modal-images");
    // select buttons
    this.closeBtn = getElement(".close-btn");
    this.nextBtn = getElement(".next-btn");
    this.prevBtn = getElement(".prev-btn");
    // bind functions
    this.closeModal = this.closeModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.setModalImage = this.setModalImage.bind(this);
    // container event
    this.container.addEventListener(
      "click",
      function (e) {
        if (e.target.classList.contains("img")) {
          this.openModal(e.target, this.list);
        }
      }.bind(this)
    );
  }

  // class functions
  openModal(selectedImage, list) {
    this.setMainImage(selectedImage);
    // change all images inside modal container
    this.modalImages.innerHTML = list
      .map(function (image) {
        return `<img src="${image.src}" data-id="${image.dataset.id}" 
      class="${
        image.dataset.id === selectedImage.dataset.id
          ? `modal-img selected`
          : `modal-img`
      }" title="${image.title}">`;
      })
      .join("");
    this.modal.classList.add("open");
    this.closeBtn.addEventListener("click", this.closeModal);
    this.nextBtn.addEventListener("click", this.nextImage);
    this.prevBtn.addEventListener("click", this.prevImage);
    this.modalImages.addEventListener("click", this.setModalImage);
  }
  prevImage() {
    const current = this.modalImages.querySelector(".selected");
    const prev =
      current.previousElementSibling || this.modalImages.lastElementChild;
    current.classList.remove("selected");
    prev.classList.add("selected");
    this.setMainImage(prev);
  }
  nextImage() {
    const current = this.modalImages.querySelector(".selected");
    const next =
      current.nextElementSibling || this.modalImages.firstElementChild;
    current.classList.remove("selected");
    next.classList.add("selected");
    this.setMainImage(next);
  }
  closeModal() {
    this.modal.classList.remove("open");
    this.closeBtn.removeEventListener("click", this.closeModal);
    this.nextBtn.removeEventListener("click", this.nextImage);
    this.prevBtn.removeEventListener("click", this.prevImage);
    this.modalImages.removeEventListener("click", this.setModalImage);
  }
  setModalImage(e) {
    this.setMainImage(e.target);
    const current = getElement(".selected");
    current.classList.remove("selected");
    e.target.classList.add("selected");
  }
  setMainImage(selectedImage) {
    this.mainImg.src = selectedImage.src;
    this.heading.textContent = selectedImage.title;
  }
}

// Objects created
const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
