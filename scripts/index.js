// parent layout
const mealsLayout = document.getElementById('meals-layout');





// search button clicked
const setAPI = (event, text) => {
    event.preventDefault();
    mealsLayout.innerHTML = ``;

    if (text.length === 0) {
        mealsLayout.innerHTML = `
            <div class="no-meals">
                <img src="./assets/empty.png" class="w-25" alt="">
                <h2>No Meals Found</h2>
            </div>
        `;

        return;
    }


    apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;
    loadData(apiURL);
}



// mainDB
let collection = [];


// fetch
const loadData = async (apiURL) => {
    collection = await fetch(apiURL)
        .then(res => res.json())
        .then(data => data.meals || []);



    mealsLayout.innerHTML = ``;

    if (collection.length === 0) {
        mealsLayout.innerHTML = `
            <div class="no-meals">
                <img src="./assets/empty.png" class="w-25" alt="">
                <h2>No Meals Found</h2>
            </div>
        `;

        return;
    }


    collection.forEach(meal => {

        //child card
        const singleMealCard = document.createElement('div');
        singleMealCard.className = 'col-md-4';

        singleMealCard.innerHTML = `
            <div class="card h-100">
                <img id="thumbnail" src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                <div class="card-body d-flex flex-column justify-content-between">
                    <div class="mb-4">
                        <h5 class="card-title text-start">${meal.strMeal}</h5>
                        <p class="text-start text-black-50">${meal.strCategory}</p>
                        <p class="card-text text-start">${meal.strInstructions.slice(0, 15)}...</p>
                    </div>

        

                    <div class="d-flex justify-content-between">
                        <button onclick="showMealDetails('${meal.idMeal}')" class="btn btn-outline-info w-100">Details</button>
                    </div>
                </div>
            </div>
        `;

        mealsLayout.appendChild(singleMealCard);
    });

}

