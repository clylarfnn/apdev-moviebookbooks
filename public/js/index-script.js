// slideshow javascript
var slideIndex = 1;

function plusDivs(n) {
  nextSlide(slideIndex += n);
}

function nextSlide(n) {
  var i;
  var slide = document.getElementsByClassName("bnnrSlides");
  if (n > slide.length) {
    slideIndex = 1
  }
  else if (n < 1) {
    slideIndex = slide.length
  } ;
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[slideIndex-1].style.display = "block";
}

$(document).ready(function () {

  // $.get('/getMovies') function(){
  //   console.log("ready!");
  // }

}
