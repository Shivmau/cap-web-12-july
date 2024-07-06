import navbar from "../Components/navbar.js";

let header = document.getElementById("navbar");
header.innerHTML = navbar();

let button = document.getElementById("btn");

button.addEventListener("click", function () {
  let input1 = document.getElementById("search").value;
  getData(input1)
});

let url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;

async function getData(query) {
  try {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    let data = await res.json();
    console.log(data.meals);
    displayMeals(data.meals);
  } catch (error) {

  }
}
getData();


// let div=document.createElement("div")
// container.append(div)
let container = document.getElementById("container");

function displayMeals(arr) {
    container.innerHTML="";
  
        arr.forEach((ele) => {


            let box=document.createElement("div")
        
            let title=document.createElement("h2")
            title.textContent=ele.strMeal;
        
            let image=document.createElement("img")
            image.src=ele.strMealThumb;
        
            let desc=document.createElement("h3")
            desc.textContent=ele.strInstructions;
        
            box.append(title,image,desc)
            container.append(box)
          });
    

    
  
}
