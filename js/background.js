class Background {
  constructor() {
    // define the image array here
    this.x = 0; 
    this.images; 
  }

  drawBackground() {
    this.x--; 

    // define the draw logic  for the moving background here
    // image(this.images[0].src, this.x, 0, width, height);   // width and height sind by default the size of the canvas
    // image(this.images[1].src, this.x, 0, width, height);
    // image(this.images[2].src, 0, 0, width, height);
    // image(this.images[3].src, 0, 0, width, height);
    this.images.forEach(function (backgroundImage) {
      backgroundImage.x -= backgroundImage.speed;
      image(backgroundImage.src, backgroundImage.x, 0, width, height);
      image(backgroundImage.src, backgroundImage.x - width, 0, width, height);
      if (backgroundImage.x < 0) {
        backgroundImage.x = width;
      }
    });
  }
}