//here rwe are doing form aand form avalidation 
// ismai hum dekhenge ki kese jo form hai wo professionly bnta hai
//or isami humne warnings bhi dali hai 
//ki form agr  user according to proper form guideline say na bhre to warning aye
 let nm=document.querySelector("#name");

let form=document.querySelector("form");

form.addEventListener("submit",(evnt)=>{
   
      console.dir(nm);
   

//this whole is used for tex vallidattion 
    if(nm.value.length <=2 ){
        document.querySelector("#hide").style.display="initial"
        
    }
    else{
           document.querySelector("#hide").style.display="none"
         

    }
});

form.addEventListener("submit",(evnt)=>{
    evnt.preventDefault();
   const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   let ans = Regex.test("");
   console.log(ans)


})