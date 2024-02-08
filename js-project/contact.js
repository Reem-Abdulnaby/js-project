var form=document.getElementById("contactForm")
//validation name
var Name=document.getElementById("name")
var nvalidMessage=document.createElement('p');
var evalidMessage=document.createElement('p');
var pvalidMessage=document.createElement('p');
var cvalidMessage=document.createElement('p');
var nameDiv=document.getElementById('userName')
Name.addEventListener('input',function(){
    if(Name.value==''){        
  nvalidMessage.innerText=''
nvalidMessage.innerText="*Name is required";
nvalidMessage.classList.add('validateMessage');
nameDiv.append(nvalidMessage)
    } 
  else if (Name.value.length<3){
    nvalidMessage.innerText=''
nvalidMessage.innerText="Name must contain at least 3 letter";
nvalidMessage.classList.add('validateMessage');

nameDiv.append(nvalidMessage)
}
else{
    nvalidMessage.innerText=''
    nameDiv.append(nvalidMessage)
}
})
//validation email
var email=document.getElementById('mail')
var emailDiv=document.getElementById('email')
email.addEventListener('input',function(){
   
   var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(email.value==''){
        evalidMessage.innerText=''
        evalidMessage.innerText="*Email is required";
        evalidMessage.classList.add('validateMessage');
        emailDiv.append(evalidMessage)

    }
    
    else if(!email.value.match(emailRegex)){
        evalidMessage.innerText=''
        evalidMessage.innerText="This is not email format ,please enter valid email";
        evalidMessage.classList.add('validateMessage');
        emailDiv.append(evalidMessage)
    }
    else{
        evalidMessage.innerText=''
        nameDiv.append(evalidMessage)
    }
})

//password validation
var pass=document.getElementById('pass');
var passDiv=document.getElementById('password');
pass.addEventListener('input',function(){
    var passRegex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/
    if(pass.value==''){
        pvalidMessage.innerText=''
        pvalidMessage.innerText="*password is required";
        pvalidMessage.classList.add('validateMessage');
       passDiv.append(pvalidMessage)
    }
    else if(!pass.value.match(passRegex)){
        pvalidMessage.innerText=''
        pvalidMessage.innerText="*password must contain at least one upper case and one lower case character and at least one digit and at least one special character";
        pvalidMessage.classList.add('validateMessage');
       passDiv.append(pvalidMessage)
    }
    else{
        pvalidMessage.innerText='';
        passDiv.append(pvalidMessage)
    }
})
//confirm password
let confirnDiv=document.getElementById('confirm')
let confirmPass=document.getElementById('confirmpass')
confirmPass.addEventListener('input',function(){
    if(confirmPass.value!=pass.value){
        cvalidMessage.innerText=''
        cvalidMessage.innerText="*passwords do not match";
        cvalidMessage.classList.add('validateMessage');
        confirnDiv.append(cvalidMessage)

    }
    else{
        cvalidMessage.innerText=''
        confirnDiv.append(cvalidMessage)
    }
})



