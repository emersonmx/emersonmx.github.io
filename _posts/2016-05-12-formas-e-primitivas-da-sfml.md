---
title: "Formas e primitivas da SFML"
date: 2016-05-12 16:08:57+00:00
category: sfml-series
tags: cpp serie sfml
layout: post
---

Yaê cambada de doido! Tudo de boina? Depois do [post do milênio
passado]({{ site.baseurl }}{% post_url 2016-04-21-janela-magica-da-sfml %}){:target="_blank"} você
deve tá se perguntando como usar a janela mágica. Portanto,  neste post vamos
dar utilidade a essa janela ao usar as formas e primitivas da SFML.

A SFML disponibiliza a implementação de círculis, cadadis, formis convexis,
linhis e pontis. E caso precise de algo mais milaborante você pode estender a
classe
[`sf::Shape`](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1Shape.php){:target="_blank"}.
Na prática não tem muito o que aprender desses troço não. Depois que você criou
e definiu algumas propriedades da forma, é só chamar um
`window.draw(minhaFormaMarota)` e crew.

-- Então pra quê tá fazendo o post? Ò,ó

-- Só pra mostrar que existe :D\\
mas vamos falar de cada uma detalhadamente.

<!--more-->

## Círculo

Para desenhar essa forma você vai criar um objeto da class
[`sf::CircleShape`](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1CircleShape.php){:target="_blank"}.
e definir os atributos de raio, cor da linha/fundo, textura, posição, rotação,
etc. Definiu o que quer? Agora é só dá um `window.draw(circulo)`, difícil né?

-- Oxi! Só?

Praticamente sim :P\\
Mas eu tenho algo que pode ser interessante. O círculo é um polígono
aproximado, pois a praca de vidju não sabe desenhar um círculo perfeito. Se
você passar um número para o segundo parâmetro do construtor ou definir via
`setPointCount()`, o círculo vai ser desenhado com a quantidade de pontos
informada. Assim, caso você passe 3, o círculo será um triângulo equilátero,
caso passe 4, será um quadrado, caso passe 5 um pentágono, com 6, hexágono, e
por aí vai até chegar num momento que você não consiga contar os lados e o bixo
vire um círculo :D

## Retângulo

A classe
[`sf::RectangleShape`](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1RectangleShape.php){:target="_blank"}
tem todos os métodos de afrescalhamento e transformação da classe de círculo.
Logo, você pode mudar a cor da linha e do preenchimento, colocar uma textura
gay, posicionar o bixo na puta que pariu, esticar feito espaguete e por aí vai.
Criou o objeto e definiu os atributos? passa pro `window.draw()`.

## Forma convexa

O que seria esse troço? [Veja a classificação e a imagem no artigo da
wikipédia](https://pt.wikipedia.org/wiki/Pol%C3%ADgono#Classifica.C3.A7.C3.A3o_2){:target="_blank"}.\\
Se entendeu do que se trata, nem tente desenhar uma forma concava com a
classe `[sf::ConvexShape](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1ConvexShape.php){:target="_blank"}`.
Se você quiser desenhar uma forma côncava, você terá que quebrá-las em formas
convexas. Essa classe é praticamente uma círculo sem o raio. Assim como as
outras formas, você pode definir as viadagens e as transformações e depois
passar pra janela mágica.

## Linha

A linha nada mais é do que um par de pontos. Elas são desenhadas passando um
[sf::VertexArray](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1VertexArray.php){:target="_blank"}
ou
[sf::Vertex](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1Vertex.php){:target="_blank"}[]
para a janela mágica. Pro primeiro o desenho é um
simples `window.draw(meuVertexArray)`, já o segundo você
usa `window.draw(linha, 2, sf::Lines)`. É praticamente a mesma coisa, só muda o
local onde vai ficar o `sf::Lines`. Eu prefiro o `sf::VertexArray` :)

## Pontos

Os pontos meu jovi, é um simples `sf::Vertex` ou um `sf::VertexArray` com 1
ponto. No caso do `sf::Vertex` seria algo como  `window.draw(&point, 1,
sf::Points)`. E mais uma vez eu ainda prefixo o `sf::VertexArray` :D

## Formas mirabolantes

Neste caso, tudo o que você tem que fazer é estender a classe `sf::Shape`,
implementar os métodos `getPointCount()` e `getPoint()` e quando sua forma
modificar os pontos você deve chamar o `update()`. Isso avisa a classe base
para computar a geometria interna.

## 3C

E neste post maravilhindo, você viu como usar as formas, primitivas e como
criar sua própria forma (aham pense...). Inté o próximo post :D
