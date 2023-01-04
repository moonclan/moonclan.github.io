const SCALE = 2;
const WIDTH = 75;
const HEIGHT = 80;
const SCALED_WIDTH = 45;
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
var curr_lok = 2;
var asr = 1
if (curr_lok == 1) {
  canvas.style = 'background-image: url("https://i.ibb.co/Y2YRx8S/back.png")';
}
else if (curr_lok == 2) {
  canvas.style = 'background-image: url("https://i.ibb.co/VYLCvXj/back2.png")';
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
   if(curr_lok == 1) { var div = document.getElementById('text')
  let name = localStorage.getItem('name');
  function dia(ee) {
    if (ee == 'one') {
      var lc = 6;
    }
    if (lc == 'two') {
      lc = 71;
    }
    if (lc == 6) {
      let name = localStorage.getItem('name');
      var inn = '*Вы призадумались на секунду*. Слушай, мне нравится твоё имя. Оно такое звонкое, и твоим голосом хорошо звучит.';
      var sty = " "
      div.style = sty
      lc++
    }
    if (lc == 7) {
      let name = localStorage.getItem('name');
      var inn = '*Старая кошка усмехается*. Правда? Как же звонко это звучит - HerName.';
      var sty = "color: blue;"
      div.style = sty
      lc++
    }
    if (co == 8) {
      let name = localStorage.getItem('name');
      var inn = '*Вы покраснели, но ваша шерсть скрыла смущение*. Ой...';
      var sty = " "
      div.style = sty
      lc++
    }
    if (lc == 71) {
      let name = localStorage.getItem('name');
      var inn = '*Вы сильно задумались*. Кхем, слушай, а ты ... не видела мышей случайно...под тем платаном? А то меня... они... в общем... в палатку ... целителей нужна... мышиная желчь..!';
      var sty = " "
      div.style = sty
      lc == 72;
    }
  }
  if (asr == 1) {
    div.innerHTML = "Привет.";
  }
  if (asr == 2) {
    div.innerHTML = 'Привет, <input type="text" id="na" placeholder="Придумайте имя своего персонажа.">';
    div.style = "color: blue !important;"
  }
  if (asr == 3) {

    div.innerHTML = '<select id="sel1"><option value="one">Хмм... *сочинить предлог, чтобы выведать её имя*</option><option value="two">Хм...*сочинить предлог, чтобы выведать местоположение*</option></select>   <input type="text" id="au"placeholder="Здесь 1 или 2">';
    var e = document.getElementById('sel1').value;
    var sty = " "
    div.style = sty
    if (e == 'one') {
      co = 6;
    }
    if (e == 'two') {
      co = 71;
    }
    var hsd = true;
    if (hsd == true) {
      document.getElementById('au').addEventListener("keyup", function (event) {

        if (event.key == 1) {
          lc = 6;
          if (lc == 6) {
            let name = localStorage.getItem('name');
            div.innerHTML = '*Вы призадумались на секунду*. Слушай, мне нравится твоё имя. Оно такое звонкое, и твоим голосом хорошо звучит.';
            var sty = " "
            document.getElementById('as').addEventListener("keyup", function (event) {
              if (event.key == 'e') {
                lc = 7;
                if (lc == 7) {
                  let name = localStorage.getItem('name');
                  div.innerHTML = '*Старая кошка усмехается*. Правда? Как же звонко и мелодично это звучит - Кривоухая.';
                  var sty = "color: blue;"
                  div.style = sty
                  document.getElementById('as').addEventListener("keyup", function (event) {
                    if (event.key == 'e') {

                      let name = localStorage.getItem('name');
                      div.innerHTML = '*Вы покраснели, но ваша шерсть скрыла смущение*. Ой...';
                      var sty = " "
                      div.style = sty
                      lc++

                    } document.getElementById('as').addEventListener("keyup", function (event) {
                      if (event.key == 'e') {
                        let name = localStorage.getItem('name');
                        div.innerHTML = '*Кошка посмеялась ещё чуть-чуть*. О тебе спрашивал Острозвёзд. Иди, найди своего отца.';
                        var sty = "color: blue;"
                        div.style = sty
                        lc++

                      }
                    })
                  })
                }
              }
            })

          }
        }

        else if (event.key == 2) {
          lc = 71
          if (lc == 71) {
            let name = localStorage.getItem('name');
          div.innerHTML = '*Вы сильно задумались*. Кхем, слушай, а ты ... не видела мышей случайно...под тем платаном? А то меня... они... в общем... в палатку ... целителей нужна... мышиная желчь..!';
            var sty = " "
            div.style = sty
            lc == 72;
            document.getElementById('as').addEventListener("keyup", function (event) {
              if (event.key == 'e') {

                let name = localStorage.getItem('name');
                div.innerHTML = '*Кошка недоуменно посмотрела вам в глаза. Вы почувствовали неловкость.* Под Совиным деревом редко кто водится, даже в Сезон Зелёных Листьев, а сейчас Сезон Голых Деревьев.';
                var sty = "color: blue; "
                div.style = sty
                lc++

              } document.getElementById('as').addEventListener("keyup", function (event) {
                if (event.key == 'e') {
                  let name = localStorage.getItem('name');
                  div.innerHTML = '*Старейшина посмеялась*. О тебе спрашивал Острозвёзд. Иди, найди своего отца.';
                  var sty = "color: blue;"
                  div.style = sty
                  lc++

                }
              })
            })
          }

        }
      }
      )
      hsd = false
    }
  }

  if (asr == 9) {
    let name = localStorage.getItem('name');
    var inn = 'О тебе спрашивал Острозвёзд. Иди, найди своего отца.';
    var sty = "color: blue;"
  }
  if (asr == 10) {
    let name = localStorage.getItem('name');
    var inn = 'Хорошо. Тебе что-нибудь нужно?';
    var sty = " "
  }
  if (asr == 11) {
    let name = localStorage.getItem('name');
    var inn = 'Спасибо, но я полежу здесь. Небо красивое. А ты беги за Острозвёздом, ' + name;
    var sty = "color: blue;"
  }

  if (asr > 11) {
    let name = localStorage.getItem('name');
    var inn = 'Погодка сегодня неплохая.';
    var sty = "color: blue;"
  }
}
}
var co = 1
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
      if(curr_lok == 1) {
      curr_lok = 2;
      canvas.style = 'background-image: url("https://i.ibb.co/VYLCvXj/back2.png")';
      }
      else if(curr_lok ==2) {
        curr_lok = 1;
        canvas.style = 'background-image: url("https://i.ibb.co/Y2YRx8S/back.png")';
      }
    }
  }
})



function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

   if (curr_lok == 1) {
    base_image = new Image();
    base_image.src = 'https://i.ibb.co/L0VCXbX/missSown.png';
    ctx.drawImage(base_image, 50, 70, 45, 35);
    if (positionX > 24 && positionX < 70 && positionY > 53 && positionY < 87) {
      positionX = positionX - 1;
      positionY = positionY - 1;
      console.log(positionY)
    }

  } else if (curr_lok == 2) {
    base_image = new Image();
    base_image.src = 'https://i.ibb.co/dKFCP66/poppy.png';
    ctx.drawImage(base_image, 100, 70, 45, 35);
    if (positionX > 77 && positionX < 123 && positionY > 47 && positionY < 98) {

        positionY = positionY - 1;
        positionX = positionX - 1;
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
