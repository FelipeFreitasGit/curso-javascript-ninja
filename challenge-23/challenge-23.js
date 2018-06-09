/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
(function(window, document){

  var $number = document.querySelectorAll('[data-js="number"]');
  var $operarcao = document.querySelectorAll('[data-js="operarcao"]');
  var $limpar = document.querySelector('[data-js="limpar"]');
  var $texto = document.querySelector('[data-js="texto"]');
  var $igual = document.querySelector('[data-js="igual"]');

  Array.prototype.forEach.call($number, function(button){
    button.addEventListener('click', funcNumber, false);
  });

  Array.prototype.forEach.call($operarcao, function(button){
    button.addEventListener('click', funcOperarcao, false);
  });

  $igual.addEventListener('click', funIgual, false);
  $limpar.addEventListener('click', funLimpar, false);

  function funcNumber(){
    $texto.value += this.value;
  }

  function funcOperarcao(){
    $texto.value = removerUltimoItem($texto.value);
    $texto.value += this.value;
  }

  function isLastItemAnOperation(number){
    var operations = ['+','-','*','/'];
    var lastItem = number.split('').pop();
    return operations.some(function(item){
      return item === lastItem;
    });
  }

  function removerUltimoItem(number){
    if(isLastItemAnOperation(number)){
      return number.slice(0, -1);
    }
    return number;
  }

  function funIgual(){
  $texto.value = removerUltimoItem($texto.value);
  var allValues = $texto.value.match(/\d+[+*/-]?/g);
  $texto.value = allValues.reduce(function(accumulated, actual){
    var firstValue = accumulated.slice(0, -1);
    var operador = accumulated.split('').pop();
    var lastValue = removerUltimoItem(actual);
    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
    switch(operador){
      case '+':
        return (Number(firstValue) + Number(lastValue)) + lastOperator;
      case '-':
        return (Number(firstValue) - Number(lastValue)) + lastOperator;
      case '*':
        return (Number(firstValue) * Number(lastValue)) + lastOperator;
      case '/':
        return (Number(firstValue) / Number(lastValue)) + lastOperator;
    }
  });

  }

  function funLimpar(){
    $texto.value = 0;
  }

}(window, document));
