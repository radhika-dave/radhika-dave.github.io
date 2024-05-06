//use only odd single digits to add up to your desired volume
//user prompt to enter single digits

let sum = 0;

function addNumber() {
  const numberInput = document.getElementById('numberInput');
  const number = parseInt(numberInput.value);

  if (isValidNumber(number)) {
    if (number % 2 === 0) {
      sum = 0; // Reset volume to 0 if even number is entered
      alert('Surprise! This function only works with odd numbers, and you entered an even number. Please restart and only enter odd numbers :)');
    } else {
      sum += number; // Add odd number to the volume
    }
    document.getElementById('result').innerText = `Current Volume: ${sum}`;
  }

  numberInput.value = ''; // Clear input field
}

function isValidNumber(number) {
  return !isNaN(number) && number >= 1 && number <= 9;
}
