
function changeTab(evt, locName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("location");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(locName).style.display = "block";
  evt.currentTarget.className += " active";
  changeLoc(locName)
  removeActv("option");
  removeActv("option2");
}

var cinemanum = 0;

function changeLoc(locName) {
  var text;
  switch (locName) {
    case "loc1":
      text = "Manila City"
      cinemanum = 0;
      break;

    case "loc2":
      text = "Bacolod City"
      cinemanum = 1;
      break;

    case "loc3":
      text = "Davao City"
      cinemanum = 2;
      break;

    case "loc4":
      text = "Pangasinan"
      cinemanum = 3;
      break;

    case "loc5":
      text = "Bulacan"
      cinemanum = 3;
      break;
  }
  document.getElementById('book-loc').innerHTML = text;
  document.getElementById('book-date').innerHTML = "[choose a date]";
  document.getElementById('book-time').innerHTML = "[choose a time]";
}

function changeText(evt, text, change_id) {
  var i, option;
  if (change_id === "book-date"){
    option = "option";
  }
  else {
    option = "option2";
  }
  removeActv(option);
  evt.currentTarget.className += " actv";
  document.getElementById(change_id).innerHTML = text;
}

function removeActv(r_class) {
  var i, option;
  option = document.getElementsByClassName(r_class);
  for (i = 0; i < option.length; i++) {
    option[i].className = option[i].className.replace(" actv", "");
  }
}

function showDiv(div_id) {
  document.getElementById(div_id).style.display = "block";
  if (div_id === "booknow"){
    document.getElementsByClassName("booknow")[0].style.display = "none";
  }
}

var quantity;

function showForm() {
  var qty, i, x, y, hide;
  qty = document.getElementById("quantity").value;

  x = document.getElementsByClassName("form");
  for (i = 0; i < qty; i++) {
    x[i].style.display = "block";
  }

  y = document.getElementsByClassName("seat-info");
  // for (i = 0; i < qty; i++) {
  //   y[i].style.visibility = "visible";
  // }

  hide = x.length - qty;
  if (hide == 2){
    x[1].style.display = "none";
    x[2].style.display = "none";
    y[1].style.visibility = "hidden";
    y[2].style.visibility = "hidden";
  }
  if (hide == 1){
    x[2].style.display = "none";
    y[2].style.visibility = "hidden";
  }

  quantity = qty;

}

function submitBook() {
  var f1r;
  document.getElementById("form1-row").submit();
  // document.getElementById("form1-col").submit();
  // document.getElementById("form2-row").submit();
  // document.getElementById("form2-col").submit();
  // document.getElementById("form3-row").submit();
  // document.getElementById("form3-col").submit();
  f1r = document.getElementById("form1-row").value;
  document.getElementById("seat-row1").innerHTML = f1r;

  // var val = document.getElementById("form1-row");
  // var text = val.options[val.selectedIndex].text;
  // alert(text);
  // document.getElementById("seat-row1").innerHTML = text;
  //
  // var val2 = document.getElementById("form1-col");
  // var text2 = val2.options[val2.selectedIndex].text;
  // alert(text2);
  // document.getElementById("seat-col1").innerHTML = text2;
}

var validSeats;
let seat1, seat2, seat3;


function updateText(){
  var v1r, v1c, v2r, v2c, v3r, v3c;
  var y, hide;

  v1r = document.getElementById("form1-row").value;
  document.getElementById("seat-row1").innerHTML = v1r;

  v1c = document.getElementById("form1-col").value;
  document.getElementById("seat-col1").innerHTML = v1c;

  seat1 = "Seat ".concat(v1r, v1c.toString());


  if (quantity >= 2){
    v2r = document.getElementById("form2-row").value;
    document.getElementById("seat-row2").innerHTML = v2r;

    v2c = document.getElementById("form2-col").value;
    document.getElementById("seat-col2").innerHTML = v2c;

    seat2 = "Seat ".concat(v2r, v2c.toString());

  }
  if (quantity == 3) {
    v3r = document.getElementById("form3-row").value;
    document.getElementById("seat-row3").innerHTML = v3r;

    v3c = document.getElementById("form3-col").value;
    document.getElementById("seat-col3").innerHTML = v3c;

    seat3 = "Seat ".concat(v3r, v3c.toString());

  }

  if ((v1r == "invalid") || (v1c == "invalid") || (v2r == "invalid") || (v2c == "invalid") || (v3r == "invalid") || (v3c == "invalid")){
    alert("Invalid selection");
    validSeats = false;
  }
  else{
    y = document.getElementsByClassName("seat-info");
    for (i = 0; i < quantity; i++) {
      y[i].style.visibility = "visible";
    }
    document.getElementsByClassName("chosenSeats")[0].style.visibility = "visible";
    validSeats = true;
  }
}

