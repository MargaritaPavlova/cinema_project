const prizeForm = document.getElementById("prize-popup"); /*формочка*/
const openBtn = document.querySelector("#popup-open");
const closeBtn = document.querySelector("#popup-close");
const nameInputWrapper = document.querySelector('#prize-popup input[name="name"]').parentNode;
const emailInputWrapper = document.querySelector('#prize-popup input[name="email"]').parentNode;
const prizeSelect = document.querySelector('#choose-prize');

const INPUT_ERROR_CLASS = "st-input1_error";
const INPUT_FOCUSED_CLASS = "st-input1_focused";


function popupToggle() {
    prizeForm.classList.toggle('hidden'); /*формочка переключает*/
}

function initializeField(field) {
    const input = field.getElementsByTagName('input')[0];
    const errorText = field.querySelector('.st-input1__error-msg');
    clearError();
    field.classList.remove(INPUT_FOCUSED_CLASS);
    input.value = ''; /*очищаем и меняем текст*/

    function clearError() {
        errorText.innerText = '';
        field.classList.remove(INPUT_ERROR_CLASS);
    }

    input.addEventListener('focus', function () {
        field.classList.add(INPUT_FOCUSED_CLASS);
    }); /*добавялем слушателя - текст выезжает к рамке*/

    input.addEventListener('input', clearError);

    input.addEventListener('blur', function () {
        if (!input.value) {  /*  задаем условие, при котором удаляется тексn*/
            field.classList.remove(INPUT_FOCUSED_CLASS); /* удаляем текст */
        }
    });

    return {
        focus() {
            input.focus()
        }, /*задаем фокус инпуту при открытии окошка */
        getValue() {
            return input.value
        },
        setError (error) {
            errorText.innerText = error;
            field.classList.add(INPUT_ERROR_CLASS);
        }
    } 
}

const nameField = initializeField(nameInputWrapper);
const emailField = initializeField(emailInputWrapper);

openBtn.onclick = function () {
    nameField.focus();
    popupToggle();
};
closeBtn.onclick = popupToggle;

prizeForm.addEventListener('submit', function(event) {  /* event - событие отправки формы*/
    event.preventDefault(); /* остановка дефолтного поведения, когда отправляются данные */

    const nameValue = nameField.getValue();
    const emailValue = emailField.getValue();

    if (!nameValue) {
        nameField.setError('Поле обязательно для заполения');
        nameField.focus;
        return;
    }

    if (!emailValue) {
        emailField.setError('Поле обязательно для заполения');
        emailField.focus;
        return;
    }

    if (prizeSelect.value === 'none') {
        prizeSelect.classList.add(INPUT_ERROR_CLASS);
        return;
    }

    const data = {  /* отправка данных  */ 
        name: nameValue,
        email: emailValue,
        prize: prizeSelect.value,
    }

    const url = new URL('http://inno-ijl.ru/multystub/stc-21/feedback');
    url.search = new URLSearchParams(data).toString();

    fetch(url.toString());
});
