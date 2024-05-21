function clearElement() {
    const element1 = document.getElementById('section-1-result')
    const element2 = document.getElementById('section-2-result')
    const element3 = document.getElementById('section-3-result')


    while (element1.hasChildNodes()){
        element1.removeChild(element1.firstChild);
    }
    while (element2.hasChildNodes()){
        element2.removeChild(element2.firstChild);
    }
    while (element3.hasChildNodes()){
        element3.removeChild(element3.firstChild);
    }
}

function processScore() {
    clearElement()
    const element = document.getElementById('section-1-result')

    const chemistry = Number(document.getElementById('chemistry').value)
    const biology = Number(document.getElementById('biology').value)
    const physics = Number(document.getElementById('physics').value)

    const total = (chemistry + biology + physics)
    const average = total/3

    const node = document.createElement("p")
    const nodeText = document.createTextNode(`Result Total: ${total} and Average: ${average}`)

    node.appendChild(nodeText);
    element.appendChild(node)
}

function processTemperature() {
    clearElement()
    const element = document.getElementById('section-2-result')

    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 9/5) + 32

    const node = document.createElement("p")
    const nodeText = document.createTextNode(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`)

    node.appendChild(nodeText);
    element.appendChild(node)
}

function processCircle() {
    clearElement()
    const element = document.getElementById('section-3-result')

    const radius = parseFloat(document.getElementById('radius').value)
    const area = Math.PI * Math.pow(radius, 2)
    const circumference = 2 * Math.PI * radius

    const node = document.createElement("div")
    const nodeText_1 = document.createTextNode(`Area of a circle: ${area.toFixed(2)} square unit`)
    const nodeText_2 = document.createTextNode(`Circumference of a circle: ${circumference.toFixed(2)} square unit`)
    


    node.appendChild(nodeText_1)
    node.appendChild(document.createElement("br"));
    node.appendChild(nodeText_2)
    element.appendChild(node)
}