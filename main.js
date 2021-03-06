console.log('Indian Product - Vocal for local');


// Product Details
const products = document.querySelectorAll('.product-grid');
products.forEach((product, id) => {
    product.onclick = () => {
        location.href = "productdetail.html";
    }
});


// Switching of Login and Signup Form
const switchToSignup = () => {
    document.querySelector('#login_section').style.display = "none";
    document.querySelector('#signup_section').style.display = "block";
}
const switchToLogin = () => {
    document.querySelector('#signup_section').style.display = "none";
    document.querySelector('#login_section').style.display = "block";
}


// Product Toggling
let menuItems = document.getElementById('menu-item');
menuItems.style.maxHeight = "0px";

function menutoggle() {
    if (menuItems.style.maxHeight == '0px') {
        menuItems.style.maxHeight = '200px';
    }
    else {
        menuItems.style.maxHeight = "0px";
    }
}

// For Product Galary
let productImg = document.getElementById('productImg');
let smallImg = document.getElementsByClassName('smallImg');

smallImg[0].onclick = () => 
    productImg.src = smallImg[0].src;
smallImg[1].onclick = () => 
    productImg.src = smallImg[1].src;
smallImg[2].onclick = () => 
    productImg.src = smallImg[2].src;
smallImg[3].onclick = () => 
    productImg.src = smallImg[3].src;