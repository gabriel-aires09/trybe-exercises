/* 1. Crie um algoritmo que retorne o fatorial de 10.
*
* Fonte: https://serprogramador.com.br/artigos/topico/javascript/
* Como-calcular-a-operacao-matematica-de-fatorial-com-JavaScript#
* :~:text=O%20fatorial%20de%20um%20n%C3%BAmero,o%20multiplicador%20seja%20equivalente%201.
*/

/* O meu estava quase certo, mas precisei fazer alguns ajustes
* Tive dificuldade em colocar corretamente a ordem de execucao das 
* variaveis no loop :(
*/
function fatorial () {
  let fatorial = 10;
	let resultado = fatorial;

	for (let i = 1; i < fatorial; i += 1){
		resultado = resultado * i;
	} console.log(resultado);
}

/* 2. Desenvolva um algoritmo que é capaz de inverter uma palavra
 * fonte: https://pt.stackoverflow.com/questions/5943/como-inverter-
 * uma-string-em-javascript 
 */

function inverte () {
	let word = 'tryber';
	let inverte = '';
	for (let i = word.length -1; i >= 0; i -= 1){
		inverte += word[i];
	} console.log (inverte);
	
	/* Pode ser resolvido juntando algumas funcoes do
	 * js
	 */
	let teste = word.split('').reverse().join('');
	console.log(teste);
}
fatorial();
inverte();
