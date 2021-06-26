const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});


function handleForm(event) {
    event.preventDefault();
}

const signInForm = document.getElementById("sign-in-form");
signInForm.addEventListener('submit', handleForm);

function signIn() {
    const xhr = new XMLHttpRequest();
    xhr.open("post", "/sign_in", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            window.location.href = '/home';
        } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 400){
            alert(xhr.response);
        }
    }
    xhr.send(JSON.stringify({'email': email, 'password': password}));
}

function signOut() {
    const xhr = new XMLHttpRequest();
    xhr.open("post", "/sign_out", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            window.location.href = '/home';
        } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 400){
            alert(xhr.response);
        }
    }
    xhr.send();
}

const signUpForm = document.getElementById("sign-up-form");
signUpForm.addEventListener('submit', handleForm);

function signUp() {
    const xhr = new XMLHttpRequest();
    xhr.open("post", "/sign_up", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    const username = document.getElementById('sign-up-username').value;
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            window.location.href = '/home';
        } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 400){
            alert(xhr.response);
        }
    }
    xhr.send(JSON.stringify({'username': username, 'email': email, 'password': password}));
}
