const numerosPares=[2,4,6];
const numerosImpares=[1,3,5];


// ... Pega os valores da array e não a array em si.
const numeros = [...numerosPares,...numerosImpares];
console.log(numeros);

//const num1 = 1;
//const num2 = 2;
//... associa os outros numeros presente na array na ultima variavel.
const [num1,num2, ...outrosNumeros] = [1,2,3,4,5,6,7];
console.log(num1,num2,outrosNumeros);

//Define um valor padrão.
const [nome1 = "Matheus"] = [];

const pessoa = {
    nome:"Matheus",
    idade:23
}

const pessoaComTelefone={...pessoa, telefone:33333333}
console.log(pessoaComTelefone);

//Cria a variavel ao mesmo tempo que pega o valor da propriedade "Nome" de pessoa.
const { nome } = pessoa;
console.log(nome);

//function imprimeDados(dados){
//    const {nome,idade} = dados;
//    console.log(nome,idade);
//}

function imprimeDados({nome,idade}){
    console.log(nome,idade);
}

imprimeDados(pessoa);