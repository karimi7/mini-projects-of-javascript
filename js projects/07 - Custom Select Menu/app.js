const $ = document;
let wrapperElem = $.querySelector('.wrapper');
let selectBtn = $.querySelector('.select-btn');
let options = $.querySelector('.options');
let searchInputElem = $.querySelector('input');

let content = $.querySelector('.content');

let countries = [
    'Afghanistan',
    'Algeria',
    'Argentina',
    'Australia',
    'Bangladesh',
    'Belgium',
    'Bhutan',
    'Brazil',
    'Canada',
    'China',
    'Denmark',
    'Ethiopia',
    'Finland',
    'France',
    'Germany',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Italy',
    'Japan',
    'Malaysia',
    'Maldives',
    'Mexico',
    'Morocco',
    'Nepal',
    'Netherlands',
    'Nigeria',
    'Norway',
    'Pakistan',
    'Peru',
    'Russia',
    'Romania',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sweden',
    'Switzerland',
    'Thailand',
    'Turkey',
    'Uganda',
    'Ukraine',
    'United States',
    'United Kingdom',
    'Vietnam',
];

function addCountries() {
    let li = null;

    countries.forEach((country) => {
        li = `<li onclick='updateName(this)'>${country}</li>`;
        options.insertAdjacentHTML('beforeend', li);
    });
}

function updateName(el) {
    // console.log(el.innerText);

    wrapperElem.classList.remove('active');
    selectBtn.firstElementChild.innerText = el.innerText;

    // console.log(options.children);

    for (let option of options.children) {
        if (option.innerText === el.innerText) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    }
    searchInputElem.value = '';
}

searchInputElem.addEventListener('keyup', () => {
    let searchWord = searchInputElem.value.toLowerCase();

    let usersCountries = countries
        .filter((country) => country.toLowerCase().startsWith(searchWord))
        .map((country) => `<li onclick='updateName(this)'>${country}</li>`)
        .join('');

    options.innerHTML = usersCountries ? usersCountries : `<p style='margin-top:20px'>Oops! Country not found.</p>`;
});

selectBtn.addEventListener('click', () => {
    wrapperElem.classList.toggle('active');
});

window.addEventListener('load', addCountries);
