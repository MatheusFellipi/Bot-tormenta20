export const DestinyPowers = [
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
];
