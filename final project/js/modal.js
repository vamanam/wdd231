// modal.js

export function openModal(contentHtml) {
  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal-content");
  modalContent.innerHTML = contentHtml;
  modal.classList.add("open");
  document.body.classList.add("no-scroll");
}

export function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  modal.querySelector(".modal-close").addEventListener("click", closeModal);

  // Optional: close modal when clicking outside content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
