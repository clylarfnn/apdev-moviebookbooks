


function submitCinema() {
  document.getElementById("cinema-editor").style.visibility = "visible";
}

function addDateInput() {
  $("#appendDate").append("<input type='date' name='newDate' class='unDates' required><br>");
}

function submitDates() {
  document.getElementById("unDate").style.visibility = "visible";
  document.getElementById("time-editor").style.visibility = "visible";
}
