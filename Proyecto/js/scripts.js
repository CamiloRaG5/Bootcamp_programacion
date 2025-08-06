document.addEventListener('DOMContentLoaded', function() {
    const motos = document.getElementById('motos');
    const carros = document.getElementById('carros');
    const taxis = document.getElementById('taxis');
    const buses = document.getElementById('buses');    
    const vehiculos = document.getElementById('vehiculos');
    const annos = document.getElementById('annos');
    const calculateButton = document.getElementById('calculateButton');
    const resultText = document.getElementById('resultText');
    
    let emissionAverages = {}; // Variable para almacenar los promedios

    // Cargar los datos del JSON
    fetch('data/contaminacion_vehicular.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP! estado: ${response.status}`);
            }
            return response.json();
        })
        .then(co2Data => {
            // Calcular promedios con los datos cargados
            emissionAverages = calculateAverages(co2Data);
            console.log('Promedios calculados:', emissionAverages);
            calculateButton.disabled = false; // Habilitar el botón
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
            resultText.textContent = 'Error al cargar los datos: ' + error.message;
        });

    // Función para calcular promedios
    function calculateAverages(co2Data) {
        const averages = {
            motos: 0,
            carros: 0,
            taxis: 0,
            buses: 0,
            vehiculos: 0
        };
        
        const count = co2Data.length;
        
        co2Data.forEach(yearData => {
            averages.motos += yearData["Motos (Mt)"] || 0;
            averages.carros += yearData["Carros particulares (Mt)"] || 0;
            averages.taxis += yearData["Taxis (Mt)"] || 0;
            averages.buses += yearData["Transporte público (Mt)"] || 0;
            averages.vehiculos += yearData["Vehiculos de Carga (Mt)"] || 0;
        });
        
        // Calcular promedios
        averages.motos /= count;
        averages.carros /= count;
        averages.taxis /= count;
        averages.buses /= count;
        averages.vehiculos /= count;
        
        return averages;
    }

    calculateButton.addEventListener('click', function() {
        // Verificar si los datos ya se cargaron
        if (Object.keys(emissionAverages).length === 0) {
            resultText.textContent = 'Los datos aún se están cargando, por favor espere...';
            return;
        }

        const motoCount = Number(motos.value) || 0;
        const carroCount = Number(carros.value) || 0;
        const taxiCount = Number(taxis.value) || 0;
        const busCount = Number(buses.value) || 0;
        const vehiculoCount = Number(vehiculos.value) || 0;
        const annoCount = Number(annos.value) || 1;

        // Calcular emisiones para cada tipo
        const motoCO2 = motoCount * emissionAverages.motos * annoCount;
        const carroCO2 = carroCount * emissionAverages.carros * annoCount;
        const taxiCO2 = taxiCount * emissionAverages.taxis * annoCount;
        const busCO2 = busCount * emissionAverages.buses * annoCount;
        const vehiculoCO2 = vehiculoCount * emissionAverages.vehiculos * annoCount;
        
        const totalCO2 = motoCO2 + carroCO2 + taxiCO2 + busCO2 + vehiculoCO2;
        
        resultText.innerHTML = `
            <p>Emisiones de Motos: ${motoCO2.toFixed(2)} Mt CO2</p>
            <p>Emisiones de Carros: ${carroCO2.toFixed(2)} Mt CO2</p>
            <p>Emisiones de Taxis: ${taxiCO2.toFixed(2)} Mt CO2</p>
            <p>Emisiones de Buses: ${busCO2.toFixed(2)} Mt CO2</p>
            <p>Emisiones de Vehículos de Carga: ${vehiculoCO2.toFixed(2)} Mt CO2</p>
            <p><strong>Total de emisiones: ${totalCO2.toFixed(2)} Mt CO2</strong></p>
        `;
    });
});

