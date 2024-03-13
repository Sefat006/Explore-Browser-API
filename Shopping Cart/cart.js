
const getInputValueById = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

// this function contains what will happen if we click "Add Product" btn;
// it'll take input from 2 inputs and at the same time execute the 'displayProduct' function;
const addProduct = () =>{
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field');

    displayProduct(product, quantity);//execute the 'displayProduct' function;

    console.log(product);
    console.log(quantity);

    // set to local storage simple way
    localStorage.setItem(product, quantity)
}

const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);

}