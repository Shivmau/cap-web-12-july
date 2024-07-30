
// let navbardiv=document.getElementById("input")



// let inputbox=document.getElementById("input1")
// inputbox.addEventListener("input", function(){
//     debouncing(fetchdata,1000)
// })
// let id;

// function debouncing(func,delay){

// if(id){
//     clearTimeout(id)
// }

// id=setTimeout(()=>{
//        func()
//     },delay)
// }

// async function fetchdata(){
//     console.log("fetching the data....")
//     try {
//         let inputVal=inputbox.value;
//         let res=await fetchdata(``);
//         let data=await res.json();
//         console.log(data)
//         displaydata(data)

//     } catch (error) {
//         console.log(error)
//     }
// }

// let container=document.getElementById("container")
// function displaydata(data){
//     container.innerHTML=""
//     data.forEach((ele)=>{

//         let title=document.createElement("p")
//         title.textContent=ele.title;

//         title.addEventListener("click", function(){
//              displayCard(ele)
//         })

//         container.append(title)
//     })
// }

// function displayCard(ele){
//     let card=document.createElement("div")

//     let image=document.createElement("img")
//     image.src=ele.image;

//     let title=document.createElement("p")
//     title.textContent=ele.title
// }
function outer() {
    let x = 10;
    return function inner() {
    console.log(x);
    };
    }
    let closure1 = outer();
    closure1()
    