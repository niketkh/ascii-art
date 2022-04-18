
const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
let origImage;


function preload() {
    origImage = loadImage("images/gloria48.jpeg");
}

function setup() {
    noCanvas();
    background(0);
    
    let w = width / origImage.width;
    let h = height / origImage.height;
    origImage.loadPixels();
    const len = density.length;
    for (let j = 0; j < origImage.height; j++) {
      let row = "";
      for (let i = 0; i < origImage.width; i++) {
        const pixelIndex = (i + j * origImage.width) * 4;
        const r = origImage.pixels[pixelIndex + 0];
        const g = origImage.pixels[pixelIndex + 1];
        const b = origImage.pixels[pixelIndex + 2];
        const avg = (r + g + b) / 3;
        
        // noStroke();
        // fill(avg);
        // //square(i * w, j * h, w);
        
        
        const charIndex = floor(map(avg,0,255,len,0));
        // textSize(w);
        // textAlign(CENTER, CENTER);
        // text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
        
        const c = density.charAt(charIndex);
        if(c == ' ')
          row += '&nbsp';
        else 
          row += c; 
        
      }

      createDiv(row);
    }
}