
function changeTab(evt, locName) {
  var i, x, tablinks, ctr;
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

  document.getElementsByClassName("booknow")[0].style.display = "flex";
  document.getElementById("booknow").style.display = "none";
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
  alwaysCheck();
  resetTickets();
}

function alwaysCheck() {
  const date = document.getElementById('book-date').innerHTML;
  const time = document.getElementById('book-time').innerHTML;
  if (date != "[choose a date]" && time!= "[choose a time]"){
    document.getElementsByClassName("booknow")[0].style.display = "flex";
    document.getElementById("booknow").style.display = "none";
  }
  else{
    if(time == "[choose a time]" || date == "[choose a date]"){
      document.getElementById("booknow").style.display = "none";
    }
    else{
      document.getElementById("booknow").style.display = "block";
    }

  }

}

function removeActv(r_class) {
  var i, option;
  option = document.getElementsByClassName(r_class);
  for (i = 0; i < option.length; i++) {
    option[i].className = option[i].className.replace(" actv", "");
  }
}

function showDiv(div_id) {
  if (div_id === "booknow"){
    const date = document.getElementById('book-date').innerHTML;
    const time = document.getElementById('book-time').innerHTML;
    if (date != "[choose a date]" && time != "[choose a time]"){
      // document.getElementsByClassName("booknow")[0].style.display = "none";
      document.getElementById(div_id).style.display = "block";
    }
    else{
      alert("Please choose a schedule first")
    }
  }
  else{
    document.getElementById(div_id).style.display = "block";
  }
}

function resetTickets (){
  //reset
  document.querySelectorAll("#form1-col option").forEach((item) => {
    item.disabled = false;
  });

  // document.getElementById("form1-col option").each(function() {
  //   this.prop('disabled',false)
  // }
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
let s1, s2, s3;


function updateText(){
  var v1r, v1c, v2r, v2c, v3r, v3c;
  var y, hide;

  v1r = document.getElementById("form1-row").value;
  document.getElementById("seat-row1").innerHTML = v1r;

  v1c = document.getElementById("form1-col").value;
  document.getElementById("seat-col1").innerHTML = v1c;
  s1 = v1r + v1c.toString()
  seat1 = "Seat " +s1;


  if (quantity >= 2){
    v2r = document.getElementById("form2-row").value;
    document.getElementById("seat-row2").innerHTML = v2r;

    v2c = document.getElementById("form2-col").value;
    document.getElementById("seat-col2").innerHTML = v2c;
    s2 = v2r + v2c.toString()
    seat2 = "Seat "+s2;

  }
  if (quantity == 3) {
    v3r = document.getElementById("form3-row").value;
    document.getElementById("seat-row3").innerHTML = v3r;

    v3c = document.getElementById("form3-col").value;
    document.getElementById("seat-col3").innerHTML = v3c;
    s3 = v3r + v3c.toString()
    seat3 = "Seat "+s3;

  }
  // console.log(seat1 + "==" + seat2 + "||" + seat1 + "==" + seat3 + "||" + seat2 == seat3) && (seat1 != undefined || seat2 != undefined || seat3 != undefined))
  console.log(seat1 + " vs " + seat2 + " vs " + seat3)
  console.log((seat1 == seat2))
  if ((v1r == "invalid") || (v1c == "invalid") || (v2r == "invalid") || (v2c == "invalid") || (v3r == "invalid") || (v3c == "invalid")){
    // alert("Invalid selection");
    validSeats = false;
    document.getElementById("errormsg").innerHTML="Invalid selection"
    document.getElementById("errormsg").style.display = "block"
  }
  else if((seat1 == seat2) && quantity == 2){
      console.log((seat1 == seat2) + seat1 +"=="+ seat2)
      validSeats = false;
      // alert("Please don't duplicate seats")
      document.getElementById("errormsg").innerHTML="Please don't duplicate seats"
      document.getElementById("errormsg").style.display = "block"
  }
  else if((seat1 == seat2 || seat1 == seat3 || seat2 == seat3) && quantity == 3){
      // console.log((seat1 == seat2) + seat1 +"=="+ seat2)
      validSeats = false;
      // alert("Please don't duplicate seats")
      document.getElementById("errormsg").innerHTML="Please don't duplicate seats"
      document.getElementById("errormsg").style.display = "block"
  }
  // else if(quantity == 3){
  //   if((seat1 == seat2 || seat1 == seat3 || seat2 == seat3) && (seat1 != undefined || seat2 != undefined || seat3 != undefined)){
  //     validSeats = false;
  //     // alert("Please don't duplicate seats")
  //     document.getElementById("errormsg").innerHTML="Please don't duplicate seats"
  //     document.getElementById("errormsg").style.display = "block"
  //   }
  //
  // }

  else{
    y = document.getElementsByClassName("seat-info");
    for (i = 0; i < quantity; i++) {
      y[i].style.visibility = "visible";
    }
    document.getElementsByClassName("chosenSeats")[0].style.visibility = "visible";
    validSeats = true;
    document.getElementById("errormsg").innerHTML=""
    document.getElementById("errormsg").style.display = "none"
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
    let selectedSched, selectedCinema

    loadSeats()
    function loadSeats () {
      // $.get('/getDateTime', {})
      // alert($("#book-date").text() + " on " + $("#book-time").text())


      // $('input[name=quantity]').val("")
      // $('select').each( function(){
      //   $(this).prop('selectedIndex',0)
      // })
      var movieID = $("#keepID").text()
      var movieName;

      $.get('/getMovieID', {id: movieID}, function(result){
        const moviedetails = result.moviedetails
        // console.log(moviedetails)
        $('.choosesched').html("Ticket Booking for " + moviedetails.movieName)
        movieName = moviedetails.movieName

        //call get schedule
        $.get('/getSchedule', {movie: movieName}, function (result) {
          // alert("WORKING");
          var times = result.times;
          var cinemas = result.cinemas;
          var schedule = result.schedule;
          var stop = false;

          var startDate, endDate, startTime, endTime;
          var allDates = ["#dates1", "#dates2", "#dates3", "#dates4", "#dates5"]
          var allTimes = ["#times1", "#times2", "#times3", "#times4", "#times5"]
          var locIDs = ["#loc1", "#loc2", "#loc3", "#loc4", "#loc5"]
          var loc = $("#book-loc").text()

          // console.log("In " + loc)

          for (let j in cinemas){
            //loop thru cinemas
            if (cinemas[j][0].location === loc){
              for (let k in schedule){
                if (schedule[k].cinemaID == cinemas[j][0].cinemaID){
                  const viewing = schedule[k].viewingSched;
                  // console.log(viewing)
                  const currDate = new Date(viewing.viewDate)
                  const stringD = currDate.toLocaleString('en-us',{month:'long'}) + " " + currDate.getDate() + ", " + currDate.getFullYear()
                  // console.log(stringD + " vs " + $("#book-date").text())
                  if(stringD == $("#book-date").text()){
                    const currTime = viewing.viewTime
                    stringT = currTime.hour + ":" + currTime.minute + " " + currTime.period;
                    // console.log(getAvailableSeats.cinemaID)
                    // console.log(stringT + " vs " + $("#book-time").text())
                    if (stringT == $("#book-time").text()){
                      // console.log(viewing)
                      // console.log("found sched : " + stringD + " on " + stringT)
                      stop = true;
                      getAvailableSeats(schedule[k].cinemaID, schedule[k].viewingSched)
                      selectedSched = schedule[k].viewingSched
                      selectedCinema = cinemas[j][0]
                      // buyTickets(schedule[k]);
                    }
                  }
                }
                if(stop){
                  break;
                }
              }
              if(stop){
                break;
              }
            }
            if(stop){
              break;
            }
          }
        });



        function getAvailableSeats(cinemaID, cinema, form){
          // console.log("SHOWING SEATS FOR "+cinemaID)
          // console.log(cinema.seats)
          var allSeats = cinema.seats;
          var availSeats = [];
          var takenSeats = [];
          // console.log(cinema.seats[0])
          // console.log(cinema.seats[0].status=="Available")

          //get all available seats into an array
          for(let i=0; i < allSeats.length; i++){
            if (allSeats[i].status == "Available")
              availSeats.push(allSeats[i])
            else
              takenSeats.push(allSeats[i])
          }

          console.log(availSeats)
          console.log(takenSeats)
          console.log(availSeats[0].seatName.charAt(0))
          console.log(availSeats[0].seatName.charAt(1))

          var found = false;
          if(takenSeats.length > 0){
              $("#form1-row").on('change', function (){
                // console.log(cinemaID)

                // deselect
                if ($("#form1-col option:selected").val() != "invalid")
                  $("#form1-col option:selected").prop("selected", false)

                //reset
                $("#form1-col option").each(function() {
                  $(this).prop('disabled',false)
                  // console.log("resetting")
                })
                // console.log("detected change")

                for (let j=0; j<takenSeats.length; j++) {
                  var row = takenSeats[j].seatName.charAt(0);
                  var col = takenSeats[j].seatName.charAt(1);

                    const currRow = $("#form1-row option:selected").val()
                    // console.log(currRow == row)
                    // console.log("found " + found)
                    if (currRow == row){
                      // console.log("same row")
                      $("#form1-col option").each(function() {
                        const currCol = $(this)
                        if (currCol.val() == col){
                          // console.log("same col")
                          currCol.prop('disabled',true)
                        }
                      })
                    }
                  }
                  // console.log($("#form1-row option:selected") + $("#form1-col option:selected"))
                });

              $("#form2-row").on('change', function (){
                // console.log(cinemaID)

                // deselect
                if ($("#form2-col option:selected").val() != "invalid")
                  $("#form2-col option:selected").prop("selected", false)

                //reset
                $("#form2-col option").each(function() {
                  $(this).prop('disabled',false)
                  // console.log("resetting")
                })
                // console.log("detected change")

                for (let j=0; j<takenSeats.length; j++) {
                  var row = takenSeats[j].seatName.charAt(0);
                  var col = takenSeats[j].seatName.charAt(1);

                    const currRow = $("#form2-row option:selected").val()
                    // console.log(currRow == row)
                    // console.log("found " + found)
                    if (currRow == row){
                      // console.log("same row")
                      $("#form2-col option").each(function() {
                        const currCol = $(this)
                        if (currCol.val() == col){
                          // console.log("same col")
                          currCol.prop('disabled',true)
                        }
                      })
                    }
                  }
                  // console.log($("#form1-row option:selected") + $("#form1-col option:selected"))
                });

              $("#form3-row").on('change', function (){
                // console.log(cinemaID)

                // deselect
                if ($("#form3-col option:selected").val() != "invalid")
                  $("#form3-col option:selected").prop("selected", false)

                //reset
                $("#form3-col option").each(function() {
                  $(this).prop('disabled',false)
                  // console.log("resetting")
                })
                // console.log("detected change")

                for (let j=0; j<takenSeats.length; j++) {
                  var row = takenSeats[j].seatName.charAt(0);
                  var col = takenSeats[j].seatName.charAt(1);

                    const currRow = $("#form3-row option:selected").val()
                    // console.log(currRow == row)
                    // console.log("found " + found)
                    if (currRow == row){
                      // console.log("same row")
                      $("#form3-col option").each(function() {
                        const currCol = $(this)
                        if (currCol.val() == col){
                          // console.log("same col")
                          // currCol.prop('disabled',true)
                        }
                      })
                    }
                  }
                  // console.log($("#form1-row option:selected") + $("#form1-col option:selected"))
                });

            }
            else{
              $("#form1-col option").each(function() {
                $(this).prop('disabled',false)
                // console.log("resetting")
              })
              $("#form2-col option").each(function() {
                $(this).prop('disabled',false)
                // console.log("resetting")
              })
              $("#form3-col option").each(function() {
                $(this).prop('disabled',false)
                // console.log("resetting")
              })
            }

        }
      })
      //change choosesched text

      $("#gotoCheckout").on('click', function(){
        // alert("q")
        var id = $("#keepID").text()
        // console.log(id)
        // console.log(s1 + "," + s2 + "," + s3)
        // console.log(selectedSched)
        // console.log(selectedCinema)
        seats = s1 + "," + s2 + "," + s3

        window.location.href = '/movie-details/' + id + '/checkout/' + selectedSched._id + '/' + selectedCinema._id + '/' + seats
      });

    }
})
