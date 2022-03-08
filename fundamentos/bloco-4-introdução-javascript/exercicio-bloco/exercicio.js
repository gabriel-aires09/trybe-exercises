/*1. Faça cinco programas, um para cada operação aritmética básica. ok
PS: Eu fiz cada programa isoladamente em funcoes para ter menos bugs e futuros problemas.
Gostaria de ter mais elegancia nos codigos e menos sujeira nos meus codigos, mas sou noob D:
*/

//coloquei essas constates como variaveis globais para serem utilizadas em outros programas
const a = 10;
const b = 30;
const c = 40;

function operators() {
  console.log(a + b); // adicao
  console.log(a - b); // subtracao
  console.log(a * b); // Multiplicao
  console.log(a / b) // Divisao
  console.log(a % b); // Modulo
}


/* 2. Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas constantes com os valores que serão comparados. ok
fonte: https://pt.stackoverflow.com/questions/385132/escreva-uma-fun%C3%A7%C3%A3o
-que-retorne-o-maior-de-dois-n%C3%BAmeros-passados-como-argumentos
*/
function greaterThen() {
  if (a > b) {
    console.log('O valor de a = ' + a + ' e maior que b = ' + b)
  } else {
    console.log('O valor de b = ' + b + ' e maior que a = ' + a);
  }
}

/* Faça um programa que retorne o maior de três números. 
Defina no começo do programa três constantes com os valores que serão comparados.
*/

function treeNumbers() { // fonte: https://wagnergaspar.com/exercicio-1-como-encontrar-o-maior-e-menor-entre-tres-numeros/
  if (a > b) {           // Ps: C sempre salvando a minha vida
    if (a > c) {
      console.log(a);
    } else {
      console.log(c);
    }
  } else {
    if (b > c) {
      console.log(b);
    } else {
      console.log(c);
    }
  }
}

/* Faça um programa que, dado um valor definido numa constante, retorne "positive" 
se esse valor for positivo, "negative" se for negativo e "zero" caso contrário
PS: Documentacao da Mozilla me ajudou bastante aqui
Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
*/

function positiveNegative () {
  const number = 25
  const mathSign = Math.sign(number);
  if (mathSign === 1 ) {
    console.log('Positive')
  } else if (mathSign === -1) {
    console.log ('Negative');
  } else {
    console.log('Zero');
  }
}

operators();
greaterThen();
treeNumbers();
console.log("Programa Positive-Negativo-Zero!!!");
positiveNegative();