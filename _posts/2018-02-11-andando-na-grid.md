---
date: 2018-02-10 23:37:29-03:00
title: Andando na Grid
category: rng
tags:
  - godot
---

Ultimamente estou brincando com a [Godot][godot] e resolvi fazer um protótipo
onde o jogador anda numa Grid. Eu tomei como base o exemplo do
[GDquest][gdquest] e no fim surgiu [essa POG][grid-move].

<!--more-->

A implementação foi daquele jeito. Analisei o exemplo do GDquest, criei um novo
projeto na Godot, defini algumas configurações, criei o nó principal e salvei a
cena. Com o projeto configurado, eu criei e configurei um nó do tipo TileMap,
filho do nó principal, e adicionei um script com alguns métodos para facilitar
o preenchimento da Grid. Criei também um nó do tipo Node2D, filho do nó
principal, pro jogador e configurei o [visualizador de grid][grid-vizualizer],
que adaptei do exemplo, num Node2D pra mostrar a Grid.

Eu não ia muito com a ideia de colocar o jogador dentro de um TileMap. Eu
queria que a Grid que limita os movimentos do jogador fosse apenas um
componente e não um nó pai. Daí tirei o jogador de dentro e criei uma
referência pra grid via script no nó principal (tive que usar o `_enter_tree()`
pra isso). Assim o jogador teria acesso a Grid via `game.grid`.

A única função da Grid era tratar colisões. Assim, sempre que o jogador
precisava se movimentar ele perguntava a Grid se o jogador podia ir para uma
posição. Caso pudesse, o jogador moveria para a posição. Na implementação eu
deixei a posição antiga e a nova marcada como ocupada para simular o movimento
que ocorre nos jogos de Pokemon para GBC :grin:

Até agora eu tinha um quadrado andando pela tela de forma travada. Eu queria
que ele deslisasse até a nova posição, daí eu voltei pro exemplo do GDquest.
Depois de sapricar algumas variáveis o jogador já estava deslizando bunitamente
pela tela. No fim ainda tinha alguns problemas, mas nada muito trêtoso.

Pra mim, o movimento tá quase igual ao de Pokemon. Só faltou o toque de leve
que muda a direção sem se movimentar. Vou ver se acho outro xique-xique pra se
coçar, pois esse foi até tranquilo :grin:

[godot]: https://godotengine.org/
[gdquest]: https://github.com/GDquest/Godot-engine-tutorial-demos/tree/master/2017/final/06-Grid-based%20movement
[grid-move]: https://github.com/emersonmx/godot-sandbox/tree/master/grid-move
[grid-vizualizer]: https://github.com/emersonmx/godot-sandbox/blob/master/grid-move/grid_visualizer.gd
