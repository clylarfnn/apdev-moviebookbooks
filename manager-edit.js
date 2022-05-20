


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
  document.getElementById("submitEdit").style.display = "block";
}

var ogTitle;

function openEdit() {
  document.getElementById("startEdit2").style.display = "none";
  ogTitle = $("#movies-select2 option:selected").text();
  $("#movie-title").append('Currently Editing <span style="color:#B5179E">' + ogTitle + '</span>');
  document.getElementById("editMovie").style.visibility = "visible";
  document.getElementById("return").style.display = "block";
  document.getElementById("submitEdit").style.display = "block";
}

function submitAll() {
  var title = $("#upTitle").val();

  if (title.length == 0){
    title = ogTitle;
  }

  document.getElementById("editMovie").style.display = "none";
  document.getElementById("submitEdit").style.display = "none";
  $("#movie-title").text('You have succesfully edited ' + title);
}

function submitNow() {
  document.getElementById("add").style.display = "none";
  document.getElementById("edit").style.display = "none";
  document.getElementById("submitEdit").style.display = "none";
  $("#editor-h2").text("Edit Success!");
}
