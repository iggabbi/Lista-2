// função sem parâmetro e sem retorno
// função declarativa permite chamar a função em qualquer parte do código

function mostrarHoraLocal () {
  let hora = new Date()
  console.log(`Hora de agora: ${hora.toLocaleTimeString()}`)
}

mostrarHoraLocal ()

function mensagem () {
  console.log('Olá mundo')
}
mensagem()

//função declarativa com parâmetro (chama uma váriavel com elementos externos)
function cumprimentar (nome, idade) {
  console.log(`Olá, ${nome}`)
  console.log(`Idade: ${idade}`)
}
cumprimentar('Amanda', 25)
cumprimentar('Douglas', 16)

// função de expressão : é criar uma função como se fosse uma variável
const mensagem1 = function() {
  console.log('Olá, turma')
}
mensagem1 ()

//ARROW FUNCTION ou função da seta
const mensagem2 = () => 'Olá'
mensagem2()

const mensagem3 = (nome) => `Olá, ${nome}`
mensagem3('Sérgio')

//função com retorno
let a = 6
let b = 9
function soma(n1, n2) {
  return n1 + n2
}
let resultado = soma(8, 8)
console.log(resultado)
console.log(soma(20, 5))
console.log(soma(a, b))

//formas de declarar variáveis:
//Let, Const, Var

function testeVar() {
  if(true) {
    var x = 10
  }
  console.log(x)
}
testeVar()

function testeLet() {
  if(true) {
    let y = 20
  }
  console.log(y)
}
testeLet()
