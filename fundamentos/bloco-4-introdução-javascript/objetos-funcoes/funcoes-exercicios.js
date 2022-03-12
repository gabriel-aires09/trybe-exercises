
// /1- Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false
function verificaPalindrome(palindrome) {
  let word = palindrome;
  let verificapalindromo = palindrome.split('').reverse('').join('');
  if (word == verificaPalindrome) {
    return 'true';
  } else {
    return false;
  }

}
verificaPalindrome('arara');


/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .
*/

function arrayInteiros(array, arrayVazio) {
  array = [];
  arrayVazio = [];
  for (let index = 1; index < array.length; index += 1) {
    arrayVazio = array[index];
  } return arrayVazio
}
