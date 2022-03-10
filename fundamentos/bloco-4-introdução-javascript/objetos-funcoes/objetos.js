
function objectOne() {
  let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  }
  console.log(car['white']);
}

function objectTwo() {
  let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terca',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sabado',
  };
  console.log(diasDaSemana['7']);
}

function objectThree() {
  let conta = {
    agencia: '0000',
    banco: {
      code: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]);
}

objectThree();
