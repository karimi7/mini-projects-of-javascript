const $ = document;
const addBox = $.querySelector('.add-box');
const popupBox = $.querySelector('.popup-box');
const popupTitle = $.querySelector('header p');
const popupClose = $.querySelector('header i');
const inputElem = $.querySelector('input');
const textareaElem = $.querySelector('textarea');
const buttonElem = $.querySelector('button');
const wrapperElem = $.querySelector('.wrapper');

let isUpdate = false;
let updateID = null;

let notes = []; // آرایه برای نگهداشتن نوت‌ها

// تابعی برای نمایش پنجره مدال
function showModal(noteTitle, noteDes) {
    if (isUpdate) {
        popupTitle.innerHTML = 'Update main note';
        buttonElem.innerHTML = 'Update note';

        inputElem.value = noteTitle;
        textareaElem.value = noteDes;
    } else {
        popupTitle.innerHTML = 'Add a new note';
        buttonElem.innerHTML = 'Add note';
    }
    inputElem.focus();

    popupBox.classList.add('show');
}

// رویداد کلیک برای نمایش مدال هنگام کلیک روی باکس افزودن
addBox.addEventListener('click', showModal);

// رویداد کلیک برای دکمه اصلی (افزودن یا ویرایش)
buttonElem.addEventListener('click', () => {
    // اگه در حالت ویرایش باشیم
    if (isUpdate) {
        // پیدا کردن یادداشت موردنظر و به‌روزرسانی آن
        let allNotes = getLocalStorageNotes();
        allNotes.some((note, index) => {
            if (index === updateID) {
                note.title = inputElem.value;
                note.des = textareaElem.value;
            }
        });
        setNotesInLocalStorage(allNotes); // ذخیره تغییرات در لوکال
        generateNotes(allNotes); // بازسازی لیست نوت‌ها در صفحه
        closeModal(); // بستن مدال
        clearInput(); // پاک کردن فیلدها
        isUpdate = false; // خروج از حالت ویرایش
    }
    // اگه در حالت افزودن نوت جدید باشیم
    else {
        // بررسی خالی نبودن فیلد ورودی
        if (inputElem.value != '') {
            let newNote = {
                title: inputElem.value,
                des: textareaElem.value,
                date: getNowDate(), // گرفتن تاریخ فعلی
            };
            notes.push(newNote); // افزودن نوت جدید به آرایه
            setNotesInLocalStorage(notes); // ذخیره در لوکال
            generateNotes(notes); // بازسازی لیست نوت‌ها در صفحه
            closeModal(); // بستن مدال
        } else {
            // اگه فیلد خالی بود فقط مدال رو ببند
            closeModal();
        }
        clearInput(); // پاک کردن فیلدها در هر دو حالت
    }
});

// تابعی برای گرفتن تاریخ و زمان فعلی با فرمت دلخواه
function getNowDate() {
    let now = new Date();

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
    ];

    let nowDay = now.getDay(); // گرفتن روز هفته (0 تا 6)
    let nowMonth = now.getMonth(); // گرفتن ماه (0 تا 11)
    let nowYear = now.getFullYear(); // گرفتن سال 4 رقمی
    let dayOfMonth = now.getDate(); // گرفتن روز ماه

    // برگرداندن تاریخ فرمت شده
    return `${months[nowMonth]} ${dayOfMonth}, ${nowYear} (${days[nowDay]})`; // August 7, 2025 (Thursday)

    // console.log(nowDay, nowMonth, nowYear, dayOfMonth);
}

// تابعی برای پاک کردن محتوای فیلدهای ورودی
function clearInput() {
    inputElem.value = '';
    textareaElem.value = '';
}

// تابعی برای بستن پنجره مدال
function closeModal() {
    popupBox.classList.remove('show');
}

// رویداد کلیک برای بستن مدال از طریق آیکون بستن
popupClose.addEventListener('click', closeModal);

// تابعی برای تولید و نمایش نوت‌ها در صفحه
function generateNotes() {
    // ابتدا تمام نوت‌های قبلی را از صفحه پاک می‌کنیم تا تکراری ایجاد نشود
    document.querySelectorAll('.note').forEach((note) => note.remove());

    // پیمایش در میان آرایه نوت‌ها
    notes.forEach((note, index) => {
        // ایجاد کد HTML برای هر نوت به صورت داینامیک
        wrapperElem.insertAdjacentHTML(
            'beforeend',
            `<li class="note">
            <div class="details">
                <p>${note.title}</p>
                <span>${note.des}</span>
            </div>
            <div class="bottom-content">
                <span>${note.date}</span>
                <div class="settings">
                <i class="uil uil-ellipsis-h" onclick="showSetting(this)"></i>
                <ul class="menu">
                    <li onclick="editNote(${index}, '${note.title}', '${note.des}')">
                        <i class="uil uil-pen"></i>Edit
                    </li>
                    <li onclick="removeNote(${index})">
                        <i class="uil uil-trash"></i>Delete
                    </li>
                </ul>
                </div>
            </div>
        </li>
            `
        );
    });
}

// تابعی برای حذف یک نوت
function removeNote(noteIndex) {
    // پرسیدن تایید از کاربر برای حذف نوت
    let deleted = confirm('Are you sure to delete note?');

    if (deleted) {
        let newNotes = getLocalStorageNotes(); // خواندن نوت از حافظه
        newNotes.splice(noteIndex, 1); // حذف نوت موردنظر از حافظه
        setNotesInLocalStorage(newNotes); // ذخیره آرایه جدید
        generateNotes(newNotes); // بازسازی لیست نوت‌ها در صفحه
    }
}

// تابعی برای نمایش منوی تنظیمات (ویرایش/حذف)
function showSetting(el) {
    el.parentElement.classList.add('show');

    // افزودن رویدادی که با کلیک روی هر جای صفحه، منو بسته شود
    document.addEventListener('click', (event) => {
        // console.log(event.target.tagName);

        // اگر کلیک خارج از منو بود، آن را ببند
        if (event.target !== el) {
            el.parentElement.classList.remove('show');
        }
    });
}

// تابعی برای آماده‌سازی ویرایش نوت
function editNote(noteID, noteTitle, noteDes) {
    // console.log(noteID, noteTitle, noteDes);

    isUpdate = true; // فعال کردن حالت ویرایش
    showModal(noteTitle, noteDes); // نمایش مدال با اطلاعات فعلی نوت
    updateID = noteID; // ذخیره شناسه نوتی که در حال ویرایش است

    let allNotes = getLocalStorageNotes();
}

// تابعی برای خواندن نوت‌ها از حافظه محلی مرورگر (Local Storage)
function getLocalStorageNotes() {
    let localStorageNotes = localStorage.getItem('notes');

    if (localStorageNotes) {
        notes = JSON.parse(localStorageNotes); // اگر یادداشتی بود، آن را از JSON به آرایه تبدیل کن
    } else {
        notes = []; // در غیر این صورت، یک آرایه خالی در نظر بگیر
    }
    return notes;
}

// تابعی برای ذخیره کردن نوت‌ها در حافظه محلی مرورگر
function setNotesInLocalStorage(notes) {
    // تبدیل آرایه به رشته JSON و ذخیره آن
    localStorage.setItem('notes', JSON.stringify(notes));
}

// getLocalStorageNotes();

window.addEventListener('load', () => {
    let notes = getLocalStorageNotes(); // خواندن تمام نوت‌ها
    generateNotes(notes); // نمایش نوت‌ها در صفحه
});

// رویدادی برای بستن پاپ‌آپ با فشردن دکمه Escape
window.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});
