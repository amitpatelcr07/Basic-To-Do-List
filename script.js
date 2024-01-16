let button=document.querySelector(".add");
let input=document.querySelector(".search");

let Add;
let li;

    Add=()=>{
    //    input.value==''?alert("enter a value"): console.log("amit");
       
    if(input.value==''){
             alert("enter a value")
    }else{
        li=document.createElement('li');
   
        li.innerHTML=`${input.value}`;
        li.className="abc";
        li.style.textAlign="center"
        li.style.marginTop="20px"
        li.style.borderRadius="10px"
        li.style.backgroundColor="red"
        document.querySelector(".field").appendChild(li);
        input.value=''
    }
    
    }


button.addEventListener("click",Add);
