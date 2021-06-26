// Typewriter in carlos story
let txt = "לפעמים כל מה שבא לכם זה אוכל של בית...";
let i = 0;
let speed = 70;

function Typewriter() {
    if (i < txt.length) {
        document.getElementById("Typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(Typewriter, speed);
    }
}
