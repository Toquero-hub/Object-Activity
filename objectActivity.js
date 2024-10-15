// Step 1: Create an object called car
const car = {
    type: "Sedan",
    model: "Camry",
    color: "Blue"
};

// Step 2: Use typeof to check the type of the object and log it to the console
console.log("Type of car:", typeof car); // Should log "object"

// Step 3: Update the type property to "Toyota" and log the updated object
car.type = "Toyota";
console.log("Updated car object:", car);

// Step 4: Add a new property wheels with the value 4 and log the updated object
car.wheels = 4;
console.log("Car object after adding wheels property:", car);