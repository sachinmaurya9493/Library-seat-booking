function bookSeat(btn){
  btn.classList.toggle("booked");
  if(btn.classList.contains("booked")){
    document.getElementById("msg").innerText = "Seat " + btn.innerText + " Booked Ho Gayi!";
  } else {
    document.getElementById("msg").innerText = "Seat " + btn.innerText + " Free Ho Gayi!";
  }
}
