
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
  // changeLoc(locName)
  removeActv("option");
  removeActv("option2");

  // document.getElementsByClassName("booknow")[0].style.display = "flex";
  // document.getElementById("booknow").style.display = "none";
}

var cinemanum = 0;

<<<<<<< HEAD
/*function changeLoc(locName) {
=======
function changeLoc(locName) {
>>>>>>> origin/kyla2.0
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
<<<<<<< HEAD
}*/

/*function changeText(evt, text, change_id) {
=======
}

function changeText(evt, text, change_id) {
>>>>>>> origin/kyla2.0
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
<<<<<<< HEAD
  alwaysCheck();
  resetTickets();
}*/

function alwaysCheck() {
  const date = document.getElementById('book-date').innerHTML;
  const time = document.getElementById('book-time').innerHTML;
  if (date != "[choose a date]" && time!= "[choose a time]"){
    document.getElementsByClassName("booknow")[0].style.display = "flex";
    // document.getElementById("booknow").style.display = "none";
  }
  else{
    if(time == "[choose a time]" || date == "[choose a date]"){
      // document.getElementById("booknow").style.display = "none";
    }
    else{
      // document.getElementById("booknow").style.display = "block";
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
<<<<<<< HEAD
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
<<<<<<< HEAD

$(document).ready(function () {

  // if ($("#book-date").text() != "[choose a date]" && $("#book-time").text() != "[choose a time]"){
  //   alert("yes")
  // }
  function temp(){
    alert("ref")
  }

  $('.schedule').click(function() {
    var movie = $('title').text();
    // alert(movie);
    // var mov_id=$('#keepID').text()
    $.get('/getMovie', {movie: movie}, function(result){
      var allLocations = ["Manila City", "Bacolod City", "Davao City", "Pangasinan", "Bulacan"]
      var allDates = ["#dates1", "#dates2", "#dates3", "#dates4", "#dates5"]
      var allTimes = ["#times1", "#times2", "#times3", "#times4", "#times5"]
      // console.log(result)
      const locs = result.moviedetails.locations;
      // console.log(locs)
      // console.log(result.movieName)
      for(let i in locs){
        $("#loc-form").append("<option value=\'" + locs[i] + "\'>" + locs[i] + "</option>")
      }
      $("#loc-form").on('change', function (){
        var selLoc = $("#loc-form option:selected").val();
        locNum = allLocations.indexOf(selLoc)

        //remove previous selects
        $('#date-form option').each(function() {
            if ( $(this).val() != 'invalid' ) {
                $(this).remove();
            }
        });
        $('#time-form option').each(function() {
            if ( $(this).val() != 'invalid' ) {
                $(this).remove();
            }
        });

        // console.log(allDates[locNum]+" li")
        var dateList = $(allDates[locNum]+" li");
        $(dateList).each(function(){
          var val = $(this).text()
          if (!$(this).hasClass("date-title")){
            appendForm("#date-form", val)
          }
        })
        // console.log(allTimes[locNum]+" li")
        var timeList = $(allTimes[locNum]+" li");
        $(timeList).each(function(){
          var val = $(this).text()
          if (!$(this).hasClass("time-title")){
            appendForm("#time-form", val)
          }
        })
      })
    })

    function appendForm(id, value){
      $(id).append("<option value=\'" + value + "\'>" + value + "</option>")
    }

    $.get('/getSchedule', {movie: movie}, function (result) {
      // alert("WORKING");
      var times = result.times;
      var cinemas = result.cinemas;
      var schedule = result.schedule;

      // console.log(times[0][0].timeID)

      var startDate, endDate, startTime, endTime;
      var allLocations = ["Manila City", "Bacolod City", "Davao City", "Pangasinan", "Bulacan"]
      var allDates = ["#dates1", "#dates2", "#dates3", "#dates4", "#dates5"]
      var allTimes = ["#times1", "#times2", "#times3", "#times4", "#times5"]
      var locIDs = ["#loc1", "#loc2", "#loc3", "#loc4", "#loc5"]
      var arrDates;

      for(let i=0; i < allLocations.length; i++){
        for(let j=0; j < cinemas.length; j++){
          // find the location
          if (cinemas[j][0].location === allLocations[i]){
            for(let k=0; k < schedule.length; k++){
              if (schedule[k].cinemaID == cinemas[j][0].cinemaID){
                startDate = new Date (schedule[k].startDate).toLocaleString('en-us',{month:'long', day:'numeric', year:'numeric'});
                // appendDate(startDate, allDates[i]);

                endDate = new Date (schedule[k].endDate).toLocaleString('en-us',{month:'long', day:'numeric', year:'numeric'});
                arrDates = getDatesBetween (startDate, endDate, allDates[i]);
                // console.log("dates array: ")
                // console.log(arrDates)

                for(let p in arrDates){
                  // console.log("get times first for " + arrDates[p])
                  appendDate(arrDates[p].toLocaleString('en-us',{month:'long', day:'numeric', year:'numeric'}), allDates[i])
                  /*$.get('/getTimesByDate', {cinemaID:schedule[k].cinemaID, date: arrDates[p]}, function (result){
                    const timesbd = result
                    console.log(timesbd)
                    for(n in timesbd){
                      console.log(arrDates[p])
                      console.log(timesbd[n].viewingSched.viewTime)
                    }
                    console.log(timesbd)
                  }) */
                }
                // appendDate(endDate, allDates[i]);

                $(allDates[i]).find(".unavail").remove();
                $(allTimes[i]).find(".unavail").remove();
                $(locIDs[i]).find(".cinema-num").append(cinemas[j][0].cinemaNum);

                for(let l=0; l < times.length; l++){
                  if (schedule[k].timeID == times[l][0].timeID) {
                    startTime = times[l][0].startTime.hour + ":" + times[l][0].startTime.minute + " " + times[l][0].startTime.period;
                    // console.log(startTime)
                    appendTime(startTime, allTimes[i]);
                    endTime = times[l][0].endTime.hour + ":" + times[l][0].endTime.minute + " " + times[l][0].endTime.period;
                    // console.log(endTime)

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
        var startDate = new Date(startDate);
        var endDate = new Date(endDate);
        var newDate = new Date (startDate)
        const allDates  = []

        allDates.push(startDate)
        //get difference of the dates
        const date1 = new Date(startDate);
        const date2 = new Date(endDate);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        // console.log(diffDays + " days");

        for (let i=1; i < diffDays; i++){
          newDate = new Date (newDate.toLocaleString('en-us',{month:'long'}) + " " + (newDate.getDate()+1) + ", " + newDate.getFullYear())
          // console.log(newDate);
          // appendDate(newDate.toLocaleString('en-us',{month:'long', day:'numeric', year:'numeric'}), dateID)
          allDates.push(newDate)
        }
        allDates.push(endDate)
        return allDates;
      }

      function getTimesBetween (startTime, endTime, timeID) {
        var startPeriod = startTime.period;
        var newHour = startTime.hour;
        var newPeriod = startPeriod;
        var newTime;

        while (newHour != endTime.hour){
          // console.log(newHour != endTime.hour)
          for (let i=1; i <= 3; i++){
            newHour++;
            // console.log(newHour)
            if (newPeriod == 'AM' && newHour > 12){
              newHour = 1;
              newPeriod = 'PM';
              // console.log(newHour)
            }
          }
          newTime = newHour + ":" + startTime.minute + " " + newPeriod;
          // console.log("newtime: " + newTime);
          if (newHour != endTime.hour)
            appendTime(newTime, timeID);
        }


      }



      function appendDate(date, dateID) {
        // console.log(date)
        // console.log(dateID)
        var insert = 'onclick=\"changeText(event, \'' + date.toString() + '\', \'book-date\'';
        // alert(insert);
        $(dateID).append('<li>' + date + '</li>');
      }
      function appendTime(time, timeID) {
        var insert = 'onclick=\"changeText(event, \'' + time + '\', \'book-time\'';
        // alert(insert);
        $(timeID).append('<li>' + time + '</li>');
      }

    });

    /*$(".bookbutton").on('click', function() {

      // $.get('/getDateTime', {})
      // alert($("#book-date").text() + " on " + $("#book-time").text())


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

        for (let j in cinemas){
          //loop thru cinemas
          if (cinemas[j][0].location === loc){
            for (let k in schedule){
              if (schedule[k].cinemaID == cinemas[j][0].cinemaID){
                const viewing = schedule[k].viewingSched;
                // console.log(viewing)
                const currDate = new Date(viewing.viewDate)
                const stringD = currDate.toLocaleString('en-us',{month:'long'}) + " " + currDate.getDate() + ", " + currDate.getFullYear()
                console.log(stringD + " vs " + $("#book-date").text())
                if(stringD == $("#book-date").text()){
                  const currTime = viewing.viewTime
                  stringT = currTime.hour + ":" + currTime.minute + " " + currTime.period;
                  console.log(getAvailableSeats.cinemaID)
                  console.log(stringT + " vs " + $("#book-time").text())
                  if (stringT == $("#book-time").text()){
                    console.log(viewing)
                    console.log("found sched : " + stringD + " on " + stringT)
                    stop = true;
                    // getAvailableSeats(schedule[k])
                    buyTickets(schedule[k]);
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
    });*/

    function buyTickets (schedule){
      var schedID = schedule._id;
      let currRow = "invalid";
      let currCol = "invalid";
      var curr;

      // console.log("1 FOR " + schedID)

      $("#form1-col").on('change', function (){
        currRow = $("#form1-row option:selected").val()
        currCol = $("#form1-col option:selected").val()
        checkNow()
      })
      $("#form1-row").on('change', function (){
        currRow = $("#form1-row option:selected").val()
        currCol = $("#form1-col option:selected").val()
        checkNow()
      })

      function checkNow(){
        // console.log("2 FOR " + schedID)
        if (currRow != "invalid" && currCol != "invalid" ){
          curr = currRow + currCol;
          console.log(curr)
          return curr;
        }
      }

    }

    function getAvailableSeats(cinemaSched){
      // console.log("1 SHOWING SEATS FOR "+ cinemaSched.viewingSched._id)
      // console.log(cinema.seats)
      var allSeats = cinemaSched.viewingSched.seats;
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

      // console.log(availSeats)
      // console.log(takenSeats)
      // console.log(availSeats[0].seatName.charAt(0))
      // console.log(availSeats[0].seatName.charAt(1))

      var found = false;
      if(takenSeats.length > 0){
        // setTakenSeats(takenSeats, found, cinemaSched)
        $("#form1-col").on('change', function (){
          // console.log(takenSeats)
          let found = false;
          const currRow = $("#form1-row option:selected").val()
          const currCol = $("#form1-col option:selected").val()
          if (currRow != "invalid" && currCol != "invalid" ){
            for(let a in takenSeats){
              const row = takenSeats[a].seatName.charAt(0)
              const col = takenSeats[a].seatName.charAt(1)
              // console.log(currRow + " vs " + row + " : " + currCol + "==" + col)
              var curr1 = currRow + currCol
              // console.log(curr1 + " vs " + takenSeats[a].seatName)
              if (curr1 == takenSeats[a].seatName){
                // alert("Seat already taken")
                document.getElementsByClassName('error')[0].style.display = "block";
                found = true
              }
              else{
                document.getElementsByClassName('error')[0].style.display = "none";
              }
              if (found) break;
            }
          }
        })

        $("#form1-row").on('change', function (){
          // console.log(takenSeats)
          let found = false;
          const currRow = $("#form1-row option:selected").val()
          const currCol = $("#form1-col option:selected").val()
          if (currRow != "invalid" && currCol != "invalid"){
            for(let a in takenSeats){
              // const row = takenSeats[a].seatName.charAt(0)
              // const col = takenSeats[a].seatName.charAt(1)
              // console.log(currRow + " vs " + row + " : " + currCol + "==" + col)
              var curr2 = currRow + currCol
              // console.log(curr2 + " vs " + takenSeats[a].seatName)
              // console.log(curr2 == takenSeats[a].seatName)
              if (curr2 == takenSeats[a].seatName){
                // alert("Seat already taken")
                document.getElementsByClassName('error')[0].style.display = "block";
                found = true
                // document.getElementsByClassName('error')[0].innerHTML = "Seat already taken";
              }
              else{
                document.getElementsByClassName('error')[0].style.display = "none";
              }
              if (found) break;
            }
          }
        })
      }


        else{
          // console.log(takenSeats)
          // alert("no taken seats")
          // $("#form1-col option").each(function() {
          //   $(this).prop('disabled',false)
          //   console.log("resetting")
          // })
        }

    }

    function setTakenSeats (takenSeats, found, cinemaSched){
      // alert(takenSeats.length)
      $("#form1-row").on('change', function (){
        alert(takenSeats.length)
        // console.log("2 CHECK SEATS FOR "+ cinemaSched.viewingSched._id)

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

        for (let j=0; j < takenSeats.length; j++) {
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
        });
    }


    $('#schedule').css({ visibility : 'visible' });
    $("#choosesched").css({ visibility : 'visible' });
    $(".choosesched").css({ visibility : 'visible' });
    $(".booknow").css({ display : 'flex' });
    // $('.booknow').css({ display : 'flex' });






  });

  $(".booknow").on('click', function (){
    var id = $("#keepID").text()
    // console.log(id)
    // alert($("#book-date").text() + " on " + $("#book-time").text())
    $("#loc-form").submit()
    $("#date-form").submit()
    $("#time-form").submit()
    const loc = $("#loc-form option:selected").val()
    const date = $("#date-form option:selected").val()
    const time = $("#time-form option:selected").val()
    // console.log(date+" on "+time + " in " + loc)

    window.location.href = '/movie-details/' + id + '/booking/' + loc + '/' + date +'/' + time
    // $.get('/movie-details/' + id + '/booking', {location: loc, date: date, time: time}, function(){
    //
    // })
    // $.get('/setBooking', {id:id, date: date, time:time}, function (result) {
    //   // console.log("success")
    //   // console.log(result.date + " on " + result.time)
    //   window.location.href = '/movie-details/'+result.id+'/booking?id=' + id +'&date=' + date + '&time=' + time
    //   window.location.href = '/booking?id=' + id +'&date=' + date + '&time=' + time
    // })
    // window.location.href = '/movie-details/'+id+'/booking?date=' + date + '&time=' + time
  })

})
