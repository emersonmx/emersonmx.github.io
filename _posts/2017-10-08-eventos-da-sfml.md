---
date: 2017-10-22 21:50:58+00:00
title: Eventos da SFML
category: sfml-series
tags:
  - cpp
  - serie
  - sfml
image: /files/eventos-sfml.png
---
![eventos-sfml.png]({{site.baseurl}}/files/eventos-sfml.png)

Até então, com o que foi visto, só conseguiriamos fazer animações na SFML.
Para adicionar interatividade ao jogo seria preciso injetar alucinógenos.
Então, vamos falar dos eventos da SFML! O que são, como são usados e muito mais
no post da série mais aleatória deste blog. :smiley:

<!--more-->

Sim! Vamos para parte lecal da coisa.\\
Tudo se resume a classe [`sf::Event`](https://www.sfml-dev.org/documentation/2.4.2/classsf_1_1Event.php).
Essa bagaça possui todas as artimanhas para lidar com mouse, teclado,
controles, etc. Enfim, permite capturar eventos para adicionar alguma
interatividade ao jogo.

-- Sim, mas como uso esse troço?

Antes de falar do uso é preciso entender uma coisa. A classe `sf::Event` é uma
_union_. Vulgo: POG, Gambiarra, eu vi você implementando herança em C usando
_union_.

Zueira a parte.\\
Na explicação mais completa, a classe `sf::Event` é formada por
um atributo _type_ e a _union_ que é composta por todos os tipos de evento. E
como é de se esperar do C, você pode ter um evento do tipo _Keyboard_ e acessar
o evento do _Mouse_. Claro, nada garante que vai funcionar, pois a _union_
compartilha a memória com os outros tipos :stuck_out_tongue:\\
No fim, se você acessar apenas os dados do tipo correto, que é definido no
atributo _type_, não vai ter problema :smile:.\\
Agora que foi avisado, vamo seguindo!

-- Porra, que POG da bixiga! Você disse que a SFML era Orientada a Objetos e não
a gambiarras!

Certamente essa é uma parte que não é OO, mas ainda assim é aceitável, pois
é simple de implementar :laughing:.\\
E não é algo incomum, a [Godot] usa esse formato também.

Uma das forma mais comum do uso da `sf::Event` é para capturar o evento de
fechar da janela. Segue um trecho de código.

```cpp
bool running = true;
while (running) {
    sf::Event event;
    while (window.pollEvent(event)) {
        if (event.type == sf::Event::Closed) {
            running = false;
        }
    }
    // Aqui vai a lógica e o desenhos das coisas
}
// Finaliza o jogo
```

-- É até que é simples :expressionless:

É, nada de _instanceof_ pra lá e pra cá :grinning:\\
Continuando...

Atualmente a SFML permite capturar os seguintes eventos: Mouse, Teclado,
Controle, Toques, Sensores e Eventos da janela.  Dessas categorias de eventos,
há cinco eventos que eu acho interessantes, que são: _LostFocus_,
_GainedFocus_, _TextEntered_, _JoystickConnected_ e _JoystickDisconnected_.  Os
eventos _LostFocus_, _GainedFocus_, _JoystickConnected_ e
_JoystickDisconnected_. Podem ser usados para pausar o jogo quado a tela perder
o foco ou o controle desconectar. E o _TextEntered_ pode ser usado pela
interface gráfica.

Uma nota que eu preciso deixar sobre o evento _KeyPressed_.\\
Por padrão o evento _KeyPressed_ será gerado conforme a velocidade de repetição
definida no sistema operacional. Isso vai gerar vários eventos _KeyPressed_
caso uma tecla fique pressionada. Caso queira desativar, é só chamar
`window.setKeyRepeatEnabled(false)`.

-- Pronto! Cabou Cabaré Carai (3C)! :grinning:

Não, ainda não acabou :grinning:

Há ainda uma coisa que não falei. Que são os dispositivos de entrada global.
Eles são usado quando você só quer consultar o estado global do mouse, teclado
ou controle a qualquer momento.

-- Oxi e num é a mesma coisa dos eventos não? O,o

Não. Quando se usa `sf::Event` não há necessidade de um
`window.pollEvent(event)`. No caso da entrada global, você pode fazer apenas
isto (copiado e colado dos tutoriais da SFML :grin:).

```cpp
if (sf::Keyboard::isKeyPressed(sf::Keyboard::Left))
{
    // left key is pressed: move our character
    character.move(1, 0);
}
```

Isso lê o estado do teclado diretamente, até se a janela não estiver em foco.
Isso quer dizer que o personagem pode se mover caso a tela esteja minimizada.
Nada que verificar se a janela está ativa não resolva :joy:.

Para mais detalhes, ver
o [tutorial oficial](https://www.sfml-dev.org/tutorials/2.4/window-inputs.php).

## 3C

João acabou-se a farinha, e o querosene da cuzinha, no fejão burbui já
deu...

Não teve nada de muito complicado. Isso é algo que se vê muito nesse tipo de
biblioteca e em algumas engines por aí.\\
Despeço-me com esse código maroto de um quadrado que se move pela tela. Eu usei
eventos e os dispositivos de entrada. Você pode testar o negócio de mover o
jogador quando a tela estiver minimizada pra ver o tamanho da desgraça :grin:.

```cpp
/**
 * Build: g++ -o sfml_events sfml_events.cpp -lsfml-graphics -lsfml-window -lsfml-system
 */

#include <iostream>

#include <SFML/Graphics.hpp>

using namespace std;

int main() {
    constexpr const int SPEED = 200;

    sf::RenderWindow window(sf::VideoMode(640, 480), "Eventos SFML");

    sf::RectangleShape shape;
    sf::Vector2f pos(320, 240); // Mei da tela
    sf::Vector2f move{}; // inicializa tudo com zero (0,0)
    shape.setSize({ 50, 50 }); // Issé um Vector2f(50.0f, 50.0f) :)
    shape.setOrigin(25, 25); // Mei do cadado

    sf::Clock clock;

    bool running = true;
    while (running) {
        sf::Event event;
        float delta = clock.restart().asSeconds();

        while (window.pollEvent(event)) {
            if (event.type == sf::Event::Closed) {
                running = false;
            }
        }

        move = {}; // Zera (0,0) o vetor move :)
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::Up)) {
            move.y = -SPEED;
        } else if (sf::Keyboard::isKeyPressed(sf::Keyboard::Down)) {
            move.y = SPEED;
        }
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::Left)) {
            move.x = -SPEED;
        } else if (sf::Keyboard::isKeyPressed(sf::Keyboard::Right)) {
            move.x = SPEED;
        }

        // Multipliquei por delta só pra deixar o movimento suave :D
        pos += move * delta;
        shape.setPosition(pos);

        window.clear(sf::Color::Black);
        window.draw(shape);
        window.display();
    }

    return 0;
}
```

[Godot]: https://godotengine.org/
