const surface = document.querySelector('.surface');
const car = document.querySelector('.car');
const carImg = document.querySelector('.car img');

const lightOnImg = './images/Img_06.png';
const lightOffImg = './images/Img_05.png';

let isLightOn = false;

const toggleLights = () => {
    isLightOn = !isLightOn; // or

    if (isLightOn) {
        carImg.setAttribute('src', lightOnImg);
        // isLightOn = true // or
    } else {
        carImg.setAttribute('src', lightOffImg);
        // isLightOn = false // or
    }
};

window.addEventListener('keydown', (event) => {
    console.log(event);

    if (event.key === 'Enter') {
        const isMoving = surface.classList.contains('moveRight'); //   true/false

        if (isMoving) {
            surface.classList.remove('moveRight');
            car.classList.remove('suspension');

            if (isLightOn) {
                toggleLights();
            }
        } else {
            surface.classList.add('moveRight');
            car.classList.add('suspension');

            if (!isLightOn) {
                toggleLights();
            }
        }
    }
    if (event.key === 'w' || event.key === 'W' || event.keyCode === 87) {
        toggleLights();
    }
});
