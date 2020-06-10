

function printShop(start, length){
  var products = JSON.parse(products_string);
  var produtos = [];
for (var i = start; i < length; i++) {
  var title = products[i].title;
 var price = products[i].price;
 const product = document.createElement('div');
 product.classList.add('product');
product.setAttribute("id", products[i].id);

 var img = products[i].thumb;
 if (products[i].salePrice) {
   product.innerHTML= "<div class='sale'><span>On Sale</span></div><div class='product-img'><img class='product-img-first' src='img/"+img+"' alt=''></div><div class='product-info'><h3>"+title+"</h3><span>$"+products[i].salePrice+"</span></div><div class='store-item-icon'><div class='store-item-icon-click'>+</div></div><div class='store-item-quantity'><input type='number' min='1' value='1' class='store-item-quantity-input'></div>"
 }else{
 product.innerHTML = "<div class='product-img'><img class='product-img-first' src='img/"+img+"' alt=''></div><div class='product-info'><h3>"+title+"</h3><span>$"+price+"</span></div><div class='store-item-icon'><div class='store-item-icon-click'>+</div></div><div class='store-item-quantity'><input type='number' min='1' value='1' class='store-item-quantity-input'></div>"
}
 const shop = document.querySelector('.products');

shop.appendChild(product)



}
}
