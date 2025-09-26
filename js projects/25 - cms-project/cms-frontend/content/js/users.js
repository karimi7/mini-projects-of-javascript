const userWrapper = document.querySelector('.users-wrap');
const removeModal = document.querySelector('.remove-modal');
const editModal = document.querySelector('.edit-modal');

const userNameInput = document.querySelector('#username-input');
const firstNameInput = document.querySelector('#first-name-input');
const lastNameInput = document.querySelector('#last-name-input');

let mainUserID = null;

window.addEventListener('load', getAllUsers);

function getAllUsers() {
    fetch('http://localhost:3000/api/users')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            userWrapper.innerHTML = '';

            data.forEach((user) => {
                userWrapper.insertAdjacentHTML(
                    'beforeend',
                    `
                        <div class="user-box">
                            <div class="user-box_left">
                                <img src="${user.profile}" class="user-profile-box" alt="">
                                <div class="user-detail">
                                    <h1 class="user-id">
                                        <span>${user.userName}</span>
                                        <span class="user-history">${user.created_AT}</span>
                                    </h1>
                                    <h3 class="user-name">${user.firstName} ${user.lastName}</h3>
                                </div>
                            </div>

                            <div class="user-btns-group">
                                <button onclick="showEditModal('${user._id}')" class="user-edit-btn">
                                    edit
                                </button>
                                <button onclick="showModal('${user._id}')" class="user-remove-btn">
                                    remove
                                </button>
                            </div>
                        </div>
                    `
                );
            });
        });
}

//  Remove User Funstions

function showModal(userID) {
    console.log(userID);
    mainUserID = userID;
    removeModal.classList.add('visible');
}

function closeModal() {
    removeModal.classList.remove('visible');
}

function removeUser() {
    fetch(`http://localhost:3000/api/users/${mainUserID}`, {
        method: 'DELETE',
    }).then((res) => {
        console.log(res);
        closeModal();
        getAllUsers();
    });
}

// Edit Users Functions

function showEditModal(userID) {
    editModal.classList.add('visible');
    console.log(userID);
    mainUserID = userID;
}

function closeEditModal() {
    editModal.classList.remove('visible');
}

function updateUser() {
    console.log('اپدیت شد');
    event.preventDefault();

    let userNewData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        userName: userNameInput.value,
        profile: './content/img/profile/banana.png',
    };

    fetch(`http://localhost:3000/api/users/${mainUserID}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(userNewData),
    }).then((res) => {
        console.log(res);
        closeEditModal();
        clearEditModalInput();
        getAllUsers();
    });
}

function clearEditModalInput() {
    userNameInput.value = '';
    firstNameInput.value = '';
    lastNameInput.value = '';
}

window.addEventListener('keyup', (event) => {
    console.log(event);
    if (event.code === 'Escape') {
        closeEditModal();
    }
});
