const randomBoxRef = document.querySelector('.random-box');
const boxCounter = document.querySelector('.random-box__counter');


let count = 0;
let documentCounter = 0;

setInterval(() => {
    randomBoxRef.style.top = `${Math.random() * window.innerHeight - 150}px`;
    randomBoxRef.style.left = `${Math.random() * window.innerWidth - 150}px`;
}, 1000);

randomBoxRef.addEventListener('click', () => {
    count++;

    boxCounter.textContent = count;
});


    