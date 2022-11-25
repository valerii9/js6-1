

//   Створіть на сторінці div і дайте йому зовнішній відступ 150 пікселів. Використовуючи JS виведіть у консоль відступ

const ma = document.getElementById('1')
let style = getComputedStyle(ma)
console.log(style.margin);