function Calculo(){
  let inValor = document.getElementById('inValor')
  let inTempo = document.getElementById('inTempo')
  let inResultado = document.getElementById('inResultado')
  let valor =  Number(inValor.value)
  let tempo = Number(inTempo.value)
  let resultado = Math.ceil(tempo / 15)* valor
  inResultado.innerText = 'Valor a Pagar R$: ' + resultado.toFixed(2)

}
