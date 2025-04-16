module.exports = [
  {
    name: "Acuidade com Arma",
    description:
      "Quando usa uma arma leve  de corpo a corpo uma arma de arremesso, você pode usar seu modificador de Destreza em vez de Força nos testes de ataque e rolagens de dano.",
    type: "COMBATE",
    requirements: [[{ type: "ATRIBUTO", name: "Destreza", value: 1 }]],
  },
  {
    name: "Arma Secundária Grande",
    description:
      "Você pode usar duas armas de uma mão com o poder Estilo de Duas Armas.",
    type: "COMBATE",
    requirements: [[{ type: "PODER", name: "Estilo de Duas Armas" }]],
  },
  {
    name: "Arremesso Potente",
    description:
      "Quando usa uma arma de arremesso, você pode usar seu modificador de Força em vez de Destreza nos testes de ataque. Se você possuir o poder Ataque Poderoso, poderá usá-lo com armas de arremesso. ",
    type: "COMBATE",
    requirements: [
      [
        { type: "PODER", name: "Estilo de Arremesso" },
        { type: "ATRIBUTO", name: "Força", value: 1 },
      ],
    ],
  },
  {
    name: "Ataque pesado",
    description:
      "Quando faz um ataque corpo a corpo com uma arma de duas mãos, você pode pagar 1 PM. Se fizer isso e acertar o ataque, você faz uma manobra derrubar ou empurrar contra o alvo como uma ação livre (use o resultado do ataque como o teste de manobra).",
    type: "COMBATE",
    requirements: [[{ type: "PODER", name: "Estilo de Duas Mãos" }]],
  },
  {
    name: "Ataque poderoso",
    description:
      "Declare que está usando este poder antes de fazer um ataque corpo a corpo. Você sofre –2 no teste de ataque, mas recebe +5 na rolagem de dano. ",
    type: "COMBATE",
    requirements: [[{ type: "ATRIBUTO", name: "Força", value: 1 }]],
  },
  {
    name: "Ataque preciso",
    description:
      "Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e +1 no multiplicador de crítico.",
    type: "COMBATE",
    requirements: [[{ type: "PODER", name: "Estilo de Uma Arma" }]],
  },
  {
    name: "Bloqueio com Escudo",
    description:
      "Quando é atingido por um ataque, habilidade ou magia, você pode gastar 1 PM para receber resistência a dano contra este ataque igual ao bônus na Defesa que seu escudo fornece. Você só pode usar este poder se estiver usando um escudo.",
    type: "COMBATE",
    requirements: [[{ type: "PODER", name: "Estilo de Arma e Escudo" }]],
  },
  {
    name: "Carga de Cavalaria",
    description:
      "Quando faz uma investida montada, você causa +2d8 pontos de dano. Além disso, pode continuar se movendo depois do ataque. Você deve se mover em linha reta e seu movimento máximo ainda é o dobro do seu deslocamento.",
    type: "COMBATE",
    requirements: [[{ type: "PODER", name: "Ginete" }]],
  },
  {
    name: "Combate Defensivo",
    description:
      "Quando usa a ação atacar, você pode usar este poder. Se fizer isso, até seu próximo turno, sofre –2 em todos os testes de ataque, mas recebe +5 na Defesa.",
    type: "COMBATE",
    requirements: [[{ type: "ATRIBUTO", name: "Inteligência", value: 1 }]],
  },
  {
    name: "Derrubar Aprimorado",
    description:
      "Você recebe +2 em testes de ataque para derrubar. Quando derruba uma criatura com essa manobra, pode gastar 1 PM para fazer um ataque extra contra ela.",
    type: "COMBATE",
    requirements: [[{ type: "PODER", name: "Combate Defensivo" }]],
  },
  {
    name: "Desarmar Aprimorado",
    description:
      "Você recebe +2 em testes de ataque para desarmar. Quando desarma uma criatura, pode gastar 1 PM para arremessar a arma dela para longe. Para definir onde a arma cai, role 1d8 para a direção (sendo “1” diretamente à sua frente, “2” à frente e à direita e assim por diante, em sentido horário) e 1d6 para a distância (medida em quadrados de 1,5m a partir da criatura desarmada).",
    type: "COMBATE",
    requirements: [[{ type: "PODER", name: "Combate Defensivo" }]],
  },
  {
    name: "Disparo Preciso",
    description:
      "Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade padrão de –5 no teste de ataque.",
    type: "COMBATE",
    requirements: [
      [
        {
          type: "PODER",
          name: "Estilo de Disparo",
        },
      ],
      [
        {
          type: "PODER",
          name: "Estilo de Arremesso",
        },
      ],
    ],
  },
  {
    name: "Disparo Rápido",
    description:
      "Se estiver usando uma arma de ataque à distância e gastar uma ação completa para atacar, você pode fazer um ataque adicional com ela (se puder recarregá-la como ação livre). Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno.",
    type: "COMBATE",
    requirements: [
      [
        { type: "ATRIBUTO", name: "Destreza", value: 1 },
        {
          type: "PODER",
          name: "Estilo de Disparo",
        },
      ],
      [
        { type: "ATRIBUTO", name: "Destreza", value: 1 },
        {
          type: "PODER",
          name: "Estilo de Arremesso",
        },
      ],
    ],
  },
  {
    name: "Empunhadura Poderosa",
    description:
      "Ao usar uma arma feita para uma categoria de tamanho maior que a sua, a penalidade que você sofre nos testes de ataque diminui para –2 (normalmente, uma criatura que use uma arma feita para uma categoria de tamanho maior sofre uma penalidade de –5 nos testes de ataque).",
    type: "COMBATE",
    requirements: [[{ type: "ATRIBUTO", name: "Força", value: 3 }]],
  },
  {
    name: "Encouraçado",
    description:
      "Se estiver usando uma armadura pesada, você recebe +2 na Defesa (NÃO INCLUSO). Esse bônus aumenta em +2 para cada outro poder que você possua que tenha Encouraçado como pré-requisito.",
    type: "COMBATE",
    requirements: [
      [
        {
          type: "PROFICIENCIA",
          name: "Armaduras Pesadas",
        },
      ],
    ],
  },
  {
    name: "Esquiva",
    description: "Você recebe +2 em Defesa (JÁ INCLUSO) e Reflexos.",
    type: "COMBATE",
    requirements: [[{ type: "ATRIBUTO", name: "Destreza", value: 1 }]],
  },
  {
    name: "Estilo de Arma e Escudo",
    description:
      "Se você estiver usando um escudo, o bônus na Defesa que ele fornece aumenta em +2.",
    type: "COMBATE",
    requirements: [
      [
        {
          type: "PERICIA",
          name: "Luta",
        },
        {
          type: "PROFICIENCIA",
          name: "Escudos",
        },
      ],
    ],
  },
  {
    name: "Estilo de Arremesso",
    description:
      "Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas.",
    type: "COMBATE",
    requirements: [[{ type: "PERICIA", name: "Pontaria" }]],
  },
  {
    name: "Estilo de Disparo",
    description:
      "Se estiver usando uma arma de disparo, você soma o bônus de Destreza nas rolagens de dano.",
    type: "COMBATE",
    requirements: [[{ type: "PERICIA", name: "Pontaria" }]],
  },
  {
    name: "Estilo de Duas Armas",
    description:
      "Se estiver usando duas armas (e pelo menos uma delas for leve) e fizer a ação atacar, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Se você possuir Ambidestria, não sofre essa penalidade.",
    type: "COMBATE",
    requirements: [
      [
        { type: "ATRIBUTO", name: "Destreza", value: 2 },
        { type: "PODER", name: "Estilo de Uma Arma" },
      ],
    ],
  },
  {
    name: "Estilo de Duas Mãos",
    description:
      "Se estiver usando uma arma corpo a corpo com as duas mãos, você recebe +5 nas rolagens de dano. Este poder não pode ser usado com armas leves.",
    type: "COMBATE",
    requirements: [
      [
        { type: "ATRIBUTO", name: "Força", value: 2 },
        { type: "PERICIA", name: "Luta" },
      ],
    ],
  },
  {
    name: "Estilo de Uma Arma",
    description:
      "Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma (exceto ataques desarmados).",
    type: "COMBATE",
    requirements: [[{ type: "PERICIA", name: "Luta" }]],
  },
  {
    name: "Estilo Desarmado",
    description:
      "Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades).",
    type: "COMBATE",
    requirements: [[{ type: "PERICIA", name: "Luta" }]],
  },
  {
    name: "Fanático",
    description: "Seu deslocamento não é reduzido por usar armaduras pesadas.",
    type: "COMBATE",
    requirements: [
      [
        {
          type: "NIVEL",
          value: 12,
        },
        {
          type: "PODER",
          name: "Encouraçado",
        },
      ],
    ],
  },
  {
    name: "Finta Aprimorada",
    description:
      "Você recebe +2 em testes de Enganação para fintar e pode fintar como uma ação de movimento.",
    type: "COMBATE",
    requirements: [
      [
        { type: "PERICIA", name: "Enganação " },
        { type: "PODER", name: "Luta" },
      ],
    ],
  },
  {
    name: "Foco em Arma",
    description:
      "Escolha uma arma. Você recebe +2 em testes de ataque com essa arma. Você pode escolher este poder outras vezes para armas diferentes.",
    type: "COMBATE",
    requirements: [[{ type: "PROFICIENCIA", name: "all" }]],
  },
  {
    name: "Ginete",
    description:
      "Você passa automaticamente em testes de Cavalgar para não cair da montaria quando sofre dano. Além disso, não sofre penalidades para atacar à distância ou lançar magias quando montado.",
    type: "COMBATE",
    requirements: [[{ type: "PERICIA", name: "Cavalgar" }]],
  },
  {
    name: "Inexpugnável",
    description:
      "Se estiver usando uma armadura pesada, você recebe +2 em todos os testes de resistência.",
    type: "COMBATE",
    requirements: [
      [
        {
          type: "PODER",
          name: "Encouraçado",
        },
        {
          type: "NIVEL",
          value: 6,
        },
      ],
    ],
  },
  {
    name: "Mira Apurada",
    description:
      "Você pode gastar uma ação de movimento para mirar. Se fizer isso, recebe +2 em testes de ataque e na margem de ameaça com ataques à distância até o fim do turno.",
    type: "COMBATE",
    requirements: [
      [
        { type: "ATRIBUTO", name: "Sabedoria", value: 1 },
        { type: "PODER", name: "Estilo de Uma Arma" },
      ],
    ],
  },
  {
    name: "Presença Aterradora",
    description:
      "Você pode gastar uma ação padrão e 1 PM para assustar todas as criaturas a sua escolha em alcance curto. Veja a perícia Intimidação para as regras de assustar.",
    type: "COMBATE",
    requirements: [[{ type: "PERICIA", name: "Intimidação" }]],
  },
  {
    name: "Proficiência",
    description:
      "Escolha uma proficiência: armas marciais, armas de fogo, armaduras pesadas ou escudos (se for proficiente em armas marciais, você também pode escolher armas exóticas). Você recebe essa proficiência. Você pode escolher este poder outras vezes para proficiências diferentes. (JÁ INCLUSO)",
    type: "COMBATE",
    requirements: [],
  },
  {
    name: "Quebrar Aprimorado",
    description:
      "Você recebe +2 em testes de ataque para quebrar. Quando reduz os PV de uma arma para 0 ou menos, você pode gastar 1 PM para realizar um ataque extra contra o usuário dela. O ataque adicional usa os mesmos valores de ataque e dano, mas os dados devem ser rolados novamente.",
    type: "COMBATE",
    requirements: [[{ type: "PODER", name: "Ataque Poderoso" }]],
  },
  {
    name: "Reflexos de Combate",
    description:
      "Você ganha uma ação de movimento extra no seu primeiro turno de cada combate.",
    type: "COMBATE",
    requirements: [[{ type: "ATRIBUTO", name: "Destreza", value: 1 }]],
  },
  {
    name: "Saque Rápido",
    description:
      "Você recebe +2 em Iniciativa (JÁ CONTABILIZADO) e pode sacar ou guardar itens como uma ação livre (em vez de ação de movimento). Além disso, a ação que você gasta para recarregar uma arma de disparo diminui em uma categoria (ação completa para padrão, padrão para movimento, movimento para livre).",
    type: "COMBATE",
    requirements: [[{ type: "PERICIA", name: "Iniciativa" }]],
  },
  {
    name: "Trespassar",
    description:
      "Quando você faz um ataque corpo a corpo e reduz os pontos de vida do alvo para 0 ou menos, pode gastar 1 PM para fazer um ataque adicional contra outra criatura dentro do seu alcance. O ataque adicional usa os mesmos valores de ataque e dano, mas os dados devem ser rolados novamente.",
    type: "COMBATE",
    requirements: [[{ type: "PODER", name: "Ataque Poderoso" }]],
  },
  {
    name: "Vitalidade",
    description:
      "Você recebe +1 PV por nível de personagem e +2 em Fortitude (JÁ INCLUSO).",
    type: "COMBATE",
    requirements: [[{ type: "ATRIBUTO", name: "Constituição", value: 1 }]],
  },
  {
    name: "Acrobático",
    description:
      "Você pode usar seu modificador de Destreza em vez de Força em testes de Atletismo. Além disso, terreno difícil não reduz seu deslocamento nem o impede de realizar investidas.",
    type: "DESTINO",
    requirements: [[{ type: "ATRIBUTO", name: "Destreza", value: 2 }]],
  },
  {
    name: "Ao Sabor do Destino",
    description:
      "Você recebe diversos benefícios, de acordo com seu nível de personagem e a tabela da página 129.",
    type: "DESTINO",
    requirements: [
      [
        {
          type: "NIVEL",
          value: 5,
        },
      ],
    ],
  },
  {
    name: "Aparência Inofensiva",
    description:
      "A primeira criatura inteligente (Int 3 ou mais) que atacar você em uma cena deve fazer um teste de Vontade (CD Car). Se falhar, perderá sua ação. Este poder só funciona uma vez por cena; independentemente de a criatura falhar ou não no teste, poderá atacá-lo nas rodadas seguintes.",
    type: "DESTINO",
    requirements: [[{ type: "ATRIBUTO", name: "Carisma", value: 1 }]],
  },
  {
    name: "Atlético",
    description:
      "Você recebe +2 em Atletismo e +3m em seu deslocamento (JÁ INCLUSO).",
    type: "DESTINO",
    requirements: [[{ type: "ATRIBUTO", name: "Força", value: 15 }]],
  },
  {
    name: "Atraente",
    description:
      "Você recebe +2 em testes de perícias baseadas em Carisma contra criaturas que possam se sentir fisicamente atraídas por você.",
    type: "DESTINO",
    requirements: [[{ type: "ATRIBUTO", name: "Carisma", value: 1 }]],
  },
  {
    name: "Comandar",
    description:
      "Você pode gastar uma ação de movimento e 1 PM para gritar ordens para seus aliados em alcance médio. Eles recebem +1 em testes de perícia até o fim da cena.",
    type: "DESTINO",
    requirements: [[{ type: "ATRIBUTO", name: "Carisma", value: 1 }]],
  },
  {
    name: "Foco em Perícia",
    description:
      "Escolha uma perícia. Quando faz um teste dessa perícia, você pode gastar 1 PM para rolar dois dados e usar o melhor resultado. Você pode escolher este poder outras vezes para perícias diferentes. Este poder não pode ser aplicado em Luta e Pontaria",
    type: "DESTINO",
    allowSeveralPicks: true,
    requirements: [],
  },
  {
    name: "Investigador",
    description:
      "Você recebe +2 em Investigação (JÁ INCLUSO) e soma seu bônus de Inteligência em Intuição (JÁ INCLUSO).",
    type: "DESTINO",
    requirements: [[{ type: "ATRIBUTO", name: "Inteligência", value: 1 }]],
  },
  {
    name: "Lobo Solitário",
    description:
      "Você recebe +1 em testes de perícia e Defesa se estiver sem nenhum aliado em alcance curto. Você não sofre penalidade por usar a perícia Cura em si mesmo.",
    type: "DESTINO",
    requirements: [],
  },
  {
    name: "Medicina",
    description:
      "Você pode gastar uma ação completa para fazer um teste de Cura (CD 15) em uma criatura. Se você passar, ela recupera 1d6 PV, mais 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD (2d6 com um resultado 20, 3d6 com um resultado 25 e assim por diante). Você só pode usar este poder uma vez por dia numa mesma criatura.",
    type: "DESTINO",
    requirements: [
      [
        { type: "ATRIBUTO", name: "Sabedoria", value: 1 },
        { type: "PERICIA", name: "Cura" },
      ],
    ],
  },
  {
    name: "Parceiro",
    description:
      "Você possui um parceiro animal ou humanoide que o acompanha em aventuras. Escolha os detalhes dele, como nome, aparência e personalidade. Em termos de jogo, é um aliado iniciante de um tipo a sua escolha (veja a página 246). O parceiro obedece às suas ordens e se arrisca para ajudá-lo. Entretanto, se for maltratado, pode parar de segui-lo (de acordo com o mestre). Se perder seu parceiro, você recebe outro no início da próxima aventura.",
    type: "DESTINO",
    requirements: [
      [
        {
          type: "PERICIA",
          name: "Adestramento",
        },
        {
          type: "NIVEL",
          value: 6,
        },
      ],
      [
        {
          type: "PERICIA",
          name: "Diplomacia",
        },
        {
          type: "NIVEL",
          value: 6,
        },
      ],
    ],
  },
  {
    name: "Sentidos Aguçados",
    description:
      "Você recebe +2 em Percepção (JÁ INCLUSO), não fica desprevenido contra inimigos que não possa ver e, sempre que erra um ataque devido a camuflagem ou camuflagem total, pode rolar mais uma vez o dado da chance de falha.",
    type: "DESTINO",
    requirements: [[{ type: "ATRIBUTO", name: "Inteligência", value: 1 }]],
  },
  {
    name: "Sortudo",
    description:
      "Você pode gastar 3 PM para rolar novamente um teste recém realizado (apenas uma vez por teste).",
    requirements: [],
    type: "DESTINO",
  },
  {
    name: "Surto Heroico",
    description:
      "Uma vez por rodada, você pode gastar 5 PM para realizar uma ação padrão ou de movimento adicional.",
    type: "DESTINO",
    requirements: [[{ type: "ATRIBUTO", name: "Inteligência", value: 1 }]],
  },
  {
    name: "Torcida",
    description:
      "Você recebe +2 em testes de perícia e Defesa quando tem a torcida a seu favor. Entenda-se por “torcida” qualquer número de criaturas inteligentes em alcance médio que não esteja realizando nenhuma ação além de torcer por você.",
    type: "DESTINO",
    requirements: [[{ type: "ATRIBUTO", name: "Carisma", value: 1 }]],
  },
  {
    name: "Treinamento em Perícia",
    description:
      "Você se torna treinado em uma perícia a sua escolha (JÁ INCLUSO). Você pode escolher este poder outras vezes para perícias diferentes.",
    type: "DESTINO",
    requirements: [],
  },
  {
    name: "Venefício",
    description:
      "Quando usa um veneno, você não corre risco de se envenenar acidentalmente. Além disso, a CD para resistir aos seus venenos aumenta em +2.",
    type: "DESTINO",
    requirements: [[{ type: "PERICIA", name: "OFICIO ALQUIMIA" }]],
  },
  {
    name: "Vontade de Ferro",
    description:
      "Você recebe +1 PM para cada dois níveis de personagem (NÃO INCLUSO) e +2 em Vontade (INCLUSO).",
    type: "DESTINO",
    requirements: [[{ type: "ATRIBUTO", name: "Sabedoria", value: 1 }]],
  },
  {
    name: "Afinidade com a Tormenta",
    description:
      "Você recebe +10 em testes de resistência contra efeitos da Tormenta e de suas criaturas",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Aharadak" }]],
  },
  {
    name: "Anfíbio",
    description:
      "Você pode respirar embaixo d’água e adquire deslocamento de natação igual a seu deslocamento terrestre.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Oceano" }]],
  },
  {
    name: "Armas da Ambição",
    description:
      "Você recebe +1 em testes de ataque com armas nas quais é proficiente.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Valkaria" }]],
  },
  {
    name: "Arsenal das profundezas",
    description:
      "Você recebe +2 nas rolagens de dano com azagaias, lanças e tridentes.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Oceano" }]],
  },
  {
    name: "Astúcia da Serpente",
    description: "Você recebe +2 em Enganação e Intuição (JÁ INCLUSO).",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Sszzaas" }]],
  },
  {
    name: "Ataque Piedoso",
    description:
      " Você pode usar armas de corpo a corpo para causar dano não letal sem sofrer a penalidade de -5 no teste de ataque",
    type: "CONCEDIDOS",
    requirements: [
      [{ type: "DEVOTO", name: "Lena" }],
      [{ type: "DEVOTO", name: "Thyatis" }],
    ],
  },
  {
    name: "Aura de Medo",
    description:
      "Você pode gastar 2 PM para gerar uma aura de medo com alcance curto e duração até o fim da cena. Todos os inimigos que entrem na aura devem fazer um teste de Vontade (CD Car) ou ficam abalados até o fim da cena. Uma criatura que passe no teste de Vontade fica imune a esta habilidade por um dia.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Kallyadranoch" }]],
  },
  {
    name: "Aura de Paz",
    description:
      "Você pode gastar 2 PM para gerar uma aura de paz com alcance curto e duração de uma cena. Qualquer inimigo dentro da aura que tente fazer uma ação hostil contra você deve fazer um teste de Vontade (CD Car). Se falhar, perderá sua ação. Se passar, fica imune a esta habilidade por um dia.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Marah" }]],
  },
  {
    name: "Aura Restauradora",
    description:
      "Você e seus aliados em alcance curto recuperam duas vezes mais pontos de vida por descanso.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Lena" }]],
  },
  {
    name: "Bênção do Mana",
    description: "Você recebe +3 pontos de mana (JÁ INCLUSO).",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Wynna" }]],
  },
  {
    name: "Carícia Sombria",
    description:
      "Você pode gastar 1 PM e uma ação padrão para cobrir sua mão com energia negativa e tocar uma criatura em alcance corpo a corpo. A criatura sofre 2d6 pontos de dano de trevas (Fortitude CD Sab reduz à metade) e você recupera PV iguais à metade do dano causado. Você pode aprender Toque Vampírico como uma magia divina. Se fizer isso, o custo dela diminui em –1 PM.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Tenebra" }]],
  },
  {
    name: "Centelha Mágica",
    description:
      "Escolha uma magia arcana ou divina de 1º círculo. Você aprende e pode lançar essa magia (JÁ INCLUSO).",
    type: "CONCEDIDOS",
    requirements: [
      [
        { type: "HABILIDADE", name: "Magias", not: true },
        { type: "DEVOTO", name: "Wynna" },
      ],
    ],
  },
  {
    name: "Conhecimento Enciclopédico",
    description:
      "Você se torna treinado em duas perícias baseadas em Inteligência a sua escolha (JÁ INCLUSO).",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Tanna-Toh" }]],
  },
  {
    name: "Conjurar Arma",
    description:
      "Você pode gastar 1 PM para invocar uma arma corpo a corpo ou de arremesso com a qual seja proficiente. A arma surge em sua mão, recebe um bônus de +1 em testes de ataque e rolagens de dano e dura pela cena. Você não pode criar armas de disparo, mas pode criar 20 projéteis (flechas, virotes etc.)",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Arsenal" }]],
  },
  {
    name: "Coragem Total",
    description:
      "Você é imune a efeitos de medo, mágicos ou não. Este poder não elimina fobias raciais (como o medo de altura dos minotauros).",
    type: "CONCEDIDOS",
    requirements: [
      [{ type: "DEVOTO", name: "Khalmyr" }],
      [{ type: "DEVOTO", name: "Lin-Wu" }],
      [{ type: "DEVOTO", name: "Valkaria" }],
    ],
  },
  {
    name: "Cura Gentil",
    description:
      "Você adiciona seu bônus de Carisma (mínimo +1) aos PV restaurados por suas magias de cura.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Lena" }]],
  },
  {
    name: "Curandeira Perfeita",
    description:
      "Você sempre pode escolher 10 em testes de Cura. Além disso, pode usar essa perícia mesmo sem um kit de medicamentos. Se usar o kit, recebe +2 no teste de Cura.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Lena" }]],
  },
  {
    name: "Dedo Verde",
    description: "Você aprende e pode lançar Controlar Plantas (JÁ INCLUSO).",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Allihanna" }]],
  },
  {
    name: "Descanso Natural",
    description:
      "Para você, dormir ao relento conta como uma estalagem confortável.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Allihanna" }]],
  },
  {
    name: "Dom da Imortalidade",
    description:
      "Você é imortal. Sempre que morre, não importando o motivo, volta à vida após 3d6 dias. Você não perde níveis de experiência.",
    type: "CONCEDIDOS",
    requirements: [
      [
        { type: "CLASSE", name: "Paladino" },
        { type: "DEVOTO", name: "Thyatis" },
      ],
    ],
  },
  {
    name: "Dom da Profecia",
    description:
      "Você pode lançar Augúrio. Você também pode gastar 2 PM para receber +2 em um teste.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Thyatis" }]],
  },
  {
    name: "Dom da Ressurreição",
    description:
      "Você pode gastar uma ação completa e todos os PM que possui (mínimo 1 PM) para tocar o corpo de uma criatura morta há menos de um ano e ressuscitá- la. A criatura volta à vida com 1 PV e 0 PM, e perde 2 pontos de Constituição permanentemente. Este poder só pode ser usado uma vez em cada criatura.",
    type: "CONCEDIDOS",
    requirements: [
      [
        { type: "CLASSE", name: "Clérigo" },
        { type: "DEVOTO", name: "Thyatis" },
      ],
    ],
  },
  {
    name: "Dom da Verdade",
    description:
      "Você pode pagar 1 PM para receber +5 em testes de Intuição até o fim da cena.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Khalmyr" }]],
  },
  {
    name: "Escamas Dracônicas",
    description: "Você recebe +1 na Defesa (JÁ INCLUSO).",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Kallyadranoch" }]],
  },
  {
    name: "Escudo Mágico",
    description:
      "Quando lança uma magia, você recebe +2 na Defesa até o início do seu próximo turno.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Wynna" }]],
  },
  {
    name: "Espada Justiceira",
    description:
      "Você pode gastar 1 PM para encantar sua espada (ou outra arma corpo a corpo de corte que esteja empunhando). Ela recebe +1 em testes de ataque e rolagens de dano até o fim da cena.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Khalmyr" }]],
  },
  {
    name: "Espada Solar",
    description:
      "Você pode gastar 1 PM para fazer uma arma corpo a corpo de corte que esteja empunhando causar +1d6 de dano por fogo até o fim da cena.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Azgher" }]],
  },
  {
    name: "Farsa do Fingidor",
    description: "Você aprende e pode lançar Criar Ilusão (JÁ INCLUSO).",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Hynnin" }]],
  },
  {
    name: "Forma de Macaco",
    description:
      "Você pode gastar uma ação completa e 2 PM para se transformar em um macaco. Você adquire tamanho Minúsculo (o que fornece +5 em Furtividade e –5 em testes de manobra) e recebe deslocamento de escalar 9m. Seu equipamento desaparece (e você perde seus benefícios) até você voltar ao normal, mas suas outras estatísticas não são alteradas. A transformação dura indefinidamente, mas termina caso você faça um ataque, lance uma magia ou sofra dano.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Hynnin" }]],
  },
  {
    name: "Fúria Divina",
    description:
      "Você pode gastar 2 PM para invocar uma fúria selvagem, tornando-se temível em combate. Você recebe +2 em testes de ataque e rolagens de dano corpo a corpo, mas não pode executar nenhuma ação que exija paciência ou concentração (como usar a perícia Furtividade ou lançar magias). A Fúria Divina termina se, ao fim da rodada, você não tiver atacado nem sido alvo de um efeito hostil.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Thwor" }]],
  },
  {
    name: "Golpista Divino",
    description: "Você recebe +2 em Enganação e Ladinagem.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Hynnin" }]],
  },
  {
    name: "Habitante do Deserto",
    description:
      "Você recebe resistência a fogo 5 e pode pagar 1 PM para criar água pura e potável suficiente para um odre (ou outro recipiente pequeno).",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Azgher" }]],
  },
  {
    name: "Inimigo de Tenebra",
    description:
      "Seus ataques e habilidades causam +1d6 pontos de dano contra mortos-vivos.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Azgher" }]],
  },
  {
    name: "Kiai Divino",
    description:
      "Quando faz um ataque corpo a corpo, você pode pagar 2 PM. Se acertar o ataque, causa dano máximo.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Lin-Wu" }]],
  },
  {
    name: "Liberdade Divina",
    description:
      "Você pode gastar 2 PM e uma reação para lançar Libertação com alcance pessoal e duração de 1 rodada.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Valkaria" }]],
  },
  {
    name: "Manto da Penumbra",
    description: "Você aprende e pode lançar Escuridão.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Tenebra" }]],
  },
  {
    name: "Mente Analítica",
    description: "Você recebe +2 em Intuição e Vontade.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Tanna-Toh" }]],
  },
  {
    name: "Mente Vazia",
    description: "Você recebe +2 em Iniciativa e Vontade.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Lin-Wu" }]],
  },
  {
    name: "Mestre dos Mares",
    description:
      "Você pode falar com animais aquáticos (como o efeito da magia Voz Divina) e aprende e pode lançar Acalmar Animal, mas só contra criaturas aquáticas.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Oceano" }]],
  },
  {
    name: "Olhar Amedrontador",
    description: "Você aprende e pode lançar Amedrontar.",
    type: "CONCEDIDOS",
    requirements: [
      [{ type: "DEVOTO", name: "Megalokk" }],
      [{ type: "DEVOTO", name: "Thwor" }],
    ],
  },
  {
    name: "Palavras de Bondade",
    description: "Você aprende e pode lançar Enfeitiçar.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Marah" }]],
  },
  {
    name: "Percepção Temporal",
    description:
      "Você pode gastar 3 PM para adicionar seu bônus de Sabedoria (mínimo +1, limitado por seu nível) a seus ataques, Defesa e testes de Reflexos até o fim da cena.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Aharadak" }]],
  },
  {
    name: "Poder Oculto",
    description:
      "Você pode gastar uma ação de movimento e 2 PM para invocar a força, a rapidez ou o vigor dos loucos. Role 1d6 para receber +4 em Força (1 ou 2), Destreza (3 ou 4) ou Constituição (5 ou 6) até o fim da cena. Você pode usar este poder várias vezes, cada vez gastando uma ação de movimento e 2 PM.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Nimb" }]],
  },
  {
    name: "Presas venenosas",
    description:
      "Você pode gastar uma ação de movimento e 1 PM para envenenar uma arma corpo a corpo que esteja empunhando. Em caso de acerto, a arma causa 1d12 pontos de dano de veneno. A arma permanece envenenada até atingir uma criatura ou até o fim da cena, o que acontecer primeiro.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Sszzaas" }]],
  },
  {
    name: "Rejeição Divina",
    description:
      "Você recebe +5 em testes de resistência contra magias divinas.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Aharadak" }]],
  },
  {
    name: "Sangue de Ferro",
    description:
      "Você pode pagar 2 PM para receber +2 em rolagens de dano e resistência a dano 5 até o fim da cena",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Arsenal" }]],
  },
  {
    name: "Sangue Ofídico",
    description:
      "Você recebe resistência a veneno 5 e a CD para resistir aos seus venenos aumenta em +2.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Sszzaas" }]],
  },
  {
    name: "Servos do Dragão",
    description:
      "Você pode gastar uma ação completa e 2 PM para invocar 2d4+1 kobolds em espaços desocupados em alcance curto. Você pode usar uma ação de movimento para fazer os kobolds andarem (eles têm deslocamento 9m) ou uma ação padrão para fazê-los causar dano a criaturas adjacentes (1d6–1 pontos de dano de perfuração cada). Os kobolds têm For 8, Des 14, 1 PV, não têm valor de Defesa ou testes de resistência e falham automaticamente em qualquer teste oposto. Eles desaparecem quando morrem ou no fim da cena. Os kobolds não agem sem receber uma ordem. Usos criativos para criaturas invocadas fora de combate ficam a critério do mestre.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Kallyadranoch" }]],
  },
  {
    name: "Sorte dos loucos",
    description:
      "Você pode pagar 1 PM para rolar novamente um teste recém realizado. Se ainda assim falhar no teste, você perde 1d6 PM.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Nimb" }]],
  },
  {
    name: "Talento Artístico",
    description: "Você recebe +2 em Atuação e Diplomacia.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Marah" }]],
  },
  {
    name: "Teurgista Místico",
    description:
      "Até uma magia de cada círculo que você aprender poderá ser escolhida entre magias divinas (se você for um conjurador arcano) ou entre magias arcanas (se for um conjurador divino).",
    type: "CONCEDIDOS",
    requirements: [
      [
        { type: "HABILIDADE", name: "Magias" },
        { type: "DEVOTO", name: "Wynna" },
      ],
    ],
  },
  {
    name: "Transmissão da Loucura",
    description: "Você pode lançar Sussurros Insanos (CD Car).",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Nimb" }]],
  },
  {
    name: "Tropas Duyshidakk",
    description:
      "Você pode gastar uma ação completa e 2 PM para invocar 1d4+1 goblinoides em espaços desocupados em alcance curto. Você pode usar uma ação de movimento para fazer os goblinoides andarem (eles têm deslocamento 9m) ou uma ação padrão para fazê-los causar dano a criaturas adjacentes (1d6+1 pontos de dano de corte cada). Os goblinoides têm For 14, Des 14, 1 PV, não têm valor de Defesa ou testes de resistência e falham automaticamente em qualquer teste oposto. Eles desaparecem quando morrem ou no fim da cena. Os goblinoides não agem sem receber uma ordem. Usos criativos para criaturas invocadas fora de combate ficam a critério do mestre.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Thwor" }]],
  },
  {
    name: "Urro Divino",
    description:
      "Quando faz um ataque ou lança uma magia, você pode pagar 1 PM para somar seu modificador de Constituição (mínimo +1) à rolagem de dano desse ataque ou magia.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Megalokk" }]],
  },
  {
    name: "Visão nas Trevas",
    description:
      "Você enxerga perfeitamente no escuro, incluindo em magias de escuridão.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Tenebra" }]],
  },
  {
    name: "Voz da Civilização",
    description: "Você está sempre sob efeito de Compreensão.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Tanna-Toh" }]],
  },
  {
    name: "Voz da Natureza",
    description:
      "Você pode falar com animais (como o efeito da magia Voz Divina) e aprende e pode lançar Acalmar Animal, mas só contra animais.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Allihanna" }]],
  },
  {
    name: "Voz dos Monstros",
    description:
      "Você conhece os idiomas de todos os monstros inteligentes (criaturas do tipo monstro com Int 3 ou mais) e pode se comunicar livremente com monstros não inteligentes (Int 1 ou 2), como se estivesse sob efeito da magia Voz Divina.",
    type: "CONCEDIDOS",
    requirements: [[{ type: "DEVOTO", name: "Megalokk" }]],
  },
  {
    name: "Celebrar Ritual",
    description:
      "Você pode lançar magias na forma de rituais. Fazer isso dobra seu limite de PM (permitindo usar mais aprimoramentos), mas aumenta sua execução para uma hora (ou para o dobro da sua execução, o que for maior) e adiciona um componente material de T$ 10 por PM na forma de incensos, óleos, oferendas etc. Quando faz um ritual, você paga apenas metade do custo da magia em PM (após aplicar quaisquer habilidades que modifiquem esse custo).",
    type: "MAGIA",
    requirements: [
      [
        { type: "HABILIDADE", name: "Magias" },
        { type: "NIVEL", value: 8 },
        { type: "PERICIA", name: "Misticismo" },
      ],
      [
        { type: "HABILIDADE", name: "Magias" },
        { type: "NIVEL", value: 8 },
        { type: "PERICIA", name: "Religião" },
      ],
    ],
  },
  {
    name: "Escrever Pergaminho",
    description:
      "Você pode usar a perícia Ofício (escriba) para fabricar pergaminhos com magias que conheça. Veja a página 121 para a regra de fabricar itens e a página e 327 para a regra de pergaminhos. De acordo com o mestre, você pode usar outros objetos similares, como runas, tabuletas de argila etc.",
    type: "MAGIA",
    requirements: [
      [
        { type: "HABILIDADE", name: "Magias" },
        { type: "PERICIA", name: "Ofício" },
      ],
    ],
  },
  {
    name: "Foco em Magia",
    description:
      "Escolha uma magia. Seu custo diminui em –2 PM (não cumulativo com outras reduções de custo). Você pode escolher este poder outras vezes para magias diferentes.",
    type: "MAGIA",
    allowSeveralPicks: true,
    requirements: [[{ type: "HABILIDADE", name: "Magias" }]],
  },
  {
    name: "Magia Acelerada",
    description:
      "Muda a execução da magia para ação livre. Você só pode aplicar este aprimoramento em magias com execução de movimento, padrão ou completa e só pode lançar uma magia como ação livre por rodada. Custo: +4 PM.",
    type: "DESTINO",
    requirements: [[{ type: "HABILIDADE", name: "Magias", value: 2 }]],
  },
  {
    name: "Magia Ampliada",
    description:
      "Aumenta o alcance da magia em um passo (de curto para médio, de médio para longo) ou dobra a área de efeito da magia. Por exemplo, uma Bola de Fogo ampliada tem seu alcance aumentado para longo ou sua área aumentada para 12m de raio. Custo: +2 PM.",
    type: "MAGIA",
    requirements: [[{ type: "HABILIDADE", name: "Magias" }]],
  },
  {
    name: "Magia Discreta",
    description:
      "Você lança a magia sem gesticular e falar, usando apenas concentração. Isso permite lançar magias com as mãos presas, amordaçado etc. Também permite lançar magias arcanas usando armadura sem teste de Misticismo. Outros personagens só percebem que você lançou uma magia se passarem num teste de Misticismo (CD 20). Custo: +2 PM.",
    type: "MAGIA",
    requirements: [[{ type: "HABILIDADE", name: "Magias" }]],
  },
  {
    name: "Magia Ilimitada",
    description:
      "Você soma seu modificador do atributo-chave no limite de PM que pode gastar numa magia. Por exemplo, um mago de 5º nível com Int 18 (+4) e este poder pode gastar até 9 PM em cada magia.",
    type: "MAGIA",
    requirements: [[{ type: "HABILIDADE", name: "Magias" }]],
  },
  {
    name: "Preparar Poção",
    description:
      "Você pode usar a perícia Ofício (alquimia) para fabricar poções com magias que conheça de 1º e 2º círculos. Veja a página 121 para a regra de fabricar itens e a página 327 para a regra de poções. Pré--requisitos: Habilidade de classe Magias, treinado em Ofício (alquimia).",
    type: "MAGIA",
    requirements: [
      [
        { type: "HABILIDADE", name: "Magias" },
        { type: "PERICIA", name: "Ofício (Alquimia)" },
      ],
    ],
  },
  {
    name: "Membro da Igreja",
    description:
      "Você consegue hospedagem e informação em qualquer templo de sua divindade, para você e seus aliados.",
    type: "ORIGEM",
  },
  {
    name: "Amigo Especial",
    description:
      "Você recebe +5 em testes de Adestramento com animais comuns. Além disso, possui um animal de estimação que o auxilia e o acompanha em suas aventuras. Em termos de jogo, é um aliado que fornece +2 em uma perícia a sua escolha (exceto Luta ou Pontaria e aprovada pelo mestre) e não conta em seu limite de aliados.",
    type: "ORIGEM",
  },
  {
    name: "Lembranças Graduais",
    description:
      "Durante suas aventuras, em determinados momentos a critério do mestre, você pode fazer um teste de Sabedoria (CD 10) para reconhecer pessoas, criaturas ou lugares que tenha encontrado antes de perder a memória.",
    type: "ORIGEM",
  },
  {
    name: "Sangue Azul",
    description:
      "Você tem alguma influência política, suficiente para ser tratado com mais leniência pela guarda, conseguir uma audiência com o nobre local etc.",
    type: "ORIGEM",
  },
  {
    name: "Frutos do Trabalho",
    description:
      "Quando passa em um teste de Ofício para sustento, você recebe o dobro do dinheiro.",
    type: "ORIGEM",
  },
  {
    name: "Dom artístico",
    description:
      "Quando usa a perícia Atuação para fazer uma apresentação e passa no teste, você ganha o dobro de tibares.",
    type: "ORIGEM",
  },
  {
    name: "Esse Cheiro...",
    description:
      "Você recebe +2 em Fortitude e passa automaticamente em testes de Ofício (alquimia) para identificar itens alquímicos.",
    type: "ORIGEM",
  },
  {
    name: "À Prova de Tudo",
    description:
      "Você não sofre penalidade em deslocamento e Sobrevivência por clima ruim e por terreno difícil natural.",
    type: "ORIGEM",
  },
  {
    name: "Confissão",
    description:
      "Você pode usar Intimidação para obter informação sem custo (veja Investigação).",
    type: "ORIGEM",
  },
  {
    name: "Alpinista Social",
    description:
      "Você pode substituir testes de Diplomacia por testes de Enganação.",
    type: "ORIGEM",
  },
  {
    name: "Truque de Mágica",
    description:
      "Você pode lançar Explosão de Chamas, Hipnotismo e Transmutar Objetos, mas apenas com o aprimoramento Truque. Esta não é uma habilidade mágica — os efeitos provêm de truques e prestidigitação.",
    type: "ORIGEM",
  },
  {
    name: "Punguista",
    description:
      "Você pode fazer testes de Ladinagem para sustento, como a perícia Ofício.",
    type: "ORIGEM",
  },
  {
    name: "Médico de Campo",
    description:
      "Quando você faz primeiros socorros em um personagem com 0 ou menos PV, ele recupera 1d6 PV.",
    type: "ORIGEM",
  },
  {
    name: "Busca Interior",
    description:
      "Quando você e seus companheiros estão diante de um mistério, incapazes de prosseguir, você pode gastar 1 PM para meditar sozinho durante algum tempo e receber uma dica do mestre.",
    type: "ORIGEM",
  },
  {
    name: "Desejo de Liberdade",
    description:
      "Ninguém voltará a torná-lo um escravo! Você recebe +5 em testes contra efeitos que possam aprisioná-lo, como a manobra agarrar ou a magia Imobilizar.",
    type: "ORIGEM",
  },
  {
    name: "Palpite Fundamentado",
    description:
      "Você pode gastar 2 PM para substituir um teste de qualquer perícia originalmente baseada em Inteligência ou Sabedoria por um teste de Conhecimento.",
    type: "ORIGEM",
  },
  {
    name: "Água no Feijão",
    description:
      "Você gasta apenas metade da matéria-prima para testes de Ofício (cozinheiro).",
    type: "ORIGEM",
  },
  {
    name: "Cultura Exótica",
    description:
      "Por sua diferente visão de mundo, você encontra soluções inesperadas. Você pode gastar 1 PM para fazer um teste de perícia somente treinada, mesmo sem ser treinado na perícia.",
    type: "ORIGEM",
  },
  {
    name: "Pão e Circo",
    description:
      "Por seu treino em combates de exibição, você sabe “bater sem machucar”. Pode escolher causar dano não letal sem sofrer a penalidade de –5.",
    type: "ORIGEM",
  },
  {
    name: "Detetive",
    description:
      "Você pode substituir testes de Percepção e Intuição por testes de Investigação.",
    type: "ORIGEM",
  },
  {
    name: "Herança",
    description:
      "Você herdou um item de preço de até T$ 1.000. Você pode escolher este poder duas vezes, para um item de até T$ 2.000.",
    type: "ORIGEM",
  },
  {
    name: "Amigo dos Plebeus",
    description:
      "Você consegue hospedagem gratuita, para você e seus aliados, em famílias ou comunidades plebeias.",
    type: "ORIGEM",
  },
  {
    name: "Passagem de Navio",
    description:
      "Você consegue transporte marítimo para você e seus companheiros, sem custos, desde que todos paguem com trabalho (passar em pelo menos um teste de perícia adequado durante a viagem).",
    type: "ORIGEM",
  },
  {
    name: "Vendedor de Carcaças",
    description:
      "Você pode fazer testes de Sobrevivência para sustento, como a perícia Ofício.",
    type: "ORIGEM",
  },
  {
    name: "Rede de Contatos",
    description:
      "Graças à influência de sua guilda, você pode usar Diplomacia para obter informação sem custo (veja Investigação).",
    type: "ORIGEM",
  },
  {
    name: "Negociação",
    description:
      "Você pode vender itens 10% mais caro (não cumulativo com barganha).",
    type: "ORIGEM",
  },
  {
    name: "Escavador",
    description:
      "Você se torna proficiente em picareta e não sofre penalidade em deslocamento por terreno difícil em masmorras e subterrâneos.",
    type: "ORIGEM",
  },
  {
    name: "Mochileiro",
    description:
      "Você não sofre a penalidade de armadura e a redução de deslocamento por transportar carga pesada.",
    type: "ORIGEM",
  },
  {
    name: "Quebra-galho",
    description:
      "Em cidades ou metrópoles, você pode comprar qualquer item não superior ou mágico por metade do custo normal. Esses itens não podem ser vendidos (são velhos, sujos, furtados...).",
    type: "ORIGEM",
  },
  {
    name: "Estoico",
    description:
      "Sua recuperação de pontos de vida e pontos de mana com descanso aumenta em uma categoria: normal em condições ruins, confortável em condições normais e assim por diante. Veja as regras de recuperação na página 106.",
    type: "ORIGEM",
  },
  {
    name: "Antigo Mestre",
    description:
      "Você ainda mantém contato com o herói que costumava servir. A critério do mestre, em uma emergência, você pode receber alguma ajuda — ou então uma bela bronca por esperar que heróis poderosos resolvam o seu problema!",
    type: "ORIGEM",
  },
  {
    name: "Vida Rústica",
    description:
      "Você come coisas que fariam um avestruz vomitar e também consegue descansar nos lugares mais desconfortáveis (mesmo dormindo ao relento, sua recuperação de PV e PM nunca é inferior a seu próprio nível).",
    type: "ORIGEM",
  },
  {
    name: "Influência Militar",
    description:
      "Você fez amigos nas forças armadas. Onde houver acampamentos ou bases militares, você pode conseguir hospedagem e informações para você e seus aliados.",
    type: "ORIGEM",
  },
  {
    name: "Gororoba",
    description:
      "Você prepara comidas em uma categoria de tempo menor (uma hora para comidas de até T$ 10, um dia para comidas de até T$ 100 etc.). Você ainda pode sofrer uma penalidade de –5 no teste de Ofício para diminuir o tempo em mais uma categoria (uma hora baixa para dez minutos).",
    type: "ORIGEM",
  },
  {
    name: "Esforçado",
    description:
      "Você não teme trabalho duro, nem prazos apertados. Você recebe um bônus de +2 em todos os testes de perícias estendidos.",
    type: "ORIGEM",
  },
  {
    name: "Anatomia Insana",
    description:
      "Você tem 25% de chance (resultado “1” em 1d4) de ignorar o dano adicional de um acerto crítico ou ataque furtivo. A chance aumenta em +25% para cada dois outros poderes da Tormenta que você possui",
    type: "TORMENTA",
    requirements: [],
  },
  {
    name: "Antenas",
    description:
      "Você recebe +1 em Iniciativa, Percepção e Vontade. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
    type: "TORMENTA",
    requirements: [],
  },
  {
    name: "Armamento Aberrante",
    description:
      "Você pode gastar uma ação de movimento e 1 PM para produzir uma arma orgânica macabra — ela brota do seu braço, ombro ou costas como uma planta grotesca e então se desprende. Você pode produzir qualquer arma corpo a corpo ou de arremesso com a qual seja proficiente. O dano da arma aumenta em um passo para cada dois outros poderes da Tormenta que você possui. A arma dura pela cena, então se desfaz numa poça de gosma. Pré-requisito: outro poder da Tormenta.",
    type: "TORMENTA",
    requirements: [
      [
        {
          type: "PODER TORMENTA",
          value: 1,
        },
      ],
    ],
  },
  {
    name: "Articulações Flexíveis",
    description:
      "Você recebe +1 em Acrobacia, Furtividade e Reflexos. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
    type: "TORMENTA",
    requirements: [],
  },
  {
    name: "Asas Insetoides",
    description:
      "Você pode gastar 1 PM para receber deslocamento de voo 9m até o fim da rodada. O deslocamento aumenta em 1,5m para cada outro poder da Tormenta que você possui.",
    type: "TORMENTA",
    requirements: [
      [
        {
          type: "PODER TORMENTA",
          value: 4,
        },
      ],
    ],
  },
  {
    name: "Carapaça",
    description:
      "Sua pele é recoberta por placas quitinosas. Você recebe +1 na Defesa (NÃO INCLUSO). Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
    type: "TORMENTA",
    requirements: [],
  },
  {
    name: "Corpo Aberrante",
    description:
      "Crostas vermelhas em várias partes de seu corpo tornam seus ataques mais perigosos. Seu dano desarmado aumenta em um passo, mais um passo para cada quatro outros poderes da Tormenta que você possui.",
    type: "TORMENTA",
    requirements: [
      [
        {
          type: "PODER TORMENTA",
          value: 1,
        },
      ],
    ],
  },
  {
    name: "Dentes Afiados",
    description:
      "Você recebe uma arma natural de mordida (dano 1d4, crítico x2, corte). Quando usa a ação atacar, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida (JÁ INCLUSO).",
    type: "TORMENTA",
    requirements: [],
  },
  {
    name: "Empunhadura Rubra",
    description:
      "Você pode gastar 1 PM para cobrir suas mãos com uma carapaça rubra. Até o final da cena, você recebe +1 em Luta. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
    type: "TORMENTA",
    requirements: [],
  },
  {
    name: "Mãos Membranosas",
    description:
      "Você recebe +1 em Atletismo, Fortitude e testes de agarrar. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
    type: "TORMENTA",
    requirements: [],
  },
  {
    name: "Membros extras",
    description:
      "Você possui um par de patas insetoides que saem de suas costas, ombros ou flancos. Quando usa a ação atacar, pode gastar 2 PM para fazer um ataque corpo a corpo extra com cada um (dano 1d4, crítico x2, corte). Se possuir Ambidestria ou Estilo de Duas Armas, pode empunhar armas leves em suas patas insetoides (mas ainda precisa pagar 2 PM para atacar com elas e sofre a penalidade de –2 em todos os ataques).",
    type: "TORMENTA",
    requirements: [
      [
        {
          type: "PODER TORMENTA",
          value: 4,
        },
      ],
    ],
  },
  {
    name: "Olhos Vermelhos",
    description:
      "Você recebe visão no escuro e +1 em Intimidação. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
    type: "TORMENTA",
    requirements: [],
  },
  {
    name: "Pele Corrompida",
    description:
      "Sua carne foi mesclada à matéria vermelha. Você recebe resistência a ácido, eletricidade, fogo, frio, luz e trevas 2. Esta RD aumenta em +2 para cada dois outros poderes da Tormenta que você possui.",
    type: "TORMENTA",
    requirements: [],
  },
  {
    name: "Sangue Ácido",
    description:
      "Quando você sofre dano por um ataque corpo a corpo, o atacante sofre 1 ponto de dano de ácido. Este dano aumenta em +1 para cada outro poder da Tormenta que você possui.",
    type: "TORMENTA",
    requirements: [],
  },
  {
    name: "Visco Rubro",
    description:
      "Você pode gastar 1 PM para expelir um líquido escuro, grosso e corrosivo. Até o final da cena, você recebe +1 nas rolagens de dano corpo a corpo. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
    type: "TORMENTA",
    requirements: [],
  },
];
