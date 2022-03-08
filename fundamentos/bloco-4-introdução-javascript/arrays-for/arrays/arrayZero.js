let pizza1 = '4queijos';
let pizza2 = 'Frango com Catupiry';
let pizza3 = 'Marguerita';
let pizza4 = 'Calabresa';
let pizza5 = 'Chocolate';

console.log(pizza1, pizza2, pizza3, pizza4, pizza5); // muito custo para esse codigo

//Variavel composta - Array
//indice           0							1										2							3						4
let pizzas = ['4queijos', 'Frango com Catupiry', 'Marguerita', 'Calabresa', 'Chocolate'];

// pizzas[4] - sobrescreve os valores
pizzas[5] = 'Peito de Peru';

//jeito maroto de adicionar o array na ultima posicao
pizzas.push('Prestigio');   //vai empurrar um valor dentro do array

console.log(pizzas);

//saber o tamanho do array
console.log(pizzas.length);

// colocar em ordem alfabetica
console.log(pizzas.sort())

// mostrar apenas um dos items por meio do indice
console.log(pizzas[0]);
console.log(pizzas[1]);
console.log(pizzas[2]);

// borar criar um laco de repeticao
for (let index = 0; index < pizzas.length; index+= 1){
	console.log(pizzas[index]);
} // eu vou executar indice por indice do array e mostrar o 
// console log ate o final do tamanho do array
