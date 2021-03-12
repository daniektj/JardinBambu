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


