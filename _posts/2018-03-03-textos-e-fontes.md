---
date: 2018-03-02 23:00:00-03:00
title: Textos e fontes
category: sfml-series
tags:
  - cpp
  - serie
  - sfml
---

Tratemos de texto, como este que você está lendo, só que do ponto de vista de
um de uma aplicação SFML. Como você faz pra mostrar esse tipo de informação pro
usuário? Como carrego uma fonte? Como define um estilo? E por aí vai. Como
estamos falando de SFML você já deve saber que isso é fácil né? Então ramu lá.

<!--more-->

-- Ah! Como é a SFML acho que é só colocar uma tag `<p>Meu texto</p>` :smile:

Calma que estamos programando em C++ e não em <span title="Programar em HTML...
tá certo :D">"HTML"</span> :stuck_out_tongue:<br>
Na SFML essa parte é quase como você estivesse inserindo um texto num editor de
imagens. Você seleciona a fonte; Define um estilo; E escreve o texto.

-- Massa! Já tô lôco pra fazer os jogo tudo em Comic Sans!

:disappointed:<br>
Ah... vamo lá...

Como foi dito, a primeira coisa é escolher a fonte. No caso da SFML, você
precisa carregar a fonte do disco. Isso é feito com a função `loadFromFile()`,
que é um método muito comum nessas classes de assets da biblioteca.

```cpp
sf::Font fonte;
if (!fonte.loadFromFile("comic_sans.ttf")) {
    // Deu erro porra!
}
```

-- Lecal! :heart_eyes:

A classe [sf::Font][sf::Font] possui uma ruma de métodos para o caso de você
querer implementar um renderizador de texto com tags HTML...

-- :heart_eyes:

Você só precisa pegar os glifos, que é a representação gráfica de um caracter,
e desenhá-los na tela usando a textura da classe sf::Font. Não vou entrar em
mais detalhes pois esse post não é sobre isso :stuck_out_tongue:

-- :disappointed:

Mesmo que você não tenha um renderizador de "HTML". A SFML tem por padrão a
classe [sf::Text][sf::Text] que permite você desenhar textos estilizados de
forma simples. Algo desse tipo:

```cpp
sf::Text texto;

// Seleciona a fonte que será usada no texto
text.setFont(fonte);

// Define o texto que será desenhado
text.setString("AQUI É BORIBILDER PORRA!");

// Define o tamanho dos caracteres
text.setCharacterSize(24); // em pixels

// Define a cor
text.setFillColor(sf::Color::Red);

// Define o estilo do texto
text.setStyle(sf::Text::Bold | sf::Text::Underlined);

// E quando for desenhar é só chamar o draw()
window.draw(text);
```

Pronto jovem, agora já dá pra criar vergonha na cara e trocar as imagens de
textos dos joguinhos que você fez por textos de verdade. E com isso vou ficando
por aqui, falow.

[sf::Font]: https://www.sfml-dev.org/documentation/2.4.2/classsf_1_1Font.php
[sf::Text]: https://www.sfml-dev.org/documentation/2.4.2/classsf_1_1Text.php
