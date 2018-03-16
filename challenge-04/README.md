# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(a){

  return !!a;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy('');
isTruthy(0);
isTruthy(NaN);
isTruthy(Undefined);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(10);
isTruthy(9);
isTruthy(8);
isTruthy(7);
isTruthy(6);
isTruthy(5);
isTruthy(4);
isTruthy(3);
isTruthy(2);
isTruthy(1);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
  marca: 'fiat',
  modelo: 'palio',
  placa: '123hgd',
  ano: '2017',
  cor: 'preto',
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0  
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
function mudaCor(novaCor){
  carro.cor = novaCor;
  return carro.cor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
function obterCor(){
  return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
function obterModelo(){
  return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
function obterMarca(){
  return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
function obterMarcaModelo(){
  return "Esse carro é um " + obterMarca() + " " + obterModelo();
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
function addPessoasNoCarro(pessoas){

  if(carro.quantidadePessoas + pessoas == 4){
		var pessoa = "pessoa!";
		return "Só cabem mais uma " + pessoa;
  }

	if(carro.quantidadePessoas < 5 && carro.quantidadePessoas + pessoas > 5){
		var qtdPeCa = 5 - carro.quantidadePessoas;
		return "Só cabem mais " + qtdPeCa + " pessoas!";
	}else if(carro.quantidadePessoas + pessoas > 5){
		var qtdPeCa = (carro.quantidadePessoas + pessoas) - 5;
		return "O carro já está lotado!";
	}else{
		carro.quantidadePessoas+= pessoas;
	 	return "Já temos " + carro.quantidadePessoas + " pessoas no carro!";
	}
};


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
// 'preto'

// Mude a cor do carro para vermelho.
// carro.cor = 'vermelho';

// E agora, qual a cor do carro?
// 'vermelho'

// Mude a cor do carro para verde musgo.
//carro.cor = 'verde musgo';

// E agora, qual a cor do carro?
// 'verde musgo'

// Qual a marca e modelo do carro?
// 'Esse carro é um fiat palio'

// Adicione 2 pessoas no carro.
// 'Já temos 2 pessoas no carro!'

// Adicione mais 4 pessoas no carro.
//'Só cabem mais 3 pessoas!'

// Faça o carro encher.
//'Já temos 5 pessoas no carro!'

// Tire 4 pessoas do carro.
/*function removerPessoas(){
... carro.quantidadePessoas -= 4;
... return carro.quantidadePessoas;
... }*/

// Adicione 10 pessoas no carro.
//'Só cabem mais 4 pessoas!'

// Quantas pessoas temos no carro?
//1
```
