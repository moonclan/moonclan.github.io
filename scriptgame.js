const SCALE = 2;
const WIDTH = 75;
const HEIGHT = 80;
const SCALED_WIDTH = 35;
const SCALED_HEIGHT = 35;
const CYCLE_LOOP = [0, 1, 0, 2];
const FACING_DOWN = 0;
const FACING_UP = 1;
const FACING_LEFT = 2;
const FACING_RIGHT = 3;
const FRAME_LIMIT = 12;
const MOVEMENT_SPEED = 1;
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let keyPresses = {};
let currentDirection = FACING_DOWN;
let currentLoopIndex = 0;
let frameCount = 0;
let positionX = 0;
let positionY = 0;
let img = new Image();
window.addEventListener('keydown', keyDownListener);
function keyDownListener(event) {
  keyPresses[event.key] = true;
}
window.addEventListener('keyup', keyUpListener);
function keyUpListener(event) {
  keyPresses[event.key] = false;
}
function loadImage() {
  img.src = 'https://i.ibb.co/qxMczB0/spritesheet.png';
  img.onload = function () {
    window.requestAnimationFrame(gameLoop);
  };
  console.log('loadImage')
}
function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
    frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
    canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
}
loadImage();
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let hasMoved = false;
document.addEventListener('keydown', function(event){
    if(event.key == 'w') {
    moveCharacter(0, -MOVEMENT_SPEED, FACING_UP);
    hasMoved = true;
    } else if (event.key == 's') {
    moveCharacter(0, MOVEMENT_SPEED, FACING_DOWN);
    hasMoved = true;
    console.log('loadImage')
  }
});
/*  if (keyPresses.w) {
    moveCharacter(0, -MOVEMENT_SPEED, FACING_UP);
    hasMoved = true;
    console.log('loadImage')
  } else if (keyPresses.s) {
    moveCharacter(0, MOVEMENT_SPEED, FACING_DOWN);
    hasMoved = true;
    console.log('loadImage')
  }*/
  if (keyPresses.a) {
    moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
    hasMoved = true;
  } else if (keyPresses.d) {
    moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
    hasMoved = true;
    console.log('down')
  }
  if (hasMoved) {
    frameCount++;
    if (frameCount >= FRAME_LIMIT) {
      frameCount = 0;
      currentLoopIndex++;
      if (currentLoopIndex >= CYCLE_LOOP.length) {
        currentLoopIndex = 0;
      }
    }
  }
  if (!hasMoved) {
    currentLoopIndex = 0;
  }
  drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY);
  window.requestAnimationFrame(gameLoop);
}
function moveCharacter(deltaX, deltaY, direction) {
  if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {
    positionX += deltaX;
  }
  if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {
    positionY += deltaY;
  }
  currentDirection = direction;
}
let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function () {
  menuElem.classList.toggle('open');
}; 
