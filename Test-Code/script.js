document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const recipeOfTheDayContent = document.getElementById('recipe-of-the-day-content');
    const randomRecipesContent = document.getElementById('random-recipes-content');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.id.replace('nav-', '');
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === targetId) {
                    page.classList.add('active');
                }
            });
            if (targetId === 'recipe-of-the-day') {
                fetchRecipeOfTheDay();
            } else if (targetId === 'random-recipes') {
                fetchRandomRecipes();
            }
        });
    });

    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        if (query) {
            fetchSearchResults(query);
        }
    });

    function fetchSearchResults(query) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then(response => response.json())
            .then(data => {
                displaySearchResults(data.meals);
            });
    }

    function displaySearchResults(meals) {
        searchResults.innerHTML = '';
        if (meals) {
            meals.forEach(meal => {
                const mealCard = document.createElement('div');
                mealCard.classList.add('recipe-card');
                mealCard.innerHTML = `
                    <h2>${meal.strMeal}</h2>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100">
                    <p>${meal.strInstructions}</p>
                `;
                searchResults.appendChild(mealCard);
            });
        } else {
            searchResults.innerHTML = '<p>No results found.</p>';
        }
    }

    function fetchRecipeOfTheDay() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(data => {
                displayRecipeOfTheDay(data.meals[0]);
            });
    }

    function displayRecipeOfTheDay(meal) {
        recipeOfTheDayContent.innerHTML = `
            <div class="recipe-card">
                <h2>${meal.strMeal}</h2>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100">
                <p>${meal.strInstructions}</p>
            </div>
        `;
    }

    function fetchRandomRecipes() {
        randomRecipesContent.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            fetch('https://www.themealdb.com/api/json/v1/1/random.php')
                .then(response => response.json())
                .then(data => {
                    displayRandomRecipe(data.meals[0]);
                });
        }
    }

    function displayRandomRecipe(meal) {
        const mealCard = document.createElement('div');
        mealCard.classList.add('recipe-card');
        mealCard.innerHTML = `
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100">
            <p>${meal.strInstructions}</p>
        `;
        randomRecipesContent.appendChild(mealCard);
    }
});
