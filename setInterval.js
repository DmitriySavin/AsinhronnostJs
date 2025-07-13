let count = 0;

const setInteval = setInterval(() => {
  count++;
  console.log("setInterval");

  if (count >= 5) {
    clearInterval(setInteval);
  }
}, 1000);
