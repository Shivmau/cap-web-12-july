let container=document.getElementById("container")
let page=1;

let flag=false;


const geData = async (api)=>{

   let res=await fetch(`${api}`)
   let data=await res.json();

   console.log(data)
    displayData(data)
}

geData(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)

const displayData = (data) => {
    // container.innerHTML=""
     data.forEach((ele)=>{
        let card= document.createElement("div")

        let image=document.createElement("img")
        image.src= ele.url;

        let title=document.createElement("h3")
        title.textContent=ele.title;

        card.append(image,title)
        container.append(card)
     })

     flag = true;
}

window.addEventListener("scroll", function(){
    let clientHeight=document.documentElement.clientHeight;
    let scrollHeight=document.documentElement.scrollHeight;
    let scrolltop=document.documentElement.scrollTop;

    console.dir(document) 
    console.log(clientHeight,scrollHeight,scrolltop)
    

    if(Math.ceil(scrollHeight-clientHeight) <= Math.ceil(scrolltop)){

        console.log("reach the bottom and fetch the data")
        page++;
        geData(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
       flag =false;
    }
});