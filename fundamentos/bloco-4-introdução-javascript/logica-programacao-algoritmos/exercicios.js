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
	let wordTwo = 'résumé';
	let inverte = '';
	for (let i = word.length -1; i >= 0; i -= 1){
		inverte += word[i];
	} console.log (inverte);
	
	/* Pode ser resolvido juntando algumas funcoes do
	 * js. Mas, aparentemente, nao e a melhor solucao
	 */
	let teste = wordTwo.split('').reverse().join('');
	
	console.log(teste);
}

/* 3. Escreva dois algoritmos: um que retorne a maior palavra deste 
* array e outro que retorne a menor. Considere o número de caracteres 
* de cada palavra.
*/

function arrayDosBrothers () {
  let array = ['java', 'javascript', 'python', 'html', 'css'];
  let word = array[0];
  let newWord = array [0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index]. length > newWord.length){
      newWord = array[index];
    }
  } console.log(newWord);

  for (let index = 1; index < array.length; index += 1) {
    if (word > array[index]) {
     word = array[index];
    } 
 } console.log(word);
  // for (let index = 1; index < array.length; index += 1) {
  //   if (word < array[index]) {
  //     word = array[index];
  //     return console.log(word); minha implementacao que falhou :(
  //   }
  //} 
}

/*4. Um número primo é aquele divisível apenas por 1 e por ele mesmo. 
 * Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50
 * fonte: Gabarito trybe
 */
function primo () {
  for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1){
    let isPrime = true;
    for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
      if (currentNumber % currentDivisor === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      biggestPrimeNumber = currentNumber;
    }
  }
  console.log(biggestPrimeNumber);
}

fatorial();
inverte();
arrayDosBrothers();
primo();