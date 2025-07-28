let searchBtnElem = document.querySelector('button');
let searchInputElem = document.querySelector('input');
let pElem = document.querySelector('#paragraph');

const search = () => {
    let searchInputVal = searchInputElem.value.trim();

    let searchRegex = new RegExp(`${searchInputVal}`, 'gi'); // gi: به حروف بزرگ و کوچیک اهمیت نمیده

    pElem.innerHTML = pElem.textContent.replace(searchRegex, (item) => `<mark>${item}</mark>`);
};

searchBtnElem.addEventListener('click', search);
window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        search();
    }
});
