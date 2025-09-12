var sliderinit = function () {
  // basic options for all sliders
  let defaults = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  };

  // call init function
  initSwipers(defaults);

  function initSwipers(defaults = {}, selector = ".swiper-container") {
    let swipers = document.querySelectorAll(selector);
    swipers.forEach((swiper) => {
      // get options
      let optionsData = swiper.dataset.swiper
        ? JSON.parse(swiper.dataset.swiper)
        : {};
      // combine defaults and custom options
      let options = {
        ...defaults,
        ...optionsData,
      };
      // init
      new Swiper(swiper, options);
    });
  }
};
sliderinit();

// Specific slider with pagination numbers
var swiper = new Swiper(".slider-page-title", {
  spaceBetween: 0,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".page-title-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
