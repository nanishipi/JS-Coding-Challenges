// Variables

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Function to open model
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Function to close model
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Adds click event to the buttons
btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

// Adds event to close the modals
btnCloseModal.addEventListener("click", closeModal);

// Adds event to close the modals by clicking overlay
overlay.addEventListener("click", closeModal);

// Adds event to close the model by pressing ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
