const $ = document;
const wrapper = $.querySelector('.wrapper');
const input = $.querySelector('input');
const button = $.querySelector('button');
const img = $.querySelector('img');
const apiQR = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';

button.addEventListener('click', () => {
    let inputValue = input.value.trim();

    if (inputValue) {
        button.textContent = 'Generating QR Code ...';
        img.setAttribute('src', apiQR + inputValue);

        img.addEventListener('load', () => {
            wrapper.classList.add('active');
            button.textContent = 'Generate QR Code';
        });
    }
});

input.addEventListener('keyup', () => {
    if (!input.value.trim()) {
        wrapper.classList.remove('active');
        button.textContent = 'Generate QR Code';
    }
});
