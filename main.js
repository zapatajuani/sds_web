let graficoHumedad = document.getElementById("grafico_temperatura_1");
let spanData = document.getElementById("sensor_humedad_1");
let rango = document.getElementById("rango");
let textoRango = document.getElementById("texto_rango");

rango.addEventListener("change", () => {
    textoRango.textContent = rango.value
    if (rango.value < 20) {
        spanData.innerHTML = "humidity_low"
    } else if ((rango.value < 30) && (rango.value >= 20)) {
        spanData.innerHTML = "humidity_mid"
    } else {
        spanData.innerHTML = "humidity_high"
    }
});

new Chart(graficoHumedad, {
    type: "line",
    data: {
        labels:["12p.m", "13p.m", "14p.m", "15p.m", "16p.m", "17p.m", "18p.m"],
        datasets:[
            {
                label: "Sensor Humedad 1",
                data: [30.5,31,30.5,29.7,29.0,28.5,27.9],
            }
        ]
    }
});
