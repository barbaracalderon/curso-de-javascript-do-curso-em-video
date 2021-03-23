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

## Switch (Condição Múltipla)

Switch é um tipo de condicional que, diferente do IF/ELSE, não serve para todos os momentos. Sua estrutura é:

```
switch (expressão) {
    case valor1:
    {bloco aqui}
    break                   //obrigatório//

    case valor2:
    {bloco aqui}
    break

    case valor3:
    {bloco aqui}
    break

    default:
    {bloco aqui}
    break
}
```

O switch só funciona com números ou strings. É mais válido se você tem valores pontuais, não para avaliar intervalos de informação -> neste caso, é mais interessante utilizar o IF/ELSE.

## Exercício 14 - Imagens quadradas

O exercício 14 está com as imagens em um formato diferente do que foi apresentado no curso. Como não tenho acesso ao Photoshop, optei por deixar as imagens no formato retangular. Para torná-las perfeitamente quadradas, utilizei CSS no arquivo de estilo. Ficou assim para deixá-las quadradas:

```
#foto img {
    height: 120px;
    width: 120px;
}
```

## Exercício 15 - Imagens de idades

No exercício 15, as minhas imagens tinham uma dimensão de 120x120 pixels... o que significa que elas ficavam na mesma linha do texto. Para corrigir isso, deixar a imagem abaixo do texto, mexi no CSS e coloquei o seguinte conteúdo:
```
img {
    padding: 45px;
}
```
E o problema foi resolvido.

## Estruturas de Repetição no JS

São três estruturas de repetição estudadas neste curso:

1. Repetições com teste no início (WHILE)
2. Repetições com teste no final (DO WHILE)
3. Repetições com controle (FOR)

### Sobre estrutura de repetição com variável de controle

A estrutura "for" tem três partes:

```
for(inicio; teste; inc) {

}
```
O início é a inicialização da estrutura; teste é referente ao teste lógico que é realizado; e inc refere-se a incrementação (adição de uma unidade na variável). Enquanto o resultado do teste lógico for (normalmente) True, a repetição acontece. No momento que o resultado do teste lógico for False, o laço de repetição é desfeito e a estrutura é encerrada.

Lembrando: o resultado do teste lógico pode mudar porque ocorre um incremento. A cada incremento, o teste lógico é feito novamente.

### Comparação entre estrutura while e for

Abaixo, as duas estruturas realizam a mesma operação.

```
var c = 1
while (c <= 10) {
    bloco A
    c++
}

for (var c = 1; c <= 10; c++) {
    bloco A
}
```

## Variáveis

### Variáveis Simples
Capaz de armazenar apenas um valor por vez.

### Variáveis Compostas
São capazes de armazenar vários valores em uma mesma estrutura.

A variável composta também conhecido como "array" ou vetor. **O vetor é uma variável que tem vários elementos e cada elemento é composto por seu valor e por uma chave de identificação.**
