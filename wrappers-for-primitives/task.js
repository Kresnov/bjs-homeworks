"use strict"

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    percent = Number(percent) / 100;
    contribution = Number(contribution);
    amount = Number(amount);
    if (isNaN(percent)) {
      console.log(`Не числовое значение`);
      return;
    }
    if (isNaN(contribution)) {
        console.log(`Не числовое значение`);
        return;
    }
    if (isNaN(amount)) {
        console.log(`Не числовое значение`);
        return;
    }

    let nowYear = new Date().getFullYear();
    let nowMonth = new Date().getMonth() + 1;
    let creditYear = new Date(date).getFullYear();
    let creditMonth = new Date(date).getMonth() + 1;
    let amountMonths = (creditYear - nowYear) * 12 + (creditMonth - nowMonth);


    let allcredit = amount - contribution;
    let sumEveryMonth = allcredit * ((percent/12) + (percent/12) / (Math.pow((1 + (percent/12)), amountMonths) - 1));
    let totalAmount = sumEveryMonth * amountMonths;

    console.log(`Общая сумма выплаты: ${totalAmount.toFixed(2)}`);
  
    return totalAmount.toFixed(2);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name === false) {
        name = 'Аноним';
    }
      
    console.log(`Привет, мир! Меня зовут ${name}.`);
    let greeting = `Привет, мир! Меня зовут ${name}.`;
    return greeting;
}