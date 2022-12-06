document.addEventListener('DOMContentLoaded', () => { 
    fetchDrinks();
})


// GET request
function fetchDrinks() {
    const url = "http://localhost:3000/drinks"
    fetch(url)
    .then((response => response.json()))
    .then(drinks => displayDrinks(drinks))
}

const cocktailList = document.querySelector(".cocktail-list");

function displayDrinks(drinks) {
    drinks.forEach(drink=> {
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

    numberOfDrinks = drinks.length;
    drinksArray = [...drinks];
 });
}


function randomDrinks() {
    let randomIndex = Math.floor(Math.random() * numberOfDrinks);
    let item = drinksArray[randomIndex];
    cocktailList.textContent = "" ;
    displayDrinks([item]);
}

const randomDrinkbtn = document.querySelector("#random-drink");
randomDrinkbtn.addEventListener("click", randomDrinks);




