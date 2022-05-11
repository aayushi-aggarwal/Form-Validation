const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('cmpassword');
let validEmail = false;
let validPhone = false;
let validUser = false;
let validpassword = false;
let validpasswordtwo = false;
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "password";
    } else {
      x.type = "password";
    }
  }
name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){6,20}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
        
    }
})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
        
    }
})
password.addEventListener('blur', ()=>{
    console.log("password is blurred");
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    let str = password.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your password is valid');
        password.classList.remove('is-invalid');
        validpassword = true;
    }
    else{
        console.log('Your password is not valid');
        password.classList.add('is-invalid');
        validpassword = false;
    }
})
cmpassword.addEventListener('blur', ()=>{
    console.log("password is blurred");
    let regex = password.value;
    let str = cmpassword.value;
    console.log(regex, str);
    if(regex==str){
        console.log('Your password is matched');
        cmpassword.classList.remove('is-invalid');
        validpasswordtwo = true;
    }
    else{
    
        console.log('Your password is not matched');
        cmpassword.classList.add('is-invalid');
        validpasswordtwo = false;
    }
})
let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser,validpasswordtwo, validpassword, validPhone);
    
    if(validEmail && validUser &&  validpasswordtwo  && validpassword&&validPhone){
        let failure = document.getElementById('failure');

        location.replace("index.html")
        let success = document.getElementById('success');
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        console.log('One of Phone, email,password or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
        }

    
    
})
