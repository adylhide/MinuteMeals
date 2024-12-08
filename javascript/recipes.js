// recipes.js

// Sample Recipe Data
const recipes = [
    // Breakfast
    {
        title: "Egg Bhurji",
        image: "assets/images/BF/egg-bhurji.jpg",
        ingredients: [
            "4 eggs",
            "1 onion, chopped",
            "1 tomato, chopped",
            "1 green chili, chopped (optional)",
            "1/4 cup green peas (optional)",
            "1/2 teaspoon turmeric powder",
            "1/2 teaspoon red chili powder (adjust to taste)",
            "Salt and pepper to taste",
            "2 tbsp olive oil or butter",
            "Fresh cilantro for garnish"
        ],
        instructions: "To make Egg Bhurji, start by heating 2 tablespoons of oil or butter in a pan over medium heat. Once the oil is hot, add 1 chopped onion and sauté until it turns golden brown. Next, add 1 chopped tomato, 1 chopped green chili (if using), 1/2 teaspoon of turmeric powder, 1/2 teaspoon of red chili powder, and salt to taste. Cook this mixture until the tomatoes soften. If you’d like to include green peas, add 1/4 cup of them at this stage and cook for a couple of minutes. In a separate bowl, beat 4 eggs, then pour them into the pan. Stir continuously to scramble the eggs until they are fully cooked. Once done, remove the pan from heat and garnish the dish with fresh cilantro. Serve your delicious Egg Bhurji with bread, toast, or parathas for a satisfying meal!"
    },
    {
        title: "Egg Toast",
        image: "assets/images/BF/egg-toast.jpg",
        ingredients: [
            "2 eggs",
            "2 slices of bread (any type you prefer)",
            "Butter or oil (for cooking)",
            "Salt and pepper to taste",
            "Optional: herbs (like parsley or chives), cheese, or hot sauce for garnish"
        ],
        instructions: "To make Egg Toast, start by cracking 2 eggs into a bowl and whisking them with a pinch of salt and pepper. Heat a non-stick skillet over medium heat and add a little butter or oil. Once hot, take 2 slices of bread and make a small hole in the center of each slice (you can use a glass or cookie cutter for this). Place the slices in the skillet and crack an egg into the hole of each slice of bread. Cook for about 2-3 minutes until the egg whites are set, then carefully flip the toast and cook for another 1-2 minutes to cook the other side and the yolk to your desired doneness. Once done, remove from the skillet and serve hot, garnished with fresh herbs or cheese if you like. Enjoy your Egg Toast as a quick and tasty breakfast!"
    },
    {
        title: "Shrimp Fried Rice",
        image: "assets/BF/shrimp.jpg",
        ingredients: [
            "200g shrimp, peeled and deveined",
            "2 cups cooked rice (preferably day-old)",
            "2 tbsp vegetable oil",
            "2 cloves garlic, minced",
            "1 small onion, diced",
            "1/2 cup frozen peas and carrots",
            "2 eggs, lightly beaten",
            "3 tbsp soy sauce",
            "1 tbsp oyster sauce",
            "1/2 tsp sesame oil",
            "2 green onions, chopped",
            "Salt and pepper to taste"
        ],
        instructions: "1. Heat 1 tablespoon of vegetable oil in a large pan or wok over medium heat. Add the shrimp and cook until pink, about 2-3 minutes per side. Remove shrimp and set aside.\n2. In the same pan, add the remaining oil. Sauté garlic and onion until softened, about 2 minutes.\n3. Add the frozen peas and carrots and cook for another 2-3 minutes.\n4. Push the vegetables to the side of the pan and pour in the beaten eggs. Scramble until fully cooked.\n5. Add the rice to the pan, breaking it up with a spatula. Stir-fry for 3-4 minutes, allowing the rice to heat through and get slightly crispy.\n6. Add the soy sauce, oyster sauce, and sesame oil. Stir to coat the rice evenly.\n7. Return the cooked shrimp to the pan and mix well.\n8. Season with salt and pepper to taste and garnish with chopped green onions.\n9. Serve hot!"
    },
    {
        title: "Vegetable Stir Fry",
        image: "assets/images/recipe3.jpg",
        ingredients: [
            "1 broccoli head, cut into florets",
            "2 carrots, sliced",
            "1 bell pepper, sliced",
            "100g snow peas",
            "2 tbsp soy sauce",
            "1 tbsp sesame oil",
            "2 cloves garlic, minced",
            "1 tsp grated ginger",
            "1 tbsp cornstarch mixed with 2 tbsp water",
            "Salt and pepper to taste"
        ],
        instructions: "1. In a wok or large pan, heat sesame oil over high heat. Add garlic and ginger; sauté for 30 seconds.\n2. Add broccoli, carrots, and bell pepper; stir-fry for 5 minutes.\n3. Add snow peas and continue to stir-fry for another 2 minutes.\n4. Pour in soy sauce and stir to coat vegetables.\n5. Add the cornstarch mixture to thicken the sauce.\n6. Season with salt and pepper.\n7. Serve hot over steamed rice."
    },
    // Lunch
    {
        title: "Crispy Chicken Fillet",
        image: "assets/images/LCH/ChkFillet.jpg",
        ingredients: [
            "2 boneless chicken breasts",
            "1 cup buttermilk",
            "1 cup all-purpose flour",
            "1 tsp garlic powder",
            "1 tsp paprika",
            "Salt and pepper to taste",
            "Oil for frying"
        ],
        instructions: "1. Marinate chicken breasts in buttermilk for at least 1 hour.\n2. In a bowl, mix flour, garlic powder, paprika, salt, and pepper.\n3. Heat oil in a skillet over medium-high heat.\n4. Dredge marinated chicken in the flour mixture, shaking off excess.\n5. Fry chicken for 5-7 minutes on each side until golden brown and cooked through.\n6. Drain on paper towels and serve hot."
    }, 
    {
        title: "HoneyChicken",
        image: "assets/images/LCH/HoneyChicken.jpg",
        ingredients: [
            "2 chicken breasts, cubed",
            "1/2 cup honey",
            "1/4 cup soy sauce",
            "2 tbsp cornstarch",
            "2 tbsp olive oil",
            "1 tsp garlic, minced",
            "1/2 tsp ginger, minced",
            "Salt and pepper to taste"
        ],
        instructions: "1. In a bowl, mix honey, soy sauce, cornstarch, garlic, ginger, salt, and pepper.\n2. Heat olive oil in a skillet over medium heat.\n3. Add chicken and cook until browned.\n4. Pour honey mixture over chicken and stir until coated.\n5. Cook for an additional 5 minutes until sauce thickens. Serve hot."
    },
    {
        title: "Aglio e Olio",
        image: "assets/images/LCH/Aglio.jpg",
        ingredients: [
            "400g spaghetti",
            "6 cloves garlic, sliced",
            "1/2 cup olive oil",
            "1 tsp red pepper flakes",
            "Salt to taste",
            "Fresh parsley, chopped",
            "Grated Parmesan cheese (optional)"
        ],
        instructions: "1. Cook spaghetti according to package instructions. Drain.\n2. In a large pan, heat olive oil over medium heat. Add garlic and red pepper flakes; sauté until garlic is golden.\n3. Add cooked spaghetti to the pan and toss to coat.\n4. Season with salt and garnish with parsley and Parmesan cheese if desired. Serve immediately."
    },
    {
        title: "Corn-Chip Salad",
        image: "assets/images/LCH/Corn-Chip-Salad.jpg",
        ingredients: [
            "1 bag corn chips",
            "1 can black beans, rinsed and drained",
            "1 cup corn, cooked",
            "1 red bell pepper, diced",
            "1 avocado, diced",
            "1/2 cup shredded cheese",
            "1/4 cup cilantro, chopped",
            "1/2 cup ranch dressing"
        ],
        instructions: "1. In a large bowl, combine black beans, corn, bell pepper, avocado, cheese, and cilantro.\n2. Add corn chips and drizzle with ranch dressing.\n3. Toss gently to combine and serve immediately."
    }, 
    // Dinner 
    {
        title: "Butternut Squash",
        image: "assets/images/DNR/Butternut-Squash.jpg",
        ingredients: [
            "1 medium butternut squash, peeled and cubed",
            "2 tbsp olive oil",
            "1 tsp salt",
            "1/2 tsp black pepper",
            "1/2 tsp cinnamon",
            "1 tbsp maple syrup (optional)"
        ],
        instructions: "1. Preheat oven to 400°F (200°C).\n2. Toss cubed butternut squash with olive oil, salt, pepper, cinnamon, and maple syrup.\n3. Spread on a baking sheet and roast for 25-30 minutes until tender. Serve warm."
    },
    {
        title: "Lemon Chicken",
        image: "assets/images/DNR/Lemon-Chicken.jpg",
        ingredients: [
            "4 chicken thighs, skinless",
            "Juice of 2 lemons",
            "2 tbsp olive oil",
            "2 garlic cloves, minced",
            "1 tsp dried oregano",
            "Salt and pepper to taste"
        ],
        instructions: "1. In a bowl, combine lemon juice, olive oil, garlic, oregano, salt, and pepper.\n2. Marinate chicken thighs in the mixture for at least 30 minutes.\n3. Preheat a skillet over medium heat and cook chicken for 6-7 minutes on each side until cooked through. Serve hot."
    },
    {
        title: "Hungarian Mushroom Soup",
        image: "assets/images/DNR/mushroom-soup.jpg",
        ingredients: [
            "1 onion, chopped",
            "2 cups mushrooms, sliced",
            "2 tbsp butter",
            "1 tbsp paprika",
            "4 cups vegetable broth",
            "1 cup milk",
            "2 tbsp flour",
            "Salt and pepper to taste",
            "Chopped parsley for garnish"
        ],
        instructions: "1. In a pot, melt butter over medium heat. Add onion and mushrooms; sauté until soft.\n2. Stir in paprika and cook for 1 minute.\n3. Add vegetable broth and bring to a boil. Reduce heat and simmer for 15 minutes.\n4. In a separate bowl, mix flour and milk, then stir into the soup. Cook until thickened. Season with salt and pepper. Garnish with parsley before serving."
    }, 
    {
        title: "Sesame Garlic Ramen Noodles",
        image: "assets/images/DNR/Sesame-Garlic-Noodles.jpg",
        ingredients: [
            "2 packs instant ramen noodles",
            "2 tbsp sesame oil",
            "4 cloves garlic, minced",
            "2 tbsp soy sauce",
            "1 tbsp sesame seeds",
            "1/2 cup green onions, chopped"
        ],
        instructions: "1. Cook ramen noodles according to package instructions. Drain and set aside.\n2. In a pan, heat sesame oil over medium heat. Add garlic and sauté until fragrant.\n3. Add cooked noodles, soy sauce, and sesame seeds. Toss to coat.\n4. Garnish with green onions and serve hot."
    },
    // Dessert
    {
        title: "Creme Brulee",
        image: "assets/images/DST/creme.jpg",
        ingredients: [
            "2 cups heavy cream",
            "1 vanilla bean or 1 tsp vanilla extract",
            "5 egg yolks",
            "1/2 cup sugar",
            "2 tbsp sugar (for topping)"
        ],
        instructions: "1. Preheat oven to 325°F (160°C).\n2. In a saucepan, heat cream and vanilla until just simmering. Remove from heat.\n3. In a bowl, whisk egg yolks and sugar until pale. Gradually whisk in cream.\n4. Pour mixture into ramekins and place in a baking dish. Fill with hot water halfway up the sides.\n5. Bake for 30-35 minutes until set. Cool, then sprinkle with sugar and torch until caramelized."
    },
    {
        title: "Cinnamon-Oat Bars",
        image: "assets/images/DST/Cinnamon-Oat.jpg",
        ingredients: [
            "2 cups rolled oats",
            "1/2 cup honey or maple syrup",
            "1/2 cup nut butter",
            "1 tsp cinnamon",
            "1/4 cup raisins or chocolate chips (optional)",
            "1/4 tsp salt"
        ],
        instructions: "1. Preheat oven to 350°F (175°C) and line a baking dish with parchment paper.\n2. In a bowl, mix oats, honey, nut butter, cinnamon, raisins, and salt until combined.\n3. Press mixture into the prepared dish and bake for 15-20 minutes.\n4. Allow to cool, then cut into bars."
    },
    {
        title: "Coconut Macaroons",
        image: "assets/images/DST/coconut-macaroons.jpg",
        ingredients: [
            "2 2/3 cups shredded coconut",
            "2/3 cup sweetened condensed milk",
            "1 tsp vanilla extract",
            "2 egg whites",
            "1/4 tsp salt"
        ],
        instructions: "1. Preheat oven to 325°F (160°C) and line a baking sheet with parchment paper.\n2. In a bowl, mix coconut, condensed milk, and vanilla.\n3. In a separate bowl, whisk egg whites with salt until stiff peaks form, then fold into the coconut mixture.\n4. Drop spoonfuls of the mixture onto the baking sheet.\n5. Bake for 20-25 minutes until golden. Cool before serving."
    },
    {
        title: "Tiramisu Cake",
        image: "assets/images/DST/Tiramisu.jpg",
        ingredients: [
            "1 cup brewed espresso, cooled",
            "1/2 cup coffee liqueur (optional)",
            "3 large egg yolks",
            "1/2 cup granulated sugar",
            "1 cup mascarpone cheese",
            "1 cup heavy cream",
            "1 tsp vanilla extract",
            "24 ladyfinger cookies",
            "Unsweetened cocoa powder for dusting",
            "Dark chocolate shavings for garnish (optional)"
        ],
        instructions: "1. In a bowl, mix cooled espresso and coffee liqueur. Set aside. " +
                       "2. In another bowl, whisk egg yolks and sugar until pale and creamy. " +
                       "3. Add mascarpone cheese and vanilla extract; mix until smooth. " +
                       "4. In a separate bowl, whip heavy cream until stiff peaks form. Fold into mascarpone mixture. " +
                       "5. Quickly dip each ladyfinger into the coffee mixture, then layer them in a serving dish. " +
                       "6. Spread half of the mascarpone mixture over the ladyfingers. Repeat with another layer of dipped ladyfingers and the remaining mascarpone mixture. " +
                       "7. Cover and refrigerate for at least 4 hours or overnight. " +
                       "8. Before serving, dust with cocoa powder and garnish with chocolate shavings if desired."
    }
];


