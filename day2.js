function main(mealCost, tipPercent, taxPercent){
    var meal = parseFloat(mealCost);
    var tax = meal * (8/100);
    var tip = meal * (20/100);
    var total = (meal + tax + tip);
    
    console.log("The total meal cost is " + Math.round(total) + " dollars.");
}