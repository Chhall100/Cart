// script.js
const addtocartButton = document.getElementById('addtocartButton');
const productNameInput = document.getElementById('productName');
const CategoryInput = document.getElementById('Category');
const PriceInput = document.getElementById('Price');
const cartItemsList = document.getElementById('cart-items');

addtocartButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Retrieve the data values
    const productName = productNameInput.value.trim();
    const Category = CategoryInput.value.trim();
    const Price = PriceInput.value.trim();

    // Validate the input data
    if (!productName|| !Category || !Price) {
        alert('Please fill in all fields');
        return;
    }

    // Store the data in localStorage
    localStorage.setItem('productName', productName);
    localStorage.setItem('Category', Category);
    localStorage.setItem('Price', Price);

    // Add the product to the cart
    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - ${Category} - $${Price}`;
    cartItemsList.appendChild(cartItem);

    // Clear the input fields
    productNameInput.value = '';
    CategoryInput.value = '';
    PriceInput.value = '';

    // Optional: You can redirect the user to another page after adding the product to the cart
    // Replace 'home.html' with the actual page URL
    // window.location.href = 'home.html';
});