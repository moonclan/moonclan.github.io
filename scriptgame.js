/*const SCALE = 2;
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
var MOVEMENT_SPEED = 1;
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
  if (positionX > 100 && positionX < 150 && positionY > 0 && positionY < 10) {
    console.log('loc')
    if (event.key == 'q') {
      if(curr_lok == 1) {
      curr_lok = 2;
      canvas.style = 'background-image: url("https://i.ibb.co/VYLCvXj/back2.png")';
      }

    }
  }
  else if (positionX > 98 && positionX < 160 && positionY > 110 && positionY < 119) { 
    if (curr_lok == 2) {
      if (event.key == 'q') {
      curr_lok = 1;
      canvas.style = 'background-image: url("https://i.ibb.co/Y2YRx8S/back.png")';
    }
    }
  }
  }
)

window.addEventListener('keydown', function(event) {
    if (event.key == 'Shift') {
         MOVEMENT_SPEED = 2 
 
    }
  }); 
window.addEventListener('keyup', function (event) { 
    if (event.keyCode = 'Shift') {
      MOVEMENT_SPEED = 1

    }  }) 

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
  } else if (keyPresses.d) {
    moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
    hasMoved = true;

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


function sniff() {
var sn = document.getElementById('sniff');
if(curr_lok == 2) {
sn.innerHTML = 'Пахнет морозом. Брр. Ещё здесь есть немного котов и слабый запах дичи из кучи. Обычный лагерь.';
} else if(curr_lok == 1) {
sn.innerHTML = 'Пахнет холодом. Мне сложно что-то учуять. Дичью не пахнет. Чую лагерь... <span style="color: white;">где-то севернее.</span>';
}
}
canvas.onmousemove = function () {
  var x = positionX;
  var y = positionY;
  document.getElementById('devel').innerHTML = 'x: ' + x + ' y: ' + y;
}

*/

