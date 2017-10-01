---
title: "Geradores em Python? Quê isso? É de comer?"
date: 2015-10-28 01:24:18+00:00
category: programacao
tags: curiosidades python
layout: post
---

"Hmm... Geradores, tá sei, é apenas um tipo de função com um nome diferente...".

Eu pensei algo assim quando vi pela primeira vez. Tudo errado! O modo como ele
funciona é meio diferente e totalmente WTF?! O,o

<!--more-->

Veja o seguinte código (funciona no _Python_ 2 e 3 :D)

```python
#!/usr/bin/env python
# encoding: utf-8

for i in range(10):
    print(i),
```

Se você viu o [artigo sobre a diferença entre o range e
xrange]({{ site.baseurl }}{% post_url 2013-11-29-range-ou-xrange %}).
Já deve manjar um pouco dos paranauê. No _Python_ 2 há essas duas funções, já
no _Python_ 3 o `xrange` foi renomeado para `range` e retorna o que ele sempre
retornou, um gerador!

**Oxi, e puiquê essa diferença entre as versões?**

A galera deve ter achado o `range` inútil e resolveu deixar o `xrange` que é
mais rápido.

**Sim, pelo quieu tô vendo um gerador é apenas uma função**

Você pode pensar assim, mas saiba que o gerador faz uso do `yield` que não
"termina" a função, enquanto que uma função normal usa o `return` que termina a
execução. Veja o código abaixo para duas versões de uma implementação que
retorna a Sequência de Fibonacci (carinhosamente apelidada de fifi).

```python
#!/usr/bin/env python
# encoding: utf-8

# Implementação retirada da documentação oficial: https://docs.python.org/3/tutorial/introduction.html#first-steps-towards-programming

def fifi_gerador(length=10):
    a, b = 0, 1
    for i in range(length):
        yield b
        a, b = b, a+b
        print 'Retornando o valor {}'.format(b)

def fifi_lista(length=10):
    a, b = 0, 1
    saco = []
    for i in range(length):
        saco.append(b)
        a, b = b, a+b
    print 'Retornando toda a lista'
    return saco

print 'Gerador'
for i in fifi_gerador(10):
    print(i)

print 'Lista'
for i in fifi_lista(10):
    print(i)
```

Veja que diferente de _fifi_lista_ que retorna TÔTOS os números, a
_fifi_gerador _produz um número por iteração do _for_. Isso permite emendar
outro `for` que pode dar outro `yield` e mais ôto e ôto e vai indo sá
carai. Taqui um exemplo de cabaré que usa `yield` em mais de um local.

```python
#!/usr/bin/env python
# encoding: utf-8

def cabare():
    primeiro = range(10)
    segundo = ['Mãe Joana', 'Dona Marisa', 'Sol e Lua', 'Zé Muringa']
    terceiro = 10, 20, 30, 40

    for p in primeiro:
        yield p
    for s in segundo:
        yield s
    for t in terceiro:
        yield t

for n in cabare():
    print(n)
```

Esse código produz respectivamente: os valores de 1 a 10, alguns nomes de
cabarés e por ultimo o preço das puta de cada cabaré. #SQN

Os que manjam dos paranauê dos padrões de projeto, já devem ter sentido esse
ki. Se você pensou "essa merda é um iterator", você está certo. Resumindo, um
gerador é apenas uma forma simples de implementar um iterador em _Python_
(Chupa Java :D).

E o que podemos aprender com isso abiguinhos?
  * Eu aprendi qui um gerador num é uma função
  * Qui ele faz a merma merda que um iterator
  * Qui Java é uma merda
  * Que eu posso aninhar uma ruma de gerador para fazer um cabaré
  * Que não é de comer
  * E que as puta de Zé muringa cobra 4...


É, chega por hoje, falow valeu :D

## Referência
1. [https://wiki.python.org/moin/Generators](https://wiki.python.org/moin/Generators)
