# JavaScript

## Data Types

1. number
* Infinity
* NaN (Not a Number)
2. string
3. boolean
4. null
5. undefined
6. object
* array
7. function

## Comandos

* window.prompt()
* window.alert()
* window.confirm()

## Conversão de String -> Number

* Number.parseInt(n)
* Number.parseFloat(n)
* Number(n)

## Conversão Number -> String

* String(n)
* n.toString()

## Formatando Strings

* Template String: `Eu estou aprendendo ${s}`
* s.length
* s.toUpperCase()
* s.toLowerCase()

## Float Number

* n.toFixed(2) // duas casas decimais
* n.toFixed(2).replace('.', ',') // trocar ponto (padrão) para vírgula
* n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // coloca o R$

## Operadores

1. aritméticos
* \+
* \-
* \*
* /
* %
* \**
2. atribuição
3. relacionais
* \>
* <
* \>=
* <=
* ==
* ===
* !=
* !==
4. lógicos
* ! (negação)
* && (conjunção 'e')
* || (disjunção 'ou')
5. ternários
* ?
* :

## Ordem de Precedência

1. aritméticos
2. relacionais
3. lógicos (! -> && -> ||)

## Entendendo o DOM

A sigla DOM significa "Document Object Model" ("Modelo de Objetos para Documentos) e é utilizada nos navegadores como o Google Chrome quando o JavaScript é utilizado.

Basicamente, é composto por um conjunto de Objetos dentro do navegador que dão acesso aos componentes presentes dentro do site. Ele não funciona dentro do NodeJS, por exemplo, apenas em navegadores.

Para compreender bem o DOM, é preciso conhecer a "Árvore DOM": um modelo de hierarquias entre objetos que é a maneira como o DOM "observa" e trabalha com os elementos dentro de um navegador. A raiz dessa árvore começa na janela do navegador -> "window". A partir daí, pode seguir diversos caminhos da hierarquia de objetos.

Um exemplo de rota dentro da Árvore de Hierarquias do DOM:

 WINDOW -> DOCUMENT -> HTML -> BODY -> P -> STRONG.

Acima temos elementos de window até strong. Por meio do DOM, posso também selecionar cada elemento de uma rota na árvore e usá-los para fazer alguma coisa com o JavaScript.

## Métodos de Acesso no DOM

Para acessar meus elementos (e usá-los para algo), são cinco métodos:

1. por **Marca**: ```getElementsByTagName()```
2. por **ID**: ```getElementById()```
3. por **Nome**: ```getElementsByName()```
4. por **Classe**: ```getElementsByClassName()```
5. por **Seletor** (CSS): ```querySelector()``` ou ```querySelectorAll()```

Para usar meus elementos, devo acessá-los por um dos métodos acima e guardar esse elemento em uma variável. Agora, com JavaScript, consigo manipular esta variável para fazer outras coisas.

Lembrando que, dentro do querySelector(), utilizar # é para div e . é para classe.

## Eventos DOM

Evento é tudo que pode acontecer com um elemento da janela. 

No exercício 06 da aula 10 (no código) vemos vários eventos de mouse (clique, entrada e saída do cursos sobre uma área delimitada [em uma div]) que quando detectados (listen) produzem  um efeito na janela.

Procurar mais sobre eventos que podem acontecer no DOM (DOM Events) em: [https://developer.mozilla.org/pt-BR/docs/Web/Events](link)

### Obs. Exercício 06

Substituí "onmouseenter" por "onmouseover.

## Exercício 09

O exercício 09 foi originalmente modificado para ser a minha solução do desafio proposto pelo prof. Guanabara ao final da aula 10. Por isto, se tornou um arquivo HTML com JavaScript. 

### Importância do .value ##

Neste exercício, perguntamos ao usuário de onde ele é: se digitar Brasil (com letra maiúscula), a tela vai dizer que é Brasileiro; se digitar qualquer outra coisa, vai dizer que é Estrangeiro. 

Para pegar as informações que o usuário digita, inseri um input-text e um input-button. O segredo (que levei um tempo pra entender) é que o conteúdo desse input-text é visto na forma de um objeto (por meio do DOM) e, neste objeto, precisei pegar o "value" dele... que resulta em uma string. Esta string é o que o usuário digitou no campo. Para fazer isso as linhas a seguir foram importantes:

```
var pais = window.document.querySelector('input#origem')
var pais_string = pais.value
```

E a partir daí, manipulei a variável "pais_string" para conseguir o que queria.
