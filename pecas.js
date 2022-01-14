/* 
    Aluno: Maicon Silva de Sousa
    Data: 13/01/2022
    Prog: Cadastro de peças
*/

// Verificar peso.
let peso = 150
if(peso > 100){
    console.log("Peso maior que 100g, cadastro liberado.")
}
else{
    console.log("Peso inferior a 100g, não é possível cadastrar.")
}

// Verificar numeros de peças cadastradas.
let qtd = 9
if(qtd < 10){
    console.log("Numero de peças inferior a 10, ainda a espaço para cadastro.")
}
else{
    console.log("Numero de peças maior que 10, não há espaço disponível.")
}

// Verificar comprimento do nome da peça.
let nomePeca = "Roda"
console.log("O comprimento do nome da peça é: ",nomePeca.length)
if(nomePeca.length < 3){
    console.log("Não foi possível cadastrar, nome da peça deve ser maior que três caracteres.")
}
else{
    console.log("Nome de peça adequado, podemos cadastrar.")
}