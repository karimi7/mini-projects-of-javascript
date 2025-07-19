let leftEye = document.querySelector('.lefteye');
let rightEye = document.querySelector('.righteye');
let userInput = document.querySelector('#userinput');
let passInput = document.querySelector('#passinput');
let submit = document.querySelector('#sub');

let leftEyeTop = 75;
let leftEyeLeft = 110;
let leftEyePaddingTop = 0;
let leftEyePaddingLeft = 0;
let rightEyeTop = 75;
let rightEyeLeft = 175;
let rightEyePaddingTop = 0;
let rightEyePaddingLeft = 0;

const userInputFocus = () => {
    let eyePosition = setInterval(() => {
        if (leftEyePaddingTop === 10) {
            clearInterval(eyePosition);
        }

        leftEye.style.paddingTop = leftEyePaddingTop + 'px';
        leftEye.style.left = leftEyeLeft + 'px';
        rightEye.style.paddingTop = rightEyePaddingTop + 'px';
        rightEye.style.left = rightEyeLeft + 'px';

        leftEyePaddingTop++;
        leftEyeLeft--;
        rightEyePaddingTop++;
        rightEyeLeft--;
    }, 10);
};

const userInputBlur = () => {
    let eyePosition = setInterval(() => {
        if (leftEyePaddingTop === 0) {
            clearInterval(eyePosition);
        }

        leftEye.style.paddingTop = leftEyePaddingTop + 'px';
        leftEye.style.left = leftEyeLeft + 'px';
        rightEye.style.paddingTop = rightEyePaddingTop + 'px';
        rightEye.style.left = rightEyeLeft + 'px';

        leftEyePaddingTop--;
        leftEyeLeft++;
        rightEyePaddingTop--;
        rightEyeLeft++;
    }, 10);
};

const passInputFocus = () => {
    let eyePosition = setInterval(() => {
        if (leftEyeTop === 60) {
            clearInterval(eyePosition);
        }

        leftEye.style.top = leftEyeTop + 'px';
        leftEye.style.left = leftEyeLeft + 'px';
        rightEye.style.top = rightEyeTop + 'px';
        rightEye.style.left = rightEyeLeft + 'px';

        leftEyeTop--;
        leftEyeLeft++;

        rightEyeTop--;
        rightEyeLeft--;
    }, 10);
};

const passInputBlur = () => {
    let eyePosition = setInterval(() => {
        if (leftEyeTop === 75) {
            clearInterval(eyePosition);
        }

        leftEye.style.top = leftEyeTop + 'px';
        leftEye.style.left = leftEyeLeft + 'px';
        rightEye.style.top = rightEyeTop + 'px';
        rightEye.style.left = rightEyeLeft + 'px';

        leftEyeTop++;
        leftEyeLeft--;

        rightEyeTop++;
        rightEyeLeft++;
    }, 10);
};

const userKeyHandler = (event) => {
    console.log('keyhandler', event);

    if (leftEyePaddingLeft === 20) {
        return false;
    }

    if (event.keyCode === 8) {
        leftEyePaddingLeft--;
        rightEyePaddingLeft--;
    } else {
        leftEyePaddingLeft++;
        rightEyePaddingLeft++;
    }

    leftEye.style.paddingLeft = leftEyePaddingLeft + 'px';
    rightEye.style.paddingLeft = rightEyePaddingLeft + 'px';
};

userInput.addEventListener('focus', userInputFocus);
userInput.addEventListener('blur', userInputBlur);
userInput.addEventListener('keydown', userKeyHandler);

passInput.addEventListener('focus', passInputFocus);
passInput.addEventListener('blur', passInputBlur);
