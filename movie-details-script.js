function changeTab(locName) {
  var i;
  var x = document.getElementsByClassName("location");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(locName).style.display = "block";
}
