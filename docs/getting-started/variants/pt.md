---
description: Aprenda como criar variações de conteúdo com base em condições específicas
since: 1.18.0
---

# Visão geral

**Variantes** permitem segmentar o conteúdo com base em certas _condições_, permitindo personalizar e adaptar as páginas para diferentes _segmentos_ de usuários. Por exemplo, você pode criar uma variante para alterar o layout da página toda **sexta-feira** para **50% dos usuários**. Ao utilizar variantes, você pode modificar dinamicamente o conteúdo direcionado a segmentos específicos de sua audiência.

As **variantes** são impulsionadas por **Matchers**, que são _blocos_ usados para avaliar _condições_ específicas com base em _características do usuário_, _data e hora_, _seleção aleatória_ (testes A/B), _histórico de navegação do usuário_, _dispositivo do usuário_, ou _qualquer informação externa extraída da solicitação_. **Matchers** são configurados para determinar se um usuário pertence a um determinado **Segmento** ou não. **Segmentos** se referem a uma parte dos usuários do seu site que satisfazem as condições definidas pelos matchers. Um usuário pode pertencer a vários **segmentos** simultaneamente. Por exemplo, um usuário pode fazer parte do segmento `São Paulo`, que segmenta usuários localizados em `São Paulo`, e também pode fazer parte de um experimento que inclui 50% dos usuários. **Segmentos** podem ser combinados para criar critérios de segmentação mais específicos.

**Matchers** podem ser usados _inline_ ou salvos com um **nome específico**. A principal diferença entre as duas abordagens é que um matcher salvo será avaliado apenas uma vez, e seu resultado permanecerá consistente durante todo o ciclo de solicitação. Isso significa que, uma vez que um matcher é avaliado como `true` ou `false` para uma determinada visualização de página do usuário, esse valor será mantido durante toda a solicitação.

Esse comportamento permite que você reutilize o **mesmo resultado do matcher em várias variantes dentro da mesma página ou em lugares diferentes em seu site**. Dessa forma, você garante um comportamento consistente e evita avaliações redundantes da mesma condição.

Além disso, alguns matchers têm um comportamento `sticky`, o que significa que o resultado do matcher pode ser armazenado na sessão do usuário e permanecer consistente até o término da sessão. Isso é especialmente útil para testes A/B, onde os usuários são atribuídos a uma variante específica e devem ter uma experiência consistente durante a sessão.

Aproveitando os Matchers e suas capacidades, você pode criar experiências dinâmicas e personalizadas para seus usuários, ao mesmo tempo em que otimiza o desempenho, reduzindo avaliações redundantes e mantendo a consistência entre as variantes. Para saber mais sobre como criar novos matchers, consulte nossa [documentação de Matchers](/docs/pt/concepts/matcher).

## Passo a passo

1. Primeiro, faça login na deco Admin. Depois de fazer o login, você pode acessar o _site_ com o qual deseja trabalhar.
2. Vá para a seção `Páginas`, que pode ser encontrada na barra superior da interface do Admin.

![Listagem de páginas](https://github.com/deco-cx/apps/assets/882438/801edff7-7e6e-4606-8556-bcaf4a2bfec8)


3. Selecione a página com a qual deseja trabalhar, clicando nela.
4. Ao entrar na página, localize o ícone de bandeira (`🏴`) no lado direito do rótulo "Seções". (use o mesmo botão para remover todas as variantes).

![Criar variante](https://github.com/deco-cx/apps/assets/882438/1989b41d-d959-488b-b863-c7b697fa1754)

5. Você pode não notar nenhuma mudança imediata, mas duas novas variantes serão adicionadas à página. A última variante (`Padrão`) representa a página atual e sempre avalia como verdadeira, enquanto a primeira variante é criada sem uma condição selecionada. Vamos escolher uma condição para esta variante.<img width="1508" alt="image" src="https://github.com/deco-sites/starting/assets/5839364/ed22f647-0616-4485-88c0-fb5152ddcb7f">
6. Clique na primeira variante da lista.
7. Selecione a opção `Condição` e escolha `Device Matcher`.
8. Selecione a opção `Mobile` e certifique-se de que você tenha selecionado a visualização `Desktop` na pré-visualização do Admin.

![Selecionando condição](https://github.com/deco-cx/apps/assets/882438/c096a2fd-a9e1-4aca-87a9-99da8ca2d9d0)

9. Faça as alterações visuais na página que deseja diferenciar para esta variante (por exemplo, adicione um carrossel no topo da página). Observe que a visualização atual reflete as alterações feitas para a variante selecionada.

![Alterando páginas para usuários mobile](https://github.com/deco-cx/apps/assets/882438/8f21d149-fd51-45e8-9d74-73c27fce1a56)


10. Volte para a página anterior e observe que a página original é carregada.<img width="1510" alt="image" src="https://github.com/deco-sites/starting/assets/5839364/1aac9c6b-a4f5-4882-a831-13d8b65e7bf9">
11. Altere a visualização para móvel e observe que a página modificada da variante agora está visível.

![Visualização suas alterações](https://github.com/deco-cx/apps/assets/882438/4e18d62b-fbaa-49e0-bf39-72d002a582f8)


## Explicação

Quando você tem várias variantes em uma única página, a deco automaticamente exibe a pré-visualização da variante selecionada por padrão. Se nenhuma variante estiver selecionada, a deco mostra o que o usuário veria se fosse atribuído à variante. Isso permite que você navegue entre as variantes selecionadas e visualize como seria a experiência do usuário para cada variante.

Você também pode ter uma variante dentro de outra variante. Você pode usar matchers diferentes ou uma combinação deles.

## Testes A/B

Você pode criar **testes A/B** manualmente selecionando a condição `Random Matcher` e configurando a porcentagem de tráfego a ser dividido. Alternativamente, se você não estiver usando uma condição `Random Matcher`, nosso botão "Publicar" solicitará automaticamente a criação de um novo teste. O resultado é exatamente o mesmo que criar o teste manualmente.

## Análises

Você tem a flexibilidade de integrar sua própria plataforma de análise e comparar os resultados em relação a cada variante utilizada. Para acessar as informações das variantes usadas em uma visualização de página específica, você pode utilizar a variável `window.LIVE.flags`. Essa variável é uma matriz que contém objetos com duas propriedades: `name` (o nome do Matcher) e `value` (o resultado avaliado do Matcher, `true` ou `false`).

Estas informações também estão disponíveis no cabeçalho `X-Deco-Matchers` onde cada cookie tem o valor `1` caso a condição seja avaliada como verdadeira, ou `0`, caso contrário.

Ao aproveitar essas informações, você pode analisar e rastrear o desempenho de cada variante e tomar decisões com base nos dados obtidos.

Estamos trabalhando continuamente para aprimorar nossas capacidades de análise e simplificar o processo de acesso e análise dos resultados dos testes. Nosso objetivo é fornecer uma experiência integrada, em que você possa criar e gerenciar testes, além de visualizar e interpretar os dados de análise correspondentes, tudo em um local centralizado. Ao consolidar essas funcionalidades, buscamos facilitar a tomada de decisões com base em dados e otimizar o desempenho do seu site.

Configura nossa documentação de [GTM Analytics](/docs/pt/composable-apis/gtm) para mais informações.
