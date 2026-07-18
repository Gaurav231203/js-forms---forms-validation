//note--> ismai meri ftt gyii thi khud say krte krte firr bhi krr liya 
{/*abb expalin krta*/}


let form=document.querySelector("#loginForm");//login form select kiya 
let email= document.querySelector("#email");//mail id select kiya 
let password = document.querySelector("#password");// pass id select ki

form.addEventListener("submit", (dets)=>{//event chlaya form prr
    dets.preventDefault();//preventdefault kiya taki reset na ho

    const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;//regex gpt kiya sbkte hai

       console.log(email.value)//email ki value console pr print kiya
   


     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
     //same regex pass create liya

     console.log(email.value)// iski bhi avlue print ki
    
    let emailans=emailRegex.test(email.value);// abb ek variable bnya taki regix ko use krr sake
    

    let passwordans=passwordRegex.test(password.value);//same gose for pass

    if(!emailans){// condition chalaya ki agr email match naa hua to invalid print hoga 
        document.querySelector("#emailError").textContent ="Email not vallid"// select kiya  id small tag ki jisami msg hai invalid email ka
        let emailerror=document.querySelector("#emailError").style.display ="initial"//  ek variable bnya or  email error display kiay select email small tag id ko select krr kay
        
    }

    if(!passwordans){// pass not eg to regex pass to error 
        document.querySelector("#passwordError").textContent ="password not vallid"// select krr kay error dega 
        let passworderror=document.querySelector("#passwordError").style.display ="initial"// new variable mai pass id small tag ki or diplay inital kiya 
       
        
    }

   
   
   //no output in console


});
