var swiper = new Swiper('.swiper-container', {
    lazy: true,
    spaceBetween: 30,
    centeredSlides: true,
    effect: 'fade',
    speed: 2000,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  

document.querySelector('.section_04__gallery').onclick = (e) => {
    let imageName = e.target.id;
    
    /* Validamos el click y si es verdadero procede*/
    imageName ?     
        basicLightbox.create(`
        <img src="assets/images/${imageName}.jpg">
    `).show()
    :
    console.log('falso');

}; 


let numero = false;
const boton = document.querySelector('.boton');
const slide = document.querySelector(".cuadro");

boton.onclick = () => {
    numero = !numero

    numero ? 
    slide.style.setProperty('transform', `translateY(0px)`) :
    slide.style.setProperty('transform', `translateY(-100%)`);

    numero ? 
    boton.style.setProperty('background-image', `url('assets/images/mobile-menu-close.svg')`) :
    boton.style.setProperty('background-image', `url('assets/images/mobile-menu-open.svg')`);
    
}