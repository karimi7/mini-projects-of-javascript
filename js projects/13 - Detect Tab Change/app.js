const spanElem = document.querySelector('span');

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // document.title = 'Active Tab'
    } else {
        document.title = 'Faild Tab';
        spanElem.classList.add('faild');
        spanElem.classList.remove('pass');
        spanElem.innerHTML = '(Faild)';
    }
});
