function play() {
  var audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// changing color when the radio is switched on/off
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


// tuner rotating
const tuner = document.querySelector('.tuner');
const pointer = document.querySelector('.pointer');
const line = document.querySelector('.line');

function calculateDegree(e) {
    const x1 = tuner.offsetLeft + tuner.offsetWidth / 2;
    const y1 = tuner.offsetTop + tuner.offsetHeight / 2;
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

      const pointerPosition = result / 360 * (line.offsetWidth - pointer.offsetWidth);
      pointer.style.left = pointerPosition + "px";

      if (result >= 350) {
        isRotating = false;}
        else if (result <= 10) {
          isRotating = false;
      }
  }
});

document.addEventListener("mouseup", function() {
  isRotating = false;
});


// volume rotating
const volume = document.querySelector('.volume');
const audio = document.getElementById("audio");

function calculateVolume(e) {
  const x1 = volume.offsetLeft + volume.offsetWidth / 2;
  const y1 = volume.offsetTop + volume.offsetHeight / 2;
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

let isVolumeRotating = false;

volume.addEventListener("mousedown", function() {
  isVolumeRotating = true;
});

document.addEventListener("mousemove", function(e) {
  if (isVolumeRotating) {
    const result = Math.floor(calculateVolume(e));
    volume.style.transform = `rotate(${result}deg)`;
  }
});

document.addEventListener("mouseup", function() {
  isVolumeRotating = false;
});

