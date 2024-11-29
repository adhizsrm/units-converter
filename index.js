const inputBtn = document.getElementById("input-btn");
let inputBox = document.getElementById("input-box");
const lengthResults = document.getElementById("length-results");
const volumeResults = document.getElementById("volume-results");
const massResults = document.getElementById("mass-results");
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

inputBtn.addEventListener("click",function(){
        let num = Number(inputBox.value);
        lengthResults.innerHTML = calculateLength(num);
        volumeResults.innerHTML = calculateVolume(num);
        massResults.innerHTML = calculateMass(num);
})

function calculateLength(num) {
    let str = ``;
    let toFeet = num * meterToFeet;
    let toMeter = num / meterToFeet;
    str += `<p>${num} meters = ${(toFeet).toFixed(3)} feet | ${num} feet = ${(toMeter).toFixed(3)} meters`;
    return str;
}

function calculateVolume(num) {
    let str = ``;
    let toGallons = num * literToGallon;
    let toLitres = num / literToGallon;
    str += `<p>${num} litres = ${(toGallons).toFixed(3)} gallons | ${num} gallons = ${(toLitres).toFixed(3)} litres`;
    return str;
}

function calculateMass(num) {
    let str = ``;
    let toPounds = num * kiloToPound;
    let toKilos = num / kiloToPound;
    str += `<p>${num} kilos = ${(toPounds).toFixed(3)} pounds | ${num} pounds = ${(toKilos).toFixed(3)} kilos`;
    return str;
}