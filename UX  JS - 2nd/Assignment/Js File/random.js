import navbar from "../Components/navbar.js";

let header = document.getElementById("navbar");
header.innerHTML = navbar();

async function getData() {
  for (let i = 0; i <= 5; i++) {
    try {
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      let data = await res.json();
      console.log(data);
      displayMeals(data.meals);
    } catch (error) {}
  }
}
getData();

let container = document.getElementById("container");

function displayMeals(arr) {
  arr.forEach((ele) => {
    let box = document.createElement("div");

    let title = document.createElement("h2");
    title.textContent = ele.strMeal;

    let image = document.createElement("img");
    image.src = ele.strMealThumb;

    let desc = document.createElement("h3");
    desc.textContent = ele.strInstructions;

    box.append(title, image, desc);
    container.append(box);
  });
}
