let seats = [];
for(let i=1; i<=20; i++){ seats.push({no:i, booked:false}); }
let selected = 0;

function showSeats(){
  let html = "";
  seats.forEach(s=>{
    let cls = s.booked ? "seat booked" : "seat";
    html += `<div class="${cls}" onclick="selectSeat(${s.no})">Seat ${s.no}</div>`;
  });
  document.getElementById("seatBox").innerHTML = html;
  let b = seats.filter(s=>s.booked).length;
  document.getElementById("bookedCount").innerText = b;
  document.getElementById("avail").innerText = 20 - b;
}

function selectSeat(no){
  let s = seats.find(x=>x.no==no);
  if(s.booked){ alert("Already Booked"); return; }
  selected = no;
  document.getElementById("selectedSeat").innerText = "Seat " + no;
}

function bookSeat(){
  let name = document.getElementById("name").value;
  if(selected==0){ alert("Select a seat first"); return; }
  if(name==""){ alert("Enter your name"); return; }
  seats.find(x=>x.no==selected).booked = true;
  document.getElementById("myBooking").innerText = name + " - Seat " + selected;
  alert("Seat Booked Successfully!");
  showSeats();
}

showSeats();
