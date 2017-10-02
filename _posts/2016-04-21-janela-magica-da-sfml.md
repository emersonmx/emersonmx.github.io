---
layout: post
title: A janela mágica da SFML
date: 2016-04-21 15:00:20+00:00
category: sfml-series
tags:
  - cpp
  - serie
  - sfml
---

Sim, tratemos de magia! Hoje vamos ver um pouquinho da Hogwarts dos bruxos da
SFML. O módulo
_[Graphics](http://www.sfml-dev.org/documentation/2.3.2/group__graphics.php)_, em
específico a classe
_[RenderWindow](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1RenderWindow.php)_.
Então, bora lá? :D

<!--more-->

[Vimos que o módulo
_Window_]({{ site.baseurl }}{% post_url 2016-02-17-sfml-e-seus-modulos %})
define uma janela simples sem nenhuma firula que você pode usar para fazer seus
paranauêses com _OpenGL_. Porém há uma versão mágica, cheia de glitter e
frufrus. Ela é a _RenderWindow_.

Diferente da janela simples, essa janela mágica possui meios para desenhar
qualquer coisa do tipo
_[Drawable](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1Drawable.php)_.
Resumindo uma réca de comando _OpenGL_ em um simples:

```cpp
window.draw(meuDesenho);
```

-- Armaria, só podia ser bruxaria mesmo. _Yo no creo que eso esta a acontecer_
(espanhol nois sabe).

Então créa! De um
_[VertexArray](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1VertexArray.php)_ até
uma forma personalizada basta um simples _window.draw(meuDesenho)_.

-- Vixi e tem mais o que? o,o

Se você olhar a API da _RenderWindow,_ você vai ver uma ruma de coisa que você
num sabe pra que serve e o método _window.clear(),_ que substitui o _glClear_.
O resto das coisas para essa janela está em outras classes, como:
_[CircleShape](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1CircleShape.php)_,
_[ConvexShape](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1ConvexShape.php)_,
_[RectangleShape](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1RectangleShape.php)_,
_[Sprite](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1Sprite.php)_,
_[Text](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1Text.php)_,
_[VertexArray](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1VertexArray.php)_,
_[View](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1View.php)_, etc.
Eu vou falar sobre essas classes mais pra frente :P

-- ...certo... e como que eu uso esse troço?

Essa é a parte mais complicada. Quando você cria uma janela normal você faz
algo parecido com isso:

```cpp
sf::Window window(sf::VideoMode(640, 480), "Magic Window");
```

Tudo certo né? Agora vem o pulo do gato preto de rabo cromado. Você posiciona o
cursor do texto entre _sf::_ e _Window_ e digita _Render_, que finda nisso
aqui:

```cpp
sf::RenderWindow window(sf::VideoMode(640, 480), "Magic Window");
```

É um negócio tão complicado que chega faz medo :D

-- Pooorraaannn o,o

Então jovi, muito simples né? A partir de agora só vou usar a _RenderWindow_
nos exemplos. Exceto em casos que seja muito simples e eu queira ficar apenas
com a implementação da _Window_. Tudo beleza? Então inté a próxima :D
