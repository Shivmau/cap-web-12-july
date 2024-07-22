
let container=document.getElementById("container")



async function getData(){
    let res = await fetch(`http://localhost:3000/products`)
    let data = await res.json();
    console.log(data)
    displayData(data)
}

getData();


function displayData(arr){
    container.innerHTML=""
    arr.forEach((ele)=>{

        let box=document.createElement("div");

        let image=document.createElement("img");
        image.src=ele.image

        let title=document.createElement("h2");
        title.textContent=ele.title;

        let price=document.createElement("p");
        price.textContent=ele.price;

        let editBtn=document.createElement("button")
        editBtn.textContent="Edit";
        editBtn.addEventListener("click",function(){
            localStorage.setItem("product",JSON.stringify(ele))
            window.location.href="edit.html";
        })

        let deleteBtn=document.createElement("button");
        deleteBtn.textContent="Delete"
        deleteBtn.addEventListener("click",async function(){
           let res=await fetch(`http://localhost:3000/products/${ele.id}`,{
            method:"DELETE",
           
           })
           let data=await res.json()
           getData()
        })

        box.append(image,title,price,editBtn,deleteBtn)
        container.append(box)
    })
}