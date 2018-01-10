var sketchX;
var sketchY;
var a;
var timeNoWidth;
var rot;
var sec, min, ho, day, month, year;
var secend, minend, hend;
var mendx, mendy;

function preload() {

}

function setup() {
	sketchX = windowWidth-20;
	sketchY = windowHeight-20;

	canvas = createCanvas(sketchX, sketchY);

	frameRate(30);
  // noLoop();
  angleMode(RADIANS);

  if(displayWidth>800) {
    console.log(displayWidth)
    a = sketchY-100;
  }
  else {
    a = sketchX-20;
  }
  timeNoWidth = 50;

  rot = 0;

}

function draw(){
	background(0);
  stroke(255);
  noFill();
  translate(sketchX/2, sketchY/2);

  clockCase();
  scene()
  timeNumbers()
  secondsNumbers()

  rot += 0.001;

  sec = second();
  min = minute();
  ho = hour();

  secend = map(sec, 0, 60, 0, TWO_PI) - HALF_PI;
  minend = map(min + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  hend = map(ho%12 + norm(minute(), 0, 60), 0, 12, 0, TWO_PI) - HALF_PI;

  mendx = cos(minend) * a * 0.36;
  mendy = sin(minend) * a * 0.36;

  date();

  hourIndex();
  minutesIndex();
  secondsIndex();

  tm(1);
}



function clockCase() {
  push()
    ellipse(0,0, 1)
    ellipse(0,0, 10)
    ellipse(0,0, 20)
    ellipse(0,0, a);
    ellipse(0,0, a-20);
  pop();
}

function scene() {
  push()
    for(i=0; i<12; i++) {
      rotate(rot + TWO_PI/12)
      line(sketchX/2, 0, 0, sketchX/2)
    }
  pop()
}

function timeNumbers() {
  line(0, a/2.5, 0, a/2.15)
  push()
    for(i=0; i<12; i++) {
      rotate(TWO_PI/12)
      line(0, a/2.5, 0, a/2.15)
    }
  pop()
}

function secondsNumbers() {
  push()
    fill(255)
    for(i=1; i<=60; i++) {
      rotate(TWO_PI/60)
      if(i%5 != 0) {
        ellipse(0, a/2-40 , 2)
      }
    }
  pop()
}

function secondsIndex() {
  push()
    // rotate(TWO_PI/secend)
    line(0, 0, cos(secend) * a * 0.36, sin(secend) * a * 0.36)
    ellipse(cos(secend) * a * 0.26, sin(secend) * a * 0.26, 10)
    ellipse(cos(secend) * a * 0.36, sin(secend) * a * 0.36, 10)
  pop()
}

function minutesIndex() {
  push()
    stroke('blue')
    line(0, 0, mendx, mendy)
    push()
      ellipse(mendx, mendy, 30)
    pop()


    // line(80, 80, 100, 90)
    // line(80, 80, 90, 100)
    // line(100, 90, 150, 150)
    // line(90, 100, 150, 150)

  pop()
}

function hourIndex() {
  push()
    stroke('red')
    line(0, 0, cos(hend) * a * 0.26, sin(hend) * a * 0.26)
    push()
      translate(cos(hend) * a * 0.26, sin(hend) * a * 0.26)
      ellipse(0, 0, 50)
    pop()
    ellipse(cos(hend) * a * 0.16, sin(hend) * a * 0.16, 20)
  pop()
}

function date() {
  switch (month()) {
  case 1:
    mon = 'Jan'
    break;
  }

  textSize(14)
  text(day() + ' ' + mon + ', ' + year(), a/2-a/3.5, 5)
}

function tm(size) {
  push()
    stroke('#202020')
    strokeWeight(2)
    translate(sketchX/2-45, sketchY/2-45);
    ellipse(0, 0, size)
  pop()
  if(size<45) {
    tm(size+15)
  }
}
