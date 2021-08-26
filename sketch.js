
var canvas;
var gameState=0;
var playerCount=0;
var database;
var form,game, player;
var allPlayers;
var distance=0;
var cars, car1, car2, car3, car4

function setup(){
    createCanvas(displayWidth,displayHeight);
    database= firebase.database();
    game = new Game();
    game.getState();
    game.start();

}
function draw(){
if(playerCount===2){
    game.update(1)
}
if(gameState===1){
    clear();
    game.play()
}
}