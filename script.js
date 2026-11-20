let seats=[];
for(let i=1;i<=15;i++) seats.push({no:i,booked:false,reg:""});
let selected=0;

function showSeats(){
  let html="";
  seats.forEach(s=>{
    let c=s.booked?"seat booked":s.no==selected?"seat selected":"seat";
    html+=`<div class="${c}" onclick="selectSeat(${s.no})">${s.no}</div>`;
  });
  document.getElementById("seatBox").innerHTML=html;
}
function selectSeat(no){
  let s=seats.find(x=>x.no==no);
  if(s.booked) return alert("Already Booked");
  selected=no;
  document.getElementById("selectedSeat").innerText="Seat "+no;
  showSeats();
}
function bookSeat(){
  let name=document.getElementById("name").value;
  let reg=document.getElementById("reg").value;
  let date=document.getElementById("date").value;
  if(!selected||!name||!reg||!date) return alert("Fill all details and select seat");
  let s=seats.find(x=>x.no==selected);
  s.booked=true; s.reg=reg;
  document.getElementById("myBooking").innerText=name+" - Seat "+selected+" | "+date;
  alert("Booked Successfully!");
  selected=0; showSeats();
}
function cancelBooking(){
  let r=document.getElementById("cancelReg").value;
  let s=seats.find(x=>x.booked&&x.reg==r);
  if(!s) return alert("No booking found");
  s.booked=false; s.reg="";
  document.getElementById("myBooking").innerText="Booking Cancelled";
  showSeats();
}
showSeats();