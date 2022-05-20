


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

function submitMovie() {
  var title = $("#title").val();
  $(".msg").append('You added the movie "' + title + '"!');
}

function addMov() {
  document.getElementById("add").style.display = "block";
  document.getElementById("startEdit").style.display = "none";
  document.getElementById("return").style.display = "block";
}

function editCinema() {
  document.getElementById("edit").style.display = "block";
  document.getElementById("startEdit").style.display = "none";
  document.getElementById("return").style.display = "block";
}
