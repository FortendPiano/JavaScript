'use strict';

let startPayment = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    mandatoryExpenses = document.getElementsByClassName('expenses-item'),

    btnToApproveMandatory = document.getElementsByTagName('button')[0],
    btnToApproveOptional = document.getElementsByTagName('button')[1],
    btnToCalculate = document.getElementsByTagName('button')[2],

    optionalApprove = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('.choose-income'),
    checkbox = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money,
    time,
    sum = 0;

btnToApproveMandatory.disabled = true;
btnToApproveOptional.disabled = true;
btnToCalculate.disabled = true;

startPayment.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    btnToApproveOptional.disabled = false;
    btnToCalculate.disabled = false;
});

for (let i = 0; i < mandatoryExpenses.length; i++) {
    mandatoryExpenses[i].addEventListener('input', function () {
        for (let j = 0; j < mandatoryExpenses.length; j++) {
            if (mandatoryExpenses[j].value != "") {
                btnToApproveMandatory.disabled = false;
            } else {
                btnToApproveMandatory.disabled = true;
            }
        }
    });
}



btnToApproveMandatory.addEventListener('click', function () {

    for (let i = 0; i < mandatoryExpenses.length; i++) {
        let questionOne = mandatoryExpenses[i].value,
            questionTwo = mandatoryExpenses[++i].value;

        if ((typeof (questionOne)) === 'string' && (typeof (questionOne)) != null && (typeof (questionTwo)) != null &&
            questionOne != '' && questionTwo != '') {
            appData.expenses[questionOne] = questionTwo;
            sum += +questionTwo;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});
btnToApproveOptional.addEventListener('click', function () {
    for (let i = 0; i < optionalApprove.length; i++) {
        let optional = optionalApprove[i].value;
        appData.optionalExpenses[i] = optional;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});
btnToCalculate.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка!";
        } else {
            levelValue.textContent = "Что-то тут не так...";
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка!';
    }
});
chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});
checkbox.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});
sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};