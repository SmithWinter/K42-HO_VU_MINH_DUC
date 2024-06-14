
function feetToMeter(feet) {
    return 0.305 * feet;
}


function meterToFeet(meter) {
    return 3.279 * meter;
}


const feet = 10;
const meters = 3;

console.log(`${feet} feet = ${feetToMeter(feet)} meters`);
console.log(`${meters} meters =  ${meterToFeet(meters)} feet`);