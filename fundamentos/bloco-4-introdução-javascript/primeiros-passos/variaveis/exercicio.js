/*  Vamos praticar o que aprendemos no vídeo? 
Abra o seu VS Code e faça os exercícios a seguir.
Dica: Com o plugin code runner que vimos no vídeo você pode executar o seu código no VS Code com o atalho ctrl + alt + n. Confira mais dicas sobre o VS Code aqui !

Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina). v
Crie uma constante chamada birthCity e atribua a ela a sua cidade natal. v
Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu. v
Utilize o console.log() para imprimir as constantes e variáveis que você criou. v
Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece! v
Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro?
*/

const myName = "Gabriel";
const birthCity = "Curitiba";
let birthYear = "1996";
birthYear = "2030";

birthCity = "Rondonia"; /* Nao posso atribuir um novo valor para esta variavel. Motivo: ela e constante. */

/* print todas as variaveis numa so linha. queria fazer este teste */
console.log(myName, birthCity, birthYear); 

/* variaveis cada uma sendo chamadas */
console.log(myName);
console.log(birthCity);
console.log(birthYear);




