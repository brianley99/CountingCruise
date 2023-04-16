
//Controller
function getValues(){
    //Get Input values from page, validate inputs, generate numbers, display on page

    //Get starting and ending values from the page
    let startingValue = document.getElementById('startingValue').value;
    let endingValue = document.getElementById('endingValue').value;

    //Convert vaiables into numbers
    startingValue = parseInt(startingValue);
    endingValue = parseInt(endingValue);

    //Validate input, call logic & view functions
    if (Number.isInteger(startingValue) == false) {
        // Ending Value error display
        Swal.fire({
            icon: 'error',
            title: 'Ooops!',
            text: 'Please enter valid Starting Number',
            backdrop: 'false'
        });
    } else if (Number.isInteger(endingValue) == false) {
        // Ending Value error display
        Swal.fire({
            icon: 'error',
            title: 'Ooops!',
            text: 'Please enter valid Ending Number',
            backdrop: 'false'
        });
    } else {
        //Call generateNumbers(), input starting and ending values & store in array
        let numbers = generateNumbers(startingValue, endingValue);

        //Call displayNumbers() & input array of numbers
        displayNumbers(numbers);
    }
}

//Logic
function generateNumbers(startingValue, endingValue){
    //Return an array of numbers based on strating and ending values

    //Create empty array to store numbers
    let numbers = [];

    //Generate a range of numbers based on startingValue and endingValue, add to numbers array
    for (let number = startingValue; number <= endingValue; number++) {
        //Start at 'startingValue' and increase 'number' by one until 'number' is equal to 'endingValue'
        numbers.push(number);
    }

    //Return array
    return numbers;
}

//View
function displayNumbers(numbers){
    //Display numbers as a table to html page with even numbers bolded

    //Create an empty string to store numbers in html format
    tableRows = '';

    //Format to html code & add to string
    for (let index = 0; index < numbers.length; index++) {
        //Go through all index values of numbers array

        //Set number value
        number = numbers[index];
        
        //Only format even numbers with bold font
        if (number % 2 == 0) {
            tableRows += `<tr><td class="fw-bold">${number}</td></tr>`;
        } else {
            tableRows += `<tr><td>${number}</td></tr>`;
        }
    }

    //Set element on page to formated numbers string
    document.getElementById('resultsTableBody').innerHTML = tableRows; 
}
