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


// Exercício 12

   A forma mais antiga de declaração é com var. Variáveis declaradas com var têm escopo
de função, ou seja, só são visíveis dentro da função onde foram declaradas. Elas podem ser
tanto reatribuídas quanto redeclaradas dentro do mesmo escopo. Além disso, var é "içada"
(hoisted), o que significa que sua declaração é movida para o topo do escopo durante a fase de
compilação — no entanto, o valor atribuído não é movido junto, ficando indisponível até a linha
onde a variável é realmente definida.
   A variável let permite reatribuição de valor, mas não pode ser redeclarada dentro do
mesmo escopo. Embora também passe pelo hoisting, seu uso antes da declaração resulta em
erro, pois a variável fica em uma "zona morta temporal" até sua definição.
   Já const compartilha o escopo de bloco com let, mas tem uma restrição adicional: não
pode ser reatribuída após a declaração. Por isso, é obrigatório inicializá-la no momento da
criação. Vale lembrar, no entanto, que quando const é usada para declarar objetos ou arrays,
seus conteúdos internos podem ser modificados — o que não pode ser alterado é a referência
à estrutura em si.


// Exercício 13
    Quando tentamos acessar uma variável que ainda não foi definida em JavaScript, o
comportamento depende de como essa variável seria declarada. Se a variável nunca foi
declarada em nenhum lugar do código, o JavaScript lança um erro chamado ReferenceError,
informando que a variável não está definida. Agora, se a variável foi declarada com let ou
const, mas estamos tentando usá-la antes da linha onde ela aparece no código, também ocorre
um ReferenceError, por causa de algo chamado "zona morta temporal" — um período em que
a variável já existe no escopo, mas ainda não pode ser acessada.
    Por outro lado, se a variável foi declarada com var, o JavaScript permite que ela seja
acessada antes da declaração, mas o valor retornado será undefined. Isso acontece porque
var sofre um processo chamado "hoisting", em que a declaração da variável é movida para o
topo do escopo, mas sem o valor atribuído.
   Em resumo, acessar variáveis antes da hora pode gerar erros ou comportamentos
inesperados, especialmente se não usarmos let e const de forma cuidadosa.


// Exercício 14

    O operador typeof em JavaScript é usado para descobrir o tipo de dado de uma variável
ou valor. Ele retorna uma string indicando o tipo, como "string", "number", "boolean",
"object", "undefined", "function", entre outros.

const nome = "Maria" 
const idade = 25 
const ativo = true 
console.log(nome, ':', typeof nome); 
console.log(idade, ':', typeof idade); 
console.log(ativo, ':', typeof ativo); 
