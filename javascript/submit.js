

// Wait for the DOM to fully load
window.onload = function () {
    const recipeForm = document.getElementById('recipeForm');
    const recipeContainer = document.getElementById('recipeContainer');
    const recipeModal = document.getElementById('recipeModal');
    const modalRecipeTitle = document.getElementById('modalRecipeTitle');
    const modalRecipeImage = document.getElementById('modalRecipeImage');
    const modalIngredients = document.getElementById('modalIngredients');
    const modalInstructions = document.getElementById('modalInstructions');

    recipeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const recipeName = document.getElementById('recipeName').value.trim();
        const category = document.getElementById('category').value;
        const description = document.getElementById('description').value.trim(); 
        const ingredients = document.getElementById('ingredients').value.trim();
        const preparation = document.getElementById('preparation').value.trim();
        const imageFile = document.getElementById('imageFile').files[0];
        const imageUrl = document.getElementById('imageUrl').value.trim();

        // Validate form fields
        if (!recipeName || !category || !ingredients || !preparation || !description) {
            alert('Please fill in all required fields.');
            return;
        }

        // Validate image input
        let imageSrc = '';
        if (imageFile) {
            imageSrc = URL.createObjectURL(imageFile);
        } else if (imageUrl) {
            imageSrc = imageUrl;
        } else {
            alert('Please provide an image file or an image URL.');
            return;
        }

        // Create a new recipe card
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="${imageSrc}" alt="${recipeName}">
            <h3>${recipeName}</h3>
            <p><strong></strong> ${description}</p> <!-- Display description below recipe name -->
            <button onclick="viewRecipe('${recipeName}', '${imageSrc}', '${ingredients.replace(/\n/g, '\\n')}', '${preparation.replace(/\n/g, '\\n')}', '${description.replace(/\n/g, '\\n')}')">View Recipe</button>
        `;

        // Append the new recipe card to the container
        recipeContainer.appendChild(recipeCard);

        // Clear the form
        recipeForm.reset();
        URL.revokeObjectURL(imageSrc); // Clean up if an image file was used

        alert('Recipe submitted successfully!');
    });

    // Function to view the full recipe in the modal
    window.viewRecipe = function (recipeName, imageSrc, ingredients, preparation, description) {
        modalRecipeTitle.innerHTML = recipeName;
        modalRecipeImage.src = imageSrc;
        modalIngredients.innerHTML = ingredients.replace(/\n/g, '<br>');
        modalInstructions.innerHTML = preparation.replace(/\n/g, '<br>');
        
        // Open the modal
        recipeModal.style.display = 'block';
    };
};

document.addEventListener('DOMContentLoaded', function () {
    const closeModalButton = document.querySelector('.close-modal');
    if (closeModalButton) {
        closeModalButton.addEventListener('click', function () {
            recipeModal.style.display = 'none';
        });
    }
});
