function showTotalAmount() {
    totalPrice = localStorage.getItem('totalPrice');
    document.getElementById("showingAmount").innerHTML = "₪ " + totalPrice + "  :לתשלום";
    showDateTime();
}

function showDateTime() {
    var dateTime = new Date();
    var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var m = months[dateTime.getMonth()];
    var currentDate = dateTime.getDate() + "/" + m + "/" + dateTime.getFullYear();
    var currentTime = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();
    document.getElementById("dateTime").innerHTML = currentDate + "   " + currentTime;
    setInterval(showDateTime, 1000);
}

function checkName(id) {
    var b1 = document.getElementById(id).value;
    if (b1.length <= 1) {
        alert("שם חייב להיות 2 תווים ומעלה");
        document.getElementById(id).value = "";
    }
}

function checkIDBuyer(id) {
    var b1 = document.getElementById(id).value;
    var b2 = onlyNumbers(b1);
    if (b2.length !== 9) {
        alert("תעודת זהות מכילה 9 ספרות בדיוק");
        document.getElementById(id).value = "";
    } else {
        document.getElementById(id).value = b2;
    }
}

function checkCreditNum(id) {
    var b1 = document.getElementById(id).value;
    var b2 = onlyNumbers(b1);
    if (b2.length < 9 || b2.length > 16) {
        alert("מספר הספרות כרטיס האשראי נע בין 9-16 ספרות");
        document.getElementById(id).value = "";
    } else {
        document.getElementById(id).value = b2;
    }
}

function checkCVV(id) {
    var b1 = document.getElementById(id).value;
    var b2 = onlyNumbers(b1);
    if (b2.length !== 3) {
        alert("חייב להיות 3 ספרות");
        document.getElementById(id).value = "";
    } else {
        document.getElementById(id).value = b2;
    }
}

function checkEmail(id) {
    var b1 = document.getElementById(id).value;
    if (b1.length < 5 || !(b1.includes('@') && b1.includes('.') && b1.indexOf('@') < b1.indexOf('.'))) {
        alert("כתובת דואר אלקטרוני לא תקין. חייב להכיל כרוכית ונקודה ולהכיל 5 תוים לפחות");
        document.getElementById(id).value = "";
    }
}

function checkPhone(id) {
    var b1 = document.getElementById(id).value;
    var b2 = onlyNumbers(b1);
    if (b2.length !== 10 && b2.length !== 9) {
        alert("מספר הטלפון הוא 9 ספרות עבור קו ביתי או 10 ספרות עבור קו נייד");
        document.getElementById(id).value = "";
    } else {
        document.getElementById(id).value = b2;
    }
}

function onlyNumbers(num) {
    var ans = "";
    var i;
    for (i = 0; i < num.length; i++) {
        var digit = num[i];
        if (digit === '0' || digit === '1' || digit === '2' || digit === '3' || digit === '4' || digit === '5' || digit === '6' || digit === '7' || digit === '8' || digit === '9') {
            ans += num[i];
        }
    }
    return ans;
}

function submitPayment() {
    if (checkallInput()) {
        const xhr = new XMLHttpRequest();
        xhr.open("post", "/paying", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                alert("התשלום בוצע בהצלחה. אישור תשלום נשלח למייל");
                window.location.href = "/home";
                for (i = 1; i < 50; i++) {
                    deleteItem('price' + i, 'quantity' + i);
                }
            }
        }
        xhr.send();
    } else {
        alert("לא ניתן לבצע תשלום מאחר ולא כל השדות מולאו וסומנו");
    }
}


///////////////////////////////////////////////////////

function checkallInput() {
    if (document.getElementById('visa').checked || document.getElementById('mastercard').checked) {
        if (document.getElementById('creditInput').value.length === 0 || document.getElementById('creditCardCVVInput').value.length === 0) {
            return false;
        }
    } else if (!document.getElementById('cash').checked) {
        return false;
    }
    return !(document.getElementById('privateName').value.length === 0 ||
        document.getElementById('surename').value.length === 0 ||
        document.getElementById('buyerID').value.length === 0);

}
