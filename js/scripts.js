var ticketCost = 500;
var hotelCost = 250;
var museumCost = 120;
var USD_TO_UZS = 9433.34;
var EURO_TO_UZS = 10354.03;

ticketCost = Math.round(ticketCost * USD_TO_UZS);
hotelCost = Math.round(hotelCost * USD_TO_UZS);
museumCost = Math.round(museumCost * EURO_TO_UZS);


var totalExpense = ticketCost + hotelCost + museumCost;
document.querySelector('.total-cost').textContent = (totalExpense + ' so\'m');

var currentMoney = parseInt(prompt('QANCHA PULING BOR?').trim(), 10);
document.querySelector('.alisher-money').textContent = (currentMoney + ' so\'m');

if (totalExpense <= currentMoney) {
  document.querySelector('.answer').textContent = ('ALISHER PULING YETADI, LIKIN JS DARSLARIDAN BARIBIR QOCHIB KETOLMAYSAN!')

  var element = document.getElementById("yes");
  element.classList.add("d-flex");
  
} else {
  document.querySelector('.answer').textContent = ('ALISHER PUL YETMAS EKAN, ENDI JS DARSLARIDAN QOCHIB KETOLMAYSAN!');

  var element = document.getElementById("no");
  element.classList.add("d-flex");
}
