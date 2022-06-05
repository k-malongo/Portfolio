document.getElementById("logo").addEventListener("mouseover", mouseOver);
document.getElementById("logo").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("logo").style.color = "red";
}

function mouseOut() {
  document.getElementById("logo").style.color = "black";
}