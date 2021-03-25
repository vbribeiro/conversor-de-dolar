//Pede o valor
var valorEmDolarTexto = prompt("Qual o valor em dólar que você deseja converter?")

//Pega o valor em dólar de texto e transforma em valor número em float
var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

//Multiplicação 
var valorEmRealNumero = valorEmDolarNumero * 5.50

//Fazer exibir apenas 2 casas decimais com a função toFixed
var valorEmRealFixado = valorEmRealNumero.toFixed(2)

//Mostrar o valor final
alert(valorEmRealFixado)
