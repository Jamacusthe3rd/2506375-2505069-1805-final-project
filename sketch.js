//setting up initial values
let tileMap = [] // creates array for the instances of the Tile class to be added to (two dimensional array)
let tilesX = 32 // how many tiles there are horizontally that make up each level screen
let tilesY = 16 // how many tiles there are vertically that make up each level screen
let tileSize = 50 // height and width of each tile
let textures = [] // creates array for the different tile textures/images to be loaded into
let player1 
let counter = 0 // counter variable, used for anything that will happen after a certain number of loops/frames


let collidableTiles_NotCollidedWith = 0 // count of how many collidable tiles there are that the player hasn't collided with
let collidableTiles = 0 // count of how many collidable tiles there are
let directionState = 0 //used for working out things like direction of collision
let directionOfCollision = 4 // used to know what way the player cannot walk on collisons 
//                        ^^^
// 4 is the state of no collision occouring

// below ensures directionState and DirectionOfCollision can only be one of four directions at one time. 
// vv
let up = 0
let left = 1
let down = 2
let right = 3

let graphicMap = [
//    THESE ARE OUR Y VALUES
// 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
	[0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1], // 0
	[0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1], // 1
	[0, 0, 0, 0, 0, 0, 1, 1, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 1, 1, 1, 1, 1, 1, 1], // 2
	[0, 0, 0, 0, 0, 0, 1, 1, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 1, 1, 1, 1, 1, 1, 1], // 3
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 1, 1, 1, 1, 1, 1, 1], // 4
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], // 5   THESE ARE OUR X VALUES
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 6
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 7
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 8
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 9
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 10
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 11
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 12
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 13
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 14
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]  // 15
]

