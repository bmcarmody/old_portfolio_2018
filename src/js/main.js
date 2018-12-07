import '../sass/main.scss';

document.querySelectorAll('.nav__small__menu__list__item').forEach(
    item => item.addEventListener('click', () => {
        document.querySelector('.nav__small__checkbox').checked = false;
    })
);