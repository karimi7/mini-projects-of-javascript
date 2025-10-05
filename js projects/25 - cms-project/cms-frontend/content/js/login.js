const $ = document;
const usernameInput = $.querySelector('#username-input');
const passwordInput = $.querySelector('#password-input');
const adminLoginBtn = $.querySelector('.submit-form-btn');

adminLoginBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let adminUserName = usernameInput.value;
    let adminPassword = passwordInput.value;

    console.log(adminUserName, adminPassword);

    fetch(`http://localhost:3000/api/admins`)
        .then((res) => {
            console.log(res);
            
            res.json();
        })
        .then((admins) => {
            // console.log(admins);

            let isAdmin = admins.some((admin) => {
                return (
                    admin.userName === adminUserName &&
                    admin.password === adminPassword
                );
            });
            console.log(isAdmin);

            if (isAdmin) {
                location.href = 'http://127.0.0.1:53407/cms-frontend/panel-users.html';
                clearInput()
            } else {
                alert('اطلاعات شما به عنوان مدیر سایت صحیح نمیباشد');
                clearInput()
            }
        });
});

function clearInput() {
    usernameInput.value = '';
    passwordInput.value = '';
}
