// Desafio: Gerenciando uma Lista de Tarefas (JavaScript)

// Você está criando um pequeno sistema de gerenciamento de tarefas usando JavaScript.
// Complete o código abaixo utilizando os métodos de array apropriados.

let tarefas = ['Estudar', 'Lavar a louça', 'Fazer exercícios'];

// 1. Adicione as tarefas 'Comprar pão' e 'Ler um livro' ao final da lista
tarefas.push('Comprar pão', 'Ler um livro');

// 2. Remova a última tarefa da lista e armazene em uma variável chamada ultimaTarefa
let ultimaTarefa = tarefas.pop();

// 3. Adicione 'Acordar cedo' e 'Tomar café' no início da lista
tarefas.unshift('Acordar cedo', 'Tomar café');

// 4. Remova a primeira tarefa da lista e salve em uma variável chamada primeiraTarefa
let primeiraTarefa = tarefas.shift();

// 5. Substitua as duas primeiras tarefas por 'Fazer café da manhã' e 'Organizar a mesa'
tarefas.splice(0, 1, 'Fazer café da manhã', 'Organizar a mesa');

// 6. Crie um novo array com as tarefas da posição 1 até 3 (inclusive 3)
let tarefasSelecionadas = tarefas.slice(1, 4);

// 7. Crie uma nova lista que combine as tarefas atuais com ['Ver um filme', 'Descansar']
let tarefasCompletas = tarefas.concat(['Ver um filme', 'Descansar']);

console.log("Lista original de tarefas:", tarefas);
console.log("Última tarefa removida:", ultimaTarefa);
console.log("Primeira tarefa removida:", primeiraTarefa);
console.log("Tarefas selecionadas:", tarefasSelecionadas);
console.log("Lista final de tarefas:", tarefasCompletas);
