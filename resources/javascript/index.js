var formOutput = document.getElementById('form-output-para'); //HTMLDivElement;
var cardValidateForm = document.getElementById('card-validate-form');
var inputs = {
    cardNumber: document.getElementById('card-number')
};
function handleSubmit(e) {
    e.preventDefault();
    var regex = /^\d+$/;
    if (inputs.cardNumber.value.length < 15) {
        alert('Card number too short.');
        return;
    }
    else if (inputs.cardNumber.value.length > 16) {
        alert('Card number too long.');
        return;
    }
    else if (!regex.test(inputs.cardNumber.value)) {
        alert('Input can only contain numbers.');
        return;
    }
    var numberInput = inputs.cardNumber.value.split('').map(Number);
    console.log(numberInput);
    validate(numberInput);
    inputs.cardNumber.value = '';
}
;
cardValidateForm === null || cardValidateForm === void 0 ? void 0 : cardValidateForm.addEventListener("submit", handleSubmit);
function validate(cardNum) {
    var num;
    var checkedNum = [];
    for (var i = cardNum.length - 1; i >= 0; i--) {
        if (cardNum.length % 2 === 0) {
            if (i % 2 === 0) {
                num = cardNum[i] * 2;
                if (num > 9) {
                    num -= 9;
                    checkedNum.push(num);
                }
                else {
                    checkedNum.push(num);
                }
                ;
            }
            else {
                num = cardNum[i];
                checkedNum.push(num);
            }
            ;
        }
        else {
            if (i % 2 !== 0) {
                num = cardNum[i] * 2;
                if (num > 9) {
                    num -= 9;
                    checkedNum.push(num);
                }
                else {
                    checkedNum.push(num);
                }
                ;
            }
            else {
                num = cardNum[i];
                checkedNum.push(num);
            }
            ;
        }
        ;
    }
    ;
    var cardNumString = cardNum.join('');
    var sumCheckedNum = 0;
    for (var i = 0; i < checkedNum.length; i++) {
        sumCheckedNum += checkedNum[i];
    }
    ;
    if (sumCheckedNum % 10 === 0) {
        switch (cardNum[0]) {
            case 3:
                formOutput.innerHTML = "Card Number: ".concat(cardNumString, " issued by Amex is VALID.");
                console.log("Card Number: ".concat(cardNumString, " issued by Amex is VALID."));
                break;
            case 4:
                formOutput.innerHTML = "Card Number: ".concat(cardNumString, " issued by Visa is VALID.");
                console.log("Card Number: ".concat(cardNumString, " issued by Visa is VALID."));
                break;
            case 5:
                formOutput.innerHTML = "Card Number: ".concat(cardNumString, " issued by Mastercard is VALID.");
                console.log("Card Number: ".concat(cardNumString, " issued by Mastercard is VALID."));
                break;
            case 6:
                formOutput.innerHTML = "Card Number: ".concat(cardNumString, " isuued by Discover is VALID.");
                console.log("Card Number: ".concat(cardNumString, " isuued by Discover is VALID."));
                break;
            default:
                formOutput.innerHTML = "Card Number: ".concat(cardNumString, " is VALID.");
                console.log("Card Number: ".concat(cardNumString, " is VALID."));
        }
    }
    else {
        formOutput.innerHTML = "Card Number: ".concat(cardNumString, " is NOT VALID.");
        console.log("Card Number: ".concat(cardNumString, " is NOT VALID."));
    }
    ;
}
;
