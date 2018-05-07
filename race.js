//JavaScript for race to work

var msu = document.getElementById('msu');
var mizzou = document.getElementById('mizzou');
var placeB;
var placeT;
var lightR = document.getElementById('redlight');
var lightG = document.getElementById('greenlight');

function lightOn() {
  lightR.style.display = 'none';
  lightG.style.display = 'block';
}

function initialize() {

  placeB = 0;
  placeT = 0;
  msu.style.paddingLeft = placeB + '%';
  mizzou.style.paddingLeft = placeT + '%';

  lightOn();
}

function startRace() {
  initialize();

  var timer = setInterval(frame, 100);
  function frame() {
    if (placeB > 100 || placeT > 100) {
      clearInterval(timer);
      placeB > placeT ? msuWin() : mizzouWin();
    } else {
      placeB += Math.floor(Math.random() * 15);
      placeT += Math.floor(Math.random() * 15);
      msu.style.paddingLeft = placeB + '%';
      mizzou.style.paddingLeft = placeT + '%';
    }
  }
}

function msuWin() {
  window.alert("Go Bears!");
}

function mizzouWin() {
  window.alert("Dang it Mizzou Won :(");
}