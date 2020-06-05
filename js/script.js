'use strict';

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

function initMap() {
  var flag = {lat: 59.93, lng: 30.32};
  var map = new google.maps.Map (document.querySelector('.map'), {
    zoom: 16,
    center: flag,
    scrollwheel: false,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.BOTTOM_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_CENTER
    },
    streetViewControl: true, //default
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
    fullscreenControl: true
  });
  var marker = new google.maps.Marker({
    position: flag,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Cat Energy'
  });
}

svg4everybody();

var active = false;

document.querySelector('.slider__draggable').addEventListener('mousedown',function(){
  active = true;
  document.querySelector('.slider__draggable').classList.add('slider__scrolling');
});

document.body.addEventListener('mouseup',function(){
  active = false;
  document.querySelector('.slider__draggable').classList.remove('slider__scrolling');
});

document.body.addEventListener('mouseleave',function(){
  active = false;
  document.querySelector('.slider__draggable').classList.remove('slider__scrolling');
});

document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  var x = e.pageX;
  x -= document.querySelector('.slider__container').getBoundingClientRect().left;
  scrollIt(x);
});

function scrollIt(x){
  var transform = Math.max(0,(Math.min(x,document.querySelector('.slider__container').offsetWidth)));
  document.querySelector('.slider__after').style.width = transform+"px";
  document.querySelector('.slider__draggable').style.left = transform-18+"px";
}

scrollIt(345);

document.querySelector('.slider__draggable').addEventListener('touchstart',function(){
  active = true;
  document.querySelector('.slider__draggable').classList.add('slider__scrolling');
});
document.body.addEventListener('touchend',function(){
  active = false;
  document.querySelector('.slider__draggable').classList.remove('slider__scrolling');
});
document.body.addEventListener('touchcancel',function(){
  active = false;
  document.querySelector('.slider__draggable').classList.remove('slider__scrolling');
});
