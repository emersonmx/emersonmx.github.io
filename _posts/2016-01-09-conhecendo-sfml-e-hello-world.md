---
title: 'Conhecendo a SFML e Hello World!'
date: 2016-01-09 23:28:22+00:00
category: sfml-series
tags:
  - cpp
  - serie
  - sfml
---

[Como eu falei no post do fim de 2015]({{ site.baseurl
}}{% post_url 2015-12-30-coisas-inuteis-para-2016 %}), eu resolvi fazer algo de
futuro para esse ano de 2016. E pra começar a fuleragi eu vou logo explicando o
que vai ser tratado nessa ruma de post seguidos.

Eu pretendo explicar de cabo a rabo a SFML. E se possível criar alguns
mini projetos para mostrar na prática o que foi apresentado. Para não deixar a
série muito longa, eu vou ter que capá um bucado de coisa (era pra eu capá esse
texto também, maaas...) que não seja essencial. E como complemento eu vou
deixar aquele link externo maroto para materiais (provavelmente em inglês)
explicando os paranauê.

Como recomendação eu deixo o link do [FAQ da
SFML](http://www.sfml-dev.org/faq.php) para você ler antes
de começar. Bem, você não é obrigado a ler. Isso é mais para quem é iniciante.
Mas caso você seja, lá tem uma [lista de coisas que você precisa aprender para
não ter problema com o uso da
biblioteca](http://www.sfml-dev.org/faq.php#grl-learn). E
mais uma vez, isso é só uma recomendação :)

[Anteriormente eu já postei um "Relou Uôrdi"]({{ site.baseurl
}}{% post_url 2015-11-06-um-relou-uordi-com-sfml-e-cmake %}), mas
diferente deste, aquele era mais focado na zueira e na apresentação da
biblioteca. Esta série será mais séria (Saitama aprova).

![Saitama_OK]({{ site.baseurl }}{% link /files/2016/01/Saitama_OK.jpg %})

Então galere, deixemos de embromação e vamu começar essa baixaria :D

<!--more-->

## O que é a SFML?

A [Simple and Fast Multimidia Library
](http://www.sfml-dev.org/)(SFML) é uma biblioteca escrita em
C++ para desenvolvimento de aplicações multimídias. O qual inclui jogos,
players de vídeo/música, leitor de pdf e o caralho a quatro.  Tudo depende da
sua criatividade :)

-- mas... mas... eu sou programador!! meu negócio é código! :(

Oxi, quem disse que programador num tem criatividade? Você acha que pra
fazer uma gambiarra não precisa de criatividade não? :)

-- ...

Continuando :)

A SFML é formada por cinco componentes: Sistema, Janela, Gráfico, Áudio e
Rede (sim aquelas que você pendura no torno ._.). Ela roda no Windows, Linux,
Mac OS X e futuramente Android e iOS. E caso você não goste de C++ você pode
programar em outras linguagens, como: C, .Net, Java, Go, Ruby, Python e [várias
outras](http://www.sfml-dev.org/download/bindings.php).

-- Oxi, mas num é muito mió a [SDL](http://libsdl.org/) não?

Foda-se a SDL :)\\
[SFML é uma SDL orientada a
objetos](http://www.sfml-dev.org/faq.php#grl-whatis) e é
1000x melhor e tem uma API mais "confortável" de usar :P\\
E se você não prestou atenção no que eu disse acima, a SFML é escrita em C++!
C++! C++! Já a SDL é escrita em C. Eu já perdi a paciência com essas
bibliotecas em C que a galera têima em usar com C++ -.-\\
Tem hora que o código fica uma macarronada que chega a bater os código PHP de
antigamente.

-- Então ela deve ser mai façu de usar o,o

Claro que é :)\\
Vamos para o exemplo :)

## Hello World!

Como sempre, o Hello World básico :D\\
Este Hello World será bem simples, ele abre apenas uma janela com o
título "Hello World" e depois de 3 segundos se fecha. Eu apruveitei que a SFML
segue os novos paranauê do C++ (C++11) e deixe o bixo bem simples. Veja só:

<script src="https://gist.github.com/emersonmx/31004a311efb2876d187.js"></script>

-- Mas... mas... esse código não limpa a memória direito *mimimi de programador
C*

Jovem, eu deixo o link pro doc da [classe Windows da
SFML](http://www.sfml-dev.org/documentation/2.3.2/classsf_1_1Window.php#ac30eb6ea5f5594204944d09d4bd69a97) :)

-- É... realmente o bixo limpa na hora que o programa termina... mas eu não
tenho controle sobre o gerenciamento de memória! *mais mimimi de programador C*

Eu deixo outro link sobre o [conceito de RAII no novo
C++](http://www.sfml-dev.org/faq.php#prog-raii) (Rai aprova)
:lol:

![Rai]({{ site.baseurl }}{% link /files/2016/01/Rai.png %})

E com isso eu encerro minha jogada :lol:

![E com isso encerro minha
jogada]({{ site.baseurl }}{% link /files/2016/01/yu-gi-oh.jpg %})

-- Certo, você venceu -.-

A SFML usa com força as novas coisas do C++11 e isso simplifica e deixa o
código mais limpo e seguro :)\\
Se você quiser um livro sobre o C++ moderno, tem o [Effective Modern
C++](http://www.amazon.com.br/Effective-Modern-Specific-Ways-Improve/dp/1491903996).
Ele dá uma ideia do que tá rolando nas quebradas.

Eu coloquei no código como construir o executável usando a linha de comando
(Sim, a tela preta from Hell :) ). E pretendo fazer isso para todos os códigos
que fizer pra esta série, exceto os que forem muito grande.  Se você usa IDE
(porra, véi usar IDE pra compilar 3 linha de código?), tem no [Getting
Started](http://www.sfml-dev.org/tutorials/2.3/#getting-started) explicando
como configurar a SFML para as IDEs mais comuns. Se der algum erro de
compilação, tem no [faq maroto da
SFML](http://www.sfml-dev.org/faq.php#trouble) como corrigir.

## 3C

Bem, e com isso acaba o primeiro post da série. E como deu pra ver, a SFML é
bem simples (tinha que honrar o nome né) e tem documentação boa pá dedeu no
site oficial. Se você chegou a ler todo o
[FAQ](http://www.sfml-dev.org/faq.php) e acabou caindo na
parte de [tutorial](http://www.sfml-dev.org/tutorials/2.3/),
pode ser que você tenha encontrado a butija que tem escondida no [Wiki do
repositório do GitHub](https://github.com/SFML/SFML/wiki). Lá
tem uns paranauê muito loco e recomendo você favoritar esses links. Se você for
ver, eu nem precisa escrever essa série, pois já tem documentação boa
disponível, mas como eu não tenho nada o que fazer, escrever pode ser um bom
passa-tempo :)\\
No próximo post vou falar sobre cada um dos módulo da SFML,
então inté lá :D
