function conversionFlag() {
    const fromElement = document.getElementById('from-currency')
    const toElement = document.getElementById('to-currency')

    let fromValue = fromElement.value
    let toValue = toElement.value

    let flag
    if (fromValue === "USD") {
        toValue = "VND"
        toElement.selectedIndex = 1
        flag = 1
    } else if (fromValue === "VND") {
        toValue = "USD"
        toElement.selectedIndex = 2
        flag = 0
    }
    console.log(fromValue, toValue, flag)

    return flag
}

function currencyConversion() {
    const flag = conversionFlag()
    const amountValue = Number(document.getElementById("amount").value)
    const element = document.getElementById('result-container')
    while (element.hasChildNodes()){
        element.removeChild(element.firstChild);
    }

    let result = 0
    if (flag === 1) {
        result = `${amountValue * 25000} VND`
    } else {
        result = `${amountValue / 25000} USD`
    }
    const node = document.createElement("p")
    const nodeText = document.createTextNode(`Result: ${result}`)

    node.appendChild(nodeText)
    element.appendChild(node)
    console.log(result, conversionFlag)
} 