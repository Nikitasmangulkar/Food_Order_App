var form = document.getElementById("foodItemForm");
if(form){
    form.addEventListener("submit", function(event){
        
        Event.preventDefault();
        console.log("form submitted");

        var name = document.getElementById("name").value;
        var description = document.getElementById("description").value;
        var inStock = document.getElementById("inStock").check ? "yes" : "no";
        var isVeg = document.getElementById("isVeg").check ? "yes" : "no";
        var category = document.getElementById("category").value;
        var cuisine = document.getElementById("cuisine").value;
        var foodImage = document.getElementById("foodImage").value;
    
        console.log(category);
        if(category === ""){
            alert(" Please select a valid category");
            return;
        }
        var newFoodItem ={
            name,
            description,
            inStock,
            isVeg,
            category,
            cuisine,
            foodImage
        }
        //alert("New  foodItem Added - " + fname);
        console.log(newFoodItem);
        form.reset();

        var queryString = new URLSearchParams(newFoodItem).toString();
        window.location.href = "./list_fooditems.html?" + queryString;

    });
}