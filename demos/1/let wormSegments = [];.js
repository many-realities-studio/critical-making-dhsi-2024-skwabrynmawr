let wormSegments = [];
let numSegments = 20;
let segmentLength = 15;
let wormSpeed = 2;
let amplitude = 50;
let frequency = 0.05;

function setup() {
    createCanvas(800, 600);
    for (let i = 0; i < numSegments; i++) {
        wormSegments.push(createVector(width / 2, height / 2));
    }
}

function draw() {
    background(0);
    strokeWeight(4);
    noFill();

    // Update the head segment
    let head = wormSegments[0];
    head.x += wormSpeed;
    head.y = height / 2 + amplitude * sin(frameCount * frequency);

    // Bounce off the edges
    if (head.x > width || head.x < 0) {
        wormSpeed *= -1;
    }

    // Update the rest of the segments
    for (let i = wormSegments.length - 1; i > 0; i--) {
        let current = wormSegments[i];
        let previous = wormSegments[i - 1];
        current.x = lerp(current.x, previous.x, 0.5);
        current.y = lerp(current.y, previous.y, 0.5);
    }

    // Draw the worm with alternating colors
    for (let i = 0; i < wormSegments.length - 1; i++) {
        let current = wormSegments[i];
        let next = wormSegments[i + 1];
        if (i % 2 === 0) {
            stroke(255, 105, 180); // Pink color
        } else {
            stroke(128, 0, 128); // Purple color
        }
        line(current.x, current.y, next.x, next.y);
    }
}
