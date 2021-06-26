function changePassword() {
    const old_pass = document.getElementById('change-pass-old').value;
    const new_pass = document.getElementById('change-pass-new').value;
    const new_pass_again = document.getElementById('change-pass-new-again').value;
    if (new_pass !== new_pass_again) {
        alert("הסיסמא החדשה הוזנה באופן שונה בפעם השנייה");
        window.location.href = '/registration';
    } else if (new_pass === old_pass) {
        alert("איזה מבולבל אתה! הסיסמא החדשה זהה לסיסמא הישנה!!");
        window.location.href = '/registration';
    }
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/change_password", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            alert("הסיסמא שונתה בהצלחה!");
            window.location.href = '/home';
        } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 400) {
            alert(xhr.response);
        }
    }
    xhr.send(JSON.stringify({'old_password': old_pass, 'new_password': new_pass}));
}

function deleteAccount() {
    const xhr = new XMLHttpRequest();
    xhr.open("post", "/delete_account", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            alert("החשבון נמחק בהצלחה! אתה תמיד מוזמן להירשם מחדש :)");
            window.location.href = '/home';
        } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 400) {
            alert(xhr.response);
        }
    }
    xhr.send();
}