/* 1. Faça cinco programas, um para cada operação aritmética básica. ok
PS: Eu fiz cada programa isoladamente em funcoes para ter menos bugs e futuros problemas.
PS2: Eu repeti algumas variaveis, mas as que repeti coloquei como locais.
PS3: Gostaria de ter mais elegancia e menos sujeira nos meus codigos, mas sou noob D:
*/

//coloquei essas constantes como variaveis globais para serem utilizadas em outros programas
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

/* 3. Faça um programa que retorne o maior de três números. 
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

/* 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" 
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

/* 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) 
em conceitos de A a F
*/

function converterPls () {
  let nota = 101;
  let matSign = Math.sign(nota);

  if (nota > 100) {
    console.log('erro');      // nao foi uma das melhores solucoes, mas consegui. Coloquei em ordem. nota > 100 estava no final
  } else if (nota >= 90) {
    console.log('A');
  }
    else if (nota >= 80) {
    console.log('B');
  } else if (nota >= 70) {
    console.log('C');
  } else if (nota >= 60) {
    console.log('D');
  } else if (nota >= 50) {
    console.log('E');
  } else if (nota < 50 && nota >= 0) {
    console.log('F');
  } else if (nota < 0) {
    console.log('erro');
  }
}

/* 8. Escreva um programa que defina três números em constantes e retorne true 
se pelo menos uma das três for par. Caso contrário, ele retorna false . 
*/

function isPair () {
  const a = 9;
  const b = 5;
  const c = 3;
  
  // if (a % 2 === 0) {
  //   console.log('true');
  // } else if (b % 2 === 0) {
  //   console.log('true');
  // } else if (c % 2 === 0) {
  //   console.log('true');
  // } else {
  //   console.log('false');
  // }

  // Bonus: use somente um if
  if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log('true');
  } else {
    console.log('false');
  }
}

/*9. Escreva um programa que defina três números em constantes e retorne true 
se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
*/
function isEven () {
  let a = 10;
  let b = 44;
  let c = 22;

  // if (a % 3 === 0) {
  //   console.log('true');
  // } else if (b % 3 === 0) {
  //   console.log('true');
  // } else if (c % 3 === 0) {
  //   console.log('true');
  // } else {
  //   console.log('false');
  // }

  // Bonus: use somente um if 
  if (a % 3 === 0 || b % 3 === 0 || c % 3 === 0) {
    console.log ('true');
  } else {
    console.log('false');
  }
} 

operators();
greaterThen();
treeNumbers();
console.log("Programa Positive-Negativo-Zero!!!");
positiveNegative();
console.log("Conventer notas em letras: ")
converterPls();
isPair();
isEven();