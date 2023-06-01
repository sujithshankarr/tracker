const form = document.querySelector('#form')

form.addEventListener("submit",(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
    
})

function validateInputs(){
    var email = document.getElementById("fname").value;
    var password = document.getElementById("pwd").value;
    var error = document.getElementById("error1");
    if(email == " tracker@gmail.com" && password == "tracker@24"){
        window.location.assign("home.html");
        error.textContent="";
        return false;
    }
    else{
        error.textContent="Invlaid crendiential";
        return false;
    }

}
