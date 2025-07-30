// const menus = document.querySelectorAll('a');
// const anim = document.querySelector('.anim');

// menus.forEach((menu) => {
//     menu.addEventListener('mouseenter', (event) => {
//         console.log(event.target.offsetWidth);
//         console.log(event.target.offsetLeft);

//         anim.style.width = event.target.offsetWidth + 'px';
//         anim.style.left = event.target.offsetLeft + 'px';
//     });
// });


//  or



document.querySelectorAll('a').forEach((menu) => (menu.onmouseenter = (event) => {
    document.querySelector('.anim').style.width = event.target.offsetWidth + 'px';
    document.querySelector('.anim').style.left = event.target.offsetLeft + 'px';
    })
);
