function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input')[0],
        statusMessage = document.createElement('div'),
        formBF = document.getElementById('form'),
        inputBF = formBF.getElementsByTagName('input'),
        statusMessageBF = document.createElement('div');

    statusMessage.classList.add('status');
    statusMessageBF.classList.add('status');

    function valid() {
        this.value = this.value.replace(/[^0-9+]/g, '');
    }
    input.addEventListener('input', valid);
    inputBF[1].addEventListener('input', valid);

    function sendForm(elem) {
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    let formData = new FormData(elem);
                    let obj = {};
                    formData.forEach(function (value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    request.addEventListener('readystatechange', function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                    request.send(json);
                });
            }

            function clearInput(e) {
                for (let i = 0; i < e.length; i++) {
                    e[i].value = '';
                }
            }
            postData(form)
                .then(() => statusMessage.textContent = message.loading)
                .then(() => statusMessage.textContent = message.success)
                .catch(() => statusMessage.textContent = message.failure)
                .then(clearInput(elem))
        });
    }
    sendForm(form);
    sendForm(formBF);
}

module.exports = form;