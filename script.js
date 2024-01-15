let input=document.querySelector(".in")
let add=document.querySelector(".add");


let arrow=()=>{
    let p=document.createElement("p");

    console.log("arrow work");
    console.log(input.value);
     p.innerHTML=`<p>${input.value}</p>`;
     p.style.border = "2px solid red";
     p.style.textAlign="center"
     document.querySelector('.parent').appendChild(p)

}

add.addEventListener("click",arrow);