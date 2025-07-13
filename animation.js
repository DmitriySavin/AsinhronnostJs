const boxRef = document.querySelector(".box");

// function trackingItems() {

// }

const trackingItems = 
    document.addEventListener("mousemove", (event) => {
        setInterval(() => {
    boxRef.style.top = `${event.clientY}px`;
    boxRef.style.left = `${event.clientX}px`;
  });
}, 2000);
