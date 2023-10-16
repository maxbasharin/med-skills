/*
 !(i)
 Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 Или когда импортирован весь файл, например import "files/script.js";
 Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 Если мы хотим добавить модуль следует его расскоментировать
 */
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
} from './modules';
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = location.hostname === 'localhost';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
// menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
/* Раскомментировать для использования */
// togglePopupWindows()
// =======================================================================================================

$('.nav-catalog-specialties').click(function () {
  $(this).toggleClass('open');
  $('.nav-icon-specialties').toggleClass('open');
  $('.header__block-nav_catalog').toggleClass('open');
});

$('.nav-catalog-mobile').click(function () {
  $(this).toggleClass('open');
  $('.nav-icon-mobile').toggleClass('open');
  $('.header__block-nav_catalog-mobile').toggleClass('open');
});


$('.catalog-nav__mobile-btn').click(function () {
  $('.catalog-nav__mobile-wrapper').toggleClass('open');
});
$('.catalog-nav__mobile-btn_sveden').click(function () {
  $('.catalog-nav__mobile-wrapper_sveden').toggleClass('open');
});

$('.logistics__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    '<img class="logistics__slider-left" src="images/arrow-left.svg" alt="">',
  nextArrow:
    '<img class="logistics__slider-right" src="images/arrow-right.svg" alt="">',
});
$('.logistics__slider').on(
  'afterChange',
  function (event, slick, currentSlide) {
    $('#pagination').text(currentSlide + 1);
  }
);

$('.diplom__slider').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow:
    '<img class="diplom__slider-left" src="images/arrow-bg-left.svg" alt="">',
  nextArrow:
    '<img class="diplom__slider-right" src="images/arrow-bg-right.svg" alt="">',
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5,
      },
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
      },
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
      },



    },
  ],
});
$('.news__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:
    '<img class="news__slider-left" src="images/arrow-prev.svg" alt="">',
  nextArrow:
    '<img class="news__slider-right" src="images/arrow-next.svg" alt="">',
  responsive: [
    {

      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$('.reviews__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:
    '<img class="reviews__slider-left" src="images/arrow-left.svg" alt="">',
  nextArrow:
    '<img class="reviews__slider-right" src="images/arrow-right.svg" alt="">',
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$('.reviews__slider').on('afterChange', function (event, slick, currentSlide) {
  $('#pagination-reviews').text(currentSlide + 1);
});

$('.speciality__slider').slick({
  infinite: true,
  slidesToShow: 4,
  centeredSlides: true,
  slidesToScroll: 1,
  prevArrow:
    '<img class="speciality__slider-left" src="images/arrow-left.svg" alt="">',
  nextArrow:
    '<img class="speciality__slider-right" src="images/arrow-right.svg" alt="">',
  responsive: [
    {

      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
      },

    },
  ],
});
$('.speciality__slider').on(
  'afterChange',
  function (event, slick, currentSlide) {
    $('#pagination-speciality').text(currentSlide + 1);
  }
);

$('.resources__slider').slick({
  infinite: true,
  slidesToShow: 4,
  centeredSlides: true,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:1500,
  arrows:false,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$('.resources__slider').on(
  'afterChange',
  function (event, slick, currentSlide) {
    $('#pagination-resources').text(currentSlide + 1);
  }
);

new WOW().init();

$('.sveden-dropdown__item').click(function () {
  $(this).toggleClass("active");
  $(this).siblings(".sveden-dropdown__content-data").toggleClass("open");
});

$('.btn--requirements').click(function () {
  $.fancybox.open({
    src: '#form--requirements',
    type: 'inline'
  });
});
$('.btn--application').click(function () {
  $.fancybox.open({
    src: '#form--application',
    type: 'inline'
  });
});

$(".accordion-titel").click(function () {
  $(".accordion-item").removeClass("show")
  $(this).parent(".accordion-item").addClass("show");
  $(this).parent(".accordion-item").find(".accordion-contant").slideToggle();
  $(this).parent(".accordion-item").prevAll(".accordion-item").find(".accordion-contant").slideUp();
  $(this).parent(".accordion-item").nextAll(".accordion-item").find(".accordion-contant").slideUp();
});

$('.marquee__one').marquee({
  duration: 13000,
  gap: 50,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
  pauseOnHover: true
});

$('.marquee__two').marquee({
  duration: 12000,
  gap: 50,
  delayBeforeStart: 0,
  direction: 'right',
  duplicated: true,
  pauseOnHover: true
});

$('.marquee__three').marquee({
  duration: 10000,
  gap: 50,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
  pauseOnHover: true
});

$("[data-collapse]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
      blockId = $this.data('collapse');

  $this.toggleClass("active");
});

$(".direction__scroll").click(function() {
  $('html, body').animate({
  scrollTop: $(".direction__scroll-block").offset().top
  }, 1000);
 });

$('.js-chosen').chosen({
  max_selected_options: 5,
  width: '100%',
  no_results_text: 'По Вашему запросу ничего не найдено:',
  placeholder_text_single: 'Какую специальность вы ищите?',
});

$('.chosen-container').click(function () {
  $(".chosen-drop").addClass("show")
});

$('.btn--description').click(function () {
  $(this).toggleClass("active");
  $(this).siblings(".description__block").toggleClass("open");
});

$('.getLink').click(function () {
  $(this).remove();
  var url = window.location.href;
  navigator.clipboard.writeText(url);
  $(".getLink-block").css("display", 'block');
  document.getElementById("getLink--title").innerHTML = "Ссылка на новость скопирована";
});

$(".scroll-to-directory").on("click", function() {
  window.location.href = $(this).attr("href");
  var elementToScrollTo = $(".element-scroll-to-directory");
  elementToScrollTo.scrollIntoView();
});

const swiper = new Swiper('.standart__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 500,
})

var header = document.getElementById("advantages-clinic__sidebar-tabs");
var btns = header.getElementsByClassName("advantages-clinic__sidebar-tabs__item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

document.querySelector('select').onchange = function() {window.location = this.value}

var mapTitle = document.createElement('div'); mapTitle.className = 'mapTitle';
mapTitle.textContent = 'Для активации карты нажмите по ней';
wrapMap.appendChild(mapTitle);
wrapMap.onclick = function () {
  this.children[0].removeAttribute('style');
  mapTitle.parentElement.removeChild(mapTitle);
}
wrapMap.onmousemove = function (event) {
  mapTitle.style.display = 'block';
  if (event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
  if (event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
}
wrapMap.onmouseleave = function () {
  mapTitle.style.display = 'none';
}



