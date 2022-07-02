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

  $.get('/checkUser', function(result){
    console.log(result)
    if(result){
      console.log("hide logins")
      $(".login2").css({ display : 'none' })
      $(".register").css({ display : 'none' })
      $(".logout").css({ display : 'block' })
    }
    else{
      console.log("show logins")
      $(".login2").css({ display : 'block' })
      $(".register").css({ display : 'block' })
      $(".logout").css({ display : 'none' })
    }
  })

  // $(".logout").on('click', function(){
  //   window.location.href = '/'
  // })


  $.get('/checkScheds', function (result) {
    if(result){
      var schedules = result
      // console.log(schedules)
      var startDate, endDate;

      const allDates = [], allTimes = [];
      // console.log(schedules[0].cinemaID)
      // console.log(schedules[0].viewingSched)

      for(let i=0; i < schedules.length; i++) {
        startDate = schedules[i].startDate
        endDate = schedules[i].endDate

        setDates(startDate, endDate, schedules[i])
        // allDates.push(startDate)

      }

    }
      // console.log("done checking")

  });

  function setDates(startDate, endDate, schedule) {
    var betDates = getDatesBetween (startDate, endDate)
    console.log(schedule.cinemaID)
    console.log("dates:")
    console.log(betDates)
    // betDates.splice(0, 0, startDate)
    // betDates.splice(betDates.length, 0, endDate)
    setTimes(schedule.timeID, betDates, schedule);

    deleteSched(schedule)


  }

  function setTimes (timeID, betDates, schedule){
    var startTime, endTime;
    $.get('/getTimeID', {timeID: timeID}, function (result) {
      const schedTime = result;
      startTime = schedTime.startTime
      endTime = schedTime.endTime
      var betTimes = getTimesBetween (startTime, endTime)
      console.log("times:")
      console.log(betTimes)

      for(let p in betDates){
        for(let m in betTimes){
          newTime = betTimes[m].hour + ":" + betTimes[m].minute + " " + betTimes[m].period;
          // console.log(betDates[p].toLocaleString('en-us',{month:'long', day:'numeric', year:'numeric'}) + " on " + newTime)
        }
      }

      var seats = getSeats();
      // console.log(seats)

      $.get('/addViewing', {schedule: schedule, allDates: betDates, allTimes: betTimes, seats: seats, function(result) {
        // console.log("done")
        }
      })
    })
  }

  function getDatesBetween (startDate, endDate) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    newDate = new Date (startDate)
    allDates = []

    allDates.push(startDate)

    //get difference of the dates
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays + " days");

    for (let i=1; i < diffDays; i++){
      newDate = new Date (newDate.toLocaleString('en-us',{month:'long'}) + " " + (newDate.getDate()+1) + ", " + newDate.getFullYear())
      // console.log(newDate);
      allDates.push(newDate)
      // appendDate(newDate.toLocaleString('en-us',{month:'long', day:'numeric', year:'numeric'}), dateID)
    }
    allDates.push(endDate)
    return allDates;
  }

  function deleteSched(schedule) {
    //call delete sched (delete internal, dont delete from sched array)
    // console.log(schedule._id)
    $.get('/deleteSched', {_id: schedule._id}, function (result) {
      // console.log('deleted')
    })

  }


  function getSeats () {
    var seats= [
                 {seatName: 'A1', status: 'Available'}, {seatName: 'A2', status: 'Available'}, {seatName: 'A3', status: 'Available'}, {seatName: 'A4', status: 'Available'}, {seatName: 'A5', status: 'Available'}, {seatName: 'A6', status: 'Available'}, {seatName: 'A7', status: 'Available'}, {seatName: 'A8', status: 'Available'},
                 {seatName: 'B1', status: 'Available'}, {seatName: 'B2', status: 'Available'}, {seatName: 'B3', status: 'Available'}, {seatName: 'B4', status: 'Available'}, {seatName: 'B5', status: 'Available'}, {seatName: 'B6', status: 'Available'}, {seatName: 'B7', status: 'Available'}, {seatName: 'B8', status: 'Available'},
                 {seatName: 'C1', status: 'Available'}, {seatName: 'C2', status: 'Available'}, {seatName: 'C3', status: 'Available'}, {seatName: 'C4', status: 'Unavailable'}, {seatName: 'C5', status: 'Unavailable'}, {seatName: 'C6', status: 'Available'}, {seatName: 'C7', status: 'Available'}, {seatName: 'C8', status: 'Available'},
                 {seatName: 'D1', status: 'Available'}, {seatName: 'D2', status: 'Available'}, {seatName: 'D3', status: 'Available'}, {seatName: 'D4', status: 'Unavailable'}, {seatName: 'D5', status: 'Unavailable'},{seatName: 'D6', status: 'Available'}, {seatName: 'D7', status: 'Available'}, {seatName: 'D8', status: 'Available'},
                 {seatName: 'E1', status: 'Available'}, {seatName: 'E2', status: 'Available'}, {seatName: 'E3', status: 'Available'}, {seatName: 'E4', status: 'Unavailable'}, {seatName: 'E5', status: 'Unavailable'},{seatName: 'E6', status: 'Available'}, {seatName: 'E7', status: 'Available'}, {seatName: 'E8', status: 'Available'},
                 {seatName: 'F1', status: 'Available'}, {seatName: 'F2', status: 'Available'}, {seatName: 'F3', status: 'Available'}, {seatName: 'F4', status: 'Available'}, {seatName: 'F5', status: 'Available'}, {seatName: 'F6', status: 'Available'}, {seatName: 'F7', status: 'Available'}, {seatName: 'F8', status: 'Available'},
                 {seatName: 'G1', status: 'Available'}, {seatName: 'G2', status: 'Available'}, {seatName: 'G3', status: 'Available'}, {seatName: 'G4', status: 'Available'}, {seatName: 'G5', status: 'Available'}, {seatName: 'G6', status: 'Available'}, {seatName: 'G7', status: 'Available'}, {seatName: 'G8', status: 'Available'},
                 {seatName: 'H1', status: 'Available'}, {seatName: 'H2', status: 'Available'}, {seatName: 'H3', status: 'Available'}, {seatName: 'H4', status: 'Available'}, {seatName: 'H5', status: 'Available'}, {seatName: 'H6', status: 'Available'}, {seatName: 'H7', status: 'Available'}, {seatName: 'H8', status: 'Available'}
                      ]
    // $.get('/addNewSeat', {seat: seats[0]}, function(result) {
    //
    // })
    return seats;
  }

  function getTimesBetween (startTime, endTime) {
    var startPeriod = startTime.period;
    var newHour = startTime.hour;
    var newPeriod = startPeriod;
    var newTime;
    var allTimes = []

    allTimes.push(startTime)


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
      // newTime = newHour + ":" + startTime.minute + " " + newPeriod;
      newTime = {hour: newHour, minute: startTime.minute, period: newPeriod}
      // console.log("newtime: " + newTime);
      if (newHour != endTime.hour){
        // $.get('/addNewTime', {newTime: newTime}, function (result) {
        //   console.log("added")
        // })
        allTimes.push(newTime)
      }

    }
    allTimes.push(endTime)
    return allTimes;
  }

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
