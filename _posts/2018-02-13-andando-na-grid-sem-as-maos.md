---
date: 2018-02-13 00:00:00-03:00
title: Andando na Grid sem as mãos
category: rng
tags:
  - godot
---

Achei um novo xiquexique! Quer dizer... Voltei com um [novo exemplo][grid-nav-move]
de movimento na Grid. Só que sem ar mão! :smile:

No [último post][andando-na-grid], eu coloquei pro jogador se mover pelo
teclado. Nesse aqui eu uso o nó Navigation2D para o jogador ir de um canto a
outro sozinho. Se quiser ver as POG que eu fiz é só continuar lendo :smile:

<!--more-->

Neste exemplo, eu tive que atualizar algumas coisas nos scripts do post
anterior. Eu adicionei também novos tiles para representar as informações de
navegação. O resto foi algumas POGs que fui descobrindo durante a
implementação.

Uma das coisas que me deu trabalho foi configurar o Tile de navegação. Ele tava
dando muito trabalho quando o código de movimento tava pronto, pois tava
andando na diagonal. Quando mudei a forma do polígono de navegação para uma
cruz (+) o bixo funcionou normalmente.

Sobre a implementação para fazer o jogador andar sozinho, foi praticamente
operações com vetores. Como eu tinha a posição atual e a próxima, eu
simplesmente peguei o vetor normalizado da diferença entre o próximo e o atual
e fiz uma comparação com os vetores de direção. Para quem conhece a propriedade
graxística do método `dot()` da classe `Vector2` da pra ter ideia do tamanho do
paranauê.

Quando eu tava imaginando como adicionar o nó de navegação, eu pensei em
colocar tudo numa Grid. Daí eu pensei no trabalho de restaurar o nó de
navegação quando o jogador passasse por cima... E então criei outra Grid! Certo
que tem o trabalho de deixar a Grid de colisão e a de navegação atualizada, mas
isso é besteira. Caso eu implementasse um editor de fases eu só preciso fazer
essa atualização via código e tá tudo certo :smile:

Agora você me pergunta, pra que esses exemplos de Grid? Ah jovenzinho, isso é
pra enfiar no... Brincadeira :stuck_out_tongue:

Isso é pra um protótipo de Tower Defense que estou pensando em fazer. E como eu
queria que os inimigos andassem na Grid, eu resolvi fazer esses exemplos. Bom,
vou ali ver se acho outros xiquexiques. Se achar, eu escrevo algo por aqui.
Fui.

[andando-na-grid]: {{ site.baseurl }}{% post_url 2018-02-11-andando-na-grid %}
[grid-nav-move]: https://github.com/emersonmx/godot-sandbox/tree/master/grid-nav-move
