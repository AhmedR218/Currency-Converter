// Find a better way to do second select menu
// Get data from amount input to this file through convert button
// get array of currencies from api
// convert process


const currencies = ['GBP', 'USD', 'EUR']


function loadData() {
    var menu = document.getElementById('currencies')
    for (let i = 0; i < currencies.length; i++) {
        var option = document.createElement('option')
        option.innerHTML = currencies[i]
        menu.appendChild(option)
    }

    var selectElement = document.getElementById('currencies')
    var newSelect = selectElement.cloneNode(true)
    document.getElementById('menu2').appendChild(newSelect)
}

window.onload = loadData