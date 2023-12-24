let graficoHumedad = document.getElementById("#grafico_humedad_1");

var chart = new Chart(graficoHumedad, {
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