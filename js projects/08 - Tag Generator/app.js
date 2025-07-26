const $ = document;
const tagsUlElem = $.querySelector('ul');
const tagInputElem = $.querySelector('input');
const tagsCountSpanElem = $.querySelector('span');
const removeAllBtn = $.querySelector('button');

let maxTagsCount = 10;
const storageKey = 'mySavedTags'; // یک متغیر برای ذخیره در حافظه

let tags = JSON.parse(localStorage.getItem(storageKey)) || []; // اول سعی میکنیم تگ ها رو از حافظه بخونیم، اگه چیزی نبود، یک آرایه خالی درنظر میگیریم

// تابعی برای ذخیره کردن tags در LocalSrorage
const saveTagsToStorage = () => {
    localStorage.setItem(storageKey, JSON.stringify(tags));
};

const countTags = () => {
    tagInputElem.focus();
    tagsCountSpanElem.innerHTML = maxTagsCount - tags.length;
};

const removeAllLis = () => {
    tagsUlElem.querySelectorAll('li').forEach((tag) => tag.remove());
};

const createTag = () => {
    removeAllLis();
    let tagLi = null;

    // reverse
    [...tags].reverse().forEach((tag) => {
        tagLi = `<li>${tag} <i class="uit uit-multiply" onclick="removeTag(this, '${tag}')"></i></li>`;
        tagsUlElem.insertAdjacentHTML('afterbegin', tagLi);
    });
    countTags();
};

const removeTag = (tagElem, tagTitle) => {
    // console.log(tagElem.parentElement, tagTitle);

    const mainTagIndex = tags.indexOf(tagTitle);
    // console.log(mainTagIndex);

    tags.splice(mainTagIndex, 1); // حذف از آرایه

    tagElem.parentElement.remove(); // حذف از صفحه

    countTags();
    saveTagsToStorage();
};

const addTag = (event) => {
    if (event.key === 'Enter') {
        let trimmedInput = event.target.value.trim();

        // فاصله هارو حذف کن و اگه متنی باقی موند :
        if (trimmedInput) {
            let tagsAdded = false; // برای اینکه بفهمیم تگی اضافه شده یانه

            trimmedInput.split(',').forEach((tag) => {
                // فاصله‌های اضافی از ابتدا و انتها حذف شه
                const cleanTag = tag.trim();

                if (cleanTag && tags.length < maxTagsCount && !tags.includes(cleanTag.toLowerCase())) {
                    tags.push(cleanTag.toLowerCase());
                    tagsAdded = true;
                }
            });

            if (tagsAdded) {
                saveTagsToStorage();
            }
        }
        event.target.value = '';
        createTag();
    }
};

createTag();
countTags();

tagInputElem.addEventListener('keyup', addTag);
removeAllBtn.addEventListener('click', () => {
    tags.length = 0;
    removeAllLis();
    countTags();
    saveTagsToStorage();
});
