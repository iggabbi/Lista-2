// Exercício 1

const humanas = ['Ricardo', 'Pricila']
const exatas = ['Amanda', 'Prampero', 'Cêsar']

const uniao = humanas.concat(exatas)
console.log(uniao)


// Exercício 2

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros)

const parteNumeros = numeros.slice(3, 8)

console.log(parteNumeros)


// Exercício 3

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
frutas.splice(2, 2, 'Kiwi', 'Pêssego')
console.log(frutas)


// Exercício 4

const menuPrincipal = ['Macarrão', 'Bife', 'Parmegiana']
const menuDeSobremesa = ['Sorvete', 'Chocolate', 'Bolo']

const menuCompleto = menuPrincipal.concat(menuDeSobremesa)
console.log(menuCompleto)
