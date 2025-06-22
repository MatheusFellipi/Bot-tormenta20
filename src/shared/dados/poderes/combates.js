const combatPowers = [
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
];
