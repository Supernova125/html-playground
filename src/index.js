import "./styles.css";

let clicknum = 0;
let newclick = 0;
let cps = 0;
let high = 0;
let timervar = null;
let time = 0.0;
let blinked = false;
let bstage = 0;
const colors = ["black", "red", "green", "blue", "purple", "orange"];
const maxlen = 6;

document.getElementById("hv1").onmouseover = (event) => {
  newclick = 0;
  document.getElementById("second").innerText = "";
  event.target.style.background = "red";
  document.getElementById("show").innerText =
    "This code is built using onmouseover and onmouseout";
};
document.getElementById("hv1").onmouseout = (event) => {
  event.target.style.background = "green";
  document.getElementById("show").innerText = "Stuff here!";
};
document.getElementById("hv1").onmousedown = (event) => {
  clicknum += 1;
  newclick += 1;
  document.getElementById("show").innerText =
    "Now you clicked! You clicked " +
    clicknum +
    " times, and didn't move your cursor away for " +
    newclick +
    " times.";
  event.target.style.background = "yellow";
  let tar = document.getElementById("second");
  let nw = "";
  for (var i = 0; i < newclick; i++) {
    nw += "|";
  }
  if (newclick > 200) {
    nw += " Touch grass";
  } else if (newclick > 150) {
    nw += " How are you having fun?!";
  } else if (newclick > 100) {
    nw += " INSANE!!";
  } else if (newclick > 50) {
    nw += " Ultracool!";
  } else if (newclick > 10) {
    nw += " Busy clicker";
  }
  tar.innerText = nw;
};

document.getElementById("cpstest").onmouseover = (e) => {
  e.target.style.background = "#33FFFF";
};
document.getElementById("cpstest").onmouseout = (e) => {
  e.target.style.background = "#009999";
};
document.getElementById("cpstest").onmousedown = (e) => {
  cps += 1;
  if (cps > high) {
    high = cps;
  }
  document.getElementById("highscore").innerText = "Highscore: " + high;
  document.getElementById("cpsdisplay").innerText = "Your CPS: " + cps;
  setTimeout(function () {
    cps -= 1;
    document.getElementById("cpsdisplay").innerText = "Your CPS: " + cps;
  }, 1000);
};

document.getElementById("resethighscore").onmousedown = (e) => {
  high = 0;
  document.getElementById("highscore").innerText = "Highscore: 0";
};

// Holding down
function timerf() {
  time += 0.1;
  document.getElementById("holdtimer").innerText = "Timer: " + time.toFixed(1);
  if (time > 20 && time < 40) {
    if (blinked) {
      blinked = false;
      document.getElementById("holdtimer").style.color = "black";
    } else {
      blinked = true;
      document.getElementById("holdtimer").style.color = "red";
    }
  }
  if (time > 40) {
    bstage += 1;
    if (bstage >= maxlen) {
      bstage = 0;
    }
    document.getElementById("holdtimer").style.color = colors[bstage];
  }
}

document.getElementById("holddown").onmousedown = (e) => {
  e.target.style.background = "green";
  document.getElementById("holdtimer").innerText = "Timer: " + time;
  timervar = setInterval(timerf, 100);
};

document.getElementById("holddown").onmouseup = (e) => {
  e.target.style.background = "white";
  clearInterval(timervar);
  time = 0;
  document.getElementById("holdtimer").style.color = "black";
};
