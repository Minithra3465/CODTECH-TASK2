const recipeForm = document.getElementById('recipeForm');
const recipeNameInput = document.getElementById('recipeNameInput');
const recipeIngredientsInput = document.getElementById('recipeIngredientsInput');
const recipeInstructionsInput = document.getElementById('recipeInstructionsInput');
const recipeList = document.getElementById('recipeList');

let recipes = [];

recipeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const recipe = {
        name: recipeNameInput.value,
        ingredients: recipeIngredientsInput.value,
        instructions: recipeInstructionsInput.value
    };

    recipes.push(recipe);
    displayRecipes();
    recipeForm.reset();
});

function displayRecipes() {
    recipeList.innerHTML = '';
    recipes.forEach((recipe, index) => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = `
            <h2>${recipe.name}</h2>
            <h3>Ingredients:</h3>
            <p>${recipe.ingredients}</p>
            <h3>Instructions:</h3>
            <p>${recipe.instructions}</p>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeList.appendChild(recipeElement);
    });
}

function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes();
}
