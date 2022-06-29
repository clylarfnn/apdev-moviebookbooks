function changeTab(event, tab) {
    var i, x, profileTop;
    x = document.getElementsByClassName("tab");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    profileTop = document.getElementsByClassName("profileTop");
    for (i = 0; i < x.length; i++) {
        profileTop[i].className = profileTop[i].className.replace(" current", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.firstElementChild.className += " current";
    changeLoc(tab)
    removeActv("option"); //notsure
    removeActv("option2");
}