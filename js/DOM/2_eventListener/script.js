let box = document.querySelector("#box");
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  let clr1 = Math.floor(Math.random() * 256);
  let clr2 = Math.floor(Math.random() * 256);
  let clr3 = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${clr1},${clr2},${clr3})`;
});
