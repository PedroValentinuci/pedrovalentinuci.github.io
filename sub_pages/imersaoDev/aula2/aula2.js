var firstPokemon = prompt("Digite o pokemon a ser evoluído(em inglês e 1ª evolução):")

if (firstPokemon == "Bulbasaur") {
    var evolutionType = prompt("1 para 1ª evolução, 2 para 2ª evolução")
    if (evolutionType == 1) {
        document.write("<h2>" + "Ivysaur" + "</h2>")
    } else if (evolutionType == 2) {
        document.write("<h2>" + "Venusaur" + "</h2>")  
    } else {
        document.write("Opção invalida")
    }   
} else if (firstPokemon == "Charmander") {
    var evolutionType = prompt("1 para 1ª evolução, 2 para 2ª evolução")
    if (evolutionType == 1) {
        document.write("<h2>" + "Charmeleon" + "</h2>")
    } else if (evolutionType == 2) {
        document.write("<h2>" + "Charizard" + "</h2>")
    } else {
        document.write("Opção invalida")
    } 
} else if (firstPokemon == "Squirtle") {
    var evolutionType = prompt("1 para 1ª evolução, 2 para 2ª evolução")
    if (evolutionType == 1) {
        document.write("<h2>" + "Wartortle" + "</h2>")
    } else if (evolutionType == 2) {
        document.write("<h2>" + "Blastoise" + "</h2>")
    }
} else {
    document.write("Opção invalida")
}