var loc, date, time, seats, qty;


function submitForm() {

  loc = document.getElementById('book-loc');
  date = document.getElementById('book-date');
  time = document.getElementById('book-time');
  seats = document.getElementsByClassName("seat-info");
  qty = quantity;


  if ((date.innerHTML === "[choose a date]") || (time.innerHTML === "[choose a time]") || (!validSeats)){
    alert("Invalid or incomplete fields")
  }
  else {
    // alert("SUCCESS");
    // openBooking();
    document.getElementById("container").style.display = "flex";
    bookingInfo(loc, date, time, seats, qty);
  }
}

function openBooking() {
  location.replace("booking.html");
  // bookingInfo(loc, date, time, seats, qty);
}

function bookingInfo(loc, date, time, seats, qty) {

  var movie, num;
  var s, p;
  var sum = 0;

  movie = document.getElementById("movie-title");
  document.getElementById("movie").innerHTML = movie.innerHTML;

  cinema = document.getElementsByClassName("cinema-num")[cinemanum];
  document.getElementById("cinema").innerHTML = cinema.innerHTML;

  document.getElementById("loc").innerHTML = loc.innerHTML;

  document.getElementById("time").innerHTML = time.innerHTML;

  document.getElementById("date").innerHTML = date.innerHTML;

  // alert("loaded");

  s = document.getElementsByClassName("seats");
  p = document.getElementsByClassName("prices");

  for (i = 0; i < qty; i++) {
    s[i].style.visibility = "visible";
    p[i].style.visibility = "visible";

    if (i == 0){
      num = seat1;
    }
    else if (i == 1){
      num = seat2;
    }
    else if (i == 2){
      num = seat3;
    }

    s[i].innerHTML = num;
    sum += 200;
  }

  let total_price = "Php ".concat(sum.toString());

  document.getElementById("total").innerHTML = total_price;

}

function payment() {
  document.getElementById("verify").style.visibility = "visible";
}

function confirmBook() {
  alert("Booking Successful!")
  // window.location.reload();
  // location.replace(tab);
}

$(document).ready(function () {


  $('.schedule').click(function() {
    var movie = $('title').text();
    // alert(movie);

    $.get('/getSchedule', {movie: movie}, function (result) {
      // alert("WORKING");
      var times = result.times;
      var cinemas = result.cinemas;
      var schedule = result.schedule;
      var startDate, endDate;
      var allLocations = ["Manila City", "Bacolod City", "Davao City", "Pangasinan", "Bulacan"]
      var allDates = ["#dates1", "#dates2", "#dates3", "#dates4", "#dates5"]
      var allTimes = ["#times1", "#times2", "#times3", "#times4", "#times5"]

      console.log(times[0][0]);
      console.log(times[1][0]);

      for(let j=0; j < cinemas.length; j++){
        // find the location
        if (cinemas[j][0].location === "Manila City"){
          for(let k=0; k < schedule.length; k++){
            console.log(schedule[k])
            console.log(cinemas[j][0])
            if (schedule[k].cinemaID == cinemas[j][0].cinemaID){
              startDate = new Date (schedule[k].startDate).toLocaleString('en-us',{month:'long', day:'numeric', year:'numeric'});
              // alert(startDate);
              appendDate(startDate, "#dates1");
              $("#dates1").find(".unavail").remove();
              $("#times1").find(".unavail").remove();
              break;
            }
          }
          break;
        }

      }

      function appendDate(date, dateID) {
        var insert = 'onclick=\"changeText(event, \'' + date.toString() + '\', \'book-date\'';
        alert(insert);
        $(dateID).append('<li><a class="option" ' + insert + ')\">' + date + '</a></li>');
      }

    });


    $('#schedule').css({ visibility : 'visible' });
    $('.booknow').css({ display : 'flex' });
  });


})
