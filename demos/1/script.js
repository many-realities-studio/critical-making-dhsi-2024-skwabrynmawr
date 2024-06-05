let angle = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  noStroke();
}

function draw() {
  background(0);
  rotateY(mouseX, mouseY, 20)

  let discoBallRadius = 200;
  let numMirrors = 20;
  let mirrorSize = (PI * discoBallRadius) / numMirrors;

  for (let lat = 0; lat < numMirrors; lat++) {
    let theta1 = map(lat, 0, numMirrors, 0, PI);
    let theta2 = map(lat + 1, 0, numMirrors, 0, PI);
    for (let lon = 0; lon < numMirrors; lon++) {
      let phi1 = map(lon, 0, numMirrors, 0, TWO_PI);
      let phi2 = map(lon + 1, 0, numMirrors, 0, TWO_PI);

      let x1 = discoBallRadius * sin(theta1) * cos(phi1);
      let y1 = discoBallRadius * sin(theta1) * sin(phi1);
      let z1 = discoBallRadius * cos(theta1);
      let x2 = discoBallRadius * sin(theta1) * cos(phi2);
      let y2 = discoBallRadius * sin(theta1) * sin(phi2);
      let z2 = discoBallRadius * cos(theta1);
      let x3 = discoBallRadius * sin(theta2) * cos(phi1);
      let y3 = discoBallRadius * sin(theta2) * sin(phi1);
      let z3 = discoBallRadius * cos(theta2);
      let x4 = discoBallRadius * sin(theta2) * cos(phi2);
      let y4 = discoBallRadius * sin(theta2) * sin(phi2);
      let z4 = discoBallRadius * cos(theta2);

      fill(random(255), random(255), random(255));
      beginShape();
      vertex(x1, y1, z1);
      vertex(x2, y2, z2);
      vertex(x4, y4, z4);
      vertex(x3, y3, z3);
      endShape(CLOSE);
    }
  }
}
