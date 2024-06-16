function generateID() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function showToast(messages) {
    Toastify({
        text: messages,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right",
        stopOnFocus: true,
    }).showToast();
}

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

        id.innerHTML = product.id;
        name.innerHTML = product.name;
        quantity.innerHTML = product.quantity;
        price.innerHTML = product.price;

        action.innerHTML = `
            <div>
                <button id="edit-product" data-bs-toggle="modal" data-bs-target="#product-modal" onclick="editProduct('${product.id}')">
                    <i class="fa-solid fa-pen-to-square"></i> Edit
                </button>
                <button id="delete-product" onclick="deleteProduct('${product.id}')">
                    <i class="fa-solid fa-trash"></i> Delete
                </button>
            </div>
        `;

    })
}

function fetchData() {
    return localStorage.getItem('productList')
}

function editProduct(id) {
    document.getElementById('product-form').reset();
    localStorage.setItem('isNewProduct', false);
    let data = JSON.parse(fetchData()) || []
    const modalData = data.filter((item, position) => { 
        return item.id == id
    })
    document.getElementById('product-id').value = modalData[0].id
    document.getElementById('product-name').value = modalData[0].name
    document.getElementById('product-quantity').value = modalData[0].quantity
    document.getElementById('product-price').value = modalData[0].price
    localStorage.setItem('editIndex', id);
}


function deleteProduct(id) {
    if (confirm("Are you sure?")) {
        let data = JSON.parse(fetchData())
        const processedData = data.filter((item) => {
            if (item.id !== id) {
                return item
            }
        })
        localStorage.setItem('productList', JSON.stringify(processedData));
        displayProducts(processedData);
        showToast('Delete product successfully')
    }
}

function resetForm() {
    document.getElementById('product-form').reset();
    let addModal = bootstrap.Modal.getInstance(document.getElementById('product-modal'));
    addModal.hide()
}

document.addEventListener('DOMContentLoaded', function() {
    let data = JSON.parse(fetchData()) || []   
    if (data) {
        displayProducts(data);
    } 
    document.getElementById('product-form').onsubmit = (event) => {
        event.preventDefault();
        if (confirm("Are you sure?")) {
            const isNewProduct = JSON.parse(localStorage.getItem('isNewProduct'))
            if (isNewProduct) {
                const newProduct = {
                    id: generateID(),
                    name: document.getElementById('product-name').value,
                    quantity: Number(document.getElementById('product-quantity').value),
                    price: Number(document.getElementById('product-price').value)
                }
                
                data.push(newProduct)
                localStorage.setItem('productList', JSON.stringify(data));
                document.getElementById('product-form').reset();
                displayProducts(data);
                resetForm()
                showToast('Add product successfully')
            } else {
                const editIndex = localStorage.getItem('editIndex')
                const editProduct = {
                    id: document.getElementById('product-id').value,
                    name: document.getElementById('product-name').value,
                    quantity: Number(document.getElementById('product-quantity').value),
                    price: Number(document.getElementById('product-price').value)
                }
                let editItemLocation = data.findIndex(element => element.id === editIndex)
                data[editItemLocation] = editProduct
                localStorage.setItem('productList', JSON.stringify(data));
                displayProducts(data);
                resetForm()
                showToast('Edit product successfully')
            }

        }
    };
    document.getElementById('add-product').addEventListener('click', () => {
        localStorage.setItem('isNewProduct', true);
        document.getElementById('product-form').reset();
    })
});
