(() => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const desktopMenu = document.querySelector('.desktop-menu');
  const openMenuBtn = document.querySelector('.mobile-btn--open');
  const closeMenuBtn = document.querySelector('.mobile-btn--close');
  const bodyScroll = document.querySelector('.body');
  const sectionWorks = document.querySelector('.works');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-hidden');
    openMenuBtn.classList.toggle('is-hidden');
    bodyScroll.classList.toggle('scroll');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;

    desktopMenu.classList.remove('visually-hidden');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  window.matchMedia('(max-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    desktopMenu.classList.add('visually-hidden');
  });

  window.matchMedia('(max-width: 1199px)').addEventListener('change', e => {
    if (!e.matches) return;
    sectionWorks.classList.add('is-hidden');
  });
  window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
    if (!e.matches) return;
    sectionWorks.classList.remove('is-hidden');
  });
})();

// // let balance = 10000;
// // const payment = Number(prompt('Введите сумму заказа'));

// // console.log(`Общая стоимость заказа ${payment} грн., проверяем кол-во кредитов`);

// // if(payment <= balance) {
// //   console.log(`На счету осталось ${balance - payment} грн.`);
// // } else {
// //   console.log('На счету недостаточно средств для выплонения операции');
// // }

// // console.log('Операция завершена');

// const totalSpent = 101;
// let payment = 500;
// let discount = 0;

// if (totalSpent > 100 && totalSpent < 1000) {
//   discount = 2;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   discount = 5;
// } else if (totalSpent >= 5000) {
//   discount = 10;
// } 

// console.log(`Оформляем заказ на сумму ${payment - (payment/100*discount)},ваша скидка ${discount}%`);