let tileRules = [
//    THESE ARE OUR Y VALUES
// 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 1
[0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1], // 2
[0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1], // 3
[0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1], // 4
[0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], // 5   THESE ARE OUR X VALUES
[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 6
[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 7
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 8
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 9
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 10
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 11
[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 12
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 13
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 14
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]  // 15
]


class Tile { //creates class for a tile
  constructor(texture, tileX, tileY, tileSize, tileID) {
    this.texture = texture; //texture of tile in tileMap grid
    this.tileX = tileX; //x position of tile in tileMap grid
    this.tileY = tileY; //y position of tile in tileMap grid
    this.tileSize = tileSize; //size of tiles in pixels
    this.xPos = (this.tileX * this.tileSize) + (this.tileSize/2); //x pixel position of tile in canvas
    this.yPos = (this.tileY * this.tileSize) + (this.tileSize/2); //y pixel position of tile in canvas
    this.tileID = tileID; //identification of each individual tile
  }


  display() {
    noStroke() // no boarder on the images of tiles drawn
    image(this.texture, this.xPos, this.yPos, tileSize, tileSize) //draws tile
  }

  debugGrid() { //used to display the x and y of the tiles in the tileMap scale (not default pixel scale), along with the tiles IDs

    let xPadding = 2 //pads text so it displays within the box (x axis)
    let yCoordinatePadding = 8 //pads coordinate text so it displays within the box (y axis) but above ID text
    let yIDPadding = 18 //pads ID text so it displays within the box (y axis) and below the coordinate text

    //All Text Settings
    strokeWeight(1)
    stroke("black")
    fill("yellow")

    //display X and Y coordinate Text
    textSize(8)
    text("X: " + this.tileX + ", Y: " + this.tileY, this.xPos +xPadding, this.yPos + yCoordinatePadding)

    //Display tileID text
    textSize(10)
    text("ID: " + this.tileID, this.xPos + xPadding, this.yPos + yIDPadding)

    //Create rect around tile
    noFill()
    stroke("yellow")
    rect(this.xPos, this.yPos, this.tileSize, this.tileSize)
  }

  displayMessage() { //adds a message to specified tiles

    let xPadding = 2 //pads text so it displays within the box (x axis)
    let yPadding = 40 //pads message so it displays withing the box and below the ID text

    // display message text
    strokeWeight(1)
    stroke("black")
    fill("white")
    textSize(10)
    text("Accessed!", this.xPos + xPadding, this.yPos + yPadding)
  }


}

// class TileRules { //creates class for a tile's rules (collision, level transition etc)
//   constructor(tileX, tileY, tileSize, tileID) {
//     this.tileX = tileX; //x position of tile in tileMap grid
//     this.tileY = tileY; //y position of tile in tileMap grid
//     this.tileSize = tileSize; //size of tiles in pixels
//     this.xPos = this.tileX * this.tileSize; //x pixel position of tile in canvas
//     this.yPos = this.tileY * this.tileSize; //y pixel position of tile in canvas
//     this.tileID = tileID;
//   }

// }

class Player {
  constructor(currentSpriteGroup, startX, startY, tileRules){
    this.currentSpriteGroup = currentSpriteGroup //groups of sprites. Each group containing the still and walking sprites for a single direction of movement.
    this.currentSprite = this.currentSpriteGroup[0] // start on 0 (standing still) in the group the player starts on
    this.posX = startX
    this.posY = startY
    this.speed = 0.1
    this.tileSize = tileSize
    this.tileRules = tileRules
    this.isMoving = false // is player moving
    this.leg = 0  // 0 is state for no legs moving, for standing still/not walking
    this.nextPosX = startX
    this.nextPosY = startY
    this.collided = false // is collision occuring
  }

  move() {                                                               // and attacking is false
    if ((keyIsDown(87))||(keyIsDown(65))||(keyIsDown(83))||(keyIsDown(68))){
      this.isMoving = true
    }
    else{
      this.isMoving = false
      this.leg = 0 // 0 is for standing still/not walking
      counter = 0 // for anything that must occur after a certain amount of time after a conditin is met (switching legs when walking condition is met)
    }
    
    if (keyIsDown(87) == true){ //W UP
      directionState = up 
      this.currentSpriteGroup = sprites.knight_up
      this.nextPosY = this.posY - this.speed
    }
    else if (keyIsDown(65) == true){ //A LEFT
      directionState = left 
      this.currentSpriteGroup = sprites.knight_left
      this.nextPosX = this.posX - this.speed
    }
    else if (keyIsDown(83) == true){ //S DOWN
      directionState = down
      this.currentSpriteGroup = sprites.knight_down
      this.nextPosY = this.posY + this.speed
    }
    else if (keyIsDown(68) == true){ //D RIGHT
      directionState = right
      this.currentSpriteGroup = sprites.knight_right
      this.nextPosX = this.posX + this.speed
    }
    
    for (let tileX = 0; tileX < tilesX; tileX++) {
      for (let tileY = 0; tileY < tilesY; tileY++) {

        if (tileRules[tileY][tileX] == 1){ // if tile is labelled to have collision
          collidableTiles += 1 // count of how many collidable tiles there are
          if ((this.nextPosX >= tileX*tileSize && this.nextPosX <= tileX*tileSize + (tileSize)) && (this.nextPosY >= tileY*tileSize && this.nextPosY <= tileY*tileSize + (tileSize)) && (this.collided == false)){ // if player is close enough to tile to have collided with it:
            directionOfCollision = directionState
            this.collided = true
            //pushes player back a little when they collide with a tile. This was implemented to fix a bug that allowed the player to enter other collidable tiles if first colliding with another tile perpendicular to it.
            // vv
            if (directionState == up){
              this.nextPosY = this.posY + this.speed
            }
            if (directionState == left){
              this.nextPosX = this.posX + this.speed
            }
            if (directionState == down){
              this.nextPosY = this.posY - this.speed
            }
            if (directionState == right){
              this.nextPosX = this.posX - this.speed
            }
          }
          if (!((this.nextPosX >= tileX*tileSize && this.nextPosX <= tileX*tileSize + (tileSize)) && (this.nextPosY >= tileY*tileSize && this.nextPosY <= tileY*tileSize + (tileSize)))){ // if player is not close enough to tile to have collided with it:
            collidableTiles_NotCollidedWith += 1 // count of how many collidable tiles there are that the player hasn't collided with
          }
        }
      }
    }
    if (collidableTiles_NotCollidedWith == collidableTiles){ // if none of the collidable tiles get collided with by the player:
      this.collided = false //collision is not occuring
      directionOfCollision = 4 //4 is the state of no collision occouring, allowing player to walk in all 4 directions
    }
    collidableTiles = 0 //resets for next check
    collidableTiles_NotCollidedWith = 0 //resets for next check
    if (directionOfCollision != directionState){
      if((keyIsDown(65))||(keyIsDown(68))){
        this.posX = this.nextPosX
      }
      if((keyIsDown(87))||(keyIsDown(83))){
        this.posY = this.nextPosY
      }
    }
    


    if (this.isMoving == true){// if player is moving
      counter += 1 // n increments every loop
      if (this.leg == 0){ //if walking has just started:
        this.leg = 1  // start walking with left leg up
      }
      else if (counter == 600){ //swaps legs every n loops, while isMoving stays true
        counter = 0 //starts n at 0
        if (this.leg == 1){
          this.leg = 2 // right leg
        }
        else{
          this.leg = 1 // left leg
        }
      }
      
    }

    this.currentSprite = this.currentSpriteGroup[this.leg] //updates current player sprite, depending on direction looking, and if moving or stationary
  }

  
  // attack (){
  //   if (keyIsPressed(32)){

  //   }
  // }

  display (){                  //(so players legs appear where collison with tiles is)
    //player sprite          //player x //player y       ^      //width   //height
    image(this.currentSprite,this.posX,this.posY - (20),tileSize/2,tileSize)
  }

}

function preload() { //tiles
  textures[0] = loadImage('sprites/tile_grass.png') 
  textures[1] = loadImage('sprites/tile_water.png')
  textures[2] = loadImage('sprites/tile_wood.png')
  textures[3] = loadImage('sprites/tile_stone.png')


  sprites = { //groups of sprites. Each group containing the still and walking sprites for a single direction of movement.
    knight_up: [loadImage('sprites/knight_up_still.png'),loadImage('sprites/knight_up_leftlegwalk.png'),loadImage('sprites/knight_up_rightlegwalk.png')],
    knight_left: [loadImage('sprites/knight_left_still.png'),loadImage('sprites/knight_left_leftlegwalk.png'),loadImage('sprites/knight_left_rightlegwalk.png')],
    knight_down: [loadImage('sprites/knight_down_still.png'),loadImage('sprites/knight_down_leftlegwalk.png'),loadImage('sprites/knight_down_rightlegwalk.png')],
    knight_right: [loadImage('sprites/knight_right_still.png'),loadImage('sprites/knight_right_leftlegwalk.png'),loadImage('sprites/knight_right_rightlegwalk.png')],
  }
  
}

function setup() {
  createCanvas(1600,800);
  imageMode(CENTER)
  let tileID = 0 //identification of each individual tile, starting at 0
  for (let tileX = 0; tileX < tilesX; tileX++) {
    tileMap[tileX] = []
    for (let tileY = 0; tileY < tilesY; tileY++) {
      let texture = graphicMap[tileY][tileX]
      tileMap[tileX][tileY] = new Tile(textures[texture], tileX, tileY, tileSize, tileID) //creates a tile object for every 50 pixels down and every 50 pixels right
      tileID++ //identification of each individual tile, incrementing for each tile created
    }
  }
  player1 = new Player(sprites.knight_down, 100, 300, tileRules)
}

function draw() {
  background(0);
  for (let tileX = 0; tileX < tilesX; tileX++) {
    for (let tileY = 0; tileY < tilesY; tileY++) {
      tileMap[tileX][tileY].display()
      //tileMap[tileX][tileY].debugGrid() //displays the x and y of the tile in the tileMap scale (not default pixel scale), along with the tile ID
      
    }
    player1.move()
    player1.display()
  }

  //tileMap[5][6].displayMessage()//adding a message to specified tiles
}