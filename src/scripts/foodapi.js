
// Making a call to database.json
console.log("First console log")
fetch("http://localhost:8088/food")
.then(foods => {
    console.log("foods", foods)
    return foods.json()
})
.then(parsedFoods => {
    console.table(parsedFoods)
    parsedFoods.forEach(food => {
        console.log("food", food)
        console.log(food.name)
    })
})
console.log("Last console log")