// var info = ('ALISHER PULING BORMI O\'ZI?');
// alert(info);
// var currentMoney = prompt('QANCHA PULING BOR?').trim();


// var massage = ('YOUR AMOUNT: ' + currentMoney);
  
// console.log(massage);
// alert(massage);

var flight = 500;
var hotel = 250;
var museum = 120;
var usd = 9433.34;
var euro = 10354.03;

flight = Math.round(flight * usd);
hotel = Math.round(hotel * usd);
museum = Math.round(museum * euro);


var expence = flight + hotel + museum;
document.querySelector('.total-cost').textContent = (expence + ' so\'m');

var currentMoney = prompt('QANCHA PULING BOR?').trim();
document.querySelector('.alisher-money').textContent = (currentMoney + ' so\'m');

if (expence <= currentMoney) {
  document.querySelector('.answer').textContent = ('ALISHER PULING YATADI, LIKIN JS DARSLARIDAN BARIBIR QOCHIB KETOLMAYSAN!')

  var element = document.getElementById("yes");
  element.classList.add("d-flex");
  
} else {
  document.querySelector('.answer').textContent = ('ALISHER PUL YETMAS EKAN, ENDI JS DARSLARIDAN QOCHIB KETOLMAYSAN!');

  var element = document.getElementById("no");
  element.classList.add("d-flex");
}
