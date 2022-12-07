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
    const p = document.createElement("p");
    p.textContent = drink.strDrink;
    p.className = "card-text";
    cocktailList.appendChild(p);
    const glass = document.createElement("p");
    glass.className = "card-title";
    glass.textContent = drink.glass
    cocktailList.appendChild(glass);
    const image = document.createElement('img')
    image.setAttribute('class', 'card-img-top');
    image.setAttribute('style', 'width: 18rem;');
    image.src = drink.strDrinkThumb;
    image.alt = drink.strDrink;
    cocktailList.appendChild(image);
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


// Show all drinks
const showAllDrinks = document.getElementById("show-all");
showAllDrinks.addEventListener("mouseover", () => {
cocktailList.textContent = "";
drinksArray.map((drink) => displayDrinks([drink]))
});

