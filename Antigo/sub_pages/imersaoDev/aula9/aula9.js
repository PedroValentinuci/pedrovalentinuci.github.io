var cartaPedro = {
    nome: "Seiya de pegaso",
    imagem: "https://i.pinimg.com/originals/e9/c1/77/e9c1778727e6c604ace92a2ec73ce52b.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90        
    }
}
var cartaSophia = {
    nome: "Bulbasaur",
    imagem: "https://i.pinimg.com/originals/3b/78/47/3b7847675982776e5219e12a680ecd84.png",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85       
    }
}
var cartaPlayer3 = {
    nome: "Lorde Darth Vader",
    imagem: "https://images-na.ssl-images-amazon.com/images/I/41i-0NH0q9L._SX328_BO1,204,203,200_.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90,
    }

}
var cartaLol = {
    nome: "Caitlyn",
    imagem: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 10
    }
}
var cartaNaruto = {
    nome: "Naruto",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}
var cartaHarry = {
    nome: "Harry Potter",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}
var cartaBatman = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}
var cartaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 70
    }
}
var cartaMaquina
var cartaJogador
var cartas = [cartaPedro, cartaSophia, cartaPlayer3, cartaLol, cartaNaruto, cartaHarry, cartaBatman, cartaMarvel]
var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById("quantidade-cartas")
    var html = "Quantidade de cartas em jogo: " + cartas.length

    divQuantidadeCartas . innerHTML = html
}

function atualizaPlacar() {
    var divPlacar = document.getElementById("placar")
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Maquina"

    divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo +  " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id= 'opcoes class='carta-status'>"

    divCartaJogador.innerHTML = nome + html + "</div>" + opcoesTexto 
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
    
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Parabéns você venceu!!</p>"
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Perdeu meu mano!!</p>"
        pontosMaquina++
    } else {
        htmlResultado = "<p class='resultado-final'>Vocês empataram!!</p>"
    }

    if (cartas.length == 0) {
        alert("Acabou o game")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = "<p class='resultado-final'>Parabéns você venceu o game</p>"
        } else if(pontosJogador < pontosMaquina) {
            htmlResultado = "<p class='resultado-final'>Você perdeu o game</p>"
        } else {
            htmlResultado = "<p class='resultado-final'>Você empatou o game</p>"
        }
    } else {
        document.getElementById("btnProximaRodada").disabled = false
    }
    
    divResultado.innerHTML = htmlResultado
    document.getElementById("btnJogar").disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo +  " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id= 'opcoes class='carta-status'>"

    divCartaMaquina.innerHTML = nome + html + "</div>" + opcoesTexto 
}

function proximaRodada() {
    var divCartas = document.getElementById("cartas")

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div><div id="carta-maquina" class="carta"></div>`
    document.getElementById("btnSortear").disabled = false
    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnProximaRodada").disabled = true

    var divResultado = document.getElementById("resultado")
    divResultado.innerHTML = ""
}