function setup() {
    createCanvas (2000,1000)
  }
  
  function draw() {
    background(0,255,0);
    strokeWeight(4)
    line (300,90,630,200)
    fill (0);
    ellipse(500,430,300,300);
    
    line (850,200,1200,90)
    fill(0);
    ellipse(1000,430,300,300)
    fill('red')
    triangle(750,500,600,750,900,750)
    
  }