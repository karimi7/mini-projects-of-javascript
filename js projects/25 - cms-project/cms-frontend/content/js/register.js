const $ = document;
const firstnameInput = $.querySelector('#firstname-input');
const lastnameInput = $.querySelector('#lastname-input');
const usernameInput = $.querySelector('#username-input');
const submitBtn = $.querySelector('#submit-btn');
const firstnameMessage = $.querySelector('#firstname-message');
const lastnameMessage = $.querySelector('#lastname-message');
const usernameMessage = $.querySelector('#username-message');

let firstnameValid,
    lastnameValid,
    usernameValid = null;

firstnameInput.addEventListener('keyup', () => {
    console.log('تایپ شد');
    if (event.target.value.length < 3) {
        firstnameMessage.innerHTML = 'Firstname is not valid.';
        firstnameMessage.classList.remove('valid-message');
        firstnameMessage.classList.add('invalid-message');
        firstnameValid = false;
    } else {
        firstnameMessage.innerHTML = 'Firstname is valid.';
        firstnameMessage.classList.add('valid-message');
        firstnameMessage.classList.remove('invalid-message');
        firstnameValid = true;
    }
});
lastnameInput.addEventListener('keyup', () => {
    console.log('تایپ شد');
    if (event.target.value.length < 3) {
        lastnameMessage.innerHTML = 'Lastname is not valid.';
        lastnameMessage.classList.remove('valid-message');
        lastnameMessage.classList.add('invalid-message');
        lastnameValid = false;
    } else {
        lastnameMessage.innerHTML = 'Lastname is valid.';
        lastnameMessage.classList.add('valid-message');
        lastnameMessage.classList.remove('invalid-message');
        lastnameValid = true;
    }
});
usernameInput.addEventListener('keyup', () => {
    console.log('تایپ شد');
    if (event.target.value.length < 8) {
        usernameMessage.innerHTML = 'Username is not valid.';
        usernameMessage.classList.remove('valid-message');
        usernameMessage.classList.add('invalid-message');
        usernameValid = false;
    } else {
        usernameMessage.innerHTML = 'Username is valid.';
        usernameMessage.classList.add('valid-message');
        usernameMessage.classList.remove('invalid-message');
        usernameValid = true;
    }
});

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log('submit shod');

    if (firstnameValid && lastnameValid && usernameValid) {
        let newUserData = {
            firstName: firstnameInput.value,
            lastName: lastnameInput.value,
            userName: usernameInput.value,
            profile: './content/img/profile/banana.png',
        };

        fetch(`http://localhost:3000/api/users/`,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUserData)
        }).then(res => {
            console.log(res)
            clearInput()
        })

    } else {
        alert('تمامی فیلدها را درست مقداردهی کنید');
    }
});


function clearInput () {
    firstnameInput.value = ''
    lastnameInput.value = ''
    usernameInput.value = ''

    firstnameInput.focus()
}