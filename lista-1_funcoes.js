// Exercício 1

let nome = "Ricardo"
let idade = 45
let maiorIdade = false

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof maiorIdade)


// Exercício 2

let n1 = 8;
let n2= 9;
let n3= 10;

let media = (n1+n2+n3)/3;

if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}


// Exercício 3

let chovendo = true;

if (chovendo == false) {
  console.log("Não leve guarda-chuva")
} else {
  console.log("Leve guarda-chuva")
}


// Exercício 4

function dobro(n1) {
  return n1*2
}
console.log(dobro(5))


// Exercício 5

let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade")
} else {
  console.log("Menor de idade")
}


// Exercício 6

function cumprimentar (nome, idade) {
  console.log(`Olá, ${nome}`)
}
cumprimentar('Ricardo')
