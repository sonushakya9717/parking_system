const lineReader = require('line-reader');

var slots = {}
lineReader.eachLine('test.txt', (line, last) => {
    let intruction = line.split(" ")
    if(intruction[0]==="create_parking_lot"){
        create_parking_slots(parseInt(intruction[1]),slots)
    }
    else if(intruction[0]==="park"){
        const car_number = intruction[1];
        allocating_slot(car_number,slots);
    }

});

// function for creating slots
const create_parking_slots = (no_of_slots,slots)=>{
    for(let i=1; i<=no_of_slots; i++){
        slots[`${i}`] = "empty_slot"
    }
    console.log(`Created parking lot with ${no_of_slots}`)
    // console.log(slots)
}

// function alloting slot to the car
const allocating_slot = (car_number,slots) => {
    const cars = Object.values(slots);
    // const slot_no = keys(slots)
    if(cars.includes(car_number)){
        console.log('This car is already in the parking area')
    }
    else{
        if(cars.includes("empty_slot")){
            for(let i=1; i<=cars.length; i++){
                if(slots[`${i}`] === "empty_slot"){
                    slots[`${i}`] = car_number
                    console.log(`Allocated slot number: ${i}`)
                    break
                }
                else{
                    continue
                }
            }
        }
        else{
            console.log("Sorry, parking lot is full")
        }
    }
}