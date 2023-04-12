//get the start and end numbers from the inputs
//enrty point AKA controller function
function getValues() {

    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    let startNumber = parseInt(startValue);
    let endNumber = parseInt(endValue);

    if (Number.isInteger(startNumber) && Number.isInteger(endNumber)) {
        // Valid numbers
        let numberArray = generateNumbers(startNumber, endNumber);
        displayNumbers(numberArray);
    } else {
        // Display an error
        Swal.fire({
            icon:'error',
            title: 'Ooops!',
            text: 'Please enter valid Numbers for the start and and values',
            backdrop: 'false'
        });
    }



}

//generate the range of numbers to display
//business logic function
function generateNumbers(start, end) {

    let basketOfNumbers = [];

    for (let number = start; number <= end; number = number + 1) {
        basketOfNumbers.push(number);
    }

    return basketOfNumbers; // => [0, 1, 2, ..., 100]

}

//showing the generated numbers on the page and bolding even numbers
//view function
function displayNumbers(numbers) {

    let results = '';

    for (let index = 0; index < numbers.length; index = index + 1) {
        let currentNumber = numbers[index];

        if (currentNumber % 2 == 0) {
            results = results + '<tr><td class="evenNumber">' + currentNumber + '</td></tr>';
        } else {
            results = results + '<tr><td>' + currentNumber + '</td></tr>';
        }

    }

    let tableBody = document.getElementById('results');
    tableBody.innerHTML = results;

}