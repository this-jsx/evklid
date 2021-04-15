// Tabs:

window.addEventListener('DOMContentLoaded', function () {
  // console.log(document.querySelectorAll('.how__item'))
  document.querySelectorAll('.how__item').forEach(function (blockText) {
    // console.log(blockText);
    blockText.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      // console.log(path);

      document.querySelectorAll('.how__wrap').forEach(function (blockContent) {
        blockContent.classList.remove('how__left-block-active')
        // console.log(blockContent)

      })
      // setTimeout(() => {
      document.querySelector(`[data-target="${path}"]`).classList.add('how__left-block-active')
      // }, 150)

    })
  })
})


// Swiper:

// const swiper = new Swiper('.swiper-container', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });



// Burger menu:

// document.querySelector('.header__menu').addEventListener('click', function () {
//   document.querySelector('.header__menu-burger').classList.add('header__menu-burger-new');
// })

document.querySelector('.header__menu').addEventListener('click', function () {
  document.querySelector('.header__menu-burger').classList.toggle('header__menu-burger-new')
})

// document.querySelector('.header__menu').addEventListener('click', function () {
//   let iconInv = document.querySelector('.header__menu');
//   iconInv.style.backgroundImage = 'none';
// })