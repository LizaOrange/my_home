(function () {
    const burger = document.querySelector('.burger');
    const modalmenu = document.getElementById("modal-menu");
    const body = document.querySelector('body');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        modalmenu.classList.toggle("modal-menu-block");
        body.classList.toggle("body-overflow");
    });
}());

// const mySwiper = document.querySelector('.mySwiper');
// if(window.innerWidth < 761 && window.innerWidth > 575){
//     // console.log(window.innerWidth);
//     mySwiper.setAttribute('slides-per-view', 2);
// }else if(window.innerWidth <= 575){
//     mySwiper.setAttribute('slides-per-view', 1);
// }

// console.log( document.querySelector('swiper-button-next') );
