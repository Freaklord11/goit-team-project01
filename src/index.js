//OrderModal
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

    toggleSubmitModal();
    toggleOrderModal();
  }
})();

// //send modal
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector(".send-modal-open"),
//     closeModalBtn: document.querySelector(".submit-modal-close"),
//     modal: document.querySelector(".submit-modal"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

//mobile menu
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

//change icon
let navToggle = document.querySelector('.nav-toggle')
let bars = document.querySelectorAll('.bar')

function toggleHamburger(e) {
  bars.forEach(bar => bar.classList.toggle('x'))
}

navToggle.addEventListener('click', toggleHamburger)