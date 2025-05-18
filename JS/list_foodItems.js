var list_fooditems = [
    {
        name: "Veg Pizza",
        description: "Veggies include onion, tomato, capsicum etc",
        inStock: "Yes",
        isVeg: "Yes",
        category: "Pizza",
        cuisine: "Italian",
        foodImage: "https://www.themealdb.com//images//media//meals//x0lk931587671540.jpg"
    },
    {
        name: "Hot and Sour Soup",
        description: "Made with mushrooms, tofu, spring onions and chicken",
        inStock: "Yes",
        isVeg: "No",
        category: "Soup",
        cuisine: "Chinese",
        foodImage: "https://www.themealdb.com/images/media/meals/1529445893.jpg"
    },
    {
        name: "Lasagna Sandwich",
        description: "Bacon, sour cream, mozzarella cheese and white bread",
        inStock: "Yes",
        isVeg: "No",
        category: "Sandwich",
        cuisine: "Italian",
        foodImage: "https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg"
    },
    {
        name: "Chick-Fil-A-Sandwich",
        description: "Chicken pattice, Egg, Milk &amp; Burger bun",
        inStock: "Yes",
        isVeg: "No",
        category: "Sandwich",
        cuisine: "Asian",
        foodImage: "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg"
    },
    {
        name: "Grilled Mac and Cheese Sandwich",
        description: "Macaroni, Cheddar cheese, Jack cheese, Heavy cream &amp; white bread.",
        inStock: "Yes",
        isVeg: "Yes",
        category: "Sandwich",
        cuisine: "Asian",
        foodImage: "https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg"
    },
    {
        name: "Italian Pasta Salad",
        description: "Farfalle, olives, basil, cherry tomatoes, mozzarella cheese",
        inStock: "Yes",
        isVeg: "Yes",
        category: "Pasta",
        cuisine: "Italian",
        foodImage: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg"
    },
    {
        name: "Creamy Tomato Soup",
        description: "Onion, tomatoes, celery leaves, vegetable stock, tomato puree, milk",
        inStock: "Yes",
        isVeg: "Yes",
        category: "Soup",
        cuisine: "Asian",
        foodImage: "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg"
    }
]

// add all food items from the list_fooditems array into the table
function loadAllFoodItems(){
    for(var i = 0; i < list_fooditems.length; i++){
        var foodItem = list_fooditems[i];
        addfoodItem(foodItem, i+1);
    }
}

// add One fooditem into the table
function addfoodItem(foodItemObject, number){
    var foodItem= document.getElementById("foodItemsTable");
    var body = document.querySelector("tbody");
    let row = document.createElement("tr");

    row.innerHTML = 
    `<td> ${number}</td>
    <td> ${foodItemObject.name}</td>
    <td> ${foodItemObject.description}</td>
    <td> ${foodItemObject.inStock}</td>
    <td> ${foodItemObject.isVeg}</td>
    <td> ${foodItemObject.category}</td>
    <td> ${foodItemObject.cuisine}</td>
    `;
    row.innerHTML += foodItemObject.foodImage != "" ? 
    `<td>
        <img src="${foodItemObject.foodImage}" alt = "" width ="120 px" height= "120 px"  class = "mx-auto d-block"> </img>
    </td>`  : 
    `<td>"NO Image"</td>`;
    row.innerHTML += `<td> <a href=""> <button class ="table-btn">Edit</button></a></tb>`;

    body.appendChild(row);
    foodItem.appendChild(body);
    console.log("FoodItem Added");
}
function addNewFoodItem(){
    var params= new URLSearchParams(window.location.search);
    if(params.size > 0){
        var foodItem=Object.fromEntries(params.entries());
        list_fooditems.push(foodItem);
        addfoodItem(foodItem,list_fooditems.length);
    }
    
}
// Fetch the food item from the URL and add it to the list_fooditems array and the table
loadAllFoodItems();
addNewFoodItem();



