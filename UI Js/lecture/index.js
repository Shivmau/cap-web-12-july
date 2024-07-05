let container=document.getElementById("container1");




container.addEventListener("scroll", function(){
    let clientHeight=container.clientHeight;
    let scrollHeight=container.scrollHeight;
    let scrolltop=container.scrollTop;

    console.log(clientHeight,scrollHeight,scrolltop)
    

    if(Math.ceil(scrollHeight-clientHeight) <= Math.ceil(scrolltop)){

        console.log("reach the bottom and fetch the data")
    }
});
    
    