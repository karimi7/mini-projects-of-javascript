let colorBtns = document.querySelectorAll('.btn');
let themeCssVariables = document.querySelector(':root');

const savedThemeColor = localStorage.getItem('themeColor');

if (savedThemeColor) {
    themeCssVariables.style.setProperty('--theme-color', savedThemeColor);
}

colorBtns.forEach((colorBtn) => {
    colorBtn.addEventListener('click', (event) => {
        // console.log(event.target.dataset.color);

        let mainThemeColor = event.target.dataset.color;
        themeCssVariables.style.setProperty('--theme-color', mainThemeColor);

        localStorage.setItem('themeColor', mainThemeColor);
    });
});
