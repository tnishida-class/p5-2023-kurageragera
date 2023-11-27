// 最終課題を制作しよう



function setup() {
  const blue = color(0, 51, 160);
  const red = color(255, 0, 0);
  const purple = color(153, 0, 153);
  const yellow = color(204, 204, 0);
  const gray = color(96, 96, 96);
  const orange = color(255, 128, 0);
  const lightblue = color(0, 128, 255);
  const emerald = color(0, 255, 128);
  const maccha = color(102, 204, 0);
  const pink = color(255, 0, 127);
  const sky = color(0, 255, 255);
  const brown = color(102, 102, 0);
  const black  = color(0,0,0);
  createCanvas(400, 400);
  background(255);
  let d =50;
  noStroke();
  
fill(black);
rect(0, 0, d, d * 4);
fill(brown);
rect(0, d * 4, d, d * 2);
fill(orange);
rect(0, d * 6, d, d * 2);

fill(black);
rect(d, 0, d*3, d);
fill(red);
rect(d, d, d, d * 4);
fill(brown);
rect(d, d*5, d, d);
fill(lightblue);
rect(d, d*6, d, d);
fill(orange);
rect(d, d*7, d*2, d);

fill(black);
rect(d*2, d, d, d*2);
fill(sky);
rect(d*2, d*3, d, d*2);
fill(brown);
rect(d*2, d*5, d, d);
fill(lightblue);
rect(d*2, d*6, d, d);
fill(black);
rect(d*3, d*7, d, d);

fill(black);
rect(d*3, d, d, d);
fill(purple);
rect(d*3, d*2, d, d);
fill(yellow);
rect(d*3, d*3, d, d);
fill(sky);
rect(d*3, d*3, d, d*2);
fill(lightblue);
rect(d*3, d*5, d, d*2);

fill(yellow);
rect(d*4, 0, d, d*2);
fill(purple);
rect(d*4, d*2, d*2, d);
fill(purple);
rect(d*4, d*3, d, d);
fill(pink);
rect(d*4, d*4, d, d*4);


fill(black);
rect(d*7, 0, d, d*3);

fill(black);
rect(d*7, d*4, d, d );
fill(yellow);
rect(d*7, d*5, d, d*3);
fill(yellow);
rect(d*6, d*5, d, d);
fill(black);
rect(d*6, 0, d, d );
fill(maccha);
rect(d*6, d, d, d*3 );
fill(emerald);
rect(d*6, d*4, d, d );
fill(gray);
rect(d*6, d*4, d*2, d );
fill(emerald);
rect(d*6, d*6, d, d*2 );
fill(yellow);
rect(d*5, 0, d, d*2);
fill(maccha);
rect(d*7, d*3, d, d );
fill(gray);
rect(d*5, d*3, d, d*2 );
fill(black);
rect(d*5, d*5, d, d)
fill(emerald);
rect(d*5, d*6, d, d*2 );
}

function draw(){
  let d =50;
  for(let i = 0; i < 8; i++){
      let x = i * d;
      line(0,x,400,x)
      line(x,0,x,400)
      stroke(120)
  }
}

function keyPressed(){
  let d =50;
  noStroke();
  if(key == "i"){ 
    I(d,d)
    I(d*4,d*4)
  }
  if(key == "t"){ 
    T(d*3, d*2)
   }
}

function keyReleased(){
  let d =50;
  noStroke();
  if(key == "i"){ 
    fill(255, 0, 0);
    rect(d,d,d,d*4)

    fill(255, 0, 127)
    rect(d*4,d*4,d,4*d)
  }
  if(key == "t"){ 
    fill(153, 0, 153)
    rect(d*3,d*2,d*3,d)
    rect(d*4,d*3,d,d)
   }
}



function ThreeDim(p, q){
  fill(255,255,255,80);
  rect(p+12.5, q, 25, 12.5);
  triangle(p, q, p+12.5, q, p+12.5, q+12.5);
  triangle(p+37.5, q, p+50, q, p+37.5, q+12.5);

  fill(255,255,255,40);
  rect(p, q+12.5, 12.5, 25);
  triangle(p, q, p, q+12.5, p+12.5, q+12.5);
  triangle(p, q+37.5, p, q+50, p+12.5, q+37.5);
  
  fill(0,0,0,100);
  rect(p+12.5, q+37.5, 25, 12.5);
  triangle(p, q+50, p+12.5, q+37.5, p+12.5, q+50);
  triangle(p+37.5, q+37.5, p+37.5, q+50, p+50, q+50);

  fill(0,0,0,30);
  rect(p+37.5, q+12.5, 12.5, 25);
  triangle(p+37.5, q+12.5, p+50, q, p+50, q+12.5);
  triangle(p+37.5, q+37.5, p+50, q+37.5, p+50, q+50);
  
}

function I(r,s){
  ThreeDim(r,s);
  ThreeDim(r,s+50);
  ThreeDim(r,s+100);
  ThreeDim(r,s+150);
}

function T(t,u){
  ThreeDim(t,u);
  ThreeDim(t+50,u);
  ThreeDim(t+100,u);
  ThreeDim(t+50,u+50);
}