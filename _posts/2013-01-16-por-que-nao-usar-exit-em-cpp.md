---
title: "Por que não usar exit em C++"
date: 2013-01-16 13:32:46+00:00
category: programacao
tags:
  - c
  - cpp
  - curiosidades
  - dicas
layout: post
---

Esses dias estava lendo um artigo e vi o autor usando exit(0) no seus código em
C++, daí eu pensei, "cara o exit era muito massa em C, vou usar na minha
biblioteca de jogos em C++". Do nada, surgiu uma dúvida, qual a diferença entre
usar o exit(0) ou o return 0? Com uma rápida busca na Web sobre a diferença
entre o exit(0) e o return 0. Eu vi que usar o exit em C++ é um pouco Welcome
to the jungle, pois ele não chama os destrutores das classes! Isto é, variáveis
locais e instancias de smart pointers não vão ter seus destrutores chamados e
caso você esteja usando o destrutor para liberar a memória, você terá memory
leak pra todo lado. OBS.: as variáveis estáticas não sofrem com o problema do
exit.

<!--more-->

Então, para você que é programador C e foi pro C++ (era melhor ter ficado no C
mesmo .-.). Mais enfim, se você tem costume de usar a função exit para terminar
o programa, troque por um return na função main para não acabar tendo bugs que
você nem sabe como resolver.

O código de teste que usei para ver se isso era realmente verdade foi esse aqui

```cpp
#include <cstdio>
#include <cstdlib>
#ifdef USE_BOOST
#include <boost/scoped_ptr.hpp>
#endif /* USE_BOOST */

class TesteExit {
    public:
        TesteExit() {
            printf("TesteExit()n");
        }
        ~TesteExit() {
            printf("~TesteExit()n");
        }
};

int main() {
#ifdef USE_BOOST
    boost::scoped_ptr<TesteExit> te(new TesteExit());
#elif USE_STATIC
    static TesteExit te;
#else
    TesteExit te;
#endif /* USE_BOOST */

#ifdef USE_EXIT
    exit(0);
#endif /* USE_EXIT */

    return 0;
}
```
