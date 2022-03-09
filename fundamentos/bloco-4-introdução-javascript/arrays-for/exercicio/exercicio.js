//Array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*1. Nesse primeiro exercício, percorra o array imprimindo 
 * todos os valores nele contidos com a função console.log()
 */
function imprimaValores () {
	for (let index = 0; index < numbers.length; index += 1) {
		console.log(numbers[index]);
	}
}
/* 2. Para o segundo exercício, some todos os valores contidos
 * no array e imprima o resultado; 
 */

function sumArray () {
	let sum = 0;
	for (index = 0; index < numbers.length; index += 1) {
		sum += numbers[index]; 
	}
	console.log(sum);
}

/* 3. Para o terceiro exercício, calcule e imprima a média aritmética 
 * dos valores contidos no array;
 *
 * Fiz uma pequena adaptacao a este codigo. Criei apenas um loop para 
 * somar todos os numeros e depois dividir no console por meio da
 * funcao length. Nao copiei o codigo, pq achei esse loop muito parecido
 * com python e gosto mais do for normal (para iniciante, da para visualizar
 * muito bem o que acontece no codigo)
 * fonte: https://www.visualdicas.com.br/programacao/js/68-como-calculari
 * -a-soma-e-a-media-dos-itens-de-um-array-javascript
 *  
 *  4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 
 * 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: 
 * "valor menor ou igual a 20"
 */
function media () { 
	let soma = 0;
	for (index = 0; index < numbers.length; index += 1){
	 soma += numbers[index];
	}
	let media = soma/numbers.length;
	
	// Resposta exercicio 4
	if (media > 20) {
		console.log("Valor maior que 20");
	} else {
		console.log("Valor menor ou igual a 20");
	}
}

/* 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o; 
 * Utilizando o traverse method
 * Mais uma vez, terei que fazer uma adaptacao para js.
 * Fonte: https://afteracademy.com/blog/largest-element-in-an-array
*/

function max () {
	let max = numbers[0];
	// o index = 1 no for significa que nao pode iniciar com o 0, pq estou usando 
	// na variavel max?
	for (let index = 1; index < numbers.length; index += 1) {
		if (max < numbers[index]) {
			max = numbers[index];
		}
	}
	console.log(max);
}

// Achei interessante esta forma tbm
// Nao o que o exercicio pede, mas e uma boa;
function maxTwo () {
	numbers.sort();
	maior_numero = numbers[0];
	console.log(maior_numero);
}

/* 6. Descubra quantos valores ímpares existem no array e imprima o resultado. 
 * Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
 * Nao deu para resolver tudo, familia. Peguei o gabarito da trybe.
 */
function impar () {
	let result = 0;

	for (let index = 0; index < numbers.length; index += 1) {
  	if (numbers[index] % 2 !== 0) {
    result += 1;
  	}
	}

	if (result === 0) {
  	console.log('nenhum valor ímpar encontrado');
	} else {
		console.log("Quantidade de valores encontrados: " + result);
	}
}
/* 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
*/

function less () {

	let less = numbers[0];
	for (let index = 1; index < numbers.length; index += 1) {
		if (less > numbers[index]) {
			less = numbers[index];
		}
	}
	console.log(less);
}

/* 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
*/
function goTo () {
	let newNumber = [];
	for (let index = 1; index <= 25; index += 1) {
		newNumber.push(index);
	} console.log(newNumber);
}

/* 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão 
 * de cada um dos elementos por 2 
 * Fiz outra adaptacao. Nao copiei, tive que me virar para funcionar
 * fonte: https://stackoverflow.com/questions/42584479/javascript-efficient-way-to-
 * divide-an-array-by-a-value
 */
function divided () {
	let newNumber = [];
	let divideNumber = [];
	let divide = 2;
	for (let index = 0; index <= 25; index += 1) {
		newNumber.push(index);
		divideNumber.push(newNumber[index]/divide); // minha adaptacao
	} console.log(divideNumber);
}


imprimaValores();
console.log("");
sumArray();
console.log("");
media();
console.log("");
max();
console.log("");
impar();
console.log("");
less();
console.log("");
goTo();
console.log("");
divided();
