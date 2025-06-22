export const magicPowers = [
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
];
