// Проверяем что подключили скрипт и он работает
console.log("Привет , Мир!");
// Делаем выборку DOM элементов
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.menu__open-popup');

// const introListElements = document.querySelectorAll('.intro__list-line');
// console.log(introListElements);

// introListElements.forEach(function (item, index, arr) {
//     item.addEventListener('click', () => console.log(index))
// })

const introListElements = document.querySelector('.intro__list');

// introListElements.addEventListener('click', (event) => {
//     console.log(event.target)
//     if(event.target.classList.contains('intro__numbers')){
//         console.log('ПОПАЛ!');
//     } else {
//         console.log('НЕ ПОПАЛ!');
//     }
// })

// const togglePopupVisibility = function (event) {
//     console.log('togglePopupVisibility');
//     popupElement.classList.toggle('popup_is-opened');
// }

// togglePopupVisibility()

// Регистрируем обработчики события по клику
const openPopup = function () {
    console.log('openPopup');
    popupElement.classList.add('popup_is-opened');
}

const closePopup = function () {
    console.log('closePopup');
    popupElement.classList.remove('popup_is-opened');
}

const closePopupByClickOnOverlay = function (event) {
    // console.log('target', event.target);
    // console.log('currentTarget', event.currentTarget);
    if (event.target !== event.currentTarget) return;

    closePopup();
}
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay)

// Как работают функции обратного вызова (на упрощенном примере)

// const addEventListener = function (type, callback) {
//     const event = {
//         target: "",
//         currentTarget: ""
//         // ...
//     }

//     callback(event)

// }

const headerElement = document.querySelector('.header');
headerElement.addEventListener('click', () => {
    console.log('HEADER CLICKED');
}, {
    once: true,
    capture: true,
})

const popupLink = popupElement.querySelector('.popup__link');
const popupImage = popupElement.querySelector('.popup__img-container');

const showAndHideImage = function (event) {
    if (event.target.classList.contains("popup__link")) {
        popupLink.classList.add("popup__link_hidden");
        popupImage.classList.add("popup__img-container_visible");
    } else if (event.target.classList.contains("popup__img-close")) {
        popupLink.classList.remove("popup__link_hidden");
        popupImage.classList.remove("popup__img-container_visible");
    } else return;
}

popupElement.addEventListener('click', showAndHideImage);