/* Operador OR
Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".

Implemente condicionais para que:
Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou 
"sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".

Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. 
Esse assunto é muito importante para seu aprendizado :).
*/

// Momento preguiça e ta ai este algoritmo. O unico porem que qualquer coisa que nao seja sabado
// ou domingo, o javascript vai imprimir como dia de aprendizado :(
let weekDay = "dia do crime";

if (weekDay === "sabado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanso merecido UwU");
} else {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}