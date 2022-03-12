
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

  // the hardest way
  console.log(conta[infoDoBanco]);
  console.log(conta['agencia']);
  console.log(conta[infoDoBanco]['code']);
  console.log("id: " + conta[infoDoBanco]['id']);
  console.log("nome: " + conta[infoDoBanco]['nome']);

  // the easiest way
  console.log(conta.agencia);
  console.log(conta.banco.code)
  console.log(conta.banco.id);
  console.log(conta.banco.nome);
}

function objectFour() {
  let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  console.log(usuario['id']);
  console.log(usuario.email);

  console.log(usuario.infoPessoal.endereco.rua)
  console.log(usuario['infoPessoal']['endereco']['cidade']);
}


// array
function objectFive() {
  let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimaraes',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador);
  console.log(primeiroMorador['andar']);

  let ultimoMorador = moradores[moradores.length -2]; // eu posso pegar a ordem de morador diminuindo
  console.log(ultimoMorador);
  console.log(ultimoMorador.nome);
}

objectFive();


