let  select=document.getElementById('select')
let count=document.getElementById('count')
let bagShopping = document.getElementById('cart')
console.log(bagShopping);




async function getProduts (){
try{
    let response=await fetch('https://fakestoreapi.com/products')
    let data=await response.json()
    
//console.log(data)
for(let i=1;i<data.length;i++){
    let card=document.createElement('div');
    card.classList.add('card');
    let proPic=document.createElement('img')
    proPic.src=data[i].image;
    let title=document.createElement('p')
    title.innerText=data[i].title;
    let price=document.createElement('p')
    price.innerText=`price:${data[i].price} $`;
    let btn=document.createElement('button')
    let showDetails=document.createElement('button')
    btn.classList.add('btn')
    showDetails.classList.add('show')
     showDetails.innerText='show details'
    btn.innerHTML=' <i class="fa-solid fa-cart-shopping"></i> Add to cart';
    document.querySelector('.container').append(card);
    card.append(proPic);
    card.append(title);
    card.append(price);
    card.append(btn);
    card.append(showDetails)
}

addCart(data)
getDetalis(data)
}
catch(error){
    console.log(error);
}
}

async function getCategories(){
 try{
    let response=await fetch('https://fakestoreapi.com/products/categories')
    let cat=await response.json()
    for(let item of cat){
        let option=document.createElement('option')
        option.innerText=item
        option.value=item
        select.append(option)
    }
 }
 catch(error){
     console.log(error);
 }
}

async function filter(){
   try{
    if(select.value=='all'){
        let response=await fetch('https://fakestoreapi.com/products')
        let data=await response.json()
        document.querySelector('.container').innerHTML=''
        for(let i=1;i<data.length;i++){
            console.log(i);
            let card=document.createElement('div');
            card.classList.add('card');
            let proPic=document.createElement('img')
            proPic.src=data[i].image;
            let title=document.createElement('p')
            title.innerText=data[i].title;
            let price=document.createElement('p')
            price.innerText=`price:${data[i].price} $`;
            let btn=document.createElement('button')
            btn.classList.add('btn')
            let showDetails=document.createElement('button')
            btn.classList.add('btn')
            showDetails.classList.add('show')
             showDetails.innerText='show details'
            btn.innerHTML=' <i class="fa-solid fa-cart-shopping"></i> Add to cart';
            document.querySelector('.container').append(card);
            card.append(proPic);
            card.append(title);
            card.append(price);
            card.append(btn);
            card.append(showDetails)
        } 
        addCart(data)
        getDetalis(data)
    }
    else{
        let value=select.value
        let response=await fetch(`https://fakestoreapi.com/products/category/${value}`)
        let data=await response.json()
        //console.log(data)
        document.querySelector('.container').innerHTML=''
        for(let i=1;i<data.length;i++){
            let card=document.createElement('div');
            card.classList.add('card');
            let proPic=document.createElement('img')
            proPic.src=data[i].image;
            let title=document.createElement('p')
            title.innerText=data[i].title;
            let price=document.createElement('p')
            price.innerText=`price:${data[i].price} $`;
            let btn=document.createElement('button')
            btn.classList.add('btn')
            let showDetails=document.createElement('button')
            btn.classList.add('btn')
            showDetails.classList.add('show')
             showDetails.innerText='show details'
            btn.innerHTML=' <i class="fa-solid fa-cart-shopping"></i> Add to cart';
            document.querySelector('.container').append(card);
            card.append(proPic);
            card.append(title);
            card.append(price);
            card.append(btn);
            card.append(showDetails)
           
        }
        addCart(data)
        getDetalis(data)
    } 
    }  

   
   
   catch(error){
    console.log(error);
   }


}
select.addEventListener('change',function(){
    filter()
})

if(!localStorage.getItem('cart')){
localStorage.setItem('cart',JSON.stringify([]))
}
 function addCart(data){
    let addToCart=document.getElementsByClassName('btn')
    for(let h=0;h<addToCart.length;h++){
        addToCart[h].addEventListener('click',function(){
        event.preventDefault()
             if(localStorage.getItem('cart')){
              //console.log(data[h+1].id);
                  let buying= JSON.parse(localStorage.getItem('cart'))
                 let exist=buying.find(item=> item.id==data[h+1].id)
                // console.log(exist);
                  if(exist)
                    alert('This product is already in your cart')
                  else{
           
                      buying.push((data[h+1]))
                      localStorage.setItem('cart',JSON.stringify(buying))
                       count.innerText=buying.length
                  }
                //   buying.push((data[h+1]))
                //   localStorage.setItem('cart',JSON.stringify(buying))
                //   count.innerText=buying.length
             }
           
        })
    }
   
}
function getDetalis(data){
    let details=document.getElementsByClassName('show')
    for(let i=0;i<details.length;i++){
        details[i].addEventListener('click',function(){
            localStorage.setItem('product',JSON.stringify(data[i+1]))
            window.location.href='details.html'
        })
    }
}

// function add(productId){

//     let product=data.find(item=>item.id==productId)
//    return cart.push(JSON.stringify(product)) 
// }

//let pro = JSON.parse(localStorage.getItem("cart")
//localStorage.removeItem('cart')
bagShopping.addEventListener('click', function () {
    window.location.href = 'cart.html'
})

//localStorage.removeItem('quentity0');

getCategories()
getProduts()