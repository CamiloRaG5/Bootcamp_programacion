document.addEventListener('DOMContentLoaded', function(){
    const number1 = document.getElementById('number1');
    const number2 = document.getElementById('number2');
    const addButton = document.getElementById('addButton');
    const resultText = document.getElementById('resultText');
    addButton.addEventListener('click', function () {
        const num1 = number1.value.trim();
        const num2 = number2.value.trim();
        if(num1 == '' || num2 == '' || isNaN(Number(num1)) || isNaN(Number(num2))){
            resultText.textContent = 'Eso no es un número, Ingrese un valor valido.';
            return;
        }
        else{
            let result = Number(num1) + Number(num2);
            resultText.textContent = `El resultado es: ${result}`;
        };   
    });
});