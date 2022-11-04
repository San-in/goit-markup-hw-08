(() => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const desktopMenu = document.querySelector('.desktop-menu');
    const openMenuBtn = document.querySelector('.mobile-btn--open');
    const closeMenuBtn = document.querySelector('.mobile-btn--close');
    const bodyScroll = document.querySelector('.body');

  
    const toggleMenu = () => {
      const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-hidden');
      openMenuBtn.classList.toggle('is-hidden');
      bodyScroll.classList.toggle('scroll');


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
      
      desktopMenu.classList.remove('visually-hidden');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
    
    window.matchMedia('(max-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
          desktopMenu.classList.add('visually-hidden');
    });
  
  })();

