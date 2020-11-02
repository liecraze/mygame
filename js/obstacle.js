class Obstacle {
  constructor(coinImage) {
    // define the images,size and x/y values in the constructor
   this.image=coinImage
    this.x = width;  // weil die coins sollen von rechts kommen 
    this.y = Math.random() * height / 1.5 ;
    this.width = 15;
    this.height = 15;
  }

  //   define the collision function
  collision(playerInfo) {
    let obstacleX = this.x + this.width / 2;    // giving it die Größe vom Coin 
    let obstacleY = this.y + this.height / 2; 
    let playerX = playerInfo.x + playerInfo.width / 2;   // giving it the Größe vom Player
    let playerY = playerInfo.y + playerInfo.height /2 ; 

    if (dist(obstacleX, obstacleY, playerX, playerY) < 80) {
      return true;
    } else {
      return false;
    }
  }
  

  

  drawObstacle() {
    // draw the coins
    this.x--;
    this.collision(game.player);          // needs to be checked all the time, darum in der draw Funktion 
    image(this.image, this.x, this.y, this.width, this.height)
  }
}
