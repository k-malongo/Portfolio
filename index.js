document.getElementById("about").style.color = "mediumslateblue	";
document.getElementById("header").addEventListener("mouseover", mouseOver);
document.getElementById("header").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("header").style.color = "red";
}

function mouseOut() {
  document.getElementById("header").style.color = "black";
}
const btn1 = document.getElementById('btn');

btn1.addEventListener("click", function () {

    btn1.style.backgroundColor = 'yellow'
    
    });