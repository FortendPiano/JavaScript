let startPayment = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthSavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearSavingsValue = document.getElementsByClassName('yearsavings-value'),

    mandatoryExpenses = document.getElementsByClassName('expenses-item'),

    btnToApproveMandatory = document.getElementsByTagName('button')[0],
    btnToApproveOptional = document.getElementsByTagName('button')[1],
    btnToCalculate = document.getElementsByTagName('button')[2],

    optionalApprove = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('.choose-income'),
    checkbox = document.querySelector('#savings'),
    summa = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');