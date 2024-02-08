let count=document.getElementById('count')
let product=JSON.parse(localStorage.getItem('product'))
//console.log(product);
let imag=document.getElementsByTagName('img')
console.log(imag[0]);
let title=document.getElementById('title')
let price=document.getElementById('price')
let des=document.getElementById('desc')
imag[0].src=product.image
title.innerText=product.title
price.innerText=` ${product.price}$`
des.innerText=product.description

let bagShopping = document.getElementById('cart')
bagShopping.addEventListener('click', function () {
    window.location.href = 'cart.html'
})

let addtocart = document.getElementById('add')
addtocart.addEventListener('click', function () {
    let buying= JSON.parse(localStorage.getItem('cart'))
    let exist=buying.find(item=> item.id==product.id)
    // console.log(exist);
      if(exist)
        alert('This product is already in your cart')
      else{

          buying.push((product))
          localStorage.setItem('cart',JSON.stringify(buying))
           count.innerText=buying.length
      }
                
    // buying.push((product))
    // localStorage.setItem('cart',JSON.stringify(buying))

    // count.innerText=buying.length
   
})