// for
let numero = 7;
for (let contador = 1; contador <= 9; contador++) {
	console.log(numero * contador);
}

let listaDeNomes = ["Joana", "Maria", "Lucas"];
for (let indice = 0; indice < listaDeNomes.length; indice++) {
	let mensagem = "Boas vindas, " + listaDeNomes[indice] + "!";
	console.log(mensagem);
}

/* Recomenda-se o uso exclusivo de += 1 , e é essa a regra que iremos 
adotar neste conteúdo daqui pra frente! 
*/
let cars = ['Saab', 'Volvo', 'BMW'];
for (let index = 0; index < cars.length; index += 1) {
	console.log(cars[index]);
}
