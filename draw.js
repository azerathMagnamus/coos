function createrandombubblearray(total) {
  let temp = [];
  for (let n = 0; n < total; n++) {
    temp.push(newrandom());
  }
  return temp;
}

function createrandomsnowarray(total) {
  let temc = [];
  for (let n = 0; n < total; n++) {
    temc.push(randomsnow());
  }
  return temc;
}
function newbubble(initalx, intialy, intialr, intialcolor) {
  return {
    x: initalx,
    y: intialy,
    r: intialr,
    color: intialcolor,
  };
}
function backround(color) {
  fill(color);
  rect(0, 0, cnv.width, cnv.height, "fill");
}
function drawabubble(abubble) {
  stroke(abubble.color);
  circle(abubble.x, abubble.y, abubble.r, "stroke");
}
function movebubble(abubble) {
  abubble.x += randomint(-2, 3);
  abubble.y += randomint(-2, 3);
}
function newrandom() {
  return {
    x: randomint(0, cnv.width),
    y: randomint(0, cnv.height),
    r: randomint(10, 100),
    color: randrgb(),
  };
}
function randomsnow() {
  return {
    x: randomint(0, cnv.width),
    y: randomint(0, cnv.height),
    r: randomint(10, 30),
    color: "white",
    speed: randomint(1, 5),
  };
}

function drawsnow(abubble) {
  fill(abubble.color);
  circle(abubble.x, abubble.y, abubble.r, "fill");
}
function movesnow(abubble) {
  abubble.y += abubble.speed;
}
function position(abubble) {
  if (abubble.x >= cnv.width || abubble.y >= cnv.height) {
    refresh();
  }
}

function refresh(abubble) {
  console.log("refresh");
  drawsnow();
  movesnow();
}
