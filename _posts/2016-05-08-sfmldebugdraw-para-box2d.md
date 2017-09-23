---
title: "SFMLDebugDraw para Box2D"
date: 2016-05-08 17:51:49+00:00
category: programacao
tags: box2d cpp sfml
layout: post
---

Eu comecei um projeto besta ano passado usando SFML e Box2D. Na época eu passei
muito tempo tentando implementar um DebugDraw para a Box2D do zero. Certo dia,
toquei o foda-se e fui ver se achava um pronto na web. Eu achei a
[implementação do
usuário MrPlow442](https://github.com/MrPlow442/Box2D-SFML2-Debug-Draw){:target="_blank"}.
Depois de um tempo quando fui aprendendo algumas coisas sobre a SFML, eu
resolvi reimplementar do meu jeito. Isso resultou
neste [Gist](https://gist.github.com/emersonmx/c90067f5ad906620bb4ee2ee3da5b0fd){:target="_blank"} maroto.
Então caso esteja procurando algo do tipo, taí um lugar pra começar :D

**Aviso:** A minha implementação eu tirei de um projeto meu e deu priguiça de
deixar bunitinho. Então se você jogar no seu projeto não vai funcionar. Você
vai ter que atualizar os `includes` e caso não goste `namespace` é só remover
:P
