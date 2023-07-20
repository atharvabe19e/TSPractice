window.onload = () => {
    if (document.getElementById("btn1")) {
        let button = document.getElementById("btn1");
        button?.addEventListener("click", calculateBMI);
    }
    else if (document.getElementById("btn2")) {
        let button1 = document.getElementById("btn2");
        button1?.addEventListener("click", checkPalindrome);
    }
    else {
        let button2 = document.getElementById("btn3");
        button2?.addEventListener("click", generateUser);
    }
};

function calculateBMI() {
    if (document.querySelector("#height") && document.querySelector("#weight")) {

        var heightElement= (document
            .querySelector("#height")); 

        let height:number=parseInt((heightElement as HTMLInputElement).value);
        let weightElement = document
        .querySelector("#weight");
        let weight :number=parseInt((weightElement as HTMLInputElement).value);

        let result = document.querySelector("#result");

        if (isNaN(height)) {
            alert("Enter a valid Height!");
        }
        else if (isNaN(weight)) {
            alert("Enter a valid Weight!");
        }
        else {
            let bmi: any = (weight / ((height * height)
                / 10000)).toFixed(2);
            if (bmi < 18.6) (result as Element).innerHTML =
                `Under Weight : <span>${bmi}</span>`;

            else if (bmi >= 18.6 && bmi < 24.9)
            (result as Element).innerHTML =
                    `Normal : <span>${bmi}</span>`;

            else(result as Element).innerHTML =
                `Over Weight : <span>${bmi}</span>`;
        }
    }
    else {
        alert("Enter both height and weight");
    }
}

function checkPalindrome() {
    try {
        let isnum: number = parseInt((document.querySelector("#pali") as HTMLInputElement).value);
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
                    (isPalindrome as Element).innerHTML  = 'Number is Palindrome';
                }
                else {
                    (isPalindrome as Element).innerHTML  = 'Number is not Palindrome';
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

    let firstName = (document.querySelector("#name") as HTMLInputElement).value;
    let userNameValue = document.querySelector("#resultu");
    try {
        if (firstName) {

            
            let rand = Math.floor((Math.random() * 1000) + 1);
            let result122 = firstName + rand;
            (userNameValue as Element).innerHTML = `Your username is: ${result122}`;
        }
        else {
            alert("Enter your nam    e");
        }
    } catch (err) { alert("Enter your name"); }
}
