const divElem = document.querySelector('#text');

let text = 'JavaScript and React :))';
let index = 0;

const typeWriter = () => {
    if (index < text.length) {
        divElem.innerHTML += text[index].toUpperCase()
        index++;
    }

    setTimeout(() => {
        typeWriter();
    }, 100);
};

typeWriter();
