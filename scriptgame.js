

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
