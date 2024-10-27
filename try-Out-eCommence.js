let cartSize = 0;
const cartQuantity = document.querySelector('.js-cart-counter');
let productContainer = document.querySelector('#js-product-container');
let cartContainer = document.querySelector('#cart-list');
let total = document.querySelector('#totalPrice');

const products = [
  {
    title: "HP Probook 450, i5-8th, 8gb 256gb ssd",
    price: 4500,
    image: "https://cdn-media.deus.com.gh/media/catalog/product/cache/bc6243f27449267ba4c60f9af9e6642c/2/3/2302_probook_450_g8_.jpg"
  },{
    title: "HP Probook 650, i5-8th, 8gb 256gb ssd",
    price: 4000,
    image: "https://www.notebookcheck.net/fileadmin/_processed_/e/8/csm_main_6da67e32ac.jpg"
  },{
    title: "Lenovo ideaPad Yoga, i7-8th, 16gb 512gb ssd Nvidia (2GB)",
    price: 7000,
    image: "https://p3-ofp.static.pub/fes/cms/2023/02/17/427a44ftisi3cl9461cv9yqb5nk2k7546053.png"
  },
]

products.forEach(product => {
  const productCard = `
  <div class="border p- rounded-lg">
    <div class="h-[200px] w-[100%] overflow-hidden">
      <img src=${product.image} alt="" class="p-2 object-contain">
    </div>
    <div class="h-[80px] bg-blue-100 px-2 overflow-hidden rounded-b-lg">
      <h3 class="text-sm">${product.title}</h3>
      <div class="flex justify-between items-center  py-1">
        <p class="font-medium text-[18px]">₵ ${product.price}</p>
        <button class="text-sm bg-yellow-500 px-2 py-1 rounded-sm" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
      </div>
    </div>
  </div>
  `;
  productContainer.innerHTML += productCard;
  // console.log(productCard);
});

const cart = [];

function addToCart(product){
  cart.push(product);
  displayCart();
  const totalPrice = cart.reduce((sum, item)=> sum + item.price, 0)
  total.textContent = `Total:₵ ${totalPrice}`;
}

function displayCart() {
  cartContainer.innerHTML = "";
  cart.forEach(item => {
    const cartCard = `
      <div class="flex gap-2 items-center">
        <img src=${item.image} alt="" class="h-[70px] w-[100px]">
        <div class="">
          <h3 class="text-sm">${item.title}</h3>
          <p class="font-medium">₵ ${item.price}</p>
        </div>
      </div>
    `;
    cartContainer.innerHTML += cartCard;
  });



}






// adding to cart increases the cart counter by one
function increaseCartQuantity() {
  return cartQuantity.innerText = cartSize++;
}
// removing from cart decreases the cart counter by one
function decreaseCartQuantity() {
  return cartQuantity.innerText = cartSize--;
}

