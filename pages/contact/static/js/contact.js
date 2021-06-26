const form = document.getElementById("client_request");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

function send_client_request(){
    const xhr = new XMLHttpRequest();
    xhr.open("post", "/contact", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    const client_text = document.getElementById('textarea_contact').value;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            alert("Thank you!");
        } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 400){
            alert(xhr.response);
        }
    }
    xhr.send(JSON.stringify({'message': client_text}));
}
