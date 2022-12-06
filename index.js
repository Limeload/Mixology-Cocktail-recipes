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

let cocktailList = document.querySelector("#cocktail-list");
let randomD = document.querySelector("#random-drink");
function displayDrinks(drinks) {
    console.log(drinks)
//cocktailList.innerHTML += card;
//randomD.addEventListener("click", randomDrinks(drinks));
 drinks.forEach(drink=> {
    //console.log(drink)
    const image = document.createElement('img')
    image.src = drink.strDrinkThumb
    let card = document.querySelector('.card-img-top');
    card.appendChild(image)
    console.log(image)
 });
//  console.log(randomD)
}

// Search by

function randomDrinks (drinks) {
    const randomIndex = Math.floor(Math.random()*drinks.length);
    console.log(randomIndex)
    let randomCocktail = drinks[randomIndex];
    cocktailList.innerHTML = '';
    displayDrinks ([randomCocktail]);
}



const toggleBtn = document.querySelector("#togglebtn")
toggleBtn.addEventListener('click', () => {
document.body.classList.toggle('dark-mode')
})