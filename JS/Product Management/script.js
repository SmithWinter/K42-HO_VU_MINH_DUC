const productList = [
    {
        name: "Product 1",
        quantity: 1,
        price: 5 
    },
    {
        name: "Product 2",
        quantity: 1,
        price: 5 
    },
    {
        name: "Product 3",
        quantity: 1,
        price: 5 
    }
]

const localStorageData = localStorage.getItem('productList')


function displayProducts(productList) {
    const productTableBody = document.getElementById('product-table').getElementsByTagName('tbody')[0];
    productTableBody.innerHTML = ''

    productList.map((product, index) => {
        let row = productTableBody.insertRow();

        let id = row.insertCell(0);
        let name = row.insertCell(1);
        let quantity = row.insertCell(2);
        let price = row.insertCell(3);
        let action = row.insertCell(4);

        id.innerHTML = index + 1;
        name.innerHTML = product.name;
        quantity.innerHTML = product.quantity;
        price.innerHTML = product.price;

        action.innerHTML = `
            <div>
                <button id="edit-product" data-bs-toggle="modal" data-bs-target="#product-modal" onclick="editProduct(${index})">
                    <i class="fa-solid fa-pen-to-square"></i> Edit
                </button>
                <button id="delete-product" onclick="deleteProduct(${index})">
                    <i class="fa-solid fa-trash"></i> Delete
                </button>
            </div>
        `;

    })
}
function editProduct(index) {
    localStorage.setItem('isNewProduct', false);
    let data = JSON.parse(localStorageData) || productList

    const modalData = data.filter((item, position) => { 
        return position === index
    })
    document.getElementById('product-name').value = modalData[0].name
    document.getElementById('product-quantity').value = modalData[0].quantity
    document.getElementById('product-price').value = modalData[0].price

    localStorage.setItem('editIndex', index);
}


function deleteProduct(index) {
    if (confirm("Are you sure?")) {
        let data = JSON.parse(localStorageData) || productList
        data.splice(index, 1);
        localStorage.setItem('productList', JSON.stringify(data));
        displayProducts(data);
    }
}

function resetForm() {
    document.getElementById('product-form').reset();
    let addModal = bootstrap.Modal.getInstance(document.getElementById('product-modal'));
    addModal.hide()
}

document.addEventListener('DOMContentLoaded', function() {
    let data = JSON.parse(localStorageData) || productList
    
    if (data) {
        displayProducts(data);
    } else {
        localStorage.setItem('productList', JSON.stringify(productList));
        displayProducts(productList);
    }
    document.getElementById('product-form').onsubmit = (event) => {
        event.preventDefault();
        if (confirm("Are you sure?")) {
            const isNewProduct = JSON.parse(localStorage.getItem('isNewProduct'))
            if (isNewProduct) {
                const newProduct = {
                    name: document.getElementById('product-name').value,
                    quantity: Number(document.getElementById('product-quantity').value),
                    price: Number(document.getElementById('product-price').value)
                }
        
                data.push(newProduct)
                localStorage.setItem('productList', JSON.stringify(data));
                document.getElementById('product-form').reset();
                displayProducts(data);
                resetForm()
            } else {
                const editIndex = localStorage.getItem('editIndex')
                const editProduct = {
                    name: document.getElementById('product-name').value,
                    quantity: Number(document.getElementById('product-quantity').value),
                    price: Number(document.getElementById('product-price').value)
                }
                data[editIndex] = editProduct
                localStorage.setItem('productList', JSON.stringify(data));
                displayProducts(data);
                resetForm()
            }

        }
    };
    document.getElementById('add-product').addEventListener('click', () => {
        localStorage.setItem('isNewProduct', true);
    })
});