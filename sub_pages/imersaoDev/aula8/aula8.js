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

var cartaMaquina
var cartaJogador
var cartas = [cartaPedro, cartaSophia, cartaPlayer3]

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]

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
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Perdeu meu mano!!</p>"
    } else {
        htmlResultado = "<p class='resultado-final'>Vocês empataram!!</p>"
    }
    divResultado.innerHTML = htmlResultado
    exibeCartaMaquina()
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