const textArea = document.querySelector('#my-text');

textArea.addEventListener('input', () => {
    textArea.style.height = 'auto';
    textArea.style.height = `${textArea.scrollHeight}px`;
});
