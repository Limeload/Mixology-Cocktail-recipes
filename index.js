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

function displayDrinks (drinks) {
 const card = drinks.map(drinks => {
   return `
   <div class="container-card">
   <div id="card" style="width:18rem";>
   <img src = "${drinks.strDrinkThumb}" class="card-img-top" alt="${drinks.strDrink}">
   <div id="card-body">
   </div>
   </div>
   </div>
   `
   .join('');
 })
 cocktailList.innerHTML += card;
}


// Search my name - by Waltz
// random cocktail - by amy
// toggle darkmode - by waltz
// explore all button- by amy