'use strict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");
    
let questionOne = prompt("Введите обязательную статью расходов в этом месяце"),
    questionTwo = prompt("Во сколько обойдется?"),
    questionThree = prompt("Введите обязательную статью расходов в этом месяце"),
    questionFor = prompt("Во сколько обойдется?"); 
    
let appData = {
        budget: money,
        timeData: time,
        expenses: {
            questionOne: questionTwo,
            questionThree: questionFor
        },
        optionalExpenses: {},
        income: [],
        savings: false
    };
      
    appData.expenses.questionOne = questionTwo;
    appData.expenses.questionThree = questionFor;

    console.log(appData.expenses);
    alert("Бюджет на 1 день: " + (money/30).toFixed());