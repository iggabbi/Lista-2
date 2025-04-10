//conversão de tipos 
console.log("ano"+ 2025)
console.log('3'+'5')//aq só mostra nromalmente 
//cnversão explícita
console.log(parseInt('3')+parseInt('5'))//ele soma os valores 
console.log(parseFloat('3.5')+parseInt('5'))
//convrsão explícita 
console.log('10'/'2') //ele faz uma conta mesmo assim

let cliente ="Maria"
let maiorDeIdade=true
let saldo = 100

console.log(typeof cliente)
console.log(typeof saldo)
console.log(typeof maiorDeIdade)
//let cria uma variavel 
//console.log é tipo um print 

cliente="Rafael"//aq vc reatribuiu o nome dele 
console.log(cliente)
//const não pode ter seu valor alterado 
const nome = 'Luis'//uma variável constante ela nn muda 
//nome = 'João' aq da erro 

//contas
let soma=10+20
let sub = 10-20 
let divisao = 20/2
let mult = 10*2
let poten=10**2
console.log('Soma',soma)
console.log('Subtração',sub)
console.log('Divisão',divisao)
console.log('Multiplicação',mult)
console.log('Potência',poten)

//constantes agr 
const idade = 18 //aq nn pode usar aspas para não virar string
const carteiraHabilitação= true
if (idade >= 18 && carteiraHabilitação){
console.log("Pode dirigir") 
} // esse aq é ou| |


// pesuqisar a diferença entre == e === no java - confundiu ;(

if (idade === 18) { // e o = precisa ser 3 ou >= <= e etc -> o 3 compara o tipo e o valor
    console.log('Maior de idade')    
}else{
    console.log("Menor de idade")
}
