---
date: 2017-11-28 00:06:40-03:00
title: Sprites e texturas
category: sfml-series
tags:
  - cpp
  - serie
  - sfml
image: /files/2017/11/sprites-and-textures.jpg
---
![Sprite]({{site.baseurl}}/files/2017/11/sprites-and-textures.jpg)

Hora de dar um RFRSH nessa série... opa... quer dizer :flushed:\\
Vamos dar mais vida na série mais aleatória deste diário com sprites e
texturas! :smile:

<!--more-->

Jabá a parte, vamo falar de coisa boa, vamo falar de tekp...

-- Para com isso cara... já deu :disappointed:

Tá... bem, onde parei... ah sim! Até agora só falei sobre a coisas não visuais.
Mas agora entremos no mundo de magia que é o módulo _Graphics_. E para isso
veremos como funciona um _[Sprite](https://www.sfml-dev.org/documentation/2.4.2/classsf_1_1Sprite.php)_.

-- Que djabo é isso? Não é o refrigerante não né? :unamused:

Claro que não! Na verdade a única coisa em comum é o nome. Um _Sprite_ é na
verdade uma textura colada numa retângulo.

-- E o que ser textura? Seria a sensação de caspento de uma lixa?

É... não. Nesse caso, textura é apenas outro nome para imagem, porém com o único
propósito de ser colada numa entidade 2D. Uma entidade pode ser qualquer uma das
formas que eu falei no post sobre
[Formas e primitivas]({{ site.baseurl }}{% post_url 2016/2016-05-12-formas-e-primitivas-da-sfml %}).

-- Certo... então como eu uso! Quero fazer meu joguinhos com ibagens lecais. :smiley:

Tudo bem, mas antes temos que ver como carregar as texturas para colar nos
retângulos, círculos, etc. Para isso precisamos estudar cálculo I, II, III, ao
infinito e além...

Brincadeira, pra carregar é só fazer algo assim...

```cpp
sf::Texture texture;
if (!texture.loadFromFile("image.png")) {
    // erro...
}
```

... e colar num _Sprite_ ...

```cpp
sf::Sprite sprite;
sprite.setTexture(texture);
```
... e por fim desenhar na tela.

```
window.draw(sprite);
```

Tão complexo quando resolver uma integral... he he he... :disappointed:

-- Pô legal, mas tá tudo branco! Eu criei esta função pra carregar um _Sprite_
```cpp
sf::Sprite carregaSprite(std::string fileh) {
    sf::Texture textura;
    textura.loadFromFile(fileh);

    return sf::Sprite(texture);
}
```

Aí que tá... quando você carrega dessa forma a textura é deletada ao sair do
escopo da função. Assim, as textura devem sempre existir em algum lugar como
um TextureManager ou coisa do tipo.

-- Deu certo depois que coloquei no topo do main. :smile:

... É, que seja.

Uma das coisas que eu ainda não falei sobre os _Sprites_ é que ele pode ser
transformado,  e suavisado, e repetido, e colorizado, etc.
Veja a documentação para mais detalhes. Tô com preguiça de sair colando código
por aqui :stuck_out_tongue:

-- Vou ver aqui... OMG! Witchcraft!

Certo que tem mais coisas sobre _Sprites_, como: otimização,
diferença entre _Sprite_ e _Image_, como usar com _OpenGL_ e por aí vai.
Como isso é besteira pra quem tá começando, resolvi tirar.

## 3C

Neste post lixo, vimos um troço que pode ser usado para colocar uma imagem na
tela, os _Sprites_. Há algumas regras pra seguir quando for usar, mas nada de
muito complicado. No fim, eu não ganhei um patrocínio da Sprite, mas pelo menos
terminei outro post da série. Falou e até a próxima.
