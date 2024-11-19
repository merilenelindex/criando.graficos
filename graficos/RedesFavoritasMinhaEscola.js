import { getCSS,criarGraficos, incluirTexto } from "./common.js"

async function RedesFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritos.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores, 
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
            text: 'Redes Sociais que os usuarios mais gostam',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'), 
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            }
        }
    }

    criandoGrafico(data, layout)

    incluirTexto('Embora o <span>instagram</span> ocupe a quarta posição em termos de número total de usúarios entre as redes sociais, destaca-se como a <span>Facebook</span>, a plataforma com mais usúarios, sendo a terceira opção mais aparecida pelos usúarios. <br>Essa prefẽncia evidencia a forte conexão e apreço que as pessoas têm pelo Instagram em comparação com outras redes sociais')
}

RedesFavoritasMundo()
