(function(DOM) {
  'use strict';

  function DOM(elements){
    if(!(this instanceof DOM))
      return new DOM(elements);
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventType, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.off = function off(eventType, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.removeEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.get = function get(){
    return this.element;
  };

  DOM.prototype.forEach = function forEach(){
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map(){
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter(){
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce(){
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight(){
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every(){
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some(){
    return Array.prototype.some.apply(this.element, arguments);
  };

  DOM.isArray = function isArray(obj){
    return Object.prototype.toString.call(param) === '[object Array]';
  };

  DOM.isObject = function isObject(obj){
    return Object.prototype.toString.call(param) === '[object Object]';
  };

  DOM.isFunction = function isFunction(obj){
    return Object.prototype.toString.call(param) === '[object Function]';
  };

  DOM.isNumber = function isNumber(obj){
    return Object.prototype.toString.call(param) === '[object Number]';
  };

  DOM.isString = function isString(obj){
    return Object.prototype.toString.call(param) === '[object String]';
  };

  DOM.isBoolean = function isBoolean(obj){
    return Object.prototype.toString.call(param) === '[object Boolean]';
  };

  DOM.isNull = function isNull(obj){
    return Object.prototype.toString.call(param) === '[object Null]'
    || Object.prototype.toString.call(param) === '[object Undefined]';
  };
  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  var app = (function(){
    return {
      init: function init(){
        this.getInfoEmpresa();
        this.initEvents();
      },

      initEvents: function initEvents(){
        DOM('[data-js="form-car"]').on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e){
        e.preventDefault();
        var $tableCar = DOM('[data-js="table-car"]').get();
        $tableCar.appendChild(app.createNewCar());
      },

      createNewCar: function createNewCar(){
        var $fragment = document.createDocumentFragment();
        var $tr = document.createElement('tr');
        var $tdImage = document.createElement('td');
        var $Image = document.createElement('img');
        var $tdBrand = document.createElement('td');
        var $tdYear = document.createElement('td');
        var $tdPlate = document.createElement('td');
        var $tdColor = document.createElement('td');

        $Image.setAttribute('src', DOM('[data-js="input-img"]').get().value)

        $tdImage.textContent = DOM('[data-js="input-img"]').get().value;
        $tdBrand.textContent = DOM('[data-js="input-marca"]').get().value;
        $tdYear.textContent = DOM('[data-js="input-ano"]').get().value;
        $tdPlate.textContent = DOM('[data-js="input-placa"]').get().value;
        $tdColor.textContent = DOM('[data-js="input-cor"]').get().value;

        $tr.appendChild($tdImage);
        $tr.appendChild($tdBrand);
        $tr.appendChild($tdYear);
        $tr.appendChild($tdPlate);
        $tr.appendChild($tdColor);
        $tdImage.appendChild($Image);

        return $fragment.appendChild($tr);
      },

      getInfoEmpresa: function getInfoEmpresa(){
        var ajax = new XMLHttpRequest();
        ajax.open('GET', '/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.setInfoEmpresa, false);
      },

      setInfoEmpresa: function setInfoEmpresa(){
        if(!app.isReady.call(this))
          return;

        var data = JSON.parse(this.responseText);
        var $nome = DOM('[data-js="nome"]').get();
        var $telefone = DOM('[data-js="telefone"]').get();
        $nome.textContent = data.name;
        $telefone.textContent = data.phone;
      },

      isReady: function isReady(){
        return this.readyState === 4 && this.status === 200;
      }
    };
  })();

  app.init();
})(/*window.DOM*/);
