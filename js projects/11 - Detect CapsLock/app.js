const passwordInput = document.querySelector('#password');
const warningElem = document.querySelector('#warning');

passwordInput.addEventListener('keypress', (event) => {
    // console.log(event.getModifierState('CapsLock'));

    if (event.getModifierState('CapsLock')) {
        warningElem.style.display = 'block';
    } else {
        warningElem.style.display = 'none';
    }
});
