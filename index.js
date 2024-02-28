var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: 3,
     autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  var swipers = new Swiper(".mySwipers", {
   spaceBetween :30,
   slidesPerView :2,
   slidesPerGroup :2,
   autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
 