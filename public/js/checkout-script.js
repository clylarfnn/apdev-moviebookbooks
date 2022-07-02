$(document).ready(function () {

  //check seat if value is not undefined, make visible
  let ctr =0;
  let seats = []

  $(".seats").each(function (){
    if ($(this).text() != 'undefined'){
      $(this).css({visibility: 'visible'})
      ctr++;
      seats.push($(this).text())
    }
  })
  for(let i=0; i < ctr; i++){
    document.getElementsByClassName('prices')[i].style.visibility = 'visible';
  }
  //$('#test').attr('class');
  var price = $('#prices').attr('class')
  // console.log(price)
  var total = price*ctr
  document.getElementById('total').innerHTML = total

  var viewID = $('#time-date').attr('class')
  console.log(viewID)
  console.log(seats)

  $('#confirm').on('click', function() {
    alert("paying")

    $.get('/paid', {id: viewID, seats: seats})
  })
})
