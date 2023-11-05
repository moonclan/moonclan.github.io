const log = console.log

var nameEl = document.getElementById('name');
var okrasEl = document.getElementById('okras');
var sparnebEl = document.getElementById('black');
var chatEl = document.getElementById('mess');

var currentLocation = 'startMountains'

var i = 0;
var d = 0;
var f = 0;
document.write(`На этом этапе разработки диалоги являются проверкой 
кода и могут не иметь смысла. Будьте осторожны! 
Не ищите смысл там, где его нет.`)

//макет phrases:
var sparnebSaysHard = {
  'start': ['<i>Она не отвечает.</i>', 
  '<i> Она не отвечает... Почему бы это?</i >', 
  'P'],
  'questions': {
     0: ['This is the mountains.','Что это за место?'],
    1: ['...','Кто ты?'],
    2: [`I .. d-didn't hear anything.`, 'Ты слышала это?']
  }
}
//упрощённое phrases 
var sparnebSays = 
  ['start', '<i>Она не отвечает.</i>', 
  '<i> Она не отвечает. 2</i >', 'Hi!',
  'questions',
  'Что это за место?', 'IDK LOL',
  'Кто ты?', 'LOL ХЗ'
  ]


var allBots = {
  'startMountains': ['<input type="image" onclick="log(`click! (onclick)`);dialog(sparnebEl, sparnebSaysHard, `Sparneb`)" id="black"  style="position: relative; left: 70px; top: 0px; width: 100px" src="https://i.ibb.co/TwwwJfK/black.png">'],
  'forest': ['fsd']

}
//onclick="log(`s`);dialog(sparnebEl, sparnebSaysHard, `Sparneb`)"
//onclick="move('none', 'https://i.ibb.co/B4MWcGP/image.png', 'startMountains', checkLocate(allBots, allMoves, allBotEls))"


var allMoves = {
  'startMountains': [`    <button onclick= "currentLocation = 'forest';move('none', 'https://i.ibb.co/B4MWcGP/image.pngg', 'forest', checkLocate(allBots, allMoves, allBotEls))" id="moveForest">В Лес</button>`, 
  `    <button onclick= "log('youre trying to move on the meadow')" id="moveMeadow">На Луг</button>`],
  'forest': [`    <button onclick= "currentLocation = 'startMountains';move('none', 'https://i.ibb.co/B4MWcGP/image.png', 'startMountains', checkLocate(allBots, allMoves, allBotEls))" id="moveStartMountains">В Горы</button>`]
}

var allBotEls = {
  'startMountains': [document.getElementById('black'), sparnebSaysHard, 'Sparneb'],
  'forest': ['none', 'none', 'none']
}


function say(phrase) {
  var phraseEl = document.createElement('span')
  phraseEl.innerHTML = phrase + '<br>'
  chatEl.appendChild(phraseEl)
}

function createQuestion(phr) {
  var question = document.createElement('span')
  question.innerHTML = phr['questions'][d][1] + '<br>'
  question.id = d

  document.getElementById('quest').appendChild(question)

  question.addEventListener('click', function () {

    say(phr['questions'][question.id][0])
    f++
  })
  d++
}

function dialog(botEl, phrases, botName) { //phrases - это словарь
  botEl.removeAttribute('onclick')
  log('dialog!')
 
  botEl.addEventListener("click", function (event) {
        function cycle() {

    if(phrases['start'][i] != undefined) {
      say(phrases['start'][i]);
    } else if (phrases['start'][i] == undefined) {
    var endI = i
      sessionStorage.setItem('endI', endI)
      if (phrases['questions'][d] != undefined) {
        //say(phrases['questions'][d][0])
        log(d)
        while (phrases['questions'][d] != undefined){
createQuestion(phrases)
}
       

      }

    } else {
      log(phrases[i]);
      }  
      


  i++

  }
  cycle()
  })
}

sparnebEl.addEventListener("click", function (event) {
  cycle()
  
})


//dialog(sparnebEl, sparnebSaysHard, 'Sparneb');

function checkLocate(locationBots, moves, botEls) {
  var locBots = []
  var locMoves = []
  var locAll = []

  for (var p = 0; p < Object.keys(moves).length; p++) {
    if (currentLocation == Object.keys(moves)[p]) {
      
      for (var h = 0; h < moves[Object.keys(moves)[p]].length; h++) {

        var moved = moves[Object.keys(moves)[p]][h]
        locMoves.push(moved)
        locAll.push(moved)
      }
    }
  }  
  for (var g = 0; g < Object.keys(locationBots).length; g++) {
    if (currentLocation == Object.keys(locationBots)[g]) {
      for (var s = 0; s < locationBots[Object.keys(locationBots)[g]].length; s++) {

      var bot = locationBots[Object.keys(locationBots)[g]][s]
      locBots.push(bot)
      locAll.push(bot)

      }
    }
  }
 
  for (var u = 0; u < Object.keys(botEls).length; u++) {
    if (botEls[Object.keys(botEls)[u]][0] != 'none' && botEls[Object.keys(botEls)[u]][1] != 'none' && botEls[Object.keys(botEls)[u]][2] != 'none') {
    if (currentLocation == Object.keys(botEls)[u]) {
      var elementBot = botEls[Object.keys(botEls)[u]][0]
      var elementPhrases = botEls[Object.keys(botEls)[u]][1]
      var elementName = botEls[Object.keys(botEls)[u]][2]
        dialog(elementBot, elementPhrases, elementName)
      //log(botEls[Object.keys(botEls)[u]])
    }}
  }
//log(locBots, locMoves)
return locAll
}

function move(moveEl, moveImg, moveName, innerMove) {

  i = sessionStorage.getItem('endI')
  if(moveEl != 'none') {
    
  moveEl.addEventListener('click', function() {
    document.getElementById('quest').innerHTML = ''
    document.getElementById('game').style.backgroundImage = "url('" + moveImg+ "')"
    currentLocation = moveName
    //checkLocate(allBots)


    document.getElementById('game').innerHTML = `<img id="you" style="position: absolute;">` + innerMove
  })} else{
    document.getElementById('quest').innerHTML = ''
    document.getElementById('game').style.backgroundImage = "url('" + moveImg + "')"
    currentLocation = moveName
    //checkLocate(allBots)
    document.getElementById('game').innerHTML = `<img id="you" style="position: absolute;">` + innerMove
  }
  checkLocate(allBots, allMoves, allBotEls)
}


/*function checkLocation() {
  if(currentLocation == 'startMountains'){
    log('startMountains')
  dialog(sparnebEl, sparnebSaysHard)
  document.getElementById('game').style.backgroundImage = "url('https://i.ibb.co/B4MWcGP/image.png')"
  document.getElementById('game').innerHTML = `
  <img id="you" style="position: absolute;">
    <img src='https://i.ibb.co/Y8VvcxX/image.png' id="moveForest">
    <img id="black" style="position: relative; left: 70px; top: 0px; width: 100px" src="https://i.ibb.co/TwwwJfK/black.png">
  
  `
  move(document.getElementById('moveForest'), 'https://i.ibb.co/Y8VvcxX/image.png', 'forest')
} else if(currentLocation == 'forest'){
  document.getElementById('game').innerHTML = `
  <img id="you" style="position: absolute;">
    <img src='https://i.ibb.co/Y8VvcxX/image.pngg' id="moveForest">
  
  `
}}

document.getElementById('location').addEventListener('click', function() {
  checkLocation()
})*/

/*move('none', 'https://i.ibb.co/B4MWcGP/image.png', 'startMountains', `<img src='https://i.ibb.co/Y8VvcxX/image.png' id="moveForest">
    <img id="black" style="position: relative; left: 70px; top: 0px; width: 100px" src="https://i.ibb.co/TwwwJfK/black.png">`)
move(document.getElementById('moveForest'), 'https://ds', 'forest', '<p style="color=`white`" id=`moveStartMountains`>Перейти в горы</p>')
move(document.getElementById('moveStartMountains'), 'https://i.ibb.co/B4MWcGP/image.png', 'startMountains', `   <img src='https://i.ibb.co/Y8VvcxX/image.png' id="moveForest">
    <img id="black" style="position: relative; left: 70px; top: 0px; width: 100px" src="https://i.ibb.co/TwwwJfK/black.png">
  `)*/

move('none', 'https://i.ibb.co/B4MWcGP/image.png', 'startMountains', checkLocate(allBots, allMoves, allBotEls))
sparnebEl = document.getElementById('black');
