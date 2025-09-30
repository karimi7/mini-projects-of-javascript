const $ = document;
const showAddCourseModalBtn = $.querySelector('.add-new-course-btn');
const addCourseModal = $.querySelector('.add-course-modal');
const xCoursemodal = $.querySelector('.x-coursemodal');
const courseTitleInput = $.querySelector('#course-title-input');
const coursePriceInput = $.querySelector('#course-price-input');
const courseCategoryInput = $.querySelector('#course-category-input');
const addNewCourseBtn = $.querySelector('#add-new-course-btn');
const courseTimeInput = $.querySelector('#course-time-input');
const courseWrapper = $.querySelector('.courses-wrap');

showAddCourseModalBtn.addEventListener('click', () => {
    addCourseModal.classList.add('visible');
});

window.addEventListener('keyup', (event) => {
    if (event.code === 'Escape') {
        addCourseModal.classList.remove('visible');
    }
});

xCoursemodal.addEventListener('click', () => {
    addCourseModal.classList.remove('visible');
});

addNewCourseBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let newCourseInfos = {
        title: courseTitleInput.value,
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, itaque.',
        time: courseTitleInput.value,
        price: coursePriceInput.value,
        students: 0,
        category: courseCategoryInput.value,
        cover: 'content/img/course/course.png',
    };

    fetch(`http://localhost:3000/api/courses`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newCourseInfos),
    }).then((res) => {
        console.log(res);
        addCourseModal.classList.remove('visible');
        clearModalInput();
        getAllCourses();
    });
});

function clearModalInput() {
    courseTitleInput.value = '';
    coursePriceInput.value = '';
    courseCategoryInput.value = '';
    courseTimeInput.value = '';
}

function getAllCourses() {
    fetch(`http://localhost:3000/api/courses`)
        .then((res) => res.json())
        .then((courses) => {
            console.log(courses);

            courseWrapper.innerHTML = '';

            courses.forEach((course) => {
                console.log(course);

                courseWrapper.insertAdjacentHTML(
                    'beforeend',
                    `
                    <article class="course-box">
                            <img src="content/img/course/course.png" class="course-img" alt="">
                            <div class="course-right-section-box">
                                <div class="course-explanation">
                                    <h1 class="course-title">${
                                        course.title
                                    }</h1>
                                    <p class="course-text">${course.body}</p>
                                </div>
                                <div class="course-description">
                                    <h3 class="course-price">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g id="vuesax_linear_dollar-square" data-name="vuesax/linear/dollar-square" transform="translate(-172 -572)"><g id="dollar-square"><path id="Vector" d="M0,6.99A2.272,2.272,0,0,0,2.22,9.32H4.73A1.988,1.988,0,0,0,6.67,7.29,1.75,1.75,0,0,0,5.35,5.36L1.32,3.96A1.75,1.75,0,0,1,0,2.03,1.988,1.988,0,0,1,1.94,0H4.45A2.272,2.272,0,0,1,6.67,2.33" transform="translate(180.672 579.34)" fill="none" stroke="var(--dark-blue)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path id="Vector-2" data-name="Vector" d="M0,0V12" transform="translate(184 578)" fill="none" stroke="var(--dark-blue)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path id="Vector-3" data-name="Vector" d="M13,20H7c-5,0-7-2-7-7V7C0,2,2,0,7,0h6c5,0,7,2,7,7v6C20,18,18,20,13,20Z" transform="translate(174 574)" fill="none" stroke="var(--dark-blue)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(172 572)" fill="none" opacity="0"/></g></g></svg>
                                        <span>${
                                            course.price === 0
                                                ? 'Free'
                                                : course.price
                                        }</span>
                                    </h3>
                                    <h3 class="course-category">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="vuesax_linear_folder-open" data-name="vuesax/linear/folder-open" transform="translate(-492 -188)"><g id="folder-open"><path id="Vector" d="M19.354,3.3l-.4,5c-.15,1.53-.27,2.7-2.98,2.7H3.394C.684,11,.564,9.83.414,8.3l-.4-5a3.031,3.031,0,0,1,.65-2.19l.02-.02A2.975,2.975,0,0,1,2.994,0h13.38a2.965,2.965,0,0,1,2.29,1.07c.01.01.02.02.02.03A2.925,2.925,0,0,1,19.354,3.3Z" transform="translate(494.316 199)" fill="none" stroke="var(--dark-blue)" stroke-width="1.5"/><path id="Vector-2" data-name="Vector" d="M0,9.4V4.25C0,.85.85,0,4.25,0H5.52A2.017,2.017,0,0,1,7.56,1.02l1.27,1.7a1.352,1.352,0,0,0,1.36.68h2.55c3.4,0,4.25.85,4.25,4.25V9.44" transform="translate(495.5 190.03)" fill="none" stroke="var(--dark-blue)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path id="Vector-3" data-name="Vector" d="M0,0H5.14" transform="translate(501.43 205)" fill="none" stroke="var(--dark-blue)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(516 212) rotate(180)" fill="none" opacity="0"/></g></g></svg>
                                        <span>BackEnd</span>
                                    </h3>
                                    <h3 class="course-students">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g id="vuesax_linear_people" data-name="vuesax/linear/people" transform="translate(-620 -252)"><g id="people"><g id="Group"><path id="Vector" d="M2.67,5.16a.605.605,0,0,0-.19,0,2.585,2.585,0,1,1,.19,0Z" transform="translate(635.33 254)" fill="none" stroke="var(--dark-blue)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path id="Vector-2" data-name="Vector" d="M.03,4.94a5.635,5.635,0,0,0,3.94-.72A1.911,1.911,0,0,0,3.97.8,5.67,5.67,0,0,0,0,.09" transform="translate(636.94 261.5)" fill="none" stroke="var(--dark-blue)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></g><g id="Group-2" data-name="Group"><path id="Vector-3" data-name="Vector" d="M2.49,5.16a.605.605,0,0,1,.19,0,2.585,2.585,0,1,0-.19,0Z" transform="translate(623.48 254)" fill="none" stroke="var(--dark-blue)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path id="Vector-4" data-name="Vector" d="M5,4.94a5.635,5.635,0,0,1-3.94-.72,1.911,1.911,0,0,1,0-3.42A5.67,5.67,0,0,1,5.027.09" transform="translate(622.003 261.5)" fill="none" stroke="var(--dark-blue)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></g><g id="Group-3" data-name="Group"><path id="Vector-5" data-name="Vector" d="M2.67,5.16a.605.605,0,0,0-.19,0,2.585,2.585,0,1,1,.19,0Z" transform="translate(629.33 261.47)" fill="none" stroke="var(--dark-blue)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path id="Vector-6" data-name="Vector" d="M1.058.795a1.911,1.911,0,0,0,0,3.42,5.677,5.677,0,0,0,5.82,0,1.911,1.911,0,0,0,0-3.42A5.723,5.723,0,0,0,1.058.795Z" transform="translate(628.032 268.985)" fill="none" stroke="var(--dark-blue)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></g><path id="Vector-7" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(620 252)" fill="none" opacity="0"/></g></g></svg>
                                        <span>10,000</span>
                                    </h3>
                                </div>
                            </div>
                        </article>
                    `
                );
            });
        });
}

window.addEventListener('load', () => {
    getAllCourses();
});
