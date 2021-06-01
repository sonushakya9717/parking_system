const lineReader = require("line-reader");

var slots = {};
lineReader.eachLine("test.txt", (line, last) => {
  let intruction = line.split(" ");
  if (intruction[0] === "create_parking_lot") {
    create_parking_slots(Number(intruction[1]), slots);
  } 
  else if (intruction[0] === "park") {
    const car_number = intruction[1];
    allocating_slot(car_number, slots);
  }
  else if(intruction[0] === "leave"){
    const car_number = intruction[1];
    const hours = Number(intruction[2])
    leave(car_number, slots, hours)

  }
  else if(intruction[0] === "status"){
    status(slots)
  }
});

// function for creating slots
const create_parking_slots = (no_of_slots, slots) => {
  for (let i = 1; i <= no_of_slots; i++) {
    slots[`${i}`] = "empty_slot";
  }
  console.log(`Created parking lot with ${no_of_slots}`);
  // console.log(slots)
};

// function alloting slot to the car
const allocating_slot = (car_number, slots) => {
  const cars = Object.values(slots);
  // const slot_no = keys(slots)
  if (cars.includes(car_number)) {
    console.log("This car is already in the parking area");
  } else {
    if (cars.includes("empty_slot")) {
      for (let i = 1; i <= cars.length; i++) {
        if (slots[`${i}`] === "empty_slot") {
          slots[`${i}`] = car_number;
          console.log(`Allocated slot number: ${i}`);
          break;
        } else {
          continue;
        }
      }
    } else {
      console.log("Sorry, parking lot is full");
    }
  }
};

// Asking for charge from the car which is leaving from the parking
const leave = (car_number, slots, hours) => {
  const cars = Object.values(slots);
  // const slot_no = keys(slots)
  if (cars.includes(car_number)) {
    for (let i = 1; i <= cars.length; i++) {
      if (slots[`${i}`] === car_number) {
        slots[`${i}`] = "empty_slot";
        console.log(`Registration number ${car_number} with Slot Number ${i} is free with Charge ${calculate_charge(hours)}`)
        break;    
      }
    }
  } else {
    console.log(`Registration number ${car_number} not found`);
  }
};

// calculating charge
const calculate_charge = (hours) => {
    var total_charge = 0;
        if (hours > 2) {
          total_charge = 10 + (hours - 2) * 10;
        } else {
          total_charge = hours * 10;
        }
    return total_charge
}

// parking status
const status = (slots) => {
    console.log("Slot No. Registration No.")
    const cars = Object.values(slots);
    for (let i = 1; i <= cars.length; i++) {
    if (slots[`${i}`] !== "empty_slot") {
        console.log(`${i} ${slots[`${i}`]}`)    
    }
    }
}