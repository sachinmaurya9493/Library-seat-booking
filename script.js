let seats = [];
for(let i=1; i<=20; i++){ seats.push({no:i, booked:false, ownerReg:"", ownerName:""}); }
let selected = 0;

function showSeats(){
  let html = "";
  seats.forEach(s=>{
    let cls = s.booked ? "seat booked" : (s.no==selected ? "seat selected" : "seat");
    html += `<div class="${cls}" onclick="selectSeat(${s.no})">Seat ${s.no}</div>`;
  });
  document.getElementById("seatBox").innerHTML = html;
  let b = seats.filter(s=>s.booked).length;
  document.getElementById("bookedCount").innerText = b;
  document.getElementById("avail").innerText = 20 - b;
}

function selectSeat(no){
  let s = seats.find(x=>x.no==no);
  if(s.booked){ alert("Ye seat pehle se Booked hai."); return; }
  selected = no;
  document.getElementById("selectedSeat").innerText = "Seat " + no;
  showSeats();
}

function bookSeat(){
  let name = document.getElementById("name").value;
  let reg = document.getElementById("reg").value;
  let date = document.getElementById("date").value;
  let slot = document.getElementById("slot").value;
  let resource = document.getElementById("resource").value;
  if(selected==0){ alert("Select a seat first"); return; }
  if(name=="" || reg=="" || date==""){ alert("Please fill all details"); return; }
  let s = seats.find(x=>x.no==selected);
  s.booked = true; s.ownerReg = reg; s.ownerName = name;
  document.getElementById("myBooking").innerText = name + " (" + reg + ") - Seat " + selected + " | Date: " + date + " | Slot: " + slot + " | Resource: " + resource;
  alert("Seat Booked Successfully!");
  selected = 0; showSeats();
}

function cancelBooking(){
  let cancelReg = document.getElementById("cancelReg").value;
  if(cancelReg==""){ alert("Apna Reg No dalo"); return; }
  let mySeat = seats.find(x=>x.booked && x.ownerReg==cancelReg);
  if(!mySeat){ alert("Is Reg No par koi booking nahi mili."); return; }
  mySeat.booked = false; mySeat.ownerReg = ""; mySeat.ownerName = "";
  document.getElementById("myBooking").innerText = "Booking Cancelled";
  alert("Tumhari booking cancel ho gayi!"); showSeats();
}

showSeats();
