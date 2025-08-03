const tabs = document.querySelectorAll('.wrapper');
const content = document.querySelectorAll('.content');
const icons = document.querySelectorAll('.icon');
const toggles = document.querySelectorAll('.toggle');

// آرایه برای ردیابی وضعیت تب‌ها (آیکون‌ها با ایندکس همون تب‌ها همگام میشن)
let isOpen = new Array(tabs.length).fill(false);

let contentElem, toggleElem, iconElem;

function closeAllTab() {
    for (let i = 0; i < content.length; i++) {
        content[i].style.height = '0px';
        toggles[i].style.color = '#111130';
        icons[i].classList.remove('fa-minus');
        icons[i].classList.add('fa-plus');
        isOpen[i] = false; // همه تب‌ها رو به حالت بسته تنظیم می‌کنیم
    }
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (event) => {
        contentElem = tab.querySelector('.content');
        toggleElem = tab.querySelector('.toggle');
        iconElem = tab.querySelector('.icon');

        // اگه تب باز باشه، ببند
        if (isOpen[index]) {
            contentElem.style.height = '0px';
            toggleElem.style.color = '#111130';
            iconElem.classList.remove('fa-minus');
            iconElem.classList.add('fa-plus');
            isOpen[index] = false;
        } else {
            closeAllTab(); // بقیه تب‌ها رو ببند
            contentElem.style.height = contentElem.scrollHeight + 'px';
            toggleElem.style.color = '#884e9';
            iconElem.classList.add('fa-minus');
            iconElem.classList.remove('fa-plus');
            isOpen[index] = true;
        }
    });
});
