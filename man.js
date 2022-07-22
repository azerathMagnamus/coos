cnv = document.getElementById("mycanvas");
ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// makes array for objects
let snow = createrandomsnowarray(5);

requestAnimationFrame(draw);

// Main loop

function draw() {
  backround("black");

  for (let p = 0; p < snow.length; p++) {
    drawsnow(snow[p]);
    movesnow(snow[p]);

    if (snow[p].y >= cnv.height) {
      snow[p].y = -5;
    }
  }

  requestAnimationFrame(draw);
}
document.addEventListener("keydown", handlerdraw);

// removes or adds a snow particle via a up and down keys

function handlerdraw(event) {
  if (event.keyCode === 38) {
    console.log("WORKIN");
    snow.push(randomsnow());
  } else if (event.keyCode === 40) {
    snow.pop(randomsnow());
  }
}
