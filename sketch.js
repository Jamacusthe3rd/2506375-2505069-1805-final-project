//setting up initial values
let tileMap = []
let tilesX = 10
let tilesY = 10
let tileSize = 50





class Tile { //creates class for a tile
  constructor(tileX,tileY,tileSize,tileID) {
    this.tileX = tileX; //x position of tile in tileMap grid
    this.tileY = tileY; //y position of tile in tileMap grid
    this.tileSize = tileSize; //size of tiles in pixels
    this.xPos = this.tileX * this.tileSize; //x pixel position of tile in canvas
    this.yPos = this.tileY * this.tileSize; //y pixel position of tile in canvas
    this.tileID = tileID;
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

function preload() {
  tile_grass = loadImage('sprites/tile_grass.png')
  tile_water = loadImage('sprites/tile_water.png')

}

function setup() {
  createCanvas(500,500);
  let tileID = 0
  for (let tileX = 0; tileX < tilesX; tileX++) {
    tileMap[tileX] = []
    for (let tileY = 0; tileY < tilesY; tileY++) {
      tileMap[tileX][tileY] = new Tile(tileX, tileY, tileSize, tileID) //creates a tile object for every 50 pixels down and every 50 pixels right
      tileID++
    }
  }
}

function draw() {
  background(0);
  for (let tileX = 0; tileX < tilesX; tileX++) {
    for (let tileY = 0; tileY < tilesY; tileY++) {
      tileMap[tileX][tileY].debugGrid() //displays the x and y of the tile in the tileMap scale (not default pixel scale), along with the tile ID
    }
  }

  tileMap[5][6].displayMessage()//adding a message to specified tiles
  tileMap[0][8].displayMessage()
  tileMap[3][4].displayMessage()
  tileMap[3][0].displayMessage()
}