
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
  removeActv("option");
  removeActv("option2");
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

function showForm() {
  var qty, i, x, hide;
  qty = document.getElementById("quantity").value;

  x = document.getElementsByClassName("form");
  for (i = 0; i < qty; i++) {
    x[i].style.display = "block";
  }

  hide = x.length - qty;
  if (hide == 2){
    x[1].style.display = "none";
    x[2].style.display = "none";
  }
  if (hide == 1){
    x[2].style.display = "none";
  }
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
}

function updateText(){
  var val;
  val = document.getElementById("form1-row");
  text = val.options[val.selectedIndex].text;
  alert(text);
  // document.getElementById(change_id).innerHTML = val;
}

function getSeat(formId, seat) {
  // var val, text;
  //
  // val = document.getElementById(formId);
  // text = val.options[val.selectedIndex].value;
  // document.getElementById(seat).innerHTML = text;

  // var f1r, f1c;
  // f1r = document.getElementById("form1-row").text;
  // f1c = document.getElementById("form1-col").text;
  //
  // document.getElementById("seat-row1").innerHTML = f1r;
  // document.getElementById("seat-col1").innerHTML = f1c;

  var f1r, f1c, f2r, f2c, f3r, f3c;
  f1r = document.getElementById("form1-row").value;
  f1c = document.getElementById("form1-col").value;
  f2r = document.getElementById("form2-row").value;
  f2c = document.getElementById("form2-col").value;
  f3r = document.getElementById("form3-row").value;
  f3c = document.getElementById("form3-col").value;

  f1c=23;
  document.getElementById("seat-row1").innerHTML = f1r;
  document.getElementById("seat-col1").innerHTML = f1c;
  document.getElementById("seat-row2").innerHTML = f2r;
  document.getElementById("seat-col2").innerHTML = f2c;
  document.getElementById("seat-row3").innerHTML = f3r;
  document.getElementById("seat-col3").innerHTML = f3c;
}
