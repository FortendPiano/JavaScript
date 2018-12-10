function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDay = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    function validCalc(elem) {
        elem.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }
    validCalc(persons);
    validCalc(restDay);

    persons.addEventListener('change', function () {

        personSum = +this.value;
        if (restDay.value == '' && persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            total = daysSum * personSum * 4000;
        }

        if (restDay.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDay.addEventListener('change', function () {
        daysSum = +this.value;
        if (restDay.value == '' && persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            total = daysSum * personSum * 4000;
        }

        if (persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }

    });
    place.addEventListener('change', function () {
        if (restDay.value == '' && persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;