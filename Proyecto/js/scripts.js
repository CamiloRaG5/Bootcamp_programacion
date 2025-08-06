document.addEventListener('DOMContentLoaded', function(){

    const motos = document.getElementById('motos');
    const carros = document.getElementById('carros');
    const taxis = document.getElementById('taxis');
    const buses = document.getElementById('buses');    
    const vehiculos = document.getElementById('vehiculos');
    const addButton = document.getElementById('calculateButton');
    const resultText = document.getElementById('resultText');
    calculateButton.addEventListener('click', function(){
        const moto = motos.value;
        const carro = carros.value;
        const taxi = taxis.value;
        const bus = buses.value;
        const vehiculo = vehiculos.value;

        let result = Number(moto)  + Number(carro)  + Number(taxi) + Number(bus) + Number(vehiculo);
        
        resultText.textContent = `El resultado es: ${result}`;
    })
})