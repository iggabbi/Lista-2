// arrays ou lista
// declaração de arrays

let cores = ['azul', 'amarelo', 'vermelho', 'verde']
console.log(cores)

// acessar item da lista
console.log(cores[0])

// propriedade length
console.log(cores.length) //4
let ultimoEle = cores[cores.length - 1] //3
console.log(ultimoEle)

// adcionar elementos
const notas = [10, 6, 8]
// push ---> adcionar elementos no final do array
notas.push(9)
console.log(notas)

// unshift - adciona elementos no início do array
notas.unshift(5)
console.log(notas)

// deletando itens do array
// pop ---> deletar o último item do array
notas.pop()
console.log(notas)

// shift ---> deleta elementos no início do array
notas.shift()
console.log(notas)

// método slice
// slice (início, fim)
const listaEstu = ['Ameinda', 'Edward', 'Cesária', 'Damitone', 'Juliana']
console.log(listaEstu)

const sala1 = listaEstu.slice(0, listaEstu.length/2) //2
const sala2 = listaEstu.slice(listaEstu.length/2)

console.log(sala1)
console.log(sala2)

// splice (início, quantidade, elemento a ser adcionado). Substitui elementos da lista
sala2.splice(1, 1, 'Perolito')
console.log(sala2)

// concatenar listas
// concat
const salaJs = ['evandro', 'camila']
const salaPython = ['Juliana', 'Leonardo', 'Raquel']

const salasUnidas = salaJs.concat(salaPython)
console.log(salasUnidas)

// lista de listas
const alunos = ['evandro', 'camila', 'gabriel', 'maria']
const media = [10, 5, 6, 8]
const lista = [alunos, media]

console.log(`A aluno(a) na posição ... corresponde a ${lista[0][1]} e sua média é de ${lista[1][3]}`)
