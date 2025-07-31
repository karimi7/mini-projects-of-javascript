const $ = document;
const resultElem = $.querySelector('#result');
const btn = $.querySelector('#search-btn');
const input = $.querySelector('#inp-word');
const audio = $.querySelector('#sound');

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

btn.addEventListener('click', () => {
    let inputWord = input.value;

    fetch(`${url}${inputWord}`)
        .then((res) => res.json())
        .then((data) => {
            let datas = data[0];

            // console.log(datas);

            resultElem.innerHTML = `
                <div class="word">
                    <h3>${datas.word}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>

                <div class="details">
                    <p>${datas.meanings[0].partOfSpeech}</p>
                    <p>${datas.phonetic}</p>
                </div>

                <p class="word-meaning">${
                    datas.meanings[0].definitions[0].definition
                }</p>
                <p class="word-example">${
                    datas.meanings[0].definitions[0].example || ''
                }</p>
            `;
            audio.setAttribute('src', datas.phonetics[0].audio);
        })
        .catch(() => {
            resultElem.innerHTML = `<h3 class="error">Couldn't Find The Word.</h3>`;
        });

    console.log(`${url}${inputWord}`);
});

function playSound() {
    audio.play();
}
