
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
}

function changeLoc(locName) {
  var text;
  switch (locName) {
    case "loc1":
      text = "Location 1"
      break;

    case "loc2":
      text = "Location 2"
      break;

    case "loc3":
      text = "Location 3"
      break;

    case "loc4":
      text = "Location 4"
      break;

    case "loc5":
      text = "Location 5"
      break;
  }
  document.getElementById('book-loc').innerHTML = text;
  document.getElementById('book-date').innerHTML = "[date]";
  document.getElementById('book-time').innerHTML = "[time]";
}

function changeText(text, change_id) {
  document.getElementById(change_id).innerHTML = text;
}

function showDiv(div_id) {
   document.getElementById(div_id).style.display = "block";
}
