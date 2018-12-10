function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        btn = document.querySelectorAll('.description-btn');

    function func() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
    more.addEventListener('click', func);

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', func);
    }
    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
}

module.exports = modal;