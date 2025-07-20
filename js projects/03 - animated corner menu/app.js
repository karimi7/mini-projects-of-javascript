let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu a');
let toggleBtn = document.querySelector('#toggle-btn');
let isMenuActive = false;

toggleBtn.addEventListener('click', () => {
    if (!isMenuActive) {
        toggleBtn.classList.add('active');
        isMenuActive = true;

        menuItem[0].style.transform = 'translate(150px, 0px)';
        menuItem[1].style.transform = 'translate(150px, 90px)';
        menuItem[2].style.transform = 'translate(90px, 150px)';
        menuItem[3].style.transform = 'translate(0px, 150px)';
        
    } else {
        toggleBtn.classList.remove('active');
        isMenuActive = false;

        menuItem.forEach((menuItem) => {
            menuItem.style.transform = 'translate(0px, 0px)';
        });
    }
});
