var circle = {
    x:400, 
    y: 200,
    xgo: 4,
    ygo: -3
}

var r, g, b;



function setup() {
createCanvas(800, 400);
r = random(255);
g = random(255);
b = random(255);
}

function draw() {
background(0);
stroke(255);
strokeWeight(4);
fill(r, g, b);
ellipse(circle.x, circle.y, 30, 30);

    
if(circle.x > width || circle.x < 0){
    circle.xgo = circle.xgo * -1;
}

if(circle.y > height || circle.y < 0){
    circle.ygo = circle.ygo * -1;
}
    

    circle.x = circle.x + circle.xgo;
    circle.y = circle.y + circle.ygo;    
       
}

function mousePressed(){
    r = random(255);
    g = random(255);
    b = random(255);
    
circle.xgo = circle.xgo * -1;
}
