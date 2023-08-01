let tableOne = document.querySelector('.table_one')
let inputOne = document.querySelector('.input_one')
let btnOne =document.querySelector('.btn_one')


let tableTwo = document.querySelector('.table_two')
let inputTwo = document.querySelector('.input_two')
let btnTwo =document.querySelector('.btn_two')


let tableThree = document.querySelector('.table_three')
let inputThree = document.querySelector('.input_three')
let btnThree =document.querySelector('.btn_three')

let result = document.querySelector('.result')
let chance = 5 ;
let playerChance = document.querySelector('.player_chance')
let p1result = document.querySelector('.p1result')
let p1value = document.querySelector('.p1value')


btnOne.addEventListener('click',function(){
    if(inputOne.value == ""){
       result.innerHTML = 'Error'
    }else{
        tableOne.style.display='none'
        tableTwo.style.display='block'
        result.style.display='none'
    }
})
btnTwo.addEventListener('click',function(){
    if(inputTwo.value == ""){
        result.innerHTML = 'please input a number'
        result.style.display='block'
    }else if(inputTwo.value > 10 || 1 > inputTwo.value){
        result.innerHTML = 'please give me a number under 1-10'
        result.style.display='block'
    }else if(inputTwo.value-10){
        tableTwo.style.display='none'
        tableThree.style.display='block'
        result.style.display='none'
    }else{
        result.innerHTML='please input number under 1-10'
        result.style.display='block'
    }
})

btnThree.addEventListener('click',function(){
    if(inputTwo.value == inputThree.value){
        result.innerHTML = 'player - 2 winner'
        result.style.display='block'
    }else if(inputThree.value == ""){
        result.innerHTML='please input your guess'
        result.style.display='block'
    }
    else{
        chance--;
        playerChance.innerHTML = chance
        result.style.display='none'
        if(chance == 0){
            result.innerHTML = 'player - 1 win'
            tableThree.style.display='none'
            result.style.display='block'
            p1result.innerHTML =inputTwo.value
            p1value.style.display='block'
        }
    }
})


