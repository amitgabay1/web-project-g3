function registerCookingClass() {
    const xhr = new XMLHttpRequest();
    xhr.open("post", "/cooking_class_registration", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    const first_name = document.getElementById('class-regist-fname').value;
    const last_name = document.getElementById('class-regist-lname').value;
    const email = document.getElementById('class-regist-email').value;
    const phone = document.getElementById('class-regist-phone').value;
    const group_size = document.getElementById('class-regist-quantity').value;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            alert("נירשמת בהצלחה! השעה והמיקום ישלחו אליך במייל :)");
            window.location.href = '/home';
        } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 400) {
            alert(xhr.response);
        }
    }
    xhr.send(JSON.stringify({
        'first_name': first_name, 'last_name': last_name, 'email': email, 'phone_number': phone,
        'group_size': group_size
    }));
}