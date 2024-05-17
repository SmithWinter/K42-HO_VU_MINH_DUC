function getValue() {
    const number1 = Number(document.getElementById('number1').value)
    const number2 = Number(document.getElementById('number2').value)
    return { number1, number2 }
}

function clearElement() {
    const element = document.getElementById('result-container')
    while (element.hasChildNodes()){
        element.removeChild(element.firstChild);
    }
}


function addition() {
    clearElement()
    const input = getValue()
    const element = document.getElementById('result-container')

    const result = input.number1 + input.number2

    const node = document.createElement("p")
    const nodeText = document.createTextNode(`Result Addition: ${result}`)

    node.appendChild(nodeText);
    element.appendChild(node)
}

function subtraction() {
    clearElement()
    const input = getValue()
    const element = document.getElementById('result-container')

    const result = input.number1 - input.number2

    const node = document.createElement("p")
    const nodeText = document.createTextNode(`Result Subtraction: ${result}`)

    node.appendChild(nodeText);
    element.appendChild(node)
}

function multiplier() {
    clearElement()
    const input = getValue()
    const element = document.getElementById('result-container')

    const result = input.number1 * input.number2

    const node = document.createElement("p")
    const nodeText = document.createTextNode(`Result Multiplier: ${result}`)

    node.appendChild(nodeText);
    element.appendChild(node)
}

function division() {
    clearElement()
    const input = getValue()
    const element = document.getElementById('result-container')

    const result = input.number1 / input.number2

    const node = document.createElement("p")
    const nodeText = document.createTextNode(`Result Division: ${result}`)

    node.appendChild(nodeText);
    element.appendChild(node)
}