function getInputFieldValueById(inputFiedlId) {
    const inputField = document.getElementById(inputFiedlId);
    const inputFieldValue = parseFloat(inputField.value);
    if (inputFieldValue < 0) {
        alert('Invalid Input');
        return Math.abs(inputFieldValue);
    }
    else if (isNaN(inputFieldValue)) {
        alert('Invalid Input');
        // return 0;
    }
    return inputFieldValue;
}

function setElementInnerTextById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const income = getInputFieldValueById('income-field');
    const foodCost = getInputFieldValueById('food-cost');
    const rent = getInputFieldValueById('rent-field');
    const clothesCost = getInputFieldValueById('clothes-cost');

    const totalExpenses = foodCost + rent + clothesCost;
    setElementInnerTextById('total-expense', totalExpenses);

    const balance = income - totalExpenses;
    setElementInnerTextById('balance', balance);
})

document.getElementById('btn-save').addEventListener('click', function () {
    const savingsPercentage = getInputFieldValueById('savings-field');
    if (isNaN(savingsPercentage) ||savingsPercentage > 100 || savingsPercentage < 0) {
        alert('invalid input')
        document.getElementById('savings-field').value = '';
        return;
    }
    const savings = savingsPercentage / 100;

    const income = getInputFieldValueById('income-field');
    const savingsAmount = income * savings;
    setElementInnerTextById('savings-amount', savingsAmount);

    const remainingBalance = parseFloat(document.getElementById('balance').innerText) - savingsAmount;
    setElementInnerTextById('remaining-balance', remainingBalance);    // console.log(savingsAmount);
})