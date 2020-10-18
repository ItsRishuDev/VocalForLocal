console.log('Indian Product - Vocal for local');

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

smallImg[0].onclick = ()=>{
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = ()=>{
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = ()=>{
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = ()=>{
    productImg.src = smallImg[3].src;
}