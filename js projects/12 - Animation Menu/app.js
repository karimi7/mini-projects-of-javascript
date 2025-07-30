let $ = document;
let home = $.querySelector('#home');
let shop = $.querySelector('#shop');
let basket = $.querySelector('#basket');
let aabout = $.querySelector('#about');
let contact = $.querySelector('#contact');
let anim = $.querySelector('.anim');

home.addEventListener('mouseenter', () => {
    anim.style.width = '78px';
    anim.style.marginRight = '0px';
});
shop.addEventListener('mouseenter', () => {
    anim.style.width = '109';
    anim.style.marginRight = '91px';
});
basket.addEventListener('mouseenter', () => {
    anim.style.width = '121px';
    anim.style.marginRight = '217px';
});
aabout.addEventListener('mouseenter', () => {
    anim.style.width = '109px';
    anim.style.marginRight = '351px';
});
contact.addEventListener('mouseenter', () => {
    anim.style.width = '125px';
    anim.style.marginRight = '476px';
});

// DRY