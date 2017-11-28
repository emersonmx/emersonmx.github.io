---
title: 'Sistema Entidade/Componente'
date: 2015-11-28 21:07:00-03:00
category: engenharia-de-software
---

A nóia de hoje em dia no mundos dos _GameDev_ é o Sistema de
Entidades/Componentes (SEC<del>su</del>). Quando eu comecei a estudar esse
troço a galera só falava "Sistemas de componentes é  foda. Arquitetura
hierárquica é uma merda/bixada/um lixo/algo pôdi" ou algo do tipo :P\\
Eu não nego que a arquitetura é foda e muito simples de usar ([veja o
_Unity3D_](http://unity3d.com/)), mas e se eu quiser
implementar uma do zero?  Aaaahhh meu amiguinho, aí a merda corre solta. Sem
mais muído, xêcomigo e ramu rê como que essa bagaça funciona :smiley:

<!--more-->

## Conceito do Sistema de Entidades e Componentes

Você pode dizer que a arquitetura SEC é apenas uma outra forma de organizar o
laço principal do jogo ao remover a lógica dos objetos e colocá-las em
Sistemas. E as Entidades e Componentes ficam apenas com a função de prover
informação para os Sistemas, isto é, eles são apenas DADOS!

-- É o quê ômi? Explica direito.

Eu não tô com muito saco para explicar as nóia do balançar do rabo cromado do
gato preto. Por enquanto saiba que tudo se resume a código flexível. Se quiser
mais detalhes [veja a apresentação de Scott
Bilas](http://gamedevs.org/files/data-driven-game-object-system.pdf).

-- Sim… código flexível… tipo o balançar do rabo de um gato… sei tendi tutô :expressionless:

Resumindo... É mais como escrever um código uma vez e não precisar recompilar o
jogo toda vez que um _Designer_ achar que um personagem tá 10px pra direita e
mandar o programador arrumar. Daí depois de tanto muído é decidido que era
melhor deixar do jeito que tava e você tem que arrumar de novo :expressionless:

Com essa ideia o Sistema só depende dos dados (Entidades e Componentes) para
funcionar. Isso permite criar arquivos de configuração que o _Designer_ pode
mexer sem que precise parar o programador para mover um personagem que está no
lugar errado.

-- Rapai qui maravilha, menos trabai pa eu o,o

É menos trabalho… é sei :expressionless:\\
Uma coisa que você tem que saber sobre a área da programação, é que para tudo o
que você fizer, SEMPRE vai ser preciso escolher entre uma situação ruim e uma
pior. Exemplo: Quando você vai dormir e só tem um lençol pequeno pra se inrolá.
Você percebe que ao cobrir a cabeça você descobre os pês. Se cobre os pês
descobre a cabeça. E se deixar o lençol no buxo fica com frio nos dois. No
palavriado dos Animés seria a [Lei da troca
equivalente](http://pt-br.fma.wikia.com/wiki/Troca_Equivalente).

-- Ahn? mai num fica mais fácil pra fazer o joguim?

Claro que fica, mas já pensou no trabalho que é implementa do zero? Tudo
bunitinho com boas práticas de programação, evitando ao máximo fazer
gambiarras?

-- Carai, deve ser muito foda então. Mió deixar queto :expressionless:

É jovi, se você implementar um SEC do zero você <del>nunca vai
terminar</del> vai demorar muito para fazer seu joguinho. Caso queira realmente
usar SEC instala o _Unity3D_ e desce a lenha. Fazer um SEC do zero é coisa para
jogos grandes do nível de MMOs e afins que não querem ser muito _Mainstream_ :P

-- É vou fazer isso mesmo…  :'<

Fica assim não, mesmo que você não crie nenhum jogo, pois não terminou de
implementar a arquitetura, você ainda vai aprender muitos paranauê lôco. Então
por enquanto vamos continuar com os componentes básicos da arquitetura :smiley:

## Elementos do SEC

Como vimos anteriormente a arquitetura se resume em: Sistemas, Entidades e
Componentes. Os Sistemas é pura lógica e as Entidades e Componentes puro dado.
Um Sistema trabalha em cima de muitas Entidades, que por sua vez possui vários
Componentes. Tudo normal até aí. Agora e se eu disser que a Entidade é um
simples ID, ou melhor um número?

-- WAT?! O,o Mais uma entidade é um objeto com uma lista de componentes! Isso
não pode está certo!

Quem é você pra dizer que está errado? Ou quem sou eu pra dizer que tá certo?
:smiley:

-- ...

Saiba que no mundo dos bancos de dados você pode agrupar/identificar as
tuplas/linhas de uma tabela com um simples ID. Então os Componentes e as
Entidades seriam colunas que formam uma tupla numa tabela de um banco de dados.
Perfeito não? Dá pra aplicar altas nóias da teoria dos conjuntos :smiley:

-- Sei mais isso não é mais Programação Orientada a Objetos…

Cresça e aprenda que na programação nem tudo pode ser feito com OO. Lembra da
Lei da troca equivalente falada acima? Apois. _Deal With It_.

![Dennis Ritchie Deal with it]({{ site.baseurl }}{% link /files/2015/11/denisdeal.png %})

Com essa mudança de paradigma você já sentiu a treta vindo. Contudo não tema,
pois isso é algo que veio para o bem (ou não).

Eu falei que as Entidades e os Componentes formar praticamente uma tupla numa
tabela de um banco. E isso não poderia está mais certo, caso você fosse
implementar um MMORPG :smiley:

-- Vixi o,o E como eu faço pra pegar os Componentes das Entidades? Implemento
um [CRUD](https://pt.wikipedia.org/wiki/CRUD)?

Isso mesmo! um CRUD ou no caso do SEC um _EntityManager_. Assim, pode-se
implementar um _EntityManager_ com os métodos para Criar (Create), Lê (Read)
Atualizar (o Update dá pra ignorar) e Excluir (Delete) as entidades e os
componentes. A interface para o _EntityManager_ poderia ter os seguintes
métodos:
  * int createEntity(); // deve retornar um ID único
  * void destroyEntity(int entity);
  * void addComponent(int entity, Component component);
  * void removeComponent(int entity, Component component);
  * Component getComponent(int entity, ComponentType type);
  * Components[] getAllComponentsOfType(ComponentType type);
  * Entities[] getAllEntitiesWithComponentType(ComponentType type);
  * Qualquer consulta que você ache útil.

-- No fim, componentes e entidades formam uma tabela como esse homi disse -.-

É! nada de complicado. Vamos aos Sistemas :3

Um Sistema atua em cima de componentes específicos, como: imagens, entrada
(teclado, mouse, etc), física, sons, etc. Tomemos como exemplo um Sistema de
desenho. Digamos que esse sistema precise de entidades que tenham um componente
de posicionamento _**E**_ um componente de imagem. Ele vai pedir para o
_EntityManager_ todas as entidades que tenham esses componentes. Com eles em
mãos, o Sistema vai pegar a posição e a imagem de cada entidade para então
desenhá-las na tela. Depois do processamento das entidades o Sistema aguarda
até a próxima vez que for chamado. Simples e mortal :smile:

-- É, nadis de muito complicado aqui. Sistemas = lógica de negócio :expressionless:

Isso!\\
E por último temos o _ComponentType_. Ele só é usado para identificar o tipo do
componente em linguagens que não deixam fazer isso de forma mais simples como o
C++. Então caso a linguagem permita não é preciso implementar esse elemento. E
assim partimos para as tretas da implementação de um SEC :smiley:

## As tretas que podem surgir ao implementar um SEC

Cito de cara sem por nem cuspe o mais FDP de todos: o _Cache_. Pare e pense um
pouquinho. Digamos que o jogo tenha mais de 8 mil entidades e uma caralhada de
componentes. Supunhetamos que um dos sistemas leve 3s para processar todas as
entidades. Um jogo deve rodar a 30fps para ficar algo jogável. Logo, 9 fora...
só esse sistema seria o responsável por deixar o jogo rodando a 10fps. Um dos
motivos? O _EntityManager_ está levando muito tempo para realizar a consulta
das entidades e seria melhor fazer _Cache_ das entidades para ver se
agiliza alguma coisa.

-- Essa implementação é realmente necessária? :expressionless:

Só se você estiver fazendo um jogo muito grande, ou se estiver desenvolvendo
para celulares não tão novos. De qualquer forma, tenha isso em mente.

Mais uma vez, pare e pense. Qual sistema vai vir primeiro? Posso separar eles
em threads? Qual a frequência que eles serão chamados? A ordem que os Sistemas
são chamados é importante. Principalmente quando os Sistemas rodam em
frequências e threads diferentes.

-- Como posso por ordem nesse puteiro? o,o

Você pode implementar um meio de notificar outros sistemas quando algum evento
ocorre. No fim as pogs vão correr solta para manipular essa ruma de threads. Eu
mesmo não acho algo muito inteligente usar threads para essas coisas, mas caso
o jogo esteja muito lento pode ser o jeito adicionar essa complexidade ao
código.

-- :expressionless:

Normalmente os problemas estão relacionados com desempenho e redução de
gambiarras do código. Estruturas de dados mais rápidas, fazer cache
nas consultas, execução simultânea de sistemas, comunicação entre sistemas são
algumas das soluções. Como é muita coisa para estudar eu vou deixar alguns
materiais para estudar no fim.

## 3C

É abiguinhos, nem tudo são fulôres na área da computaria. O mínimo que você
pode fazer é deixar sua mente aberta (cuidado pra não cair), pesar as vantagens
e desvantagens e seguir o caminho mais fácil (nada de gambiarras!) quando for
fazer as coisas. Com isso aprendemos que:
  * Se o jogo for simples, é melhor usar uma arquitetura OO;
  * O SEC é muito simples de usar, pena que não dá pra dizer o mesmo quando se
    implementa do zero;
  * [Keep It Simple Stupid
    (KISS)](https://en.wikipedia.org/wiki/KISS_principle);
  * _Unity3D_ é foda;
  * Implementar um SEC vai te fazer um mestre capoeira.

## Fontes e materiais
  * [Wiki sobre SEC](http://entity-systems.wikidot.com/)
  * [Entity Systems are the future of MMOG
    development](http://t-machine.org/index.php/2007/09/03/entity-systems-are-the-future-of-mmog-development-part-1/)
  * [Aprensetação de Scott
  Bilas](http://gamedevs.org/files/data-driven-game-object-system.pdf)
  * [Evolve Your
    Hierarchy](http://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/)
  * [Um ótimo exemplo de implementação de SEC em
    Ruby](https://cbpowell.wordpress.com/2012/10/30/entity-component-game-programming-using-jruby-and-libgdx-part-1/)
  * [Padrões de projetos para
    jogos](http://gameprogrammingpatterns.com/)


