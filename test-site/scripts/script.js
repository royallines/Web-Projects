let point1 = 0;
let point2 = 0;
document.getElementById("home-count").textContent = point1;
document.getElementById("guest-count").textContent = point2;
// home-count

function pointOne() {
  point1 += 1;
  let pointEl = point1;
  document.getElementById("home-count").textContent = pointEl;
}
function pointTwo() {
  point1 += 2;
  let pointEl = point1;
  document.getElementById("home-count").textContent = pointEl;
}

function pointThree() {
  point1 += 3;
  let pointEl = point1;
  document.getElementById("home-count").textContent = pointEl;
}

// guest-count

function pointOneEl() {
  point2 += 1;
  let pointEl = point2;
  document.getElementById("guest-count").textContent = pointEl;
}
function pointTwoEl() {
  point2 += 2;
  let pointEl = point2;
  document.getElementById("guest-count").textContent = pointEl;
}

function pointThreeEl() {
  point2 += 3;
  let pointEl = point2;
  document.getElementById("guest-count").textContent = pointEl;
}

function newgame() {
  point1 = 0;
  point2 = 0;
  document.getElementById("guest-count").textContent = 0;
  document.getElementById("home-count").textContent = 0;
}
