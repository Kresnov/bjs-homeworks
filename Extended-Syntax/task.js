"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let d = b**2 - 4 * a * c; 
    let result = [];
    if (d < 0) {
        return result;
    } else if (d === 0) {
        result.push(-b / ( 2 * a ));
    } else {
        result.push(-b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a ));
        result.push(-b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a ));
    }
    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    if (marks.length > 5) {
        console.log("Количество оценок больше пяти");
        marks = marks.slice(0, 5);
    }
  
    let sum = 0;
      
    for (let i=0; i < marks.length; i++) {
        sum += marks[i];
    }
  
    return sum / marks.length;
  
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let year = new Date().getFullYear();
    let age = year - dateOfBirthday.getFullYear();
    let result;
    if (age >= 18) {
        result = "Не желаете ли олд-фэшн, " + name + "?";
    } else {
        result = "Сожалею, " + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!";
    }
    
    return result;
}