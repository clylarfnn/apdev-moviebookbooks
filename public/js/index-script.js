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
  // function moviePage(id) {
  //   alert(id);
  //   alert('clicked');
  //   var movieName = $('.movie-details').parent().find(".title").text();
  //   alert(movieName);
  //
  // }
  // $('.movielist').on('click', '.movie-details', function () {
  //       console.log("clicked");
  //       // your code here
  //       alert('clicked');
  //       var movieName = $(this).parent().find(".title").text();
  //       alert(movieName);
  //       // $.get('/:movieName', { movieName: movieName }, function (result) {});
  //       // var refno = $(card[1]).text();
  //       // $.get('/delete', {refno:refno}, function (result) {});
  //       // $(this).parent().remove();
  //   });

})
