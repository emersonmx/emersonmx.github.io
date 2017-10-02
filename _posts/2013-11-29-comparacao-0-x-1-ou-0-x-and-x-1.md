---
layout: post
title: Comparação (0 <= x <= 1) ou (0 <= x and x <= 1)?
date: 2013-11-29 13:32:21+00:00
category: programacao
tags:
  - curiosidades
  - python
---

Você sabia que em Python você pode fazer uma comparação usando esta forma `(0.0
<= x <= 1.0)`, que é muito usada na matemática, para saber se um valor está no
intervalo entre 0 e 1 sem que cause um erro semântico? Não?! É rapaz, **Python
é chei dar maracutaia!** ([Guido\'s time
machine](http://www.catb.org/jargon/html/G/Guido.html)).

<!--more-->

**Mai puiquê num funfa nas ôta lingage?**

Em C/C++ vai compilar, mas o resultado não será o esperado. Um exemplo: Dado
que `x=5.0`, ao ser feito a comparação `(0.0 <= x)` o resultado será
verdadeiro `(1)` e esse valor verdadeiro `(1)` será comparado com a segunda
condição `(1 <= 1.0)` e pro fim será verdadeiro... Eh. Viu a merda?

**Mai isso num era pacontecer no Python também não?**

Não, pois eu acredito que por Python ser uma linguagem simples de entender,
usar a forma `(0 <= x and x <= 1)` deixa o código "ilegível". Então,
provavelmente, ao encontrar a forma mais simples e legível, por debaixo dos
pano, o Python converte para `(0 <= x and x <= 1)`.

**Você falou pu caso C e C++, mas e pu Java?**

No caso do Java, por ser uma linguagem a prova de noobice, nunca que o javac
iria deixar uma comparação entre um boolean e qualquer outro tipo diferente de
boolean. Por exemplo, digamos que x, 0 e 1 sejam `floats`, ao
analisar a comparação `(0.0 <= x <= 1.0)`. O analisador vai entender algo
desse tipo:\\
`((float <= float) <= float)`\\
`(boolean <= float)` (Erro detectado!)\\
Assim a compilação termina e avisa ao programador que ele ta fazendo cagada,
que é um inútil, que não sabe programar, que teria sido melhor ir ver o filme
do Pelé, que isso vai explodir o computador e todo tipo de besteira. É ne, é a
vida **'-.-**

Então, o que posso dizer, sou a favor de usar funcionalidades que a linguagem
disponibiliza, contanto que a funcionalidade deixe o código legível. E caso
queira usar esse estilo de comparação em outras linguagens, vai ter que ficar
na vontade.

o ruim é ter que se contentar com algo do tipo `(0.0 <= x && x <= 1.0)`.
