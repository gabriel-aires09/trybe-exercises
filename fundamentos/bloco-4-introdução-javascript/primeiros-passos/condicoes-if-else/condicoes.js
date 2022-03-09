//if - se
//else - senao

/*
if (codicao){
    //codigo - caso nossa condicao seja comprida
}

else if (outra condicao) {
    //outra condicao - pode ser utilizados quantas vezes for necessarias.
}

else {
    // nenhuma das condicoes anteriores forem verdadeiras, vai executar esta condicao
}
*/

let trybe = 14;

if (trybe >= 14 && trybe < 14.40) {
  console.log("Esquenta");
}

else if (trybe >= 16.30 && trybe < 17.50) {
  console.log("Aula ao vivo");
}

else if (trybe >= 19.40 && trybe < 20) {
  console.log("Fechamento");
}

else {
  console.log("Fora do horario trybe");
}
