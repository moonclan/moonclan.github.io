let date = new Date()
let month = date.getMonth();
//определение сезона
  if (month == 11 || month == 0 || month == 1) {
    document.body.style = "background-image: url('/garbage/img/winter.png');"
  }
  if (month == 2 || month == 3 || month == 4) {
    document.body.style = "background-image: url('/garbage/img/spring.png');"
  }
  if (month == 5 || month == 6 || month == 7) {
    document.body.style = "background-image: url('/garbage/img/summer.png');"
  }
  if (month == 8 || month == 9 || month == 10) {
    document.body.style = "background-image: url('/garbage/img/autumn.png');"
  }
