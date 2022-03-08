/* 1. Obtenha o valor "Serviços" do array menu 
*/
let menu = ['Home', 'Servicos', 'Portfolio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

// 2. Procure o índice do valor "Portfólio" do array menu 
let indexOfPortfolio = menu.indexOf('Portfolio');
console.log(indexOfPortfolio);

// 3. Adicione o valor "Contato" no final do array menu
let menuPush = menu.push('Contato');
console.log(menu);
