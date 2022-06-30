
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

      var startDate, endDate, startTime, endTime;
      var allLocations = ["Manila City", "Bacolod City", "Davao City", "Pangasinan", "Bulacan"]
      var allDates = ["#dates1", "#dates2", "#dates3", "#dates4", "#dates5"]
      var allTimes = ["#times1", "#times2", "#times3", "#times4", "#times5"]
      var locIDs = ["#loc1", "#loc2", "#loc3", "#loc4", "#loc5"]

      for(let i=0; i < allLocations.length; i++){
        for(let j=0; j < cinemas.length; j++){
          // find the location
          if (cinemas[j][0].location === allLocations[i]){
            for(let k=0; k < schedule.length; k++){
              if (schedule[k].cinemaID == cinemas[j][0].cinemaID){
                startDate = new Date (schedule[k].startDate).toLocaleString('en-us',{month:'long', day:'numeric', year:'numeric'});
                appendDate(startDate, allDates[i]);

                endDate = new Date (schedule[k].endDate).toLocaleString('en-us',{month:'long', day:'numeric', year:'numeric'});
                getDatesBetween (startDate, endDate, allDates[i]);

                appendDate(endDate, allDates[i]);

                $(allDates[i]).find(".unavail").remove();
                $(allTimes[i]).find(".unavail").remove();
                $(locIDs[i]).find(".cinema-num").append(cinemas[j][0].cinemaNum);

                for(let l=0; l < times.length; l++){
                  if (schedule[k].timeID == times[l][0].timeID) {
                    startTime = times[l][0].startTime.hour + ":" + times[l][0].startTime.minute + " " + times[l][0].startTime.period;
                    console.log(startTime)
                    appendTime(startTime, allTimes[i]);
                    endTime = times[l][0].endTime.hour + ":" + times[l][0].endTime.minute + " " + times[l][0].endTime.period;
                    console.log(endTime)

                    getTimesBetween (times[l][0].startTime, times[l][0].endTime, allTimes[i]);

                    appendTime(endTime, allTimes[i]);
                    // getTimesBetween (startDate, endDate, allTimes[i])
                    break;
                  }
                }
                // getAvailableSeats(schedule[k].cinemaID, cinemas[j][0])
                break;
              }

            }
              break;
            }
          }
        }

      function getDatesBetween (startDate, endDate, dateID) {
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        newDate = new Date (startDate)

        //get difference of the dates
        const date1 = new Date(startDate);
        const date2 = new Date(endDate);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(diffDays + " days");

        for (let i=1; i < diffDays; i++){
          newDate = new Date (newDate.toLocaleString('en-us',{month:'long'}) + " " + (newDate.getDate()+1) + ", " + newDate.getFullYear())
          console.log(newDate);
          appendDate(newDate.toLocaleString('en-us',{month:'long', day:'numeric', year:'numeric'}), dateID)
        }

      }

      function getTimesBetween (startTime, endTime, timeID) {
        var startPeriod = startTime.period;
        var newHour = startTime.hour;
        var newPeriod = startPeriod;
        var newTime;

        while (newHour != endTime.hour){
          console.log(newHour != endTime.hour)
          for (let i=1; i <= 3; i++){
            newHour++;
            console.log(newHour)
            if (newPeriod == 'AM' && newHour > 12){
              newHour = 1;
              newPeriod = 'PM';
              console.log(newHour)
            }
          }
          newTime = newHour + ":" + startTime.minute + " " + newPeriod;
          console.log("newtime: " + newTime);
          if (newHour != endTime.hour)
            appendTime(newTime, timeID);
        }


      }

      function appendDate(date, dateID) {
        var insert = 'onclick=\"changeText(event, \'' + date.toString() + '\', \'book-date\'';
        // alert(insert);
        $(dateID).append('<li><a class="option" ' + insert + ')\">' + date + '</a></li>');
      }
      function appendTime(time, timeID) {
        var insert = 'onclick=\"changeText(event, \'' + time + '\', \'book-time\'';
        // alert(insert);
        $(timeID).append('<li><a class="option2" ' + insert + ')\">' + time + '</a></li>');
      }

    });

    $(".bookbutton").on('click', function() {

      $('input[name=quantity]').val("")
      $('select').each( function(){
        $(this).prop('selectedIndex',0)
      })

      //call get schedule
      $.get('/getSchedule', {movie: movie}, function (result) {
        // alert("WORKING");
        var times = result.times;
        var cinemas = result.cinemas;
        var schedule = result.schedule;
        var stop = false;

        var startDate, endDate, startTime, endTime;
        var allDates = ["#dates1", "#dates2", "#dates3", "#dates4", "#dates5"]
        var allTimes = ["#times1", "#times2", "#times3", "#times4", "#times5"]
        var locIDs = ["#loc1", "#loc2", "#loc3", "#loc4", "#loc5"]
        var loc = $(".active").text()

        console.log("In " + loc)

          for(let j=0; j < cinemas.length; j++){
            // console.log("checking cinemas")
            // console.log(cinemas[j][0].location + "===" + loc)
            if (cinemas[j][0].location === loc){
              for(let k=0; k < schedule.length; k++){
                if (schedule[k].cinemaID == cinemas[j][0].cinemaID){
                  getAvailableSeats(schedule[k].cinemaID, cinemas[j][0])
                  break;
                }
              }
                break;
            }
          }

      });
    });

    function getAvailableSeats(cinemaID, cinema){
      console.log("SHOWING SEATS FOR "+cinemaID)
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
              console.log(currRow == row)
              console.log("found " + found)
              if (currRow == row){
                // console.log("same row")
                $("#form1-col option").each(function() {
                  const currCol = $(this)
                  if (currCol.val() == col){
                    console.log("same col")
                    currCol.prop('disabled',true)
                  }
                })
              }
            }
          });
        }
        else{
          $("#form1-col option").each(function() {
            $(this).prop('disabled',false)
            // console.log("resetting")
          })
        }

    }


    $('#schedule').css({ visibility : 'visible' });
    $('.booknow').css({ display : 'flex' });
  });


})
