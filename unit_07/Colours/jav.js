document.getElementById("red").addEventListener("mouseover", reds);
document.getElementById("orange").addEventListener("mouseover", oranges);
document.getElementById("yellow").addEventListener("mouseover", yellows);
document.getElementById("lightGreen").addEventListener("mouseover", lightGreens);
document.getElementById("green").addEventListener("mouseover", greens);
document.getElementById("cyan").addEventListener("mouseover", cyans);
document.getElementById("lightBlue").addEventListener("mouseover", lightBlues);
document.getElementById("blue").addEventListener("mouseover", blues);


function reds(){
  document.getElementById("black").style.backgroundColor = "red";
}
function oranges(){
  document.getElementById("black").style.backgroundColor = "orange";
}
function yellows(){
  document.getElementById("black").style.backgroundColor = "yellow";
}
function lightGreens(){
  document.getElementById("black").style.backgroundColor = "lightGreen";
}
function greens(){
  document.getElementById("black").style.backgroundColor = "green";
}
function cyans(){
  document.getElementById("black").style.backgroundColor = "cyan";
}
function lightBlues(){
  document.getElementById("black").style.backgroundColor = "lightBlue";
}
function blues(){
  document.getElementById("black").style.backgroundColor = "blue";
}
