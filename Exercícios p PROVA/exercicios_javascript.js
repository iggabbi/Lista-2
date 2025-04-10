// Exercício 1

function somar(a, b) {   
    return a + b;   
}
console.log(somar(5, 3));


// Exercício 2

function parOuImpar(numero) {   
    return numero % 2 === 0 ? 'Par' : 'Ímpar';   
}   
console.log(parOuImpar(4));


// Exercício 3

function converterMetros(valorMetros) {  
    const centimetros = valorMetros * 100;  
    const milimetros = valorMetros * 1000;  
    
    return {  
      metros: valorMetros,  
      centimetros: centimetros,  
      milimetros: milimetros  
    };  
}  
    
const resultado = converterMetros(2);  
console.log(`Metros: ${resultado.metros}`);  
console.log(`Centímetros: ${resultado.centimetros}`);  
console.log(`Milímetros: ${resultado.milimetros}`); 


// Exercício 4

const frutas = ['maçã', 'banana'] 
frutas.push('laranja', 'uva') 
 
console.log(frutas) 

// Exercício 5

const numeros = [1, 2, 3, 4, 5] 
let ultimoNumero = numeros.pop() 
 
console.log(numeros) 
console.log(ultimoNumero)


// Exercício 6

const cores = ['vermelho', 'azul', 'verde'] 
let primeiraCor = cores.shift() 
 
console.log(cores) 
console.log(primeiraCor) 


// Exercício 7

const animais = ['cachorro', 'gato'] 
animais.unshift('elefante', 'leão') 
 
console.log(animais) 


// Exercício 8

const numeros = [10, 20, 30, 40, 50] 
numeros.splice(0, 2, 5, 15) 
 
console.log(numeros)


// Exercício 9

const letras = ['a', 'b', 'c', 'd', 'e'];  
const novoArray = letras.slice(1, 4);  
 
console.log(novoArray)


// Exercício 10

const array1 = [1, 2, 3] 
const array2 = [4, 5, 6] 
const array3 = array1.concat(array2) 
console.log(array3)


// Exercício 11

function cumprimentar (nome, idade) { 
    console.log(`Olá, ${nome}. Como vai?`) 
} 
cumprimentar('Gabriela') 


// Exercício 14

const nome = "Maria" 
const idade = 25 
const ativo = true 
console.log(nome, ':', typeof nome); 
console.log(idade, ':', typeof idade); 
console.log(ativo, ':', typeof ativo); 
