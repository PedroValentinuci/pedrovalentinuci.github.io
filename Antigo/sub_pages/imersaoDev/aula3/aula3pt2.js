var secretNumber = parseInt(Math.random() * 10)
var chances = 3

while (chances > 0) {
    var option = parseInt(prompt("Digite um número entre 0 e 9"))
    if (option == secretNumber) {
        alert("Parabéns")
        break
    } else if (option < secretNumber) {
        alert("O número é um pouco maior")
        chances = chances - 1
    } else if (option > secretNumber) {
        alert("O número é um pouco menor")
        chances = chances - 1
    }
}