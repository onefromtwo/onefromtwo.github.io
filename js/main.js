function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }


var $btn = $('#btn')
var $answer = $('#answer')

$btn.click(function(e) {
  if (randomInteger(1, 4) % 2 == 0) {
    alert("Программный код монетки глаголит о том, что лучше бы тебе выбрать первый вариант.")
  }
  else {
    alert("ВТОРОЙ!!!!!!!!!!!!!! ")
  }
})


//swiper

$(document).ready(function () {
    //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    autoplay: {
      delay: '2000'
    },
  })
});
