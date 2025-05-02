//setting up initial values
let tileMap = [] // creates array for the instances of the Tile class to be added to (two dimensional array)
let tilesX = 32 // how many tiles there are horizontally that make up each level screen
let tilesY = 16 // how many tiles there are vertically that make up each level screen
let tileSize = 50 // height and width of each tile
let hudSize = 100 // height of top bar on screen, showing player health
let textures = [] // creates array for the different tile textures/images to be loaded into
let player1 // used as the instance of the Player class
let spawnTileX = 26
let spawnTileY = 10

// counter variables, used for anything that will happen after a certain number of loops/frames
let counter = 0 // used for the delay between swapping walking sprites while player is moving
let counter1 = 0 // used for a time of invincibility after the player is hit
let counter2 = 0 // used  for the alpha value for the blackness of the screen increasing when the player dies


let tileIsCollidable = false
let collidableTiles_NotCollidedWith = 0 // count of how many collidable tiles there are that the player hasn't collided with
let collidableTiles = 0 // count of how many collidable tiles there are


// ensures this.directionState and this.DirectionOfCollision can only be one of four directions at one time. 
// vv
let up = 0
let left = 1
let down = 2
let right = 3

let attackRange = 25



let level0 = {

  graphicMap: [
  //    THESE ARE OUR Y VALUES
  // 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
    [1, 1, 1, 1, 1, 1, 1, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1], // 0
    [1, 1, 1, 1, 1, 1, 1, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1], // 1
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 1, 1, 1, 1, 1, 1, 1], // 2
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 1, 1, 1, 1, 1, 1, 1], // 3
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 1, 1, 1, 1, 1, 1, 1], // 4
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], // 5   THESE ARE OUR X VALUES
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 6
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 7
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 9
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 10
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 11
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 12
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 13
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], // 14
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  // 15
  ],

  tileRules: [
  //    THESE ARE OUR Y VALUES
  // 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
    [1, 1, 1, 1, 1, 1, 1,13, 1, 1, 1, 1, 1, 1, 1,11,11,11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 1
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1], // 2
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1], // 3
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1], // 4
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], // 5   THESE ARE OUR X VALUES
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 6
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 7
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 9
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 10
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 11
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 12
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 13
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], // 14
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  // 15
    ],

    startTileX : spawnTileX,
    startTileY : spawnTileY
}

