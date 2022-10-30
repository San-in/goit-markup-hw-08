(() => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const desktopMenu = document.querySelector('.desktop-menu');
    const openMenuBtn = document.querySelector('.mobile-btn--open');
    const closeMenuBtn = document.querySelector('.mobile-btn--close');
  
    const toggleMenu = () => {
      const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-hidden');


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
      desktopMenu.classList.remove('is-hidden');
      openMenuBtn.classList.toggle('is-hidden');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
    window.matchMedia('(max-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
          desktopMenu.classList.toggle('is-hidden');
          openMenuBtn.classList.remove('is-hidden');
    });
  })();