/*function dssdsd() {
  window.localStorage.setItem('st', 'null')
}
dssdsd() - бесконечный цикл*/ 
if (window.localStorage.getItem('st') != 'true' && window.localStorage.getItem('st') != 'false') {
  window.localStorage.setItem('st', 'true')
}
function set() {
  if (window.localStorage.getItem('st')== 'null') {
    window.localStorage.setItem('st', 'true')
  }
  return window.localStorage.getItem('st')
}
set()
if (set() == 'true') {
var audio = new Audio('https://docs.google.com/uc?export=open&id=1oYakGmDwScg9eXmHe1qwOn8piTbXqRpp');
// РЎС†РµРЅР°СЂРёР№ РјРѕРґРёС„РёС†РёСЂРѕРІР°РЅ РґР»СЏ С†РёРєР»РёС‡РЅРѕРіРѕ РІРѕСЃРїСЂРѕРёР·РІРµРґРµРЅРёСЏ.
document.addEventListener('DOMContentLoaded', () => {

  let textBox = document.querySelector('.screen');
  let text = textBox.innerText;
  let newHTML = '';
  let count = 0;
  let j = 0;
  let timeout = 50;


  function initText() {
    newHTML = '';
    for (i = 0; i < text.length; i++) {
      if (text[i] == "\n") {
        newHTML += '<span class="t">' + text[i] + '</span>' + "\n";
      } else {
        newHTML += '<span>' + text[i] + '</span>';
      }

    }
    textBox.innerHTML = newHTML;
    spans = textBox.querySelectorAll('span');
    count = 0;
    j = 0;
  }

  function typing_text() {
    spans[count].classList.add('visible');
    if (spans[count].innerText == ' ' || spans[count].innerHTML == ' ') {
      audio.play();
      timeout = 190;
      spans[count].classList.add('cursor');

    } else if (spans[count].innerText == "\r" || spans[count].innerText == "\n") {
      spans[count].classList.add('cursor');
      timeout = 1000;

    } else {
      audio.play();
      timeout = 190;


    }
    if (count < text.length - 1) {
      setTimeout(() => {
        spans[count].classList.remove('cursor');
        count++;
        typing_text();
      }, timeout);
    } else {
 /*setTimeout(() => {
             initText();
             typing_text();
           }, 1000);
    */}
  }


  initText();
  typing_text();
});













var input = document.getElementById('text')
var name = window.localStorage.getItem('name')
var okras = window.localStorage.getItem('okras')
var pol = window.localStorage.getItem('pol')
input.addEventListener('keydown', function(event) {
  if(event.key == 'Enter') {
    send()
  }
})
var nam = document.getElementById('name')
var okr = document.getElementById('okras')
document.getElementById('name').addEventListener('keydown', function (event) {
  if (event.key == 'Enter') {
    window.localStorage.setItem('name', nam.value)
  }
})
document.getElementById('okras').addEventListener('keydown', function (event) {
  if (event.key == 'Enter') {
    window.localStorage.setItem('okras', okr.value)
  }
})
var last = input.value
function send() {
  if (input.value === '') {
    console.log('Пустые строчки нельзя отправлять.')
  }
  else if (input.value.trim() != '') {
    var msg = document.createElement('span')
    msg.innerHTML = input.value + "- by <b style='border-bottom: 1px dashed #fff;'>" + name + "</b><br>"
    document.getElementById('mess').appendChild(msg)
    last = input.value
    input.value = ''
  }
  else {
    console.log('Пустые строчки нельзя отправлять.')
  }
}
function female() {
  document.getElementById('female').style = 'color: violet'
  document.getElementById('male').style = 'color: white'
  window.localStorage.setItem('pol', 'female')
}
function male() {
  document.getElementById('male').style = 'color: violet'
  document.getElementById('female').style = 'color: white'
  window.localStorage.setItem('pol', 'male')
}
function message(tex, bot) {
 var msg = document.createElement('span')
  msg.class="msg"
  msg.innerHTML = tex + "- by <b style='border-bottom: 1px dashed #fff;'>" + bot + "</b><br>"
  document.getElementById('mess').appendChild(msg)
  /*var mess = document.getElementById('mess')
  mess.innerHTML = mess.innerHTML + tex + "- by <b style='border-bottom: 1px dashed #fff;'>" + bot + "</b><br>"
*/
  document.getElementById('mess').scrollTop = 9999999
}
var start = document.body.innerHTML
var caa = `
<style>
	body {
		/*background: black;*/
	}

	.screen {
		max-width: 500px;
		font: 20px/140% 'Courier New', Courier, Arial;
		padding: 20px;
	/*	background: black;*/
		color: #666f78;
		white-space: pre-wrap;
	}

	.screen span {
		visibility: hidden;
	}

	.screen span.visible {
		visibility: visible;
	}

	span.t {
		min-width: 12px;
		max-height: 24px;
		display: inline-block;
	}

	/*     .screen span.cursor {
            background: lime;
            animation: blinking 0.5s step-start infinite;
        }*/

	@keyframes blinking {
		50% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}
</style>


<div class='screen'>
Ветер воет.
Ты уже очнулся, дитя моё?</div>

`
var scr = document.createElement('script')

document.body.innerHTML = caa
setTimeout(function() {
  var pol = window.localStorage.getItem('pol')
if (pol == 'male'){
  var slice = 'ся'
}else if(pol=='female') {
  var slice = 'ась'
}
setTimeout(function () { document.body.innerHTML = start
  document.getElementById('you').setAttribute('src', okras)

}, 9000)
setInterval(function() {
  if (last.includes('Лисий голос') === true) {
    
    if (pol = 'female') {
      var slice = 'а'
    }
    else {
      var slice = ''
    }
    message('Ты звал' + slice + ' меня? Я всегда здесь.', 'Лисий голос')
    last = ''
  }

}, 3000)
setTimeout(function() {
document.getElementById('drink').innerHTML = ' пить немного хочется'
}, 600000)
setTimeout(function () {
  document.getElementById('drink').innerHTML = 'умираю от жажды'
}, 905000)
setTimeout(function () {
  document.getElementById('drink').innerHTML = 'умираю'
}, 1070000)
setInterval(function() {
  if(document.getElementById('drink').innerHTML == 'умираю') {
    document.body.innerHTML = '<span id="drink" style="display:none">умираю</span><br>Вы умерли. Причина: вы очень хотели пить. Цветочек говорит, в следующий раз пейте на спецлокациях.'
  }
}, 9500)

setTimeout(function () {
  document.getElementById('game').onclick = function (e) {
  with (document.getElementById('you').style)
  if (e.pageX < 221 || e.pageY < 252) {
    
    left = e.pageX + 'px', top = e.pageY + 'px'; 
  }
  else {
    document.getElementById('sd').innerHTML = e.pageX + ',  y ' + e.pageY
    left = e.pageX - document.getElementById('you').offsetWidth / 2 + 'px', top = e.pageY - document.getElementById('you').offsetHeight / 2 + 'px';
  }
}
  var on = function (event) {
    message('1', 'Незнакомка')
  }
  var tw = function () {
    message('2', 'Незнакомка')
  }
  var asg = 1
  var que = document.getElementById('1')
  var que2 = document.getElementById('2')
  var ds = function cat() {
    if (asg == 1) {
      message("...", 'Незнакомка')
      asg = 2
    }
    else if (asg == 2) {
      message("...", 'Незнакомка')
      asg = '3'
    }
    else if (asg == 3) {
      message("Please, leave me alone.", 'Незнакомка')
      asg = '4'
    }
    else if (asg == 4) {
      message("...", 'Незнакомка')
      asg = '5'
    }
    else if (asg == 5) {
      message("I'm useless, don't you understand?", 'Незнакомка')
      asg = '6'
    }
    else if (asg == 6) {
      message("...", 'Незнакомка')
      asg = '7'
    }
    else if (asg == 7) {
      message("Oh.", 'Незнакомка')
      asg = '8'
    }
    else if (asg == 8) {
      message("You are very... persevering, aren't you?", 'Незнакомка')
      asg = '9'
    }
    else if (asg == 9) {
      message("Or you are determined?", 'Незнакомка')
      asg = '10'
    }
    else if (asg == 10) {
      message("Heh. You can be just.. kind.", 'Незнакомка')
      asg = '11'
    }
    else if (asg == 11) {
      message("Okay...  Did I introduce myself?", 'Незнакомка')
      asg = '12'
    }
    else if (asg == 12) {
      message("Call me Sparneb.", 'Спарнеб')
      asg = '13'
    }
    else if (asg == 13) {
      message("Do you... er... want to ask me something?", 'Спарнеб')
      asg = '14'
    }
    else if (asg == 14) {

      que.innerHTML = 'Что это за место?'

      que2.innerHTML = 'Ты слышала этот... странный голос?'
      asg = '15'

    }
    else if (asg == '15') {
      message('Do you... er... want to ask me something?', 'Спарнеб')
      asg = "89"
    }
    else if (asg == 'que') {
      que.setAttribute('color', 'violet')
      que2.setAttribute('color', 'white')
      setTimeout(function () { message('А, ты на русском говоришь... Кхм, ну как бы просто горы.', 'Спарнеб') }, 2000)


    }
    else if (asg == 'que2') {
      message('Всё ещё не понимаю, как я всё время на английском говорю... Какой голос?', 'Спарнеб')
      que2.setAttribute('color', 'violet')
      que.setAttribute('color', 'white')
    }
  }
  document.getElementById('mess').scrollTop = 9999999
  document.getElementById('black').onclick = ds;

  document.getElementById('1').onclick = function () {
    message(document.getElementById('1').innerHTML, name)
    setTimeout(function () {
      message("It's just mountains. <i>This</i> mountain is called ... er... do you have any.. phobias?",
        'Спарнеб')
    }, 1000)
    setTimeout(function () {
      message("I believe you can... survive. <i>This</i> mountain is called Hippopotomonstrosesquippedaliophobia.",
        'Спарнеб')
    }, 5000)
    document.getElementById('1').setAttribute('style', 'color:violet')
    document.getElementById('2').setAttribute('style', 'color:white')
  }
  document.getElementById('2').onclick = function () {
    message(document.getElementById('2').innerHTML, name)
    setTimeout(function () {
      message('I could only hear the birds` song and a sound of the wind.',
        'Спарнеб')
    }, 1000)
    document.getElementById('2').setAttribute('style', 'color:violet')
    document.getElementById('1').setAttribute('style', 'color:white')
  }















}, 10000)
function die(text) {
  document.body.innerHTML = '<span id="drink" style="display:none">умираю</span><br>Вы умерли. Причина: ' + text
}


})
var lok = 1
function hear(lok) {
  if (lok==1) {
    message('<i style="color:grey">Пока ничего. Птицы - синицы, наверное.  </i>', 'Звуки')
  }
}
window.localStorage.setItem('st', 'false')
}
else if(set() == 'false') {
  var input = document.getElementById('text')
  var name = window.localStorage.getItem('name')
  var okras = window.localStorage.getItem('okras')
  var pol = window.localStorage.getItem('pol')
  input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
      send()
    }
  })
  var nam = document.getElementById('name')
  var okr = document.getElementById('okras')
  document.getElementById('name').addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
      window.localStorage.setItem('name', nam.value)
    }
  })
  document.getElementById('okras').addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
      window.localStorage.setItem('okras', okr.value)
    }
  })
  var last = input.value
  function send() {
    if (input.value === '') {
      console.log('Пустые строчки нельзя отправлять.')
    }
    else if (input.value.trim() != '') {
      var msg = document.createElement('span')
      msg.innerHTML = input.value + "- by <b style='border-bottom: 1px dashed #fff;'>" + name + "</b><br>"
      document.getElementById('mess').appendChild(msg)
      last = input.value
      input.value = ''
    }
    else {
      console.log('Пустые строчки нельзя отправлять.')
    }
  }
  function female() {
    document.getElementById('female').style = 'color: violet'
    document.getElementById('male').style = 'color: white'
    window.localStorage.setItem('pol', 'female')
  }
  function male() {
    document.getElementById('male').style = 'color: violet'
    document.getElementById('female').style = 'color: white'
    window.localStorage.setItem('pol', 'male')
  }
  function message(tex, bot) {
    var msg = document.createElement('span')
    msg.class = "msg"
    msg.innerHTML = tex + "- by <b style='border-bottom: 1px dashed #fff;'>" + bot + "</b><br>"
    document.getElementById('mess').appendChild(msg)
    /*var mess = document.getElementById('mess')
    mess.innerHTML = mess.innerHTML + tex + "- by <b style='border-bottom: 1px dashed #fff;'>" + bot + "</b><br>"
  */
    document.getElementById('mess').scrollTop = 9999999
  }
  var start = document.body.innerHTML
  var caa = `
<style>
	body {
		/*background: black;*/
	}

	.screen {
		max-width: 500px;
		font: 20px/140% 'Courier New', Courier, Arial;
		padding: 20px;
	/*	background: black;*/
		color: #666f78;
		white-space: pre-wrap;
	}

	.screen span {
		visibility: hidden;
	}

	.screen span.visible {
		visibility: visible;
	}

	span.t {
		min-width: 12px;
		max-height: 24px;
		display: inline-block;
	}

	/*     .screen span.cursor {
            background: lime;
            animation: blinking 0.5s step-start infinite;
        }*/

	@keyframes blinking {
		50% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}
</style>


<div class='screen'>
Ветер воет.
Ты уже очнулся, дитя моё?</div>

`
  var scr = document.createElement('script')

 /* document.body.innerHTML = caa
  setTimeout(function () {*/
    var pol = window.localStorage.getItem('pol')
    if (pol == 'male') {
      var slice = 'ся'
    } else if (pol == 'female') {
      var slice = 'ась'
    }
    setTimeout(function () {
      document.body.innerHTML = start
      document.getElementById('you').setAttribute('src', okras)

    }, 9000)
    setInterval(function () {
      if (last.includes('Лисий голос') === true) {

        if (pol = 'female') {
          var slice = 'а'
        }
        else {
          var slice = ''
        }
        message('Ты звал' + slice + ' меня? Я всегда здесь.', 'Лисий голос')
        last = ''
      }

    }, 3000)
    setTimeout(function () {
      document.getElementById('drink').innerHTML = ' пить немного хочется'
    }, 600000)
    setTimeout(function () {
      document.getElementById('drink').innerHTML = 'умираю от жажды'
    }, 905000)
    setTimeout(function () {
      document.getElementById('drink').innerHTML = 'умираю'
    }, 1070000)
    setInterval(function () {
      if (document.getElementById('drink').innerHTML == 'умираю') {
        document.body.innerHTML = '<span id="drink" style="display:none">умираю</span><br>Вы умерли. Причина: вы очень хотели пить. Цветочек говорит, в следующий раз пейте на спецлокациях.'
      }
    }, 9500)

    setTimeout(function () {
      document.getElementById('game').onclick = function (e) {
        with (document.getElementById('you').style)
        if (e.pageX < 221 || e.pageY < 252) {

          left = e.pageX + 'px', top = e.pageY + 'px';
        }
        else {
          document.getElementById('sd').innerHTML = e.pageX + ',  y ' + e.pageY
          left = e.pageX - document.getElementById('you').offsetWidth / 2 + 'px', top = e.pageY - document.getElementById('you').offsetHeight / 2 + 'px';
        }
      }
      var on = function (event) {
        message('1', 'Незнакомка')
      }
      var tw = function () {
        message('2', 'Незнакомка')
      }
      var asg = 1
      var que = document.getElementById('1')
      var que2 = document.getElementById('2')
      var ds = function cat() {
        if (asg == 1) {
          message("...", 'Незнакомка')
          asg = 2
        }
        else if (asg == 2) {
          message("...", 'Незнакомка')
          asg = '3'
        }
        else if (asg == 3) {
          message("Please, leave me alone.", 'Незнакомка')
          asg = '4'
        }
        else if (asg == 4) {
          message("...", 'Незнакомка')
          asg = '5'
        }
        else if (asg == 5) {
          message("I'm useless, don't you understand?", 'Незнакомка')
          asg = '6'
        }
        else if (asg == 6) {
          message("...", 'Незнакомка')
          asg = '7'
        }
        else if (asg == 7) {
          message("Oh.", 'Незнакомка')
          asg = '8'
        }
        else if (asg == 8) {
          message("You are very... persevering, aren't you?", 'Незнакомка')
          asg = '9'
        }
        else if (asg == 9) {
          message("Or you are determined?", 'Незнакомка')
          asg = '10'
        }
        else if (asg == 10) {
          message("Heh. You can be just.. kind.", 'Незнакомка')
          asg = '11'
        }
        else if (asg == 11) {
          message("Okay...  Did I introduce myself?", 'Незнакомка')
          asg = '12'
        }
        else if (asg == 12) {
          message("Call me Sparneb.", 'Спарнеб')
          asg = '13'
        }
        else if (asg == 13) {
          message("Do you... er... want to ask me something?", 'Спарнеб')
          asg = '14'
        }
        else if (asg == 14) {

          que.innerHTML = 'Что это за место?'

          que2.innerHTML = 'Ты слышала этот... странный голос?'
          asg = '15'

        }
        else if (asg == '15') {
          message('Do you... er... want to ask me something?', 'Спарнеб')
          asg = "89"
        }
        else if (asg == 'que') {
          que.setAttribute('color', 'violet')
          que2.setAttribute('color', 'white')
          setTimeout(function () { message('А, ты на русском говоришь... Кхм, ну как бы просто горы.', 'Спарнеб') }, 2000)


        }
        else if (asg == 'que2') {
          message('Всё ещё не понимаю, как я всё время на английском говорю... Какой голос?', 'Спарнеб')
          que2.setAttribute('color', 'violet')
          que.setAttribute('color', 'white')
        }
      }
      document.getElementById('mess').scrollTop = 9999999
      document.getElementById('black').onclick = ds;

      document.getElementById('1').onclick = function () {
        message(document.getElementById('1').innerHTML, name)
        setTimeout(function () {
          message("It's just mountains. <i>This</i> mountain is called ... er... do you have any.. phobias?",
            'Спарнеб')
        }, 1000)
        setTimeout(function () {
          message("I believe you can... survive. <i>This</i> mountain is called Hippopotomonstrosesquippedaliophobia.",
            'Спарнеб')
        }, 5000)
        document.getElementById('1').setAttribute('style', 'color:violet')
        document.getElementById('2').setAttribute('style', 'color:white')
      }
      document.getElementById('2').onclick = function () {
        message(document.getElementById('2').innerHTML, name)
        setTimeout(function () {
          message('I could only hear the birds` song and a sound of the wind.',
            'Спарнеб')
        }, 1000)
        document.getElementById('2').setAttribute('style', 'color:violet')
        document.getElementById('1').setAttribute('style', 'color:white')
      }















    }, 10000)
    function die(text) {
      document.body.innerHTML = '<span id="drink" style="display:none">умираю</span><br>Вы умерли. Причина: ' + text
    }


  /*})*/
  var lok = 1
  function hear(lok) {
    if (lok == 1) {
      message('<i style="color:grey">Пока ничего. Птицы - синицы, наверное.  </i>', 'Звуки')
    }
  }
}
else if(set() == 'null') {
  window.localStorage.setItem('st', 'true')
}
