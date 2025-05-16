var foodItemForm = document.getElementById("foodItemForm");
if(form){
    form.addEventlistener("submit", function(event){
        
        Event.preventDefault();
        console.log("form submitted");

        var fname = document.getElementById("fname").value;
        var desc = document.getElementById("desc").value;
        var instock = document.getElementById("instock").check ? "yes" : "no";
        var isVeg = document.getElementById("isVeg").check ? "yes" : "no";
        var category = document.getElementById("category").value;
        var cuisine = document.getElementById("cuisine").value;
        var foodimg = document.getElementById("foodimg").value;
    
        console.log(category);
        if(category === ""){
            alert(" Please select a valid category");
            return;
        }
        var newFoodItem ={
            fname,
            desc,
            instock,
            isVeg,
            category,
            cuisine,
            foodimg
        }
        //alert("New  foodItem Added - " + fname);
        console.log(newFoodItem);
        form.reset();

        var queryString = new URLSearchParams(newFoodItem).toString();
        window.location.href = "./list_fooditems.html?" + queryString;

    });
}