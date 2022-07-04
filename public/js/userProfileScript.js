function changeTab(evt, tab) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tabInfo");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("profileTop");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" current", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " current";
}

$(document).ready(function () {
  var date = $("#bday").text()
  var bday = new Date(date)
  const bdate = bday.toLocaleString('en-us',{month:'long'}) + " " + bday.getDate() + ", " + bday.getFullYear()
  document.getElementById('bday').innerHTML = bdate

  var dates = document.getElementsByClassName("date")
  for(i=0; i<dates.length; i++){
        var dateText = $(dates[i]).text()
        var day = new Date(dateText)
        const formatted = day.toLocaleString('en-us',{month:'long'}) + " " + day.getDate() + ", " + day.getFullYear()
        document.getElementsByClassName("date")[i].innerHTML = formatted
    }

  $.get('/checkBookingStatus', function (result) {})

  $('#bookingDetails').on('click', '.delete', function () {
        var bookingID = $(this).parent().find(".movie").atrr('id')
        console.log(bookingID)
        var card = $(this).parent().find(".list").children(".details");
        var booking = {
          movieName:  $(card[0]).text(),
          date: $('.date').text(),
          time: $(card[2]).text(),
          cinemaID:  $(card[3]).text()
        }
        console.log(booking)

        // $.get('/cancelbooking', {booking:booking}, function (result) {});
        // $(this).parent().remove();
    });

})
