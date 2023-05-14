"use strict";
let interval = {};
let screenWidth = 0;
const lamborghini = "./lamborgini.png";
const mustang = "./mustang.png";
const mclaren = "./mclaren.png";
const firstSelect = document.getElementById("firstSelect");
const firstCar = document.getElementById("car1");
let speed1 = document.getElementById("speed1").value;
let speed2 = document.getElementById("speed2").value;
firstSelect.addEventListener("change", function () {
  const selectedOption = firstSelect.options[firstSelect.selectedIndex];
  if (selectedOption.value == 1) {
    firstCar.src = mclaren;
  } else if (selectedOption.value == 2) {
    firstCar.src = lamborghini;
  } else if (selectedOption.value == 3) {
    firstCar.src = mustang;
  }
});
const secondSelect = document.getElementById("secondSelect");
const secondCar = document.getElementById("car2");
secondSelect.addEventListener("change", function () {
  const selectedOption = secondSelect.options[secondSelect.selectedIndex];
  if (selectedOption.value == 1) {
    secondCar.src = mclaren;
  } else if (selectedOption.value == 2) {
    secondCar.src = lamborghini;
  } else if (selectedOption.value == 3) {
    secondCar.src = mustang;
  }
});
function initMovement(car, speed) {
  let carObj = document.getElementById(car);
  let left = 0;
  interval[car] = setInterval(function () {
    left += speed / 100;
    carObj.style.left = left + "px";
    if (left >= screenWidth) {
      for (let i in interval) {
        clearInterval(interval[i]);
      }
      document.getElementById("start").disabled = false;
      document.getElementById("stop").disabled = true;
      document.getElementById("start").style.opacity = 1;
      if (speed1 > speed2) {
        alert("Winer is First Car !");
      } else if (speed1 < speed2) {
        alert("Winer is Second Car !");
      } else {
        alert("It's Draw! Race Again");
      }
    }
  }, 10);
}
function start() {
  speed1 = document.getElementById("speed1").value;
  speed2 = document.getElementById("speed2").value;
  initMovement("car1", speed1);
  initMovement("car2", speed2);
  document.getElementById("start").disabled = true;
  document.getElementById("start").style.opacity = 0.3;
  document.getElementById("stop").style.opacity = 1;
  document.getElementById("stop").disabled = false;
}
function stop() {
  for (let i in interval) {
    clearInterval(interval[i]);
  }
  document.getElementById("start").disabled = false;
  document.getElementById("start").style.opacity = 1;
  document.getElementById("stop").disabled = true;
  document.getElementById("stop").style.opacity = 0.3;
}
function printScreenWidth() {
  screenWidth = window.innerWidth;
}
printScreenWidth();
window.addEventListener("resize", () => {
  printScreenWidth();
});
