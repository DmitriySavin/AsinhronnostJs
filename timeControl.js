const inputRef = document.querySelector(".input");
let timerId;

function startInterval() {
clearInterval(timerId)

  const interval = Number(inputRef.value) || 1000;

 timerId = setInterval(() => {
    console.log('Привет');
  }, interval);
}

inputRef.addEventListener('input', startInterval)
startInterval();
