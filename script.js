var valorEmDolarTexto = prompt("Digite aqui o valor do dolar para fazer a converção em libra")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmLibra = valorEmDolarNumero * 0.73

alert("O valor do dolar " + valorEmDolarTexto + " equivale a " +  valorEmLibra.toFixed(2) + " libras no dia 23/03/2021")