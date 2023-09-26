// Define currency symbol
let currencySymbol = '$';

// Array to store product objects
const products = [
    {
        productId: 100,
        name: 'Cherry',
        price: 2.99,
        quantity: 0,
        image: 'images/cherry.jpg'
    },
    {
        productId: 101,
        name: 'Orange',
        price: 1.99,
        quantity: 0,
        image: 'images/orange.jpg'
    },
    {
        productId: 102,
        name: 'Strawberry',
        price: 3.49,
        quantity: 0,
        image: 'images/strawberry.jpg'
    }
];

// Array to store cart items
const cart = [];

// Function to add a product to the cart
function addProductToCart(productId) {
    // Find the product by productId
    const product = products.find(item => item.productId === productId);

    // Check if the product is already in the cart
    const cartItem = cart.find(item => item.productId === productId);

    if (cartItem) {
        // If already in the cart, increase quantity
        cartItem.quantity++;
    } else {
        // If not in the cart, add to cart
        cart.push({
            ...product,
            quantity: 1
        });
    }
}

// Function to increase the quantity of a product in the cart
function increaseQuantity(productId) {
    const cartItem = cart.find(item => item.productId === productId);

    if (cartItem) {
        cartItem.quantity++;
    }
}

// Function to decrease the quantity of a product in the cart
function decreaseQuantity(productId) {
    const cartItem = cart.find(item => item.productId === productId);

    if (cartItem) {
        if (cartItem.quantity > 1) {
            cartItem.quantity--;
        } else {
            // If quantity is 1, remove the item from the cart
            removeProductFromCart(productId);
        }
    }
}

// Function to remove a product from the cart
function removeProductFromCart(productId) {
    const index = cart.findIndex(item => item.productId === productId);

    if (index !== -1) {
        cart.splice(index, 1);
    }
}

// Function to calculate the total cart value
function cartTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Function to empty the cart
function emptyCart() {
    cart.length = 0;
}

// Function to process payment and calculate change
function pay(amountPaid) {
    const total = cartTotal();
    const change = amountPaid - total;
    return change;
}

// Function to draw the product list on the front-end
function drawProducts() {
    // Implement code to display products on the front-end
}

// Function to draw the cart on the front-end
function drawCart() {
    // Implement code to display the cart on the front-end
}

// Function to draw the checkout area on the front-end
function drawCheckout() {
    // Implement code to display the checkout area on the front-end
}

// Initialize the store with products, cart, and checkout
drawProducts();
drawCart();
drawCheckout();

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
