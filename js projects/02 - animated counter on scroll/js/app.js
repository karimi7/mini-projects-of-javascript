let $ = document;
let counters = $.querySelectorAll('.num');
let benefitsContainer = $.querySelector('.benefits');
let startCounter = false;

// window.onscroll
// OR
window.addEventListener('scroll', () => {
    if (window.scrollY >= benefitsContainer.offsetTop) {
        if (!startCounter) {
            counters.forEach((counter) => setCounter(counter));
        }
        startCounter = true;
    }
});

let setCounter = (el) => {
    // console.log(el);

    let elemNumCount = el.dataset.count;

    let counterInterval = setInterval(() => {
        if (el.textContent == elemNumCount) {
            clearInterval(counterInterval);
        }

        // textContent = محتوای داخلی
        // el.textContent = elemNumCount + 1
        // OR
        el.textContent++;
    }, 5);

    console.log(elemNumCount);
};
