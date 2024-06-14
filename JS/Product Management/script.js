let products = ["Product 1", "Product 2", "Product 3"];

function displayProducts() {
    const productTableBody = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    productTableBody.innerHTML = ''; // Clear the table

    products.forEach((product, index) => {
        let row = productTableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = index + 1;
        cell2.innerHTML = product;
        cell2.onclick = function() {
            document.getElementById('editProductName').value = product;
            document.getElementById('editProductForm').style.display = 'block';
            document.getElementById('editProductForm').onsubmit = function(event) {
                event.preventDefault();
                editProduct(index);
            };
        };
        cell3.innerHTML = `<button onclick="deleteProduct(${index})">Delete</button>`;
    });
}



function addProduct() {
    const newProductName = document.getElementById('newProductName').value;
    products.push(newProductName);
    displayProducts();
    document.getElementById('newProductName').value = ''; 
    alert('Product added');
}

function editProduct(index) {
    const newProductName = document.getElementById('editProductName').value;
    products[index] = newProductName;
    displayProducts();
    document.getElementById('editProductForm').style.display = 'none';
    alert('Product modified');
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}

document.addEventListener('DOMContentLoaded', function() {
    displayProducts();

    document.getElementById('addProductForm').onsubmit = function(event) {
        event.preventDefault();
        addProduct();
    };
});