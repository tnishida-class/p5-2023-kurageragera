// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  increment = 1;
}

let size = 50

function draw(){
  background(160, 192, 255);
  if(keyIsPressed){
    increment = 4;
  }else{
    increment = 1;
  }
  count = (count + increment) % cycle;
  // BLANK[1]
  if(count > (cycle / 2)){
    size = count + 50
  }else{
    size = (count - cycle) - 50
  }
  ellipse(width / 2, height / 2, size);
}
