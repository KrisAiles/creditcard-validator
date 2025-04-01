interface FormInputs {
    cardNumber: HTMLInputElement;
}

const formOutput = document.getElementById('form-output-para') as HTMLParagraphElement; //HTMLDivElement;

const cardValidateForm = document.getElementById('card-validate-form') as HTMLFormElement;

const inputs: FormInputs = {
    cardNumber: document.getElementById('card-number') as HTMLInputElement
};

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    let regex =  /^\d+$/;

    if (inputs.cardNumber.value.length < 15) {
        alert('Card number too short.');
        return;
    } else if (inputs.cardNumber.value.length > 16) {
        alert('Card number too long.');
        return;
    } else if (!regex.test(inputs.cardNumber.value)) {
        alert('Input can only contain numbers.');
        return;
    }

    const numberInput: number[] = inputs.cardNumber.value.split('').map(Number);
    console.log(numberInput);

    validate(numberInput);

    inputs.cardNumber.value = '';
};

cardValidateForm?.addEventListener("submit", handleSubmit);

function validate(cardNum: number[]) {
    let num: number;
    let checkedNum: number[] = [];
    for (let i = cardNum.length - 1; i >= 0; i--) {
        if (cardNum.length % 2 === 0) {
            if (i % 2 === 0) {
                num = cardNum[i] * 2;
                if (num > 9) {
                    num -= 9;
                    checkedNum.push(num);
                } else {
                    checkedNum.push(num);
                };
            } else {
                num = cardNum[i];
                checkedNum.push(num);
            };
        } else {
            if (i % 2 !== 0) {
                num = cardNum[i] * 2;
                if (num > 9) {
                    num -= 9;
                    checkedNum.push(num);
                } else {
                    checkedNum.push(num);
                };
            } else {
                num = cardNum[i];
                checkedNum.push(num);
            };
        };
    };

    const cardNumString: string = cardNum.join('');
    let sumCheckedNum: number = 0;
    for (let i = 0; i < checkedNum.length; i++) {
        sumCheckedNum += checkedNum[i];
    };

    if (sumCheckedNum % 10 === 0) {
        switch (cardNum[0]) {
            case 3:
                formOutput.innerHTML = `Card Number: ${cardNumString} issued by Amex is VALID.`;
                console.log(`Card Number: ${cardNumString} issued by Amex is VALID.`);
                break;
            case 4:
                formOutput.innerHTML = `Card Number: ${cardNumString} issued by Visa is VALID.`;
                console.log(`Card Number: ${cardNumString} issued by Visa is VALID.`);
                break;
            case 5:
                formOutput.innerHTML = `Card Number: ${cardNumString} issued by Mastercard is VALID.`;
                console.log(`Card Number: ${cardNumString} issued by Mastercard is VALID.`);
                break;
            case 6:
                formOutput.innerHTML = `Card Number: ${cardNumString} isuued by Discover is VALID.`;
                console.log(`Card Number: ${cardNumString} isuued by Discover is VALID.`);
                break;
            default:
                formOutput.innerHTML = `Card Number: ${cardNumString} is VALID.`;
                console.log(`Card Number: ${cardNumString} is VALID.`);
        }
    } else {
        formOutput.innerHTML = `Card Number: ${cardNumString} is NOT VALID.`;
        console.log(`Card Number: ${cardNumString} is NOT VALID.`);
    };

};