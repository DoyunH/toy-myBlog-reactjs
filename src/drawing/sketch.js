function sketch(p) {
  let count = 0;

  p.setup = function () {
    p.createCanvas(1000, 500);
    p.background(220);
  };

  p.draw = function () {
    const x = 0 + count;
    const y = p.height / 2;
    // circle 01
    p.fill(51);
    p.strokeWeight(2);
    p.stroke(220); // stroke color countrol for not change BG color
    p.ellipse(x, y, 300, 300);

    // circle 02
    p.fill(255, 53, 139);
    p.stroke(0);
    p.ellipse(x, y, 275, 275);

    // circle 03
    p.fill(1, 176, 240);
    p.stroke(0);
    p.ellipse(x, y, 25, 250);

    // circle 04
    p.fill(174, 238, 0);
    p.ellipse(x, y, 150, 150);

    if (p.mouseIsPressed) {
      p.fill(0);
    } else {
      p.fill(255);
    }
    p.ellipse(p.mouseX, p.mouseY, 40, 40);
    count += 1;
  };
}

export default sketch;
