document.getElementById("loginbtn")
.addEventListener("click",()=>{
    const username=document.getElementById("username").value
const password=document.getElementById("pass").value 
if(username==='admin'&&password==='admin123'){
    window.location.assign("home.html")
}
else{
    alert("Enter the correct username and password")
}
})