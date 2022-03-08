let taskList = ['Tomar cafe', 'Reuniao', 'Brincar com o cachorro'];

let searchForFirstTask = taskList[0]; // acessar primeiro elemento do array
console.log(searchForFirstTask);

let searchForLastTask = taskList[taskList.length -1]; // algoritmo para acesar o ultimo elemento do array
console.log(searchForLastTask);

taskList.push('Fazer exercicios da Trybe'); // empurar array. na ordem, fica no final
console.log(taskList);

taskList.unshift('The end of beggining'); // iniciar array no inicio
console.log(taskList);

taskList.pop(); // remove o ultimo indice do array
console.log(taskList);
// taskList.pop(1) da para remover outros itens dessa forma

// let indexOfTask = taskList[taskList.indexOf('Brincar com o cachorro') -1]; printa o indice anterior
let indexOfTask = taskList.indexOf('Reuniao');
console.log(indexOfTask);
