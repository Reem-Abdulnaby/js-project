let pic=document.getElementById('image')
let slider=['images/slider1.webp','images/slider2.jpg','images/slider3.webp','images/slider4.png']
let i=0
setInterval(function(){
    
    pic.src=slider[i]
    console.log(i);
    i++
    if(i==slider.length){
        i=0
    }
   
},1500)