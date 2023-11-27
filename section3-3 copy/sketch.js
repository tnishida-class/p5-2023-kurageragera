// テキスト「キーボード操作に反応する」
let x, y;
let increment = 1;


function setup(){
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);
  if(keyIsDown(LEFT_ARROW)){ x -= 2; }
  if(keyIsDown(RIGHT_ARROW)){ x += 2; }
  if((keyIsDown("A".charCodeAt(0))) && (keyIsDown(RIGHT_ARROW))) { x += 10; }
  if((keyIsDown("A".charCodeAt(0))) && (keyIsDown(LEFT_ARROW))) { x -= 10; }
  if(x < 0){x = 0; }
  if(x > width){x = width; }
}

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