let level1 = {

  graphicMap: [
  //    THESE ARE OUR Y VALUES
  // 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
    [6, 6, 6, 6, 6, 6, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 6, 6, 6], // 0
    [6, 6, 6, 6, 6, 6, 6, 3, 3, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 6, 6, 6], // 1
    [6, 6, 6, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 6, 6, 6, 6, 6], // 2
    [6, 6, 6, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 6, 6, 6, 6, 6], // 3
    [6, 6, 6, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 6, 6, 6, 6, 6], // 4
    [6, 6, 6, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 6, 6, 6, 6, 6], // 5   THESE ARE OUR X VALUES
    [6, 6, 6, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 6, 6, 6, 6, 6], // 6
    [6, 6, 6, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 6, 6, 6, 6, 6], // 7
    [6, 6, 6, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 6, 6, 6, 6, 6], // 8
    [6, 6, 6, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 6, 6, 6, 6, 6], // 9
    [6, 6, 6, 6, 6, 6, 6, 3, 3, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 6, 6, 6, 6, 6], // 10
    [6, 6, 6, 6, 6, 6, 6, 6, 3, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 6, 6, 6, 6, 6, 6], // 11
    [6, 6, 6, 6, 6, 6, 6, 6, 3, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 6, 6, 6, 6, 6, 6], // 12
    [6, 6, 6, 6, 6, 6, 6, 6, 3, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 6, 6, 6, 6, 6, 6], // 13
    [6, 6, 6, 6, 6, 6, 6, 6, 3, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 6, 6, 6, 6, 6, 6], // 14
    [6, 6, 6, 6, 6, 6, 6, 6, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 6, 6, 6, 6]  // 15
  ],

  tileRules: [
  //    THESE ARE OUR Y VALUES
  // 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
    [1, 1, 1, 1, 1, 1, 1, 1, 1,14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 1
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 2
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 3
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 4
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 5   THESE ARE OUR X VALUES
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 6
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 7
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 9
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 10
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 11
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 12
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 13
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 14
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,10,10,10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  // 15
  ],

  startTileX : 16,
  startTileY : 14
}

let level2 = {

  graphicMap: [
  //    THESE ARE OUR Y VALUES
  // 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
    [1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], // 0
    [1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], // 1
    [1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], // 2
    [1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], // 3
    [1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], // 4
    [1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], // 5   THESE ARE OUR X VALUES
    [1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], // 6
    [1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], // 7
    [1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], // 8
    [1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], // 9
    [1, 1, 1, 1, 1, 1, 1, 3, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], // 10
    [1, 1, 1, 1, 1, 1, 1, 0, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], // 11
    [1, 1, 1, 1, 1, 1, 1, 0, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], // 12
    [1, 1, 1, 1, 1, 1, 1, 0, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], // 13
    [1, 1, 1, 1, 1, 1, 1, 0, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], // 14
    [1, 1, 1, 1, 1, 1, 1, 0, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]  // 15
  ],

  tileRules: [
  //    THESE ARE OUR Y VALUES
  // 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 1
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 2
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 3
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 4
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 5   THESE ARE OUR X VALUES
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 6
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 7
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 9
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 10
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 11
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 12
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 13
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 14
    [1, 1, 1, 1, 1, 1, 1,12, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  // 15
  ],

  startTileX : 7,
  startTileY : 14
}


// level control variables
let levels = [level0, level1, level2]
let currentLevel = 0
let graphicMap
let tileRules


class Tile { //creates class for a tile
  constructor(texture, tileX, tileY, tileSize, tileID) {
    this.texture = texture; //texture of tile in tileMap grid
    this.tileX = tileX; //x position of tile in tileMap grid
    this.tileY = tileY; //y position of tile in tileMap grid
    this.tileSize = tileSize; //size of tiles in pixels
    this.xPos = (this.tileX * this.tileSize) + (this.tileSize/2); //x pixel position of tile in canvas
    this.yPos = (this.tileY * this.tileSize) + (this.tileSize/2) + hudSize; //y pixel position of tile in canvas
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
  constructor(currentSpriteGroup, startX, startY){
    this.currentSpriteGroup = currentSpriteGroup // groups of sprites. Each group containing the still and walking sprites for a single direction of movement.
    this.currentSprite = this.currentSpriteGroup[0] // start on 0 (standing still) in the group the player starts on
    this.startX = startX // x value for starting position. used for respawning 
    this.startY = startY // y value for starting position. used for respawning 
    this.posX = this.startX // sets starting x position when you first load the game
    this.posY = this.startY // sets starting y position when you first load the game
    this.directionState = 0 //used for working out things like direction of collision
    this.directionOfCollision = 4 // used to know what way the player cannot walk on collisons (4 is the state of no collision occouring)
    this.speed = 0.08 // player movement speed
    this.hitboxSize = 40 // slightly smaller than tile size so player can fit between two with a 1 tile wide gap without difficulty
    this.maxHealth = 100 // player's maximum health at astart of gameplay 
    this.currentHealth = this.maxHealth // starts on max health
    this.isMoving = false // is player moving
    this.leg = 0  // 0 is state for no legs moving, for standing still/not walking
    this.nextPosX = startX // keeps x value of where player is trying to move before actually moving them
    this.nextPosY = startY // keeps y value of where player is trying to move before actually moving them
    this.collided = false // is collision occuring
    this.attacking = false // is player attacking
    this.damagedRecently = false // has player been recently damaged
    this.alive = true
  }

  move() {                                                               
    if (((keyIsDown(87))||(keyIsDown(65))||(keyIsDown(83))||(keyIsDown(68))) && (this.attacking == false) && (this.alive == true)){ // if player is moving and attacking is false
      this.isMoving = true // set moving to true
    }
    else{
      this.isMoving = false // set moving to false
      this.leg = 0 // 0 is for standing still/not walking
      counter = 0 // for anything that must occur after a certain amount of time after a conditin is met (switching legs when walking condition is met)
    }
    if (this.isMoving == true){
      if (keyIsDown(87) == true){ //W UP
        this.directionState = up 
        this.currentSpriteGroup = sprites.knight_up
        this.nextPosY = this.posY - this.speed 
      }
      else if (keyIsDown(65) == true){ //A LEFT
        this.directionState = left 
        this.currentSpriteGroup = sprites.knight_left
        this.nextPosX = this.posX - this.speed
      }
      else if (keyIsDown(83) == true){ //S DOWN
        this.directionState = down
        this.currentSpriteGroup = sprites.knight_down
        this.nextPosY = this.posY + this.speed
      }
      else if (keyIsDown(68) == true){ //D RIGHT
        this.directionState = right
        this.currentSpriteGroup = sprites.knight_right
        this.nextPosX = this.posX + this.speed
      }
    }

    
    for (let tileX = 0; tileX < tilesX; tileX++) { // loops the checks of tiles for things like collisions and level transitions, for how many tiles there are horizontally
      for (let tileY = 0; tileY < tilesY; tileY++) { // loops the checks of tiles for things like collisions and level transitions, for how many tiles there are vertically
        
//Checking for level change tiles vv

        if (tileRules[tileY][tileX] == 11){ // checks if tile is a level changer 
          if ((this.nextPosX >= tileX*tileSize - (this.hitboxSize/2) && this.nextPosX <= tileX*tileSize + (tileSize + (this.hitboxSize/2))) && (this.nextPosY >= tileY*tileSize - (this.hitboxSize/2) + (hudSize) && this.nextPosY <= tileY*tileSize + (tileSize + (this.hitboxSize/2)) + (hudSize))){ // if player is close enough to tile to have entered it
            levels[1].startTileX = 16
            levels[1].startTileY = 14
            currentLevel = 1
            loadLevel()
          }
        }

        if (tileRules[tileY][tileX] == 10){ // checks if tile is a level changer 
          if ((this.nextPosX >= tileX*tileSize - (this.hitboxSize/2) && this.nextPosX <= tileX*tileSize + (tileSize + (this.hitboxSize/2))) && (this.nextPosY >= tileY*tileSize - (this.hitboxSize/2) + (hudSize) && this.nextPosY <= tileY*tileSize + (tileSize + (this.hitboxSize/2)) + (hudSize))){ // if player is close enough to tile to have entered it
            //where the player will spawn if entering level0 from a 10 tile rule
            levels[0].startTileX = 16
            levels[0].startTileY = 1
            currentLevel = 0
            //changes where player respawns on death vv
            spawnTileX = 26
            spawnTileY = 10
            loadLevel()
          }
        }

        if (tileRules[tileY][tileX] == 12){ // checks if tile is a level changer 
          if ((this.nextPosX >= tileX*tileSize - (this.hitboxSize/2) && this.nextPosX <= tileX*tileSize + (tileSize + (this.hitboxSize/2))) && (this.nextPosY >= tileY*tileSize - (this.hitboxSize/2) + (hudSize) && this.nextPosY <= tileY*tileSize + (tileSize + (this.hitboxSize/2)) + (hudSize))){ // if player is close enough to tile to have entered it
            //where the player will spawn if entering level0 from a 12 tile rule
            levels[0].startTileX = 7
            levels[0].startTileY = 1
            currentLevel = 0
            //changes where player respawns on death vv
            spawnTileX = 26
            spawnTileY = 10
            loadLevel()
          }
        }

        if (tileRules[tileY][tileX] == 13){ // checks if tile is a level changer 
          if ((this.nextPosX >= tileX*tileSize - (this.hitboxSize/2) && this.nextPosX <= tileX*tileSize + (tileSize + (this.hitboxSize/2))) && (this.nextPosY >= tileY*tileSize - (this.hitboxSize/2) + (hudSize) && this.nextPosY <= tileY*tileSize + (tileSize + (this.hitboxSize/2)) + (hudSize))){ // if player is close enough to tile to have entered it
            //where the player will spawn if entering level2 from a 13 tile rule
            levels[2].startTileX = 7
            levels[2].startTileY = 14
            currentLevel = 2
            loadLevel()
          }
        }

//checking tile collision vv

        tileIsCollidable = false // variable set to false by default before checking the next tile
        if (tileRules[tileY][tileX] == 1){ // checks if this tile is collidable
          tileIsCollidable = true // variable set to true if value for tile is collidable
        }
        
        if (tileIsCollidable == true){ // if tile is labelled to have collision
          collidableTiles += 1 // count of how many collidable tiles there are
          if ((this.nextPosX >= tileX*tileSize - (this.hitboxSize/2) && this.nextPosX <= tileX*tileSize + (tileSize + (this.hitboxSize/2))) && (this.nextPosY >= tileY*tileSize - (this.hitboxSize/2) + (hudSize) && this.nextPosY <= tileY*tileSize + (tileSize + (this.hitboxSize/2)) + (hudSize)) && (this.collided == false)){ // if player is close enough to tile to have collided with it (and a collision has not yet occured with another tile)
            this.directionOfCollision = this.directionState // (direction of the collided tile compared to the player). direction of collision is set to the direction the player is moving at the time the player collides with the tile
            this.collided = true // collision is occuring
            //pushes player back a little when they collide with a tile. This was implemented to fix a bug that allowed the player to enter other collidable tiles if first colliding with another tile perpendicular to it
            // vv
            if (this.directionState == up){
              this.nextPosY = this.posY + this.speed
            }
            if (this.directionState == left){
              this.nextPosX = this.posX + this.speed
            }
            if (this.directionState == down){
              this.nextPosY = this.posY - this.speed
            }
            if (this.directionState == right){
              this.nextPosX = this.posX - this.speed
            }
          }
          if (!((this.nextPosX >= tileX*tileSize && this.nextPosX <= tileX*tileSize + (tileSize)) && (this.nextPosY >= tileY*tileSize + (hudSize) && this.nextPosY <= tileY*tileSize + (tileSize) + (hudSize)))){ // if player is not close enough to tile to have collided with it
            collidableTiles_NotCollidedWith += 1 // add one to the count of how many collidable tiles there are that the player hasn't collided with
          }
        }
      }
    }
    if (collidableTiles_NotCollidedWith == collidableTiles){ // if none of the collidable tiles get collided with by the player:
      this.collided = false // collision is not occuring
      this.directionOfCollision = 4 // 4 is the state of no collision occouring in any direction, allowing player to walk in all 4 directions
    }
    collidableTiles = 0 // resets for next check
    collidableTiles_NotCollidedWith = 0 // resets for next check
    if (this.directionOfCollision != this.directionState){ // if attempting to walk in a direction that isn't the direction the collision occured 
      if(((keyIsDown(65))||(keyIsDown(68))||(keyIsDown(87))||(keyIsDown(83))) && (this.attacking == false)){ // if walking key is pressed (wasd) , and attacking is not happening
        this.posX = this.nextPosX // move in x direction
        this.posY = this.nextPosY // move in y direction
      }
    }


    if (this.isMoving == true){// if player is moving
      counter += 1 // n increments every loop
      if (this.leg == 0){ //if walking has just started:
        this.leg = 1  // start walking with left leg up
      }//       n vv
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

  attack (){
    if (keyIsDown(32)){
      this.attacking = true

      if (this.directionState == up){
        image(sprites.sword[this.directionState],this.posX,this.posY - attackRange,tileSize/2,tileSize)

        //playerWeaponHitbox = (!(enemyX - (enemySize/2) >= this.posX + (this.hitboxSize/2) && enemyX + (enemySize/2) <= this.posX - (this.hitboxSize/2) && enemyY + (enemySize/2) <= this.posY - (this.hitboxSize + (this.hitboxSize/2)) && enemyY - (enemySize/2) >= this.posY + (-this.hitboxSize + (this.hitboxSize/2))))
      }
      if (this.directionState == left){
        image(sprites.sword[this.directionState],this.posX - attackRange,this.posY,tileSize,tileSize/2)

        //
      }
      if (this.directionState == down){
        image(sprites.sword[this.directionState],this.posX,this.posY + attackRange,tileSize/2,tileSize)

        //
      }
      if (this.directionState == right){
        image(sprites.sword[this.directionState],this.posX + attackRange,this.posY,tileSize,tileSize/2)

        //
      }
      
      //for (number of enemies in enemy list){
        //if ((enemy 1,2, etc) is within "playerWeaponHitbox"){
          //enemyCurrentHealth += - playerWeaponDamage
        //}
      //}
    }
    else {
      this.attacking = false
    }
  }

  hud(){
    if (this.alive == true){
      fill(50,100,50)
      rect(0,0,1600,hudSize)
    }
    this.healthbar()
  }
  
  healthbar(){
    //healthbar outline
    noFill()
    stroke(0)
    rect(20,50,this.maxHealth,20) // healthbar outline
    fill(200,0,0)
    noStroke()
    textSize(30)//scales text size
    text(this.currentHealth,20,45)//text display of health
    rect(20,50,this.maxHealth/(this.maxHealth/this.currentHealth),20) // healthbar (decreasing part when player is damaged)
  }            //bar length                        //bar thickness

  damageCheck() {
    // player is hit    and   player has not been hit too recently (invincibility frames gone)
    if ((mouseIsPressed) && (this.damagedRecently == false)){ // if [player is hit by enemy] and player has not been recently damaged
      this.currentHealth += -25 // take damage // n will be the damage an enemy does
      this.damagedRecently = true // player has been recently damaged
    }
    if (this.damagedRecently == true){ // if player has been recently damaged
      counter1 += 1 // count increments
    }
    if (counter1 == 3000){ // n is time being invincible after being hit
      this.damagedRecently = false // player no longer recently damaged (able to be damaged again)
      counter1 = 0 // reset invincibility counter
    }

    if (this.currentHealth <= 0){ // if player dies
      this.alive = false
      if (counter2 >= 300){ // once screen is 100% black // 255 is the max for alpha but a slight delay staying on the black screen as the counter continues to go to the higher number before respawning looks nice
        this.currentHealth = this.maxHealth // sets current health to max
        this.directionState = down
        this.currentSpriteGroup = sprites.knight_down
        this.alive = true
        currentLevel = 0
        levels[currentLevel].startTileX = spawnTileX
        levels[currentLevel].startTileY = spawnTileY
        loadLevel()

        counter2 = 0
      }
    }
  }

  deathScreen(){
    if (this.alive == false){
      fill(0,0,0,counter2)
      rect(0,hudSize,1600,800)
      counter2 += 0.05
    }
  }

  display (){
    //player sprite          //player x //player y  //width  //height
    image(this.currentSprite,this.posX,this.posY,tileSize,tileSize) //draws player sprite
  }

}

function preload() { //tiles
  textures[0] = loadImage('sprites/tile_grass.png') 
  textures[1] = loadImage('sprites/tile_water.png')
  textures[2] = loadImage('sprites/tile_wood.png')
  textures[3] = loadImage('sprites/tile_stone_wall.png')
  textures[4] = loadImage('sprites/tile_wood_floor.png')
  textures[5] = loadImage('sprites/tile_stone_floor.png')
  textures[6] = loadImage('sprites/tile_void.png')

  sprites = { //groups of sprites. 
  // Each group here containing the still and walking sprites for a single direction of movement.
    knight_up: [loadImage('sprites/knight_up_still.png'),loadImage('sprites/knight_up_leftlegwalk.png'),loadImage('sprites/knight_up_rightlegwalk.png')],
    knight_left: [loadImage('sprites/knight_left_still.png'),loadImage('sprites/knight_left_leftlegwalk.png'),loadImage('sprites/knight_left_rightlegwalk.png')],
    knight_down: [loadImage('sprites/knight_down_still.png'),loadImage('sprites/knight_down_leftlegwalk.png'),loadImage('sprites/knight_down_rightlegwalk.png')],
    knight_right: [loadImage('sprites/knight_right_still.png'),loadImage('sprites/knight_right_leftlegwalk.png'),loadImage('sprites/knight_right_rightlegwalk.png')],

    // group of sprites. Each group containing the sword sprite for a single direction of movement.
    sword: [loadImage('sprites/sword_up_middle.png'),loadImage('sprites/sword_left_middle.png'),loadImage('sprites/sword_down_middle.png'),loadImage('sprites/sword_right_middle.png')]
  }
  
}

function setup() {
  createCanvas(1600,800 + hudSize);
  imageMode(CENTER)
  rectMode(CORNER)


  player1 = new Player(sprites.knight_down, (spawnTileX*tileSize) + tileSize/2, (spawnTileY*tileSize) + tileSize/2 + hudSize) // instance of Player class
  
  loadLevel()
}

function loadLevel() {

  graphicMap = levels[currentLevel].graphicMap
  tileRules = levels[currentLevel].tileRules

  player1.posX = ((levels[currentLevel].startTileX) * tileSize) + tileSize/2
  player1.posY = ((levels[currentLevel].startTileY) * tileSize) + hudSize + tileSize/2
  player1.nextPosX = player1.posX
  player1.nextPosY = player1.posY

  let tileID = 0 //identification of each individual tile, starting at 0
  for (let tileX = 0; tileX < tilesX; tileX++) { // loops the tile creation for how many tiles there are supposed to be horizontally in the tile map
    tileMap[tileX] = []
    for (let tileY = 0; tileY < tilesY; tileY++) { // loops the tile creation for how many tiles there are supposed to be vertically in the tile map
      let texture = graphicMap[tileY][tileX]
      tileMap[tileX][tileY] = new Tile(textures[texture], tileX, tileY, tileSize, tileID) //creates a tile object for every 50 pixels down and every 50 pixels right
      tileID++
    }
  }
}

function draw() {
  background(100) // 
  for (let tileX = 0; tileX < tilesX; tileX++) { // loops the tile display for how many tiles there are horizontally
    for (let tileY = 0; tileY < tilesY; tileY++) { // loops the tile display for how many tiles there are vertically
      tileMap[tileX][tileY].display() // display tile
      //tileMap[tileX][tileY].debugGrid() //displays the x and y of the tile in the tileMap scale (not default pixel scale), along with the tile ID
    }
    
    player1.move()
    player1.attack()
    player1.display()
    player1.hud()
    player1.damageCheck()
    player1.deathScreen()
  }

  //tileMap[5][6].displayMessage()//adding a message to specified tiles
}