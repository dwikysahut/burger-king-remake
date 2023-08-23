window.onload = (event) => {
  const hamburgerButton=document.querySelector('.hamburger-wrapper');
  const overlayMenu=document.querySelector('.overlay-menu');

  hamburgerButton.addEventListener('click',function (e){
    overlayMenu.classList.toggle('open');
    hamburgerButton.classList.toggle('is-active')
  })

};
