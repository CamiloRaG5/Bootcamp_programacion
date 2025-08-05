document.addEventListener('DOMContentLoaded', function(){
    fetch('data/muertes_accidente_electrico.json')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('grafico').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.empresa),
                    datasets: [{
                        label: 'Empresa',
                        data: data.map(item => item['frecuencia']),
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidht: 1
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    scales: {
                        y: {
                            begginAtZero: true,
                            title: {
                                display: true,
                                text: 'Empresas'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Número de Muertos'
                            }
                        }
                    }
                }
            });
        });
});