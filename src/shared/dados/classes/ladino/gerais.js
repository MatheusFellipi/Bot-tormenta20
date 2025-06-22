const gerais = {
  name: "Lutador",
  pv: 20,
  addpv: 5,
  pm: 3,
  addpm: 3,
  periciasbasicas: ["LUTA", "FORTITUDE"],
  periciasrestantes: {
    qtd: 4,
    list: [
      "ACROBACIA",
      "ADESTRAMENTO",
      "ATLETISMO",
      "ENGANACAO",
      "FURTIVIDADE",
      "INICIATIVA",
      "INTIMIDACAO",
      "OFICIO",
      "PERCEPCAO",
      "PONTARIA",
      "REFLEXOS",
    ],
  },
  proficiencias: ["LEVES", "SIMPLES"],
  abilities: [
    {
      name: "Briga",
      text: "Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades). A cada quatro níveis, seu dano desarmado aumenta, conforme a tabela. O dano na tabela é para criaturas Pequenas e Médias. Criaturas Minúsculas diminuem esse dano em um passo, Grandes e Enormes aumentam em um passo e Colossais aumentam em dois passos.",
      nivel: 1,
    },
    {
      name: "Golpe Relâmpago",
      text: "Quando usa a ação atacar para fazer um ataque desarmado, você pode gastar 1 PM para realizar um ataque desarmado adicional.",
      nivel: 1,
    },
    {
      name: "Casca Grossa",
      text: "No 3º nível, você soma seu bônus de Constituição na Defesa, limitado pelo seu nível e apenas se não estiver usando armadura pesada. Além disso, no 7º nível, e a cada quatro níveis, você recebe +1 na Defesa.",
      nivel: 3,
    },
    {
      name: "Golpe Cruel",
      text: "No 5º nível, você acerta onde dói. Sua margem de ameaça com ataques desarmados aumenta em +1.",
      nivel: 5,
    },
    {
      name: "Golpe Violento",
      text: "No 9º nível, você bate com muita força. Seu multiplicador de crítico com ataques desarmados aumenta em +1.",
      nivel: 9,
    },
    {
      name: "Dono da Rua",
      text: "No 20º nível, seu dano desarmado aumenta para 2d10 (para criaturas Médias). Além disso, quando usa a ação atacar para fazer um ataque desarmado, você pode fazer dois ataques, em vez de um (podendo usar Golpe Relâmpago para fazer um terceiro).",
      nivel: 20,
    },
  ],

  probDevoto: 0.3,
  faithProbability: [
    "ARSENAL",
    "KALLYADRANOCH",
    "MEGALOKK",
    "THYATIS",
    "VALKARIA",
  ],
};
