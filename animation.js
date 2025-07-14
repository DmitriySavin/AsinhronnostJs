const boxRef = document.querySelector(".box");

let x = 0;
let y = 0;

document.addEventListener('mousemove', (event) => {
  x = event.clientX;
  y = event.clientY;
});

setInterval(() => {
  boxRef.style.top = `${y}px`;
  boxRef.style.left = `${x}px`;
}, 2000);