let k1 = document.getElementById("1");
let s1 = new Audio("sounds/3.mp3");
k1.addEventListener("mouseenter", () => {
  s1.currentTime = 0;
  s1.play();
});

let k2 = document.getElementById("2");
let s2 = new Audio("sounds/2.mp3");
k2.addEventListener("mouseenter", () => {
  s2.currentTime = 0;
  s2.play();
});

let k3 = document.getElementById("3");
let s3 = new Audio("sounds/3.mp3");
k3.addEventListener("mouseenter", () => {
  s3.currentTime = 0;
  s3.play();
});

let k4 = document.getElementById("4");
let s4 = new Audio("sounds/4.mp3");
k4.addEventListener("mouseenter", () => {
  s4.currentTime = 0;
  s4.play();
});

let k5 = document.getElementById("5");
let s5 = new Audio("sounds/5.mp3");
k5.addEventListener("mouseenter", () => {
  s5.currentTime = 0;
  s5.play();
});

let k6 = document.getElementById("6");
let s6 = new Audio("sounds/6.mp3");
k6.addEventListener("mouseenter", () => {
  s6.currentTime = 0;
  s6.play();
});

let k7 = document.getElementById("7");
let s7 = new Audio("sounds/7.mp3");
k7.addEventListener("mouseenter", () => {
  s7.currentTime = 0;
  s7.play();
});

let k8 = document.getElementById("8");
let s8 = new Audio("sounds/8.mp3");
k8.addEventListener("mouseenter", () => {
  s8.currentTime = 0;
  s8.play();
});

let k9 = document.getElementById("9");
let s9 = new Audio("sounds/9.mp3");
k9.addEventListener("mouseenter", () => {
  s9.currentTime = 0;
  s9.play();
});

let k10 = document.getElementById("10");
let s10 = new Audio("sounds/10.mp3");
k10.addEventListener("mouseenter", () => {
  s10.currentTime = 0;
  s10.play();
});

let k11 = document.getElementById("11");
let s11 = new Audio("sounds/11.mp3");
k11.addEventListener("mouseenter", () => {
  s11.currentTime = 0;
  s11.play();
});

document.addEventListener("keydown", function (dets) {
  if (dets.repeat) return;

  if (dets.code === "Digit1") {
    s3.currentTime = 0;
    s1.play();
  }
  if (dets.code === "Digit2") {
    s2.currentTime = 0;
    s2.play();
  }
  if (dets.code === "Digit3") {
    s3.currentTime = 0;
    s3.play();
  }
  if (dets.code === "Digit4") {
    s4.currentTime = 0;
    s4.play();
  }
  if (dets.code === "Digit5") {
    s5.currentTime = 0;
    s5.play();
  }
  if (dets.code === "Digit6") {
    s6.currentTime = 0;
    s6.play();
  }
  if (dets.code === "Digit7") {
    s7.currentTime = 0;
    s7.play();
  }
  if (dets.code === "Digit8") {
    s8.currentTime = 0;
    s8.play();
  }
  if (dets.code === "Digit9") {
    s9.currentTime = 0;
    s9.play();
  }

  if (dets.code === "Digit0") {
    s10.currentTime = 0;
    s10.play();
  }

  if (dets.code === "Minus") {
    s11.currentTime = 0;
    s11.play();
  }
});
