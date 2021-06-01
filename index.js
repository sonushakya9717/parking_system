const lineReader = require('line-reader');

lineReader.eachLine('test.txt', (line, last) => {
    let intruction = line.split(" ")
    if(intruction[0]==="create_parking_lot"){
        create_parking_slots(parseInt(intruction[1]))
    }
});

// function for creating slots
const create_parking_slots = (no_of_slots)=>{
    let slots = {}
    for(let i=1; i<=no_of_slots; i++){
        slots[`${i}`] = ""
    }
    console.log(`Created parking lot with ${no_of_slots}`)
}



