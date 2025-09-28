const $ = document;
const sessionNameInput = $.querySelector('#session-name-input');
const sessionTimeInput = $.querySelector('#session-time-input');
const sessionPriceInput = $.querySelector('#session-price-input');
const coursesParentDropdown = $.querySelector('#courses-parent-dropdown');
const mainCourseEelm = $.querySelector('#main-course');
let allCoursesListItems = $.querySelectorAll('.session-dropdown-menu-item');
const sessionsContainer = $.querySelector('.sessions');
const removeSessionModal = $.querySelector('.remove-modal');

const addNewSessionBtn = $.querySelector('#add-btn');

const sessionNameMessage = $.querySelector('.session-name-message');
const sessionNameGroup = $.querySelector('.session-name-group');

let sessionNameMessageValid = null;

let mainUserID = null;

allCoursesListItems.forEach((course) => {
    course.addEventListener('click', (event) => {
        console.log(event.target.innerHTML);
        mainCourseEelm.innerHTML = event.target.innerHTML;
    });
});

sessionNameInput.addEventListener('keyup', () => {
    if (sessionNameInput.value.length < 3) {
        sessionNameMessage.innerHTML = 'invalid message';
        sessionNameMessage.classList.add('invalid-message');
        sessionNameMessage.classList.remove('valid-message');
        sessionNameGroup.classList.add('invalid');
        sessionNameGroup.classList.remove('valid');
        sessionNameMessageValid = false;
    } else {
        sessionNameMessage.innerHTML = 'valid message';
        sessionNameMessage.classList.remove('invalid-message');
        sessionNameMessage.classList.add('valid-message');
        sessionNameGroup.classList.remove('invalid');
        sessionNameGroup.classList.add('valid');
        sessionNameMessageValid = true;
    }
});

addNewSessionBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    if (sessionNameMessageValid) {
        let newSessionData = {
            title: sessionNameInput.value,
            time: sessionTimeInput.value,
            isFree: !Boolean(Number(sessionPriceInput.value)),
            course: mainCourseEelm.innerHTML,
        };

        await fetch(`http://localhost:3000/api/sessions`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newSessionData),
        }).then((res) => {
            console.log(res);
            clearInputs();
            getAllSessions();
        });
    } else {
        alert('نام درس نباید کمتر از 3 حرف باشد!');
    }
});

function clearInputs() {
    sessionNameInput.value = '';
    sessionTimeInput.value = '';
    sessionPriceInput.value = '';
    mainCourseEelm.innerHTML = 'Course';
}

coursesParentDropdown.addEventListener('click', () => {
    coursesParentDropdown.classList.add('active');
});

window.addEventListener('click', (event) => {
    // console.log(event.target.id);

    if (event.target.id !== 'courses-parent-dropdown') {
        coursesParentDropdown.classList.remove('active');
    }
});

function getAllSessions() {
    fetch(`http://localhost:3000/api/sessions`)
        .then((res) => res.json())
        .then((sesseions) => {
            console.log(sesseions);

            sessionsContainer.innerHTML = '';

            sesseions.forEach((session) => {
                sessionsContainer.insertAdjacentHTML(
                    'beforeend',
                    `
                    <div class="session-box">
                                <div>
                                    <h1 class="session-name-title">${
                                        session.title
                                    }</h1>
                                    <span class="session-category">${
                                        session.course
                                    }</span>
                                </div>
                                <div>
                                    <span class="session-price-badge">${
                                        session.isFree ? 'Free' : 'Not Free'
                                    }</span>
                                    <span class="session-time">${
                                        session.time
                                    }</span>
                                    <span style="cursor: pointer;" onclick="showRemoveModal('${
                                        session._id
                                    }')">X</span>
                                </div>
                            </div>
                    `
                );
            });
        });
}

function showRemoveModal(userID) {
    mainUserID = userID;
    removeSessionModal.classList.add('visible');
}

function closeRemoveModal() {
    removeSessionModal.classList.remove('visible');
}

function removeSession() {
    fetch(`http://localhost:3000/api/sessions/${mainUserID}`, {
        method: 'DELETE',
    }).then((res) => {
        console.log(res);
        // res.json();
        closeRemoveModal();
        getAllSessions();
    });
}

window.addEventListener('load', () => {
    getAllSessions();
});
