let password = 1111;
let enter_password;
let input = document.getElementById("input");

function number_zero() {
    enter_password += "0";
    input.value += "0"; 
}

function number_one() {
    enter_password += "1";
    input.value += "1";
}

function number_two() {
    enter_password += "2";
    input.value += "2";
}

function number_three() {
    enter_password += "3";
    input.value += "3";
}

function number_four() {
    enter_password += "4";
    input.value += "4";
}

function number_five() {
    enter_password += "5";
    input.value += "5";
}

function number_six() {
    enter_password += "6";
    input.value += "6";
}

function number_eleven() {
    enter_password += "7";
    input.value += "7";
}

function number_eight() {
    enter_password += "8";
    input.value += "8";
}

function number_nine() {
    enter_password += "9";
    input.value += "9";
}

function backspace() {
    enter_password.substring(0, enter_password.length - 1);
    input.value.substring(0, input.value.length - 1);
}

function enter() {
    if (password == Number(enter_password)) {
        alert("succes");
    }
    else {
        alert("not succes");
    }
    enter_password = "";
    input.value = "";
}
