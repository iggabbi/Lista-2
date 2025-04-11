const estudante = {
    nome: "Melissa",
    idade: 15,
    prontuario: 12345,
    bolsista: true,
    telefones: ["1234-5678", "8765-4321"]
}

// verificar se existe a propriedade endereço
const chaveObjeto = Object.keys(estudante)
console.log("", chaveObjeto)

if (!chaveObjeto.includes("endereco")){ // se propriedade end não existe
    console.error("É necessário ter um endereço cadastrado") // mensagem de erro
}else {
    console.log("Endereço cadastrado")
}


const estudante = {
    nome: "Vinicius",
    idade: 15,
    prontuario: 1234,
    turma: "Desenvolvimento web",
    bolsista: true,
    telefones: ["1234-56789", "9874-84833"],
    // endereco: [{
    //     rua: "Nome da rua",
    //     numero: "500",
    //     bairro: "Santa Cruz"
    // },
    // {
    //     rua: "Rua 2",
    //     numero: "23B",
    //     bairro: "Sabiá"
    // }]
}

console.log(typeof estudante) //object
console.log(estudante)

//acessando propriedades do objeto
console.log(estudante.telefones) // lista de telefones
console.log(estudante.telefones[1])
console.log(estudante['idade'])

// estudante.endereco = {
//     rua: "Nome da rua",
//     numero: "500",
//     bairro: "Santa Cruz"
// }

// console.log(estudante.endereco.rua)


// criando um objeto
let pessoa = {
  nome: "Ana",
  idade: 25,
  profissao: "Engenheira"
};

// alterando a propriedade idade do objeto pessoa
pessoa.idade = 26;


// ou também pode ser alterado usando colchetes
// pessoa["idade"] = 26;

// removendo uma propriedade
delete pessoa.profissao;

// exibindo no console o resultado
console.log(pessoa);
// Resultado: { nome: 'Ana', idade: 26 }


//reduzir casas deciamais
num.toFixed(2) // reduz as casas para 2
