'use strict';

let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    
let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };
let questionOne = prompt("Введите обязательную статью расходов в этом месяце", ''),
    questionTwo = prompt("Во сколько обойдется?", ''),
    questionThree = prompt("Введите обязательную статью расходов в этом месяце", ''),
    questionFor = prompt("Во сколько обойдется?", ''); 

    appData.expenses[questionOne] = questionTwo;
    appData.expenses[questionThree] = questionFor;

    console.log(appData.expenses);
    alert("Бюджет на 1 день: " + (appData.budget/30).toFixed());