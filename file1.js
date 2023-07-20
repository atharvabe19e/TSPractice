"use strict";
window.onload = () => {
    if (document.getElementById("btn1")) {
        let button = document.getElementById("btn1");
        button === null || button === void 0 ? void 0 : button.addEventListener("click", calculateBMI);
    }
    else if (document.getElementById("btn2")) {
        let button1 = document.getElementById("btn2");
        button1 === null || button1 === void 0 ? void 0 : button1.addEventListener("click", checkPalindrome);
    }
    else {
        let button2 = document.getElementById("btn3");
        button2 === null || button2 === void 0 ? void 0 : button2.addEventListener("click", generateUser);
    }
};
function calculateBMI() {
    if (document.querySelector("#height") && document.querySelector("#weight")) {
        var heightElement = (document
            .querySelector("#height"));
        let height = parseInt(heightElement.value);
        let weightElement = document
            .querySelector("#weight");
        let weight = parseInt(weightElement.value);
        let result = document.querySelector("#result");
        if (isNaN(height)) {
            alert("Enter a valid Height!");
        }
        else if (isNaN(weight)) {
            alert("Enter a valid Weight!");
        }
        else {
            let bmi = (weight / ((height * height)
                / 10000)).toFixed(2);
            if (bmi < 18.6)
                result.innerHTML =
                    `Under Weight : <span>${bmi}</span>`;
            else if (bmi >= 18.6 && bmi < 24.9)
                result.innerHTML =
                    `Normal : <span>${bmi}</span>`;
            else
                result.innerHTML =
                    `Over Weight : <span>${bmi}</span>`;
        }
    }
    else {
        alert("Enter both height and weight");
    }
}
function checkPalindrome() {
    try {
        let isnum = parseInt(document.querySelector("#pali").value);
        let isPalindrome = document.querySelector("#resultp");
        if (!isNaN(isnum)) {
            let innum = isnum;
            if (isNaN(innum) || innum < 1) {
                alert("Provide a valid positive number!");
            }
            else {
                let number = innum;
                let result1 = 0;
                while (number > 0) {
                    let temp = number % 10;
                    result1 = result1 * 10 + temp;
                    number = Math.floor(number / 10);
                }
                if (innum === result1) {
                    isPalindrome.innerHTML = 'Number is Palindrome';
                }
                else {
                    isPalindrome.innerHTML = 'Number is not Palindrome';
                }
            }
        }
        else {
            alert("Enter a number");
        }
    }
    catch (err) {
        alert("Provide a valid positive number!");
    }
}
function generateUser() {
    let firstName = document.querySelector("#name").value;
    let userNameValue = document.querySelector("#resultu");
    try {
        if (firstName) {
            let rand = Math.floor((Math.random() * 1000) + 1);
            let result122 = firstName + rand;
            userNameValue.innerHTML = `Your username is: ${result122}`;
        }
        else {
            alert("Enter your nam    e");
        }
    }
    catch (err) {
        alert("Enter your name");
    }
}
