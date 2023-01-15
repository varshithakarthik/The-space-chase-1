
var gameState="wait"
var waitbgimg,playbgimg
var playbutton,nextbutton


function preload(){

    waitbgimg=loadImage("varshita-assets-main/waitbg.gif")

}

function setup(){
createCanvas(windowWidth,windowHeight)

playbutton=createButton("PLAY")
playbutton.position(width/2,height-100)



}

function draw(){

background(waitbgimg)

}