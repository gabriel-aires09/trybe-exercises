//Operador And, vulgo &&
const comida = 'pao na chapa';
const bebida = 'cafezinho';

if (bebida == 'cafezinho' && comida == 'pao na chapa') {
    console.log('Muito obrigado pela refeicao :)');
} else {
    console.log('Acho que houve um enganho com o meu pedido');
}

const conditionOne = true;
const conditionTwo = false;
console.log(conditionOne && conditionTwo);

//Encadeamento de &&
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;
console.log(listaDeCompras);

//Operador OR, vulgo ||

const bebidaPrincipal = 'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
    console.log("Obrigado por me atender :D");
} else {
    console.log("Ei, eu nao pedi isso!");
}
