const weight = document.getElementById('weight');
const height = document.getElementById('height');
const output = document.getElementById('vystup');
const btnCal = document.querySelector('[type=button]');

btnCal.addEventListener('click', function() {
    weight.value++; 
    console.log(weight.value);
});