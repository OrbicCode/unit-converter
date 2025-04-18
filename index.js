/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound 
*/
// create innerHTML elements

const input = document.getElementById('input')
const button = document.getElementById('btn')
const resultsBox = document.getElementById('results-box')
const lengthEl = document.getElementById('length')
const volumeEl = document.getElementById('volume')
const massEl = document.getElementById('mass')


button.addEventListener("click", function() {
    const feet = input.value * 3.281
    const gallons = input.value * 0.264
    const pounds = input.value * 2.204

    const meters = input.value / 3.281
    const liters = input.value / 0.264
    const kilos = input.value / 2.204
    
    lengthEl.innerHTML = `
    <h2>Length (Meter/Feet)</h2>
    <p>${input.value} meters = ${feet.toFixed(3)} feet | ${input.value} feet = ${meters.toFixed(3)} meters</p>
    `
    volumeEl.innerHTML = `
    <h2>Volume (Literes/Gallons)</h2>
    <p>${input.value} liters = ${gallons.toFixed(3)} gallons | ${input.value} gallons = ${liters.toFixed(3)} liters</p>
    `
    massEl.innerHTML = `
    <h2>Mass (Kilograms/Pounds)</h2>
    <p>${input.value} kilos = ${pounds.toFixed(3)} pounds | ${input.value} pounds = ${kilos.toFixed(3)} kilos</p>
    `
})