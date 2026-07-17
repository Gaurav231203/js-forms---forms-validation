let form=document.querySelector("#loginForm");
let email= document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", (dets)=>{
    dets.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
    let ans =emailRegex.test("abcd@gmail.com");
    
    let emailans=emailRegex.test(email.value);
    let passwordans=passwordRegex.test(email.value);
    if(!emailans){
        document.querySelector("#emailError").textContent ="Email not vallid"
    }
    if(!passwordans){
        document.querySelector("#passwordError").textContent ="password not vallid"
        
    }

   
   
   //no output in console
   
   

})
