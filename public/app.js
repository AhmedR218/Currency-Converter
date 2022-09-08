// Find a better way to do second select menu
// Get data from amount input to this file through convert button : done
// Add switch list button
// get array of currencies from api
// convert process

function loadData() {
    
    var curr = getCurrencyList()

   if (!curr) {
        console.log('empty')
   } else {
    loadMenus(curr)
   }

    
}

var btn = document.querySelector('.convertBtn')

btn.addEventListener("click", convert);

function convert() {
    let value = document.getElementById('userPrice').value

    document.getElementById('convertedPrice').innerHTML = "converted price: " + value
}

function loadMenus(list) {
    var menu = document.getElementById('currencies')
    for (let i = 0; i < list.length; i++) {
        var option = document.createElement('option')
        option.innerHTML = list[i]
        menu.appendChild(option)
    }

    console.log(list.length)

    var selectElement = document.getElementById('currencies')
    var newSelect = selectElement.cloneNode(true)
    document.getElementById('menu2').appendChild(newSelect)
}

function getCurrencyList() {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "zFqL3aYKSKtftR0iv6TOdISSXGRrUaM8");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    fetch("https://api.apilayer.com/currency_data/list", requestOptions)
        .then(response => response.json())
        .then(result => {
            fillArray(result.currencies)
        })
        .catch(error => console.log('error', error));
}

function fillArray(data) {
    const curr = Object.keys(data)
    console.log(curr)
    currencies = curr
    return currencies
}


loadData()