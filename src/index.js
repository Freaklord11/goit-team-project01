(() => {
  const refs = {
    openOrderModalBtn: document.querySelector(".order-modal-open"),
    closeOrderModalBtn: document.querySelector(".order-modal-close"),
    orderModal: document.querySelector(".order-modal"),
    openSubmitModalBtn: document.querySelector(".yourordersubmit"),
    closeSubmitModalBtn: document.querySelector(".submit-modal-close"),
    submitModal: document.querySelector(".submit-modal"),
  };

  refs.openOrderModalBtn.addEventListener("click", toggleOrderModal);
  refs.closeOrderModalBtn.addEventListener("click", toggleOrderModal);
  refs.openSubmitModalBtn.addEventListener("click", submitAndToggleModals);
  refs.closeSubmitModalBtn.addEventListener("click", toggleSubmitModal);

  function toggleOrderModal() {
    refs.orderModal.classList.toggle("is-hidden");
  }

  function toggleSubmitModal() {
    refs.submitModal.classList.toggle("is-hidden");
  }

  function submitAndToggleModals() {
    // Here you can perform any necessary actions related to form submission
    // For now, let's just close the submit-modal and open the order-modal
    toggleSubmitModal();
    toggleOrderModal();
  }
})();
