const navbar = document.querySelector('#navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let nowScrollTop = document.documentElement.scrollTop;

    // console.log(nowScrollTop, lastScrollTop);

    if (nowScrollTop > lastScrollTop) {
        navbar.style.top = '-80px';
    } else {
        navbar.style.top = '0';
    }

    lastScrollTop = nowScrollTop;
});
