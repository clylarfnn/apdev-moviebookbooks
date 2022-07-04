function changeTab(event, tab) {
  var i, x, option;
  x = document.getElementsByClassName("tab");

  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  option = document.getElementsByClassName("option");
  for (i = 0; i < x.length; i++) {
    option[i].className = option[i].className.replace(" current", "");
  }
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.firstElementChild.className += " current";
  changeLoc(tab)
  removeActv("option"); //notsure
  removeActv("option2");
}

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

  var ogTitle;

  function openEdit() {
    document.getElementById("startEdit").style.display = "none";
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

  $(document).ready(function () {
    var date = $("#bday").text()
    var bday = new Date(date)
    const bdate = bday.toLocaleString('en-us',{month:'long'}) + " " + bday.getDate() + ", " + bday.getFullYear()
    document.getElementById('bday').innerHTML = bdate
  })
