/*switch --case
Gostei disso, lembra bastante o uso em C e Shell Script que eu ja tive contato antes
*/

let trafficLight = "amarelo"; 

switch (trafficLight) {
    case "vermelho":
        console.log("Pare, pls");
        break;
    case "amarelo":
        console.log("Tenha atencao, pls");
        break;
    case "verde":
        console.log("Acelera com vontade");
        break;

    default: // caso nao atenda outras condicoes
        console.log("valor n identificado");
}