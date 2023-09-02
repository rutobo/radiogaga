function play() {
  var audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function switched() {
  const button = document.querySelector('.button');
  const chanels = document.querySelector('.chanels');
  const info = document.querySelector('.info');
  const info2 = document.querySelector('.info2');
  const dot = document.querySelector('.dot');
  const dot2 = document.querySelector('.dot2');
  
  button.classList.toggle('clicked');
  
  if (button.classList.contains('clicked')) {
    chanels.classList.add('alt-bg');
    info.classList.add('alt-in');
    info2.classList.add('alt-in');
    dot.classList.add('alt-d');
    dot2.classList.add('alt-d');
  } else {
    chanels.classList.remove('alt-bg');
    info.classList.remove('alt-in');
    info2.classList.remove('alt-in');
    dot.classList.remove('alt-d');
    dot2.classList.remove('alt-d');
  }
}

const tuner = document.querySelector('.tuner');

function calculateDegree(e) {
    const x1 = window.innerWidth / 2;
    const y1 = window.innerHeight / 2;
    const x2 = e.clientX;
    const y2 = e.clientY;

    const deltaX = x1 - x2;
    const deltaY = y1 - y2;

    const rad = Math.atan2(deltaY, deltaX);

    let deg = rad * (180 / Math.PI);

    if (deg < 0) {
      deg = 360 + deg;
  }

  return deg;
}

let isRotating = false;

tuner.addEventListener("mousedown", function() {
  isRotating = true;
});

document.addEventListener("mousemove", function(e) {
  if (isRotating) {
      const result = Math.floor(calculateDegree(e));
      tuner.style.transform = `rotate(${result}deg)`;
  }
});

document.addEventListener("mouseup", function() {
  isRotating = false;
});