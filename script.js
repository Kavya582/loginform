let username = document.getElementById('username');
let password = document.getElementById('password');
let btn = document.getElementById('btn');
let para = document.getElementById('para');
let result;

btn.addEventListener('click',()=>{
    if(username.value=="admin" && password.value=="Teks"){
        para.innerHTML = "You are Logged in Successfully";
        para.style.fontSize = "25px";
        para.style.color = "green";
        para.style.fontFamily = "monospace";
        para.style.fontWeight = "500";
    }
    else{
        para.innerHTML = "Enter the Correct Credentials";
        para.style.fontSize = "25px";
        para.style.color = "red";
        para.style.fontFamily = "monospace";
        para.style.fontWeight = "500";
    }
})