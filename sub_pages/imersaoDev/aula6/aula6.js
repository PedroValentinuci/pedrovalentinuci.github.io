var player1 = {
    nome: "Pedro",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}
var player2 = {
    nome: "Sophia",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

var player3 = {
    nome: "Pessoa 3",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

var player4 = {
    nome: "Pessoa 4",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

player1.pontos = pointsCalculator(player1)
player2.pontos = pointsCalculator(player2)
player3.pontos = pointsCalculator(player3)
player4.pontos = pointsCalculator(player4)

function pointsCalculator(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

var jogadores = [player1, player2, player3, player4]

showPlayers(jogadores)

function showPlayers(jogadores) {
    var html = ""
    for (let index = 0; index < jogadores.length; index++) {
        html += "<tr><td>" + jogadores[index].nome + "</td>"
        html += "<td>" + jogadores[index].vitorias + "</td>"
        html += "<td>" + jogadores[index].empates + "</td>"
        html += "<td>" + jogadores[index].derrotas + "</td>"
        html += "<td>" + jogadores[index].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + index + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + index + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + index + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(index) {
    var jogador = jogadores[index]
    jogador.vitorias++
    jogador.pontos = pointsCalculator(jogador)
    showPlayers(jogadores)
}

function adicionarEmpate(index) {
    var jogador = jogadores[index]
    jogador.empates++
    jogador.pontos = pointsCalculator(jogador)
    showPlayers(jogadores)
}

function adicionarDerrota(index) {
    var jogador = jogadores[index]
    jogador.derrotas++
    showPlayers(jogadores)
}