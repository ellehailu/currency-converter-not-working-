import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import ExchangeRate from './src/js/ExchangeRate.js';

function getRate(amount, baseCurrency, exchangeCurrency) {
    ExchangeRate.getRate(amount, baseCurrency, exchangeCurrency)
        .then(function (response) {
            if (response.conversion_rates) {
                printElements(response)

            }
            else {
                printError(response)
            }
    })
}
// UI logic
function printElements(response) {
    
}

function printError(error) {
    
}

function handleForm(event) {
    event.preventDefault();
    const amount = document.querySelector("#amount")
    const baseCurrency = document.querySelector("#basecurrency").value;
    const exchangeCurrency = document.querySelector("#exchangeCurrency").value;
    getRate(amount, baseCurrency, exchangeCurrency)
    document.getElementById('userInput').reset();
}

document.querySelector("userInput").addEventListener("submit", handleForm);
