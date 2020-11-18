let col = +prompt('Введите число ступеней')
col = !isNaN(col) && col != 0 ? col: 5;
let simb = prompt('Введите символ отступов')
while(simb == '' || simb == null){
    simb = prompt('Введите символ отступов')
}
let end = prompt('Введите конечный символ') 
while(end == '' || end == null){
    end = prompt('Введите конечный символ')
}
let lin = ''
for( let i = 0; col >i; i++){
     lin+=simb
    console.log(lin + end)
}