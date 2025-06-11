let $ = document;
let container = $.querySelector('.container');
let gridWidth = $.querySelector('#width-range');
let widthValue = $.querySelector('#width-value');
let gridHeight = $.querySelector('#heigth-range');
let heightValue = $.querySelector('#heigth-value');
let gridButton = $.querySelector('#submit-grid');
let clearGridButton = $.querySelector('#clear-grid');
let colorButton = $.querySelector('#color-input');
let eraseBtn = $.querySelector('#erase-btn');
let paintBtn = $.querySelector('#paint-btn');

let events = {
    mouse: {
        down: 'mousedown',
        move: 'mousemove',
        up: 'mouseup',
    },
    touch: {
        down: 'touchstart',
        move: 'touchmove',
        up: 'touchend',
    },
};

let deviceType = '';

let draw = false;
let erase = false;

const isTouchDevice = () => {
    try {
        document.createEvent('TouchEvent');
        deviceType = 'touch';
        return true;
    } catch (e) {
        deviceType = 'mouse';
        return false;
    }
};

isTouchDevice();

gridButton.addEventListener('click', () => {
    container.innerHTML = '';
    let count = 0;
    for (let i = 0; i < gridHeight.value; i++) {
        count += 2;
        let div = $.createElement('div');
        div.classList.add('gridRow');

        for (let j = 0; j < gridWidth.value; j++) {
            count += 2;
            let col = $.createElement('div');
            col.classList.add('gridCol');
            col.setAttribute('id', `gridCol${count}`);
            col.addEventListener(events[deviceType].down, () => {
                draw = true;
                if (erase) {
                    col.style.backgroundColor = 'transparent';
                } else {
                    col.style.backgroundColor = colorButton.value;
                }
            });

            col.addEventListener(events[deviceType].move, (e) => {
                let elementID = $.elementFromPoint(
                    !isTouchDevice() ? e.clientX : e.touches[0].clientX,
                    !isTouchDevice() ? e.clientY : e.touches[0].clientY
                ).id;
                checker(elementID);
            });

            col.addEventListener(events[deviceType].up, () => {
                draw = false;
            });

            div.appendChild(col);
        }

        container.appendChild(div);
    }
});

function checker(elementID) {
    let gridColumns = $.querySelectorAll('.gridCol');

    gridColumns.forEach((element) => {
        if (elementID == element.id) {
            if (draw && !erase) {
                element.style.backgroundColor = colorButton.value;
            } else if (draw && erase) {
                element.style.backgroundColor = 'transparent';
            }
        }
    });
}

clearGridButton.addEventListener('click', () => {
    container.innerHTML = '';
});

eraseBtn.addEventListener('click', () => {
    erase = true;
});

paintBtn.addEventListener('click', () => {
    erase = false;
});

gridWidth.addEventListener('input', () => {
    widthValue.innerHTML = gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
});

gridHeight.addEventListener('input', () => {
    heightValue.innerHTML = gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;
});

window.onload = () => {
    gridWidth.value = 0;
    gridHeight.value = 0;
};
