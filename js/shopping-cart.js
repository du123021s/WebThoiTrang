const btn = document.querySelectorAll('.item button')
btn.forEach((button,index) => {
      
      button.addEventListener('click', (evt) => {{
            var btnItem = evt.target
            var product = btnItem.parentElement.parentElement
            
            var productImg = product.querySelector('img').src;
            var productName = product.querySelector('.left_text').innerText
             console.log(productName);
            var productPrice = product.querySelector('.right_text').innerText

            addCart(productPrice, productImg, productName)
      }})
})

function addCart(productPrice, productImg, productName){
      var addtr = document.createElement('tr'); //tao new tag
      var cartItem = document.querySelectorAll('tbody tr');
      for(var i=0; i<cartItem.length; i++){
            var productT = document.querySelectorAll('.title');
            if(productT[i].innerHTML == productName){
                  alert("Sản phẩm đã có trong giỏ hàng.")
                  return;
            }
      }
      var trcontent = '<tr><td style="display:flex; align-items:center;"><img style="width:70px;" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="price">'+productPrice+'</span></p></td><td><input type="number" value="1" min="0" style="width:30px; outline:none;"></td><td style="cursor:pointer;"><span class="delete-cart">Delete</span></td></tr>'
      addtr.innerHTML = trcontent; //gan noi dung vao the
      var cartTable = document.querySelector("tbody"); // pos 
      cartTable.append(addtr); //gan the moi vao vi tri cartTable trong tbody

      cartTotal(); //invoke function compute Sum
      deleteCart();
}
// =====================  TOTAL CART ===================
function cartTotal(){
      var cartItem = document.querySelectorAll('tbody tr');
      var totalB = 0;
      var i = 0;
      for(i=0; i<cartItem.length; i++){

            var inputValue = cartItem[i].querySelector('input').value;
            var product_Price = cartItem[i].querySelector('.price').innerHTML;

            product_Price = product_Price.slice(1,6);

            totalA = inputValue*product_Price;
            totalB = totalB + totalA;
            // totalC = totalB.toLocaleString('de-DE');
      }
      var cartSum = document.querySelector('.price-total span')
      var cartPrice = document.querySelector('.cart-icon span')
      console.log("day la cart: " + cartPrice)
      cartSum.innerHTML = totalB.toPrecision(3);
      cartPrice.innerHTML = i;
      inputChange();
}

// ========= when amout products change, we will update it  ==========
function inputChange(){
      var cartItem = document.querySelectorAll('tbody tr');
      for(var i=0; i<cartItem.length; i++){
            var inputValue = cartItem[i].querySelector('input');
            inputValue.addEventListener('change', () => {
                  cartTotal();
            })
          
      }
}

// ================= DELETE CART ================

function deleteCart(){
      var cartItem = document.querySelectorAll('tbody tr')
      for(var i=0; i<cartItem.length; i++){
            var productDelete = document.querySelectorAll('.delete-cart');
            productDelete[i].addEventListener('click', (evt) => {
                  var cartDelete = evt.target;
                  var cartitemR = cartDelete.parentElement.parentElement
                  cartitemR.remove();
                  cartTotal();
            })    
      }
}

// ========== BUTTON CART & BUTTON DELETE ICON-X OF CART  ============
const cartbtn = document.querySelector('.fa-x')
var bg = document.querySelector('.bg') 
const cartshow = document.querySelector('.cart-icon-btn')

cartshow.addEventListener('click', () => {
      console.log(cartshow)
      document.querySelector('.cart').style.right = '0';
      bg.classList.add('bg_visible');
})

cartbtn.addEventListener('click', () => {
      console.log(cartbtn)
      document.querySelector('.cart').style.right = '-100%';
      bg.classList.remove('bg_visible');
})
