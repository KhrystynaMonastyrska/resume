(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-modal-open]'),
    closeModalBtn: document.querySelector('[data-mobile-modal-close]'),
    modal: document.querySelector('[data-mobile-modal]'),
    openBurger: document.querySelector('[data-burger-open]'),
    burger: document.querySelector('[data-burger]'),
    ukraine: document.querySelector('[data-ukraine]'),
    austria: document.querySelector('[data-austria]'),
    openUkraine: document.querySelector('[data-open-ukraine]'),
    openAustria: document.querySelector('[data-open-austria]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openBurger.addEventListener('click', toggleBurger);
  refs.openUkraine.addEventListener('click', toggleContactsUkraine);
  refs.openAustria.addEventListener('click', toggleContactsAustria);

  function toggleModal() {
    refs.modal.classList.toggle('active');
  }
  function toggleBurger() {
    refs.burger.classList.toggle('is-active');
  }

  function toggleContactsUkraine() {
    refs.ukraine.classList.toggle('is-hidden');
  }
  function toggleContactsAustria() {
    refs.austria.classList.toggle('is-hidden');
  }
})();

(() => {
  const refsModal = {
    openModal1Btn: document.querySelector('[data-modal1-open]'),
    openModal2Btn: document.querySelector('[data-modal2-open]'),
    openModal3Btn: document.querySelector('[data-modal3-open]'),
    openModal4Btn: document.querySelector('[data-modal4-open]'),
    closeModal1Btn: document.querySelector('[data-modal-close1]'),
    closeModal2Btn: document.querySelector('[data-modal-close2]'),
    closeModal3Btn: document.querySelector('[data-modal-close3]'),
    closeModal4Btn: document.querySelector('[data-modal-close4]'),
    modal1: document.querySelector('[data-modal1]'),
    modal2: document.querySelector('[data-modal2]'),
    modal3: document.querySelector('[data-modal3]'),
    modal4: document.querySelector('[data-modal4]'),
    backdrop: document.querySelector('.backdrop'),
    body: document.querySelector('[data-scrol-modal]'),
  };

  refsModal.openModal1Btn.addEventListener('click', toggleModal1);
  refsModal.closeModal1Btn.addEventListener('click', toggleModal1);
  refsModal.openModal2Btn.addEventListener('click', toggleModal2);
  refsModal.closeModal2Btn.addEventListener('click', toggleModal2);
  refsModal.openModal3Btn.addEventListener('click', toggleModal3);
  refsModal.closeModal3Btn.addEventListener('click', toggleModal3);
  refsModal.openModal4Btn.addEventListener('click', toggleModal4);
  refsModal.closeModal4Btn.addEventListener('click', toggleModal4);

  function toggleModal1() {
    refsModal.modal1.classList.toggle('is-hidden');
    refsModal.body.classList.toggle('no-scroll');
  }
  function toggleModal2() {
    refsModal.modal2.classList.toggle('is-hidden');
    refsModal.body.classList.toggle('no-scroll');
  }
  function toggleModal3() {
    refsModal.modal3.classList.toggle('is-hidden');
    refsModal.body.classList.toggle('no-scroll');
  }
  function toggleModal4() {
    refsModal.modal4.classList.toggle('is-hidden');
    refsModal.body.classList.toggle('no-scroll');
  }
})();
