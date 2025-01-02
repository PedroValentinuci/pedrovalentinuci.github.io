var money = prompt("Digite uma quantia a ser convertida (real->dólar):")
money = parseFloat(money)
var moneyReal = money * 5.51
moneyReal = moneyReal.toFixed(2)

alert(moneyReal)