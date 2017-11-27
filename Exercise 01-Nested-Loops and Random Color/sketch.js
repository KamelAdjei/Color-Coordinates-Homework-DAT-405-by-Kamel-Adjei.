//https://p5js.org
//https://p5js.org/learn/

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
let size = 50;
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(500,500);

}

//Rendering function
function draw() {
  strokeWeight(4);
  stroke (255);
  //remember to  keep the noloop  
noLoop()

for (var x = 0; x <= width; x+=50) {
   for (var y = 0; y < height; y+=50){
     fill(215,200,170);
     rect (x,y, 100,100);

}
}
for(let x=7; x<490; x+=50){
  for(let y=7; y<490;y+=50){
strokeWeight (2);
//color the smaller rectangles
fill(random(274),random(156),random(180));

  rect(x,y,35,35);
}
}
}
