/*
 * O laço for/of permite iterar os valores das propriedades, 
 * nos retornando os números dentro do array numeros
 */

let numeros = [1,2,3,4,5];
for (let numero of numeros) {
	console.log(numero);
}

// utilizei isso para ter um espaco entre os dois loops for para melhor visualizacao
console.log("");
let word = 'Hello';
for (let letter of word) {
	console.log(letter);
}

//Nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
	sum += 1;
	console.log(sum);
}

console.log("");
//Fiz alguns testes com operadores
let numbers = [10, 20, 30, 40];
for (let index of numbers) {
	index *= 3;
	console.log(index);
}

