---
title: 'Um "Relou Uôrdi" com SFML e CMake'
date: 2015-11-06 03:34:24+00:00
category: programacao
tags:
  - cpp
  - dicas
  - sfml
---

Por um bom tempo eu considerei a SDL a biblioteca mais pica das galáxias dos
universus tudo para fazer joguinhos 2D. Anos se passaram e fiquei de saco cheio
de usar uma API duvidosa (sinto cheiro de gambiarras). Toquei o foda-se e fui
estudar _OpenGL_, GLX, GLFW, e o caralho a quatro. A brincadeira de fazer uma
biblioteca multimídia do zero tava muito loca, até que num lindo sábado de sol
(um caminhão alugado e uma panela de feijão) a wild SFML appears.  Quando eu vi
que a SFML fazia o que eu tava fazendo…

![Virando a mesa]({{ site.baseurl }}{% link /files/2015/11/flipping_table.png %})

Foda-se o que eu estou fazendo! Vou usar essa aqui que já tá com mei camim
andado, qualquer coisa eu contribuo com o projeto :D

**Legal, mai num mi diga que você vai fazer um post só prum Relou Uôrdi não
né?**

Ora se não :D\\
Os programadores tem uma mania de ficar fazendo Relou Uôrdi (_Hello World_) de
tudo que vê pela frente. Assim, para não fugir desse ritual
<del>satânico</del>, vou mostrar como seria um troço desse com SFML. E
apruveitando a onda, vou falar também do _CMake_ que é algo bem interessante
para quem quer construir projetos em C e C++ usando a [tela preta from
hell](https://en.wikipedia.org/wiki/Terminal_emulator).

<!--more-->

## Conheça o pedreiro, _CMake_ é o nome dele

_CMake_ é um troço pra você construir seus projetos em C e C++ independente do
compilador e do sistema operacional que estiver usando. Tudo isso num simples
arquivo _CMakeLists.txt_. Resumindo, simples, prático e mortal :mrgreen:

**Grande merda, tem _Autotools_ pra quê então?**

O _Autotools_ é simples?

**Não...**

É prático?

**Não…**

Para um projeto simples ele usa só um arquivo (`CMakeLists.txt`)?

**Não…**

Então jovi, deixe de quebrar cabeça com um troço da idade da preda. Você não tá
criando uma ferramenta GNU, logo usar _Autotools_ é totalmente sem sentido.

Continuando...\\
Tudo o que você precisa é [baixar o _CMake_ no site
official](https://cmake.org/download/) e instalar. Com isso,
você vai ter acesso a versão para linha de comando, tsk, e a lindíssima
interface gráfica que já vem embutidaaaa maôôôôôeeee. Agora só falta você
aprender a sintaxe da linguagem do _CMake_ e criar o arquivo `CMakeLists.txt`
para o seu projeto
:lol:

**Putz, vou ter que aprender ôto palavriado?**

Dexe de frescura! Programador que é programador come a linguagem com farinha!
Tirando português é claro :mrgreen:
Porque português é tão foda que nem os mais fodas sabem usar ela direito.

Mai eu sou bozim e eu tenho aqui um modelo parado que eu uso de base nos meus
projetos. Lembrando que você deve definir o nome do projeto e onde estão os
códigos para que o _CMake_ possa funcionar corretamente. Segue o modelo:

```cmake
# Project settings
cmake_minimum_required(VERSION 2.6)
project(<nome_do_projeto>)

# Compiler settings
if (CMAKE_BUILD_TYPE STREQUAL "")
    set(CMAKE_BUILD_TYPE Debug)
endif()

set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")
if (CMAKE_COMPILER_IS_GNUCC)
    set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -fmessage-length=0")
endif()
if (CMAKE_COMPILER_IS_GNUCXX)
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -fmessage-length=0")
endif()

# Includes and libraries settings
set(CMAKE_MODULE_PATH "${CMAKE_SOURCE_DIR}/cmake_modules" ${CMAKE_MODULE_PATH})

include(FindPkgConfig)

find_package(SFML 2 REQUIRED system window graphics)
if (SFML_FOUND)
    set(EXTRA_INCLUDES ${EXTRA_INCLUDES} ${SFML_INCLUDE_DIR})
    set(EXTRA_LIBS ${EXTRA_LIBS} ${SFML_LIBRARIES})
endif()

# Executable settings
include_directories(${PROJECT_SOURCE_DIR}
    ${EXTRA_INCLUDES}
)

add_executable(${PROJECT_NAME}
    <seus_códigos>
)

target_link_libraries(${PROJECT_NAME}
    ${EXTRA_LIBS}
)
```

Esse arquivo pode ser resumido da seguinte forma: Esse é um projeto que usa a
versão _CMake_ 2.6 em diante. Ele vai ser construído por padrão em modo de
depuração e com a versão do C++ de 2011 (o padrão mais atual). Vai ser
carregado qualquer script auxiliar que estiver em `cmake_modules` e se caso
der merda você pode dar seus pulos com o `pkg-config`. As bibliotecas da SFML
serão adicionadas aos seus projetos e os códigos fontes serão compilados em um
executável com o mesmo nome do projeto que você definiu.

**Hmmm… interessante, mai tá dando umas tretas aqui, num tá encontrando as
bibroteca do SFML não.**

Se sua versão do _CMake_ for a 2 você vai ter que colocar o
[FindSFML.cmake](https://raw.githubusercontent.com/SFML/SFML/master/cmake/Modules/FindSFML.cmake)
na pasta `cmake_modules`. Na versão 3 já vem embutido :D

Quando tiver um tempo veja o [tutorial do
_CMake_](https://cmake.org/cmake-tutorial/) e caso haja
dúvidas veja o [wiki do
projeto](https://cmake.org/Wiki/CMake).

## O material de construção, a bibroteca SFML

SFML é uma abreviação para: Simples, Fudida de ligera e Muito Loca :D
Brincadeira! Na verdade é _Simple and Fast Multimedia Library_. E no meu caso,
eu gosto dela porque a API é simples, separada em módulos e é escrita em C++.

**Oxi, mai a SDL pode ser usada em C++**

Há uma diferença gritante (AAAAAAAAAAHHHHHHHH... QUE DELÍCIA CARA. Ui!) entre
"ser usada" e "escrita" em C++ :|\\
Primeiro que C é uma linguagem procedural;\\
e segundo, C++ é Orientado a Objetos (OO) <del>e gambiarras</del>.\\
Misturar dois paradigmas nem sempre resulta em um código legível e bom de
programar. Nesse caso complica mais do que ajuda.

**Nam, frescura da porra. Buniteza é para os fracos!**

Vei, legibilidade é tudo! Como que você vai entender as gambiarras se elas num
forem simples de entender? Só pelo fato da SFML ser escrita no paradigma OO o
código C++ não parece código C++. Quêde as gambiarras que já vêm embutidas nas
bibliotecas C++? Quêde? E digo mais, se olhar de rabo de ôi dá pra confundir
com um código escrito em Java. Não pera, menas :|\\
Ah, vamo deixar de fuzuê e mostrar o que interessa, o Relou Uôrdi.

## Dê Relou Uôrdi

O _Hello World_ é bem simples, ele cria uma janela e mostrar uma imagem com o
texto "Relou Uôrdi". Veja [o código belo como o círculo polar
ártico](https://github.com/emersonmx/blog_code/tree/master/cpp/sfml/hello_sfml_cmake)
([referência
marota](https://www.youtube.com/watch?v=BRQ--tM88qU&feature=youtu.be&t=9m22s))
e tire suas conclusões quanto a SFML. Segue imagem do resultado final.

![relou_uordi]({{ site.baseurl }}{% link /files/2015/11/relou_uordi.png %})

Eu coloquei os arquivos no _github_, pois não quero encher o servidor com isso.
E já que ele é free (_It's free!_), checá qui vou lhe usá :P

## 3C

Neste post aprendemos que:
  * o CMake é uma boa ferramenta para construir projetos;
  * o SFML é simples pa carai;
  * programadores fazem H_ello Worlds_ <del>rituais satânicos</del> para quase
    todas as coisas novas que vão aprender;
  * só fazer gambiarras legíveis para ajudar o abiguinho;
  * e... (adicione qualquer coisa aqui)

É chega de escrever por hoje :|
