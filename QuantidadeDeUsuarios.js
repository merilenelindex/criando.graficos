import { getCSS, tickConfig } from "./common.js"

async function QuantidadeUsuariosPorRede() {
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuario.json'
const res = await fetch(url)
const dados = await res.json()
const nomeDasRedes = Object.keys(dados)
const QuantidadeUsuarios = Object.values(dados)
 
const data = [
    {
        x: nomeDasRedes,
        y:QuantidadeUsuarios,
        type: 'bar',
        marker: {
            color: getCSS('--primary-color')
        }
    }
]

const laytout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
        Text: 'Redes sociais com mais usuários'
        x: 0,
        font: {
            color: getCSS('--primary-color'),
            size: 30,
            font: getCSS('--font')
        }
    },
    xaxis: {
        tickfont: tickConfig,
        title: {
            Text: 'nome das redes',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    },
    yaxis: {
        tickfont:tickConfig,
        title: {
            Text: 'bilhoes de usuarios ativos',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    }
}

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('grafico-conatiner').appendChild,(grafico)
Plotly.newPlot(grafico, data, laytout)
}

QuantidadeUsuariosPorRede()
