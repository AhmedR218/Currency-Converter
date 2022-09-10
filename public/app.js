// Add switch list button

function loadData() {

    const baseCurrency = 'USD'

    getCurrencyList(baseCurrency).then((res) => {
        console.log(res)
        let list = fillArray(res)
        loadMenus(list)
    }).catch((error) => {
        console.log(error)
    })
}

async function getCurrencyList(from) {
    const key = '91a61a9f6a5cc4ccbe65215e'
    const url = 'https://v6.exchangerate-api.com/v6/' + key + '/latest/' + from

    var array = []

    await fetch(url)
        .then(response => response.json())
        .then(result => {
            array = result.conversion_rates
        })
        .catch(error => console.log('error', error));

    return new Promise((resolve, reject) => {
        if (array.length != 0) {
            resolve(array)
        } else {
            reject('array empty')
        }
    })
}

function fillArray(data) {
    const currencies = Object.keys(data)
    return currencies
}

function loadMenus(list) {
    var menu = document.getElementById('currencies1')
    for (let i = 0; i < list.length; i++) {
        var option = document.createElement('option')
        option.innerHTML = list[i]
        menu.appendChild(option)
    }

    var menu2 = document.getElementById('currencies2')
    for (let i = 0; i < list.length; i++) {
        var option = document.createElement('option')
        option.innerHTML = list[i]
        menu2.appendChild(option)
    }
}

loadData()


var btn = document.querySelector('.convertBtn')

btn.addEventListener("click", convert);

function convert() {
    const userPrice = document.getElementById('userPrice').value
    const fromCurr = document.getElementById('currencies1').value
    const toCurr = document.getElementById('currencies2').value

    calculate(fromCurr, toCurr, userPrice).then((res) => {
        let price = Math.round(res * 100) / 100
        document.getElementById('convertedPrice').innerHTML = "converted price: " + price + ' ' +toCurr
    })
}


async function calculate(from, to, amount) {

    let calculatedPrice = -1

    await getCurrencyList(from).then((res) => {
        calculatedPrice = amount * res[to]
    }).catch((error) => {
        console.log(error)
    })

    return new Promise((resolve, reject) => {
        if (calculatedPrice > 0) {
            resolve(calculatedPrice)
        } else {
            reject('value empty')
        }
    })
}
