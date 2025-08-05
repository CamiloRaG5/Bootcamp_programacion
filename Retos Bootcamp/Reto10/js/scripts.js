async function cargarDatos(){
    const response = await fetch('data/muertes_accidente_electrico.json');
    const datos = await response.json();
    const fila = document.getElementById('fila');
    fila.innerHTML = '';
    datos.forEach(item => {
        const tr =  document.createElement('tr');
        const tdEmpresa = document.createElement('td');
        tdEmpresa.textContent = item.empresa;
        const tdFrecuencia = document.createElement('td');
        tdFrecuencia.textContent = item.frecuencia;

        const tdEstado = document.createElement('td');
        const estado = item.frecuencia >= 15 ? '⚠Grave' : '🔴Crítico';
        tdEstado.textContent = estado;

        tr.appendChild(tdEmpresa);
        tr.appendChild(tdFrecuencia);
        tr.appendChild(tdEstado);
        fila.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', cargarDatos);


// async function cargarDatos(){
//     const response = await fetch('data/muertes_accidente_electrico.json');
//     const datos = await response.json();
//     const tabla = document.getElementById('fila');
//     datos.forEach(item => {
//         const tr =  document.createElement('tr');
//         const tdEmpresa = document.createElement('td')
//         tdEmpresa.textContent = item.empresa;
//         const tdFrecuencia = document.createElement('td')        
//         tdFrecuencia.textContent = item.frecuencias;
//         tabla.appendChild(tr)
//         tabla.appendChild(tdEmpresa)
//         tabla.appendChild(tdFrecuencia)
//     });
// }

// document.addEventListener('DOMContentLoaded', cargarDatos);