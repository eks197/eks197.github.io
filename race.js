//JavaScript for race to work

var msu = document.getElementById('bear');
var mizzou = document.getElementById('tiger');
var placeB;
var placeT;
var msu_pic = document.getElementById('msuPic');
var mizzou_pic = document.getElementById('mizzouPic');

function initialize()
{

placeB = 0;
placeT = 0;
msu.style.left = placeB + 'px';
mizzou.style.left = placeT + 'px';
msu_pic.src = "msu_bear.png";
mizzou_pic.src = "mizzou_tiger.png";
msu_pic.style.display = "block";
mizzou_pic.display = "block";
document.getElementById('redlight').style.display = "block";
document.getElementById('greenlight').style.display = "none";
}

function startRace()
{
initialize();
document.getElementById('redlight').style.display = "none";
document.getElementById('greenlight').style.display = "block";

var timer = setInterval(frame, 100);
function frame() 
{
    if (placeB > 500 || placeT > 500 ){
      clearInterval(timer);
      posB > posG ? msuWin() : mizzouWin();
    } else {
      var randB = Math.floor(Math.random() * 25);
      var randT = Math.floor(Math.random() * 25);
      placeB += randB;
      placeT += randT;
      msu.style.left = placeB + 'px';
      mizzou.style.left = placeT + 'px';

    }

function msuWin ()
{
window.alert("Go Bears!");
}

function mizzouWin()
{
window.alert("Dang it Mizzou Won :(");
}