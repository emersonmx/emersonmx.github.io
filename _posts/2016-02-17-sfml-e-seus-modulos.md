---
title: 'SFML e seus módulos'
date: 2016-02-17 01:18:46+00:00
category: sfml-series
tags:
  - cpp
  - serie
  - sfml
---

E no post de hoje será mostrada uma visão geral dos módulos da SFML. A qual foi
baseada sem dó nem piedade no [tutorial
oficial](http://www.sfml-dev.org/tutorials/2.3/) :P

-- Oxi! E porque motivo, razão ou circunstância você resolveu falar dos módulos
se já tem no tutorial? O,o

Não sei! Só sei que foi assim :D\\
Na verdade na verdade, no fundo no fundo, eu só queria deixar as coisas mais
organizadas nessa <del>puteiro</del> série. O tutorial oficial é muito bom e eu
aconselho dá uma conferida mais tarde, mas por enquanto vamos continuar com o
post :D

<!--more-->

A SFML possui cinco módulos que podem ser usados para desenvolver uma
aplicação, eles são: _System_, _Window_, _Graphics_, _Audio_ e _Network_. Como
a galera da biblioteca é formada por engenheiros altamente capacitados e
manjador das computarias (aah vá!). Pode-se notar que os nomes dos módulos já
dão uma dica das funcionalidades contidas em cada um.

-- Óia que legal! Então se eu quiser criar uma janela eu só preciso usar o
módulo _Window_? o,o

Éééé... mais ou menos...\\
Só o módulo _Window_ não vai dar pra compilar a aplicação, pois esse módulo
depende do _System_. Logo, é preciso adicionar também o _System_.

-- Masoq?! O,o

O motivo é simples. O módulo _Window_ depende do _System_, assim como todos os
outros módulos da biblioteca. Portanto, uma aplicação SFML deve ter, no mínimo,
o módulo _System_ para que seja compilada.

-- Sei gambiarra do carai :expressionless:

Gambiarra não, controle meu rapaz! Se eu só preciso de alguns módulos, então
praquê linkar todos?

-- É né... fazer o que... :expressionless:

... -.-\\
Certo, o único problema que você vai ter é saber _quem depende de quem_.\\
E como eu sei que se você é um minino dedicado, já deve ter lido o [FAQ da
SFML](http://www.sfml-dev.org/faq.php#build-link) e sabe que
_Window_, _Audio_ e _Network_ dependem do _System_ e o _Graphics_ depende do
_Window_ e do _System_. Isso tudo numa jogada de cabelo, sem piscar os zói e
fazendo ioga enquanto chupa manga.

-- É... certo... mas pra quê eu preciso disso?

Só caso algum dia você vá usar o GCC para compilar os códigos. Ele fica de
negocionho caso você coloque os módulos na ordem errada. E também caso dê algum
erro de referência indefinida para o símbolo.

-- Certo, mas qual é a ordem certa? O,o

Os módulos que tem mais dependências devem vir antes dos que tem menos. Exemplo
1: _Graphics (2)_, _Window (1)_ e _System (0)_.\\
Exemplo 2: _Window (1)_, _Audio (1)_, _System (0)_.
E sim! Isso é uma coisa que é falada no [FAQ
marôto](http://www.sfml-dev.org/faq.php#build-link).

Agora que sabemos o básico do básico sobre os módulos, vamos estripar cada um
pra ver o que tem por dentro :D

## System

Como foi falado anteriormente, este módulo é obrigatório em uma aplicação SFML.
Isso se dá pelo fato dele ser um módulo utilitário. Ele é contém classes para
mexer com o tempo, _Threads_, _Streams_ de dados, conversão de codificação
de _Strings_ e classes de vetores com duas e três dimensões.

-- É isso explica muita coisa sobre a dependências dos outros módulos o,o

Pode ter certeza que sim. Então sempre lembre de adicionar o módulo _System_
por último :)

Continuando os paranauê sobre o módulo _System_...\\
Eu não posso deixar de notar que a parte dos Dreds

![Dreds]({{ site.baseurl }}{% link /files/2016/02/talk-like-a-pirate-day-jack-sparrow.jpg %})

é meio inútil no C++11 (ver [tutorial da
SFML](http://www.sfml-dev.org/tutorials/2.3/system-thread.php#sfml-threads-or-stdthread)).
Então abiguinhos, caso esteja usando C++11, ignore o fato que a SFML tem uma
implementação de _Threads_. Outra coisa que é meio raro de usar são os
_Streams_ de dados. Eu ainda não fiz nada exótico com isso na SFML, então acho
que isso seja pra coisas bem específicas como algo do nível do tutorial de
_Hackerman_.

<div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KEkrWRHCDQU" allowfullscreen></iframe>
</div>

O restante das classes e funcionalidades você vai usar, sem nem se tocar que
está usando, quando precisar colocar desenhos bunitinhos na tela.

## Window

Ahh o módulo _Window_. Ao meu ver, o módulo **MAIS IMPORTANTE** da SFML. Ele
pode se resumir a isso aqui.

![Tela em branco na
SFML]({{ site.baseurl }}{% link /files/2016/02/blank_window.png %})

Uma tela preta from hell! @>@

-- :expressionless:

Calma não é só uma tela, é uma tela com um contexto _OpenGL_! Você pode
desenhar coisas em 3D nela! :D

-- Mas eu só gosto de jogo 2D >,<

Claro que você pode fazer um jogo em 2D, pois 2D é um subconjunto do 3D.\\
Tudo está na forma como você quer vender sua arte na praia meu jovem :)

Essa parte da tela já vim com um contexto _OpenGL_ foi o que me fez ver a SFML
com outros olhos, mas nem só de frufru vive uma janela. É preciso ter eventos!
E adivinha? O módulo _Window_ é o responsável pelos eventos de mouse, teclado,
joysticks, touch e sensores (eu sei... muitxo lôco plugar um acelerômetro numa
tela).

Como deu pra ver esse módulo é tudo que você precisa pra começar a fazer seu
joguinho. A partir daí o céu é o limite caso você queira a SFML para fazer
algumas besteiras com _OpenGL_. Então bora pro próximo.

## Graphics

E esses meus caros, é onde a magia acontece. Sim magia! O módulo _Graphics_ é o
que permite você colar os frufru na tela sem muito esforço.

-- Tipo _Post-its_ de joaninhas? O,O

É... tipo isso aí .\_.\\
Só que para colar seus _Post-its_ de joaninha você vai precisar criar uma
janela diferente da que você criou com o módulo _Window_. Ela é especializada
no desenho de objetos do módulos _Graphics_ e qualquer outro que você venha
criar usando as ferramentas que o módulo disponibiliza. O módulo é formado por:
formas geométricas, textos, imagens/texturas, _Sprites_ (imagem com posição,
rotação e tamanho), array de vértices (desenho livre), camera e _Shaders_!

Como eu falei no módulo _Window_, a SFML usa _OpenGL_ por padrão. O único
problema é que _OpenGL_ é muito verborrágica. Então qualquer coisa que você
fizer usando _OpenGL_ vai ser linhas e mais linhas de gambiarras. Para resolver
esse problema o módulo _Graphics_ expandiu as funcionalidades da janela base, a
fim de simplificar o desenho de imagens, textos, etc. Você pode intercalar SFML
e _OpenGL_, mas isso requer alguns paranauês que não vou falar nem tão cedo.
Por enquanto, saiba que você tem o poder da _OpenGL_ na mão e nada pode
impedi-lo. Exceto sua placa de vídeo lixo que num roda nem _Angry Birds_ sem
dar lag :P

Por fim, este provavelmente será o módulo que você vai usar para TUTÔ
relacionado a parte gráfica, como mover, rotacionar, escalonar, animar,
desenhar, etc. O seu _Post-it_ de joaninha vai ficar muitxo lôco! Então, tome
nota viu?

## Audio

Todo mundo curte um som, então porque não tunar seu joguinho com uma trilha
sonora de arrepiar os cabelos do suvaco? Bem, é praticamente isso que esse
módulo faz. Isso e gravar áudio.

-- Oxi, só isso? Nenhum efeito nem nada? O,o

Efeito só se for de audio 3D, qualquer outro é por sua conta :laughing:\\
E por isso não tenho nada muito "que lôco meu" para falar desse módulo, já que
ele só serve pra mexer com barulho. Quando eu for falar sobre esse módulo, eu
coloco alguns paranauês que dá pra fazer com ele, mas por enquanto bora pro
próximo Lombardi xD

## Network

Sabe aquele momento da sua vida que você acha que vai fazer um MMO assim do
nada? Pois é... isso aqui é só a pontinha da piroca de Kid Bengala. Fazer uma
aplicação comunicar com várias outras via rede é algo bem interessantes, mas só
até você implementar um chat entre vários clientes e vê o cabaré que fica (the
horror :scream:).

Em resumo, este módulo permite criar _Sockets_ (TCP e UDP), realizar
requisições HTTP e transferir arquivos via FTP.

-- Hahahaha! Já estou com meus planos para criar o próximo MMORPG >:B

É vai lá, quando terminar me chama que eu quero jogar :expressionless:\\
Por fim, esse é outro módulo que também não tem muito o que falar e que vou
deixar para mostrar o que dá pra fazer com ele em um post futuro.

## 3C

-- Óia, que resumo merda :expressionless:

Claro né, é um resumo do que tem no [tutorial do site oficial da
SFML](http://www.sfml-dev.org/tutorials/2.3/). Quando tiver
um tempinho passar lá e também no
[Wiki](https://github.com/SFML/SFML/wiki) que tem muita coisa
interessante que não falei aqui. E pra acabar, deixo os ensinamentos para os
abiguinhos.

  * SFML é foda;
  * SFML é MUITO foda;
  * OpenGL Rulez;
  * Você vai precisar percorrer toda a maromba de Kid Bengala pra fazer um MMO;
  * Tem muito mais, só que eu vou deixar isso pra outros posts;
  * E tudo isso se resume no _Post-It_ de joaninha :D

![post-it de joaninha]({{ site.baseurl }}{% link /files/2016/02/post-it-joaninha.jpg %})

Isso é tudo pessuar :D
