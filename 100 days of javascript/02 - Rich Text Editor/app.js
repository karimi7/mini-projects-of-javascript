let $ = document;
let optionsButtons = $.querySelectorAll('.option-button');
let formatButtons = $.querySelectorAll('.format');
let scriptButtons = $.querySelectorAll('.script');
let linkButton = $.querySelector('#createLink');
let alignButtons = $.querySelectorAll('.align');
let spacingButtons = $.querySelectorAll('.spacing');
let fontName = $.querySelector('#fontName');
let fontSizeRef = $.querySelector('#fontSize');
let advancedOptionButton = $.querySelectorAll('.adv-option-button');
let writingArea = $.querySelector('#text-input');

let fontList = [
    'Arial',
    'Verdana',
    'Times New Roman',
    'Garamond',
    'Georgia',
    'Courier New',
    'Cursive',
];

const intializer = () => {
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, true);
    highlighter(scriptButtons, true);

    fontList.map((value) => {
        let option = $.createElement('option');
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    for (let i = 1; i <= 7; i++) {
        let option = $.createElement('option');
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 3;
};

const modifyText = (command, defaultUi, value) => {
    $.execCommand(command, defaultUi, value);
};

optionsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        modifyText(button.id, false, null);
    });
});

advancedOptionButton.forEach((button) => {
    button.addEventListener('change', () => {
        modifyText(button.id, false, button.value);
    });
});

linkButton.addEventListener('click', () => {
    let userLink = prompt('Enter a URL?');
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id, false.userLink);
    } else {
        userLink = 'http://' + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});

const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener('click', () => {
            if (needsRemoval) {
                let alreadyActive = false;
                if (button.classList.contains('active')) {
                    alreadyActive = true;
                }
                highlighterRemover(className);
                if (!alreadyActive) {
                    button.classList.add('avtive');
                }
            } else {
                button.classList.toggle('active');
            }
        });
    });
};

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove('active');
    });
};

window.onload = intializer();
