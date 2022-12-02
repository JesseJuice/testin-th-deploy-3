function wheelBtn() {
  setTimeout(function () {
    document.getElementById("defeat-try").style.visibility = "visible";
  }, 5000);

  setTimeout(function () {
    document.getElementById("wheel-gif").style.visibility = "hidden";
  }, 5000);

  setTimeout(function () {
    document.getElementById("overlayDiv2").style.visibility = "visible";
  }, 5000);

  document.getElementById("agreeBtn").disabled = true;

  wheelSpin();
  overlayDiv();
  rouletteAudio();
  defeatSoundEffect();
}

function nextTryBtn() {
  document.getElementById("wheel-gif").style.visibility = "visible";
  document.getElementById("overlayDiv2").style.visibility = "hidden";

  setTimeout(function () {
    document.getElementById("winDiv").style.visibility = "visible";
  }, 5000);

  setTimeout(function () {
    document.getElementById("overlayDiv2").style.visibility = "visible";
  }, 5000);

  setTimeout(function () {
    document.getElementById("wheel-gif").style.visibility = "hidden";
  }, 5000);

  let removeDiv = document.getElementById("defeat-try");
  removeDiv.remove();

  let removeOverlay = document.getElementById("overlayDiv");
  removeOverlay.remove();

  let secondSpinSound = new Audio("assets/spinning-wheel.mp3");
  secondSpinSound.currentTime = 0;
  secondSpinSound.play();
  setInterval(function () {
    if (secondSpinSound.currentTime > 4) {
      /** Working **/
      secondSpinSound.pause();
    }
  }, 1000);

  let winSound = new Audio("assets/win-sound-effect.wav");

  setTimeout(function () {
    winSound.play();
  }, 5000);

  wheelSpin();
  overlayDiv();
}

function wheelSpin() {
  let element = document.getElementById("wheel-gif"); //ID from the img tag
  element.classList.remove("d-none");

  setTimeout(function () {
    element.classList.toggle("d-none");
  }, 5000);
}

function overlayDiv() {
  let element = document.getElementById("wheel-gif"); //ID from the img tag
  element.classList.remove("d-none");

  setTimeout(function () {
    element.classList.toggle("d-none");
  }, 5000);
}

function rouletteAudio() {
  var rouletteSound = new Audio("assets/spinning-wheel.mp3");
  rouletteSound.currentTime = 0;
  rouletteSound.play();
  setInterval(function () {
    if (rouletteSound.currentTime > 4) {
      /** Working **/
      rouletteSound.pause();
    }
  }, 1000);
}

function defeatSoundEffect() {
  var defeatSound = new Audio("assets/defeat-sound-effect.wav");

  setTimeout(function () {
    defeatSound.play();
  }, 5000);
}

function OpenSingUpPage() {
  window.location.assign("https://ekings9.com/aff/11522");
}

// after 5 secs

/**

    remove_image();
    remove_div();
    wheelSpin();
    winModal();
    overlayDiv()
    secondSpinAudio();
    winSoundEffect();

 * **/
