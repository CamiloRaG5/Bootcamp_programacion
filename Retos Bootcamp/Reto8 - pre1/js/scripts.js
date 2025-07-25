document.addEventListener('DOMContentLoaded', function(){
    // Obtener la referencia de los documentos de la pagina
    const inputBox = document.getElementById('inputBox');
    const showBtn = document.getElementById('showBtn');
    const outputBox = document.getElementById('outputBox');
    // Añadir un observador al boton
    showBtn.addEventListener('click', function(){
        const message = inputBox.value;
        outputBox.textContent = message;
    })
})