// View Recipe Details in Modal
function viewRecipe(title) {
    const recipe = recipes.find(r => r.title === title);
    if (!recipe) return;

    // Populate Modal Content
    const modalTitle = document.getElementById('modalRecipeTitle');
    const modalImage = document.getElementById('modalRecipeImage');
    const ingredientsList = document.getElementById('modalIngredients');
    const modalInstructions = document.getElementById('modalInstructions');

    if (modalTitle && modalImage && ingredientsList && modalInstructions) {
        modalTitle.textContent = recipe.title;
        modalImage.src = recipe.image;
        modalImage.alt = recipe.title;
        ingredientsList.innerHTML = '';

        recipe.ingredients.forEach(ing => {
            const li = document.createElement('li');
            li.textContent = ing;
            ingredientsList.appendChild(li);
        });

        modalInstructions.textContent = recipe.instructions;

        // Display Modal
        const modal = document.getElementById('recipeModal');
        if (modal) {
            modal.style.display = 'block';
            modal.setAttribute('aria-hidden', 'false');
        }
    }
}

// Close Recipe Modal
function closeRecipeModal() {
    const modal = document.getElementById('recipeModal');
    if (modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    }
}

// Close modal when clicking outside of modal content
window.onclick = function(event) {
    const modal = document.getElementById('recipeModal');
    if (modal && event.target == modal) {
        closeRecipeModal();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultsContainer = document.getElementById('resultsContainer');

    const items = [
        'Egg Bhurji',
        'Egg Toast',
        'Shrimp Fried Rice',
        'Vegetable Stir Fry',
        'Crispy Chicken Fillet',
        'Honey Chicken',
        'Aglio e Olio',
        'Corn-Chip Salad',
        'Butternut Squash',
        'Lemon Chicken',
        'Hungarian Mushroom Soup',
        'Sesame Garlic Ramen Noodles',
        'Creme Brulee',
        'Cinnamon-Oat Bars',
        'Coconut Macaroons',
        'Tiramisu Cake'
    ];

    function searchItems(query) {
        // Clear previous results
        resultsContainer.innerHTML = '';

        const filteredItems = items.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredItems.length === 0) {
            resultsContainer.innerHTML = '<p>No results found.</p>';
            return;
        }

        filteredItems.forEach(item => {
            const highlightedItem = item.replace(
                new RegExp(query, 'gi'),
                match => `<mark>${match}</mark>`
            );
            
            const div = document.createElement('div');
            div.classList.add('result-item');
            div.innerHTML = highlightedItem;

            // Add a click event to open the recipe in a modal
            div.addEventListener('click', function () {
                openRecipeModal(item);
            });

            resultsContainer.appendChild(div);
        });
    }

    function openRecipeModal(recipeTitle) {
        // Here, open the modal and display the recipe content
        alert('Opening modal for: ' + recipeTitle);
        // You can replace the above alert with code to display the actual modal and recipe content.
    }

    searchButton.addEventListener('click', function () {
        const query = searchInput.value.trim();
        searchItems(query);
    });

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.trim();
        searchItems(query);
    });
});
