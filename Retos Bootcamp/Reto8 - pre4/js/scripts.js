document.addEventListener('DOMContentLoaded', function(){
    const numero1 = document.getElementById('number1');
    const numero2 = document.getElementById('number2');
    const resultText = document.getElementById('resultText');

    window.calcular = function(operacion){
        const num1 = parseFloat(numero1.value.trim());
        const num2 = parseFloat(numero2.value.trim());

        if(isNaN(num1) || isNaN(num2)){
            resultText.textContent = 'Eso no es un número, Ingrese un valor valido.';
            return;
        }
        let result;
            switch(operacion){
            case 'sumar':
                result = num1 + num2;
                break;
            case 'restar':
                result = num1 - num2;
                break;
            case 'multiplicar':
                result = num1 * num2;
                break;
            case 'dividir':
                if(num2 == 0){
                     resultText.textContent = 'No es posible dividir entre 0'
                    return;
                }
                result = num1 / num2;
                break;
            default:
                result = 'Operación no válida';
        };
        resultText.textContent = result;
    };
});