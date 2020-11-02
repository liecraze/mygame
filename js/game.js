class Game {
  constructor() {
    // define the empty array for the coins here
    this.obstacles = []; 

  }
  preloadGame() {
    console.log("this is the game preload");
    this.backgroundImages=[{src: loadImage("../assets/background/hintergrund1.png"), x:0, speed: 0},
    {src: loadImage("../assets/background/hintergrund2.png"), x:0, speed: 1}, 
    {src: loadImage("../assets/background/hintergrund3.png"), x:0, speed: 2}, 
    {src: loadImage("../assets/background/hintergrund4.png"), x:0, speed: 3},
    {src: loadImage("../assets/background/hintergrund5.png"), x:0, speed: 4}];
    // load in images/gifs here
    this.playerImage = loadImage("../assets/player/girl2.gif");
    this.coinImage = loadImage("../assets/coins/tile000.png"); 
  }
  setupGame() {
    console.log("this is the game setup");
    //  initialize background + player here
    // NB: we DON'T initialize the coins here because we create them dynamically in the draw
  this.background = new Background(); 
  this.background.images = this.backgroundImages; 
  this.player = new Player (this.playerImage); 
  }

  drawGame() {
    console.log("this is the game draw");
    //  call the draw functions for the player + the background
    // define the obstacle drawing logic + add a new obstacle to  the array in the constructor with the image passed into it
  this.background.drawBackground(); 
  this.player.drawPlayer();
  if (frameCount % 60 === 0)
  { 
    this.obstacles.push(new Obstacle(this.coinImage));
  } 
  this.obstacles.forEach(function(obstacle){
    obstacle.drawObstacle();
  }
  );

  this.obstacles = this.obstacles.filter((obstacle) => {      // in the array stay only the ones that doesnt get hit
    if (obstacle.collision(this.player)) {
      return false;
    } else {
      return true;
    }
  });
 
}
}

