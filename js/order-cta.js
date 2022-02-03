const orderCta = document.querySelector('.order-cta');

const [ctaBookmarkButton, ctaBuyButton] = orderCta.children;

const orderModal = document.querySelector('.order-form-modal');
const orderModalOverlay = document.querySelector('.overlay');

ctaBuyButton.addEventListener('click', function () {
  orderModal.classList.add('is-open');
  orderModalOverlay.classList.add('is-active');
});

orderModalOverlay.addEventListener('click', function () {
  orderModal.classList.remove('is-open');
  orderModalOverlay.classList.remove('is-active');
});
