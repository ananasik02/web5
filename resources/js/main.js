var form  = document.getElementsByTagName('form');
var email = document.getElementById('mail');
var fname = document.getElementById('fname');
var lname = document.getElementById('mail')
var error = document.querySelector('.error');

function validate(){
    if(document.getElementById('fname').value.length < 3){
        alert("At least 3 symbols in the first name field");
        return;
    }
    if(document.getElementById('lname').value.length < 3){
        alert("At least 3 symbols in the last name field");
        return;
    }

}


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
