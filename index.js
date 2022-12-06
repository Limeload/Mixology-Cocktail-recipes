document.addEventListener('DOMContentLoaded', () => { 
    fetchDrinks();
})


// GET request
function fetchDrinks() {
    const url = "http://localhost:3000/drinks"
    fetch(url)
    .then((response => response.json()))
    .then(drinks =>  {
        displayDrinks(drinks)

    })
}

let cocktailList = document.querySelector(".cocktail-list");

function displayDrinks(drinks) {
  drinks.forEach(drink=> {

    const p = document.createElement("p");
    p.textContent = `${drink.strDrink}`;
    p.className = "card-text";
    cocktailList.appendChild(p);

    const glass = document.createElement("p");
    glass.className = "card-title";
    glass.innerHTML = `${drink.glass}`
    cocktailList.appendChild(glass);

    const image = document.createElement('img')
    image.setAttribute('class', 'card-img-top');
    image.setAttribute('style', 'width: 18rem;');
    image.src = drink.strDrinkThumb;
    image.alt = drink.strDrink;
    cocktailList.appendChild(image);
 });
}

// Search by
let randomD = document.querySelector("#random-drink");
function randomDrinks(drinks) {
   let item = drinks[Math.floor((Math.random() * drinks.length))];
   displayDrinks([item]);
}

randomD.addEventListener("click", randomDrinks);

function randomDrinks (drinks) {
    const randomIndex = Math.floor(Math.random()*drinks.length);
    console.log(randomIndex)
    let randomCocktail = drinks[randomIndex];
    cocktailList.innerHTML = '';
    displayDrinks ([randomCocktail]);
}



