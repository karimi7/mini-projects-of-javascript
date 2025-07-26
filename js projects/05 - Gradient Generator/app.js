let $ = document;
let firstColorInput = $.querySelector('#color-a');
let secondColorInput = $.querySelector('#color-b');
let directions = $.querySelectorAll('.buttons button');
let generateBtn = $.querySelector('#submit');
let codeTextArea = $.querySelector('#code');
let copyBtn = $.querySelector('#copy');

let currentDirection = 'to top';

const setDirection = (direction, directionElem) => {
    for (let item of directions) {
        item.classList.remove('active');
    }

    if (directionElem.tagName === 'BUTTON') {
        directionElem.classList.add('active');
    } else {
        directionElem.parentElement.classList.add('active');
    }

    currentDirection = direction;

    generateCssCode()  // بدون اینکه بزنیم رو دکمه‌ی جنریت ، خودش آپدیت میشه

    // console.log(direction, directionElem, directionElem.target);
};

const generateCssCode = () => {
    let cssCode = `background: linear-gradient(${currentDirection}, ${firstColorInput.value}, ${secondColorInput.value})`;

    codeTextArea.value = cssCode;

    document.body.style.cssText = cssCode;
};

const copyCssCode = () => {
    codeTextArea.select();
    // document.execCommand('copy'); // قدیمی
    navigator.clipboard.writeText(codeTextArea.value) // استاندارد و امروزی

    alert('Css code copied !');
};

directions.forEach((direction) => {
    direction.addEventListener('click', (event) => {
        // console.log(event.target.dataset.direction);

        let direction = event.target.dataset.direction;
        setDirection(direction, event.target);
    });
});

generateBtn.addEventListener('click', generateCssCode);
copyBtn.addEventListener('click', copyCssCode);

generateCssCode();
