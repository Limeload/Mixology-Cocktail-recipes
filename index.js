document.addEventListener('DOMContentLoaded', () => {
    fetchDrinks();
})
// GET request
function fetchDrinks() {
    const url = "http://localhost:3000/drinks"
    fetch(url)
    .then((response => response.json()))
    .then(drinks => {
        displayDrinks(drinks);
        numberOfDrinks = drinks.length,
        drinksArray = [...drinks];
       })
    }

// Displaying drinks into a card
let cocktailList = document.querySelector(".cocktail-list");
const displayDrinks = (drinks) => {
     drinks.forEach((drink) => {

    const {strDrink, strDrinkThumb, instructions, glass } = drink;

    const image = document.createElement('img')
    image.setAttribute('class', 'card-img-top');
    image.src = strDrinkThumb;
    image.alt = strDrink;
    cocktailList.appendChild(image);

    const p1 = document.createElement("p");
    p1.textContent = strDrink;
    p1.className = "card-text";
    cocktailList.appendChild(p1);

    const h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = glass
    cocktailList.appendChild(h5);

    const p2 = document.createElement("p");
    let allIngredients = [
        `${drink.ingredients[0].ingredientName} - ${drink.ingredients[0].measurement} ${drink.ingredients[0].units}`,
        ` ${drink.ingredients[1].ingredientName} - ${drink.ingredients[1].measurement} ${drink.ingredients[1].units}`,
        ` ${drink.ingredients[2].ingredientName} - ${drink.ingredients[2].measurement} ${drink.ingredients[2].units}`,
    ]
    p2.textContent = "Ingredients : " + allIngredients;
    p2.setAttribute('id', "ingredient-list");
    cocktailList.appendChild(p2);

    const p3 = document.createElement("p");
    p3.textContent = "Instructions : " + instructions
    cocktailList.appendChild(p3);
    
})
}

//Search by field
const search = document.querySelector('#search-bar');
search.addEventListener("keyup", (e) => {
const input = e.target.value;
console.log(input)
cocktailList.textContent = "";
console.log(drinksArray)
let filterDrinks = drinksArray.filter(drink => {
    return drink.strDrink.toLowerCase().includes(input.toLowerCase())
})
displayDrinks(filterDrinks);
})

//Toggle dark-mode
const toggleBtn = document.querySelector("#togglebtn")
toggleBtn.addEventListener('click', () => {
document.body.classList.toggle('dark-mode')
})

// Random drinks generator
function randomDrinks() {
    let randomIndex = Math.floor(Math.random() * numberOfDrinks);
    let item = drinksArray[randomIndex];
    cocktailList.textContent = "" ;
    displayDrinks([item]);
}
const randomDrinkbtn = document.querySelector("#random-drink");
randomDrinkbtn.addEventListener("click", randomDrinks);


//Show all drinks
const showAllDrinks = document.getElementById("show-all");
showAllDrinks.addEventListener("mouseover", () => {
cocktailList.textContent = "";
drinksArray.map((drink) => displayDrinks([drink]))
});

