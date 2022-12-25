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
const FRAME_LIMIT = 32;
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
var hell = true;
var curr_lok = 1;
if (curr_lok == 1) {
  canvas.style = 'background-image: url("https://i.ibb.co/Y2YRx8S/back.png")';
}
else if (curr_lok == 2) {
  canvas.style = 'background-image: url("https://sun4-16.userapi.com/impg/5g99O0fCEdYfA-zIrt1Lz9sAac2py9vcmz891Q/Gr3lK2h0cZY.jpg?size=676x592&quality=96&sign=c9478eaeda69a19aa4e1a8a292a6ad83&type=album")';
} 
function loadImage() {
  img.src = 'https://i.ibb.co/qxMczB0/spritesheet.png';
  img.onload = function () {
    window.requestAnimationFrame(gameLoop);
  };
}
function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
    frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
    canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
}
loadImage();
function openBox1Sown(asr) {
  var div = document.createElement('div');
  if (asr == 1) {
    var inn = 'Привет, как тебя зовут?'
  }
if (asr == 2) {
    var inn = 'Я - Северная, а какое же твоё имя, оруженосец? Забыл, что ли? <span style="text-decoration: underline;"></span>';
    var sty = "color: blue;"
    div.style = "color: blue !important;"
  } 
  if (asr == 3) {
    var inn = 'Я помню... Я... <input type="text" id="na"> ';
    var sty = " "
    div.style = sty
    document.body.appendChild(div);
    div.addEventListener('keydown', function (event) {
      if (event.key == "Enter") {
        lol = document.getElementById('na').value;
        localStorage.setItem('name', lol); } });

  }  
  if (asr == 4) {
    let name = localStorage.getItem('name');
    var inn = 'Ну вот, ' + name +'. Что же ты хочешь узнать?';
    var sty = "color: blue;"
  }
    if (asr == 5) {
    let name = localStorage.getItem('name');

    var inn = '<button onclick="who()">Кто ты?</button><button onclick="where()">Где мы?</button>';
      
    var sty = " "
  }       function who() {
       asr = 6
    if (asr == 6) {
    let name = localStorage.getItem('name');
    var inn = 'Неужто забыл? Я - старейшина Грозового племени, или ты и себя не помнишь?';
    var sty = "color: blue;"
    asr = 8
  }
      }
      function where() {
       asr = 7   
        if (asr == 7) {
    let name = localStorage.getItem('name');
    var inn = 'Память потерял? Мы в Песчаном овраге.';
    var sty = "color: blue;"
      }

 
  }
       if (asr == 8) {
    let name = localStorage.getItem('name');
    var inn = 'О тебе спрашивал Острозвёзд. Иди, найди своего отца.';
    var sty = "color: blue;"
  }
         if (asr > 8) {
    let name = localStorage.getItem('name');
    var inn = 'Погодка сегодня неплохая.';
    var sty = "color: blue;"
  }
  if (hell == true) {

    div.innerHTML = inn
    div.style = "display: block";
    div.style = sty
    document.body.appendChild(div);
  }
  if (hell == false) {
    return true


  }

} var co = 1
document.addEventListener('keyup', function (event) {
  if (positionX > 20 && positionX < 60 && positionY > 50 && positionY < 70) {
    if (event.key == 'e') {
      openBox1Sown(co)
      co++
      console.log(co)
      return co
    }
  }
})
document.addEventListener('keyup', function (event) {
  if (positionX > 110 && positionX < 170 && positionY > 1 && positionY < 70) {
    console.log('loc')
    if (event.key == 'q') {
      curr_lok = 2;
      canvas.style = 'background-image: url("https://sun4-16.userapi.com/impg/5g99O0fCEdYfA-zIrt1Lz9sAac2py9vcmz891Q/Gr3lK2h0cZY.jpg?size=676x592&quality=96&sign=c9478eaeda69a19aa4e1a8a292a6ad83&type=album")';
    }
  }
})



function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (curr_lok == 1) {
    base_image = new Image();
    base_image.src = 'https://i.ibb.co/L0VCXbX/missSown.png';
    ctx.drawImage(base_image, 50, 70, 35, 35);
    if (positionX > 24 && positionX < 70 && positionY > 53 && positionY < 87) {
      positionX = positionX - 1;
      positionY = positionY - 1;
      console.log(positionY)
    }

  }
  window.addEventListener('keydown', keyDownListener);
  function keyDownListener(event) {
    keyPresses[event.key] = true;
  }
  window.addEventListener('keyup', keyUpListener);
  function keyUpListener(event) {
    keyPresses[event.key] = false;
  }
  let hasMoved = false;
  if (keyPresses.w) {
    moveCharacter(0, -MOVEMENT_SPEED, FACING_UP);
    hasMoved = true;
  } else if (keyPresses.s) {
    moveCharacter(0, MOVEMENT_SPEED, FACING_DOWN);
    hasMoved = true;
  }
  if (keyPresses.a) {
    moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
    hasMoved = true;
        console.log('sdsa')
  } else if (keyPresses.d) {
    moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
    hasMoved = true;
    console.log('sdsa')

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
