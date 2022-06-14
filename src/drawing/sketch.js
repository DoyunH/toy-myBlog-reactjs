function sketch(p) {
  p.setup = function () {
    p.createCanvas(1000, 500);
    p.background(220);
  };

  p.draw = function () {
    // circle 01
    p.fill(51);
    p.strokeWeight(2);
    p.stroke(75);
    p.ellipse(500, 250, 300, 300);

    // circle 02
    p.fill(255, 53, 139);
    p.stroke(0);
    p.ellipse(500, 250, 275, 275);

    // circle 03
    p.fill(1, 176, 240);
    p.stroke(0);
    p.ellipse(500, 250, 25, 250);

    // circle 04
    p.fill(174, 238, 0);
    p.ellipse(500, 250, 150, 150);

    if (p.mouseIsPressed) {
      p.fill(0);
    } else {
      p.fill(255);
    }
    p.ellipse(p.mouseX, p.mouseY, 40, 40);
  };
}

export default sketch;
