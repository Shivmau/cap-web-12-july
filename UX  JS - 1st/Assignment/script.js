
let page=1;
let container=document.getElementById("gallery")

const getData = async(url)=>{

    let res=await fetch(url);
    let data=await res.json();

    console.log(data)
    displayData(data)

}

getData(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)


const displayData =(arr)=>{

    arr.forEach((ele)=>{
        let box=document.createElement("div")

        let img=document.createElement("img")
        img.src=ele.url;

        let title=document.createElement("h3");
        title.textContent=ele.title;

        box.append(img,title)
        container.append(box)
    })
}

window.addEventListener("scroll" , function(){
    
    let clientheight=document.documentElement.clientHeight;
    let scrollheight=document.documentElement.scrollHeight;
    let scrolltop=document.documentElement.scrollTop;

    console.log(clientheight,scrollheight,scrolltop)

    if(scrollheight-clientheight <= Math.ceil(scrolltop)){
        
        getData(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
        page++;
    }
})