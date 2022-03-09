let candidata = 'lista';

switch (candidata) {
  case "aprovada":
    console.log("Parabens, vc foi aprovada. Aproveite para comemorar com os amigos");
    break;
  case "lista":
    console.log("Aguarde que vc ainda esta na lista de espera. Chance de ser aprovado, ein?");
    break;
  case "reprovado":
    console.log("Sinto muito, voce nao foi aprovado. Tente novamente no proximo ano")
    break;
  default:
    console.log("Nao se aplica");
}