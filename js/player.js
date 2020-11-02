class Player {
  constructor(playerImage) {
    // set the height, the initial location + the jump controls for the player
    this.image = playerImage;     // so you can load up more than 1 player
    this.height = 150; 
    this.width = 120; 
    this.x = 0;
    this.y = height - this.height;
    this.gravity = 0.4; 
    this.velocity = 0;  
  }
  drawPlayer() {
    // draw the player + jump logic with velocity
    this.velocity += this.gravity; 
    this.y += this.velocity; 

    if (this.y >= height - this.height)
    { this.y = height - this.height}; 

    image(this.image, this.x, this.y, this.height, this.width);

  }

  jump() {
    if (this.y === height - this.height) {      // kann nur am Boden springen
      this.velocity = -10;
    }
  }
}


