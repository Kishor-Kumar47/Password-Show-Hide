document
.getElementById("togglePassword") 
// tabning:test | explain| document| ask
.addEventListener("change", function(){
    var passwordInput = document.getElementById("password");

    if(this.checked){
        passwordInput.type = "text";
    }else{
        passwordInput.type = "passworld";
    }
});