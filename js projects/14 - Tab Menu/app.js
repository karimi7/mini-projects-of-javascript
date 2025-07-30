const buttonWrapper = document.querySelector('.buttonwrapper');
const tabButtons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.content');

buttonWrapper.addEventListener('click', (event) => {
    const mainContentID = event.target.dataset.id;
    const mainContent = document.querySelector(`#${mainContentID}`);

    tabButtons.forEach((btn) => {
        btn.classList.remove('active');
        event.target.classList.add('active');
    });

    contents.forEach((content) => {
        content.classList.remove('active');
    });
    mainContent.classList.add('active');

    localStorage.setItem('activeTabID', mainContentID);
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTabID = localStorage.getItem('activeTabID');

    if (savedTabID) {
        const activeContent = document.querySelector(`#${savedTabID}`);        
        const activeButton = document.querySelector(`.tab-button[data-id="${savedTabID}"]`);

        if (activeButton && activeContent) {
            tabButtons.forEach((btn) => btn.classList.remove('active'));
            contents.forEach((content) => content.classList.remove('active'));

            activeContent.classList.add('active');
            activeButton.classList.add('active');
        }
    } else {
        // if (tabButtons.length > 0 && contents.length > 0) {
            tabButtons[0].classList.add('active');
            contents[0].classList.add('active');
        // }
    }
});
