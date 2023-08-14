var backgroundImg, backGround
var catImg, cat
var dogImg, dog, dogs
var fishImg, fish
var invisibleGround
var score = 0

function preload(){
backgroundImg = loadImage("BackGround.jpeg")
catImg = loadImage("Cat.gif")
dogImg = loadImage("Dog.png")
fishImg = loadImage("fish.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)
backGround = createSprite(windowWidth/2,windowHeight/2,width,height)
backGround.addImage(backgroundImg)
backGround.scale = 1.1
backGround.velocityX = -7

invisibleGround = createSprite(300,800,windowWidth,20)
invisibleGround.visible = false

 cat = createSprite(300,700)
 cat.addImage(catImg)
 cat.changeAnimation("catAnimation",catImg)

 dogs = new Group()
 fishes = new Group()

 cat.setCollider("rectangle",0,0,250,90)
 cat.debug = true
}

function draw(){
background("blue")

if(keyDown("SPACE") && cat.y >= 600){
    cat.velocityY = -17
}

cat.velocityY += 0.3

 if(cat.isTouching(dogs)){
    fishes.setLifetimeEach(-1)
    dogs.setLifetimeEach(-1) 
    dogs.setVelocityXEach(0)
    fishes.setVelocityXEach(0)
    backGround.velocityX = 0
}

if(cat.isTouching(fishes)){
    score += 0.1
}



if(backGround.x < windowWidth/2 - 120){
    backGround.x = windowWidth/2
}

spawnDogs()
spawnFish()

cat.collide(invisibleGround)

drawSprites()

textSize(30)
fill("green")
text("Score: " + score, 800, 100)

}

function spawnDogs(){
    if(frameCount % 250 === 0){
    dog = createSprite(1700,750)
    dog.x = Math.round(random(800,1700))
    dog.y = Math.round(random(700,850))
    dog.addImage(dogImg) 
    dog.velocityX = -7
    dog.scale = 0.5
    dogs.add(dog)
    dogs.setLifetimeEach(300)
    }
}

function spawnFish(){
    if(frameCount % 100 === 0){
    fish = createSprite(1700,750)
    fish.x = Math.round(random(800,1700))
    fish.y = Math.round(random(600,700))
    fish.addImage(fishImg)
    fish.velocityX = -7
    fishes.add(fish)
    fishes.setLifetimeEach(300)
    }
}

