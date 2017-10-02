---
layout: post
title: range ou xrange?
date: 2013-11-29 14:50:26+00:00
category: programacao
tags:
  - curiosidades
  - python
---

Python é uma caixinha de surpresas. De vez em sempre aparece algo que você quer
fazer e descobre que já existe ([maldito, mal posso ver seus
movimentos!](http://www.catb.org/jargon/html/G/Guido.html)).
Pois bem, faz um tempo que descobri a diferença entre eles, mas só agora
entendi o verdadeiro poder por traz dessas funções.

<!--more-->

A explicação mais simples que posso dar de início é que o `range` cria uma
lista e o `xrange` não. Deu pra sacar as maracutaia?

**Ceuto, mai pa mim é a merma merda...**

Beleza, então imagine o seguinte, dado uma lista de 10 elementos eu posso
iterar sobre ela usando o range da seguinte forma:

```python
for i in range(len(minha_lista)):
    print minha_lista[i]
```
e iterar usando o xrange da seguinte forma:
```python
for i in xrange(len(minha_lista)):
    print minha_lista[i]
```
Sem muita diferença, né? então faça o seguinte teste execute `range(100000000)`
e `xrange(100000000)`. Qual que possui o retorno visual mais rápido?

**Ah, o xrange né.**

Isso, o xrange é mais rápido pois não precisa criar uma lista. Ele funciona
como o bom e velho `for` do C/C++. Aquele `for(i = 0; i < n; i++) {...}` e por
isso tende a ser mais rápido que o range, pois só precisa incrementar o valor
`i` e não criar uma lista com os índices.

**Ah que merda, então quando vê que o programa tá lento é só usar o xrange?**

É mais num é. Mesmo parecendo besteira, o range e o xrange são de dois tipos
diferentes. Onde um é do tipo Iterator e outro do tipo Generator,
respectivamente. Esses tipos são usados para iterar sobre algo, mas em alguns
casos é melhor usar um Generator do que um Iterator. Em resumo, se você só
precisa iterar de formas simples, use o xrange, caso seja preciso criar uma
lista, use o range. Tudo vai depender do que você quer fazer!

Parece besteira tudo que eu falei, mas isso é uma das coisas do Python que você
pode passar batido e acabar xingando a linguagem pela sua natureza
interpretada. Em outro _Post_, irei falar sobre algo que esta diretamente
ligado a Iterators e Generators, os comandos `return` e `yield`.
