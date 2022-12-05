document.addEventListener('DOMContentLoaded', () => { 
    fetchDrinks();
})

// GET request
function fetchDrinks() {
    const url = "http://localhost:3000/drinks"
    fetch(url)
    .then((response => response.json()))
    .then(drinks =>  {
        console.log(drinks)

    })
}