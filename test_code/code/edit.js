let obj =JSON.parse(localStorage.getItem("product"))

document.querySelector("form").addEventListener("submit",function(){
    formData()
})

async function formData(){
    event.preventDefault();
    
    let image=document.getElementById("input1").value
    let title=document.getElementById("input2").value
    let description=document.getElementById("input3").value
    let category=document.getElementById("input4").value
    let price=document.getElementById("input5").value
    let rating=document.getElementById("input6").value

    let obj={
        image,
        title,
        description,
        category,
        price,
        rating
    }


    let res=await fetch(`http://localhost:3000/products/${product.id}`,{
        method:"PATCH",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })

    let data=await res.json()
    window.location.href="index.html"


}


