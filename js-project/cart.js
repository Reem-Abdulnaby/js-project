let pro=JSON.parse(localStorage.getItem('cart'))
let count = document.getElementById('count')
let priceValue=document.getElementById('priceValue')
let q=document.getElementsByClassName('quentity')

let content=document.querySelector(".box")
count.innerText=pro.length
let totalPrice=0;
let elementPrice=0
for(let i=0;i<pro.length;i++){
   let product=document.createElement('div')
   product.classList.add('cart-pro')
   let img=document.createElement('img')
   img.src=pro[i].image
   let details=document.createElement('div')
   details.classList.add('details')
   let title=document.createElement('p')
   title.innerText=pro[i].title
   let price=document.createElement('p')
   price.classList.add('price')
  price.innerText =`${parseInt(pro[i].price)} $`
  content.append(product)
  let btnRemove=document.createElement('button')
  let quentity=document.createElement('input')
  let totalelementPrice=document.createElement('input')
  totalelementPrice.classList.add('total')
  quentity.type='number'
  quentity.value=1
  quentity.min=1
  quentity.max=10
  quentity.classList.add('quentity')
  btnRemove.classList.add('btnRemove')
  btnRemove.innerText='Remove'
   product.append(img)
   product.append(btnRemove)
   product.append(details)
   product.append(quentity)
   details.append(title)
   details.append(price)
   product.append(totalelementPrice)
 
   
   elementPrice=parseInt(pro[i].price)*parseInt(quentity.value)
   totalelementPrice.value=elementPrice
   totalPrice+=elementPrice
   priceValue.value=`${totalPrice} $`
   console.log(elementPrice);
     quentity.addEventListener('input', function() {
      
   elementPrice=parseInt(pro[i].price)*parseInt(quentity.value)
   totalelementPrice.value=parseInt(elementPrice)
   
    console.log(elementPrice);
      
      
    totalPrice+=sum(totalelementPrice)

    
     //priceValue.value=`${totalPrice} $`
      console.log('total'+totalPrice);
   
      });
    
      priceValue.value=`${totalPrice} $`

}

let btn=document.getElementsByClassName('btnRemove')
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        pro.splice(i,1)
        localStorage.setItem('cart',JSON.stringify(pro))
        location.reload()

    })
}


let bttn=document.getElementsByClassName('total')
function sum(btn){
    let sum=0
    for(let i=0;i<bttn.length;i++){
     
     sum+=parseInt(btn[i].value)
    }
    return sum
}
let removeall=document.getElementById('removeall')
let checkout=document.getElementById('checkout')
removeall.addEventListener('click',function(){
    localStorage.removeItem('cart')
    location.href='products.html'
    removeall.style.display='none'
    checkout.style.display='none'
})

checkout.addEventListener('click',function(){
    let sure=confirm('Are you sure  do you want to checkout?')
    if(sure){
       localStorage.removeItem('cart')
       alert('thank you for your purchase')
       checkout.style.display='none'
       removeall.style.display='none'
      window.location.href='products.html'
    }
      
})