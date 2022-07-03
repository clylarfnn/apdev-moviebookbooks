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
    evt.currentTarget.firstElementChild.className += " current";
}