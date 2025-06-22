const powers = [
  {
    name: "Armadura Brilhante",
    text: "Você pode somar o modificador de Carisma na Defesa quando usa armadura pesada. Se fizer isso, não pode somar o modificador de Destreza, mesmo que outras habilidades ou efeitos permitam isso.",
    requirements: [[{ type: "NIVEL", value: 8 }]],
  },
  {
    name: "Aumento de Atributo",
    text: "Você recebe +2 em um atributo a sua escolha (NÃO CONTABILIZADO). Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.",
    requirements: [],
    canRepeat: true,
  },
  {
    name: "Autoridade Feudal",
    text: "Você pode gastar 2 PM para conclamar o povo a realizar uma tarefa para você. Em termos de jogo, passa automaticamente em um teste de perícia com CD máxima igual ao seu nível +5. O tempo necessário para conclamar o povo é o tempo do uso da perícia em questão. Esta habilidade só pode ser usada em locais onde sua posição carregue alguma influência (a critério do mestre).",
    requirements: [[{ type: "NIVEL", value: 6 }]],
  },
  {
    name: "Educação Privilegiada",
    text: "Você se torna treinado em duas perícias de nobre a sua escolha (NÃO CONTABILIZADO).",
    requirements: [],
  },
  {
    name: "Estrategista",
    text: "Você pode direcionar aliados em alcance curto. Gaste uma ação padrão e 1 PM por aliado que quiser direcionar (limitado pelo seu modificador de Carisma). No próximo turno do aliado, ele ganha uma ação de movimento.",
    requirements: [
      [
        { type: "ATRIBUTO", name: "Inteligência", value: 1 },
        { type: "PERICIA", name: "GUERRA" },
        { type: "NIVEL", value: 6 },
      ],
    ],
  },
  {
    name: "Favor",
    text: "Você pode usar sua influência para pedir favores a pessoas poderosas. Pedir favores gasta 5 PM e exige pelo menos uma hora de conversa e bajulação — ou mais, de acordo com o mestre. Faça um teste de Diplomacia. A CD do teste depende do que você está pedindo: 10 para algo simples (como um convite para uma festa particular), 20 para algo caro ou complicado (como uma carona de barco até Galrasia) e 30 para algo perigoso ou ilegal (como acesso aos planos militares do reino).",
    requirements: [],
  },
  {
    name: "General",
    text: "Quando você usa o poder Estrategista, os aliados direcionados recebem 1d4 pontos de mana temporários. Esses PM duram até o fim do turno do aliado e não podem ser usados em efeitos que concedam PM.",
    requirements: [
      [
        { type: "PODER", name: "Estrategista" },
        { type: "NIVEL", value: 12 },
      ],
    ],
  },
  {
    name: "Grito Tirânico",
    text: "Quando usa a habilidade Palavras Afiadas, você pode gastar +2 PM. Se fizer isso, seus dados de dano aumentam para d8 e você atinge todos os inimigos em alcance curto.",
    requirements: [
      [
        { type: "PODER", name: "Palavras Afiadas" },
        { type: "NIVEL", value: 8 },
      ],
    ],
  },
  {
    name: "Inspirar Confiança",
    text: "Sua presença faz as pessoas darem o melhor de si. Você pode gastar 2 PM para fazer um aliado em alcance curto rolar novamente um teste recém realizado.",
    requirements: [],
  },
  {
    name: "Inspirar Glória",
    text: "A presença de um nobre motiva as pessoas a realizarem façanhas impressionantes. Você pode gastar 5 PM para fazer um aliado em alcance curto ganhar uma ação padrão adicional no próximo turno dele. Você só pode usar esta habilidade uma vez por cena em cada aliado.",
    requirements: [
      [
        { type: "PODER", name: "Inspirar Confiança" },
        { type: "NIVEL", value: 8 },
      ],
    ],
  },
  {
    name: "Jogo da Corte",
    text: "Você pode gastar 1 PM para rolar novamente um teste recém realizado de Diplomacia, Intuição ou Nobreza.",
    requirements: [],
  },
  {
    name: "Liderar pelo Exemplo",
    text: "Você pode pagar 2 PM para servir de inspiração. Até o início de seu próximo turno, sempre que você passar em um teste de perícia, aliados em alcance curto que fizerem um teste da mesma perícia podem usar o resultado total do seu teste em vez de rolar o dado.",
    requirements: [[{ type: "NIVEL", value: 6 }]],
  },
  {
    name: "Língua de Ouro",
    text: "ocê pode gastar uma ação padrão e 6 PM para gerar o efeito da magia Enfeitiçar com os aprimoramentos de sugerir ação e afetar todas as criaturas dentro do alcance (CD Car). Esta não é uma habilidade mágica e provém de sua capacidade de influenciar outras pessoas.",
    requirements: [
      [
        { type: "PODER", name: "Língua de Prata" },
        { type: "NIVEL", value: 8 },
      ],
    ],
  },
  {
    name: "Língua de Prata",
    text: "Quando faz um teste de perícia baseada em Carisma, você pode gastar 2 PM para receber um bônus no teste igual a metade do seu nível.",
    requirements: [],
  },
  {
    name: "Língua Rápida",
    text: "Quando faz um teste de Diplomacia para mudar atitude como uma ação completa, você sofre uma penalidade de –5, em vez de –10.",
    requirements: [],
  },
  {
    name: "Palavras Afiadas",
    text: "Você pode gastar uma ação padrão e 1 PM para submeter a sua vontade uma criatura inteligente (Int 3 ou mais) em alcance curto. Faça um teste de Diplomacia ou Intimidação (a sua escolha) oposto ao teste de Vontade da criatura. Se vencer, você causa 2d6 pontos de dano mental não letal à criatura. Se perder, causa metade deste dano. Para cada PM extra que você gastar quando ativar o poder, o dano aumenta em +1d6. Caso a criatura seja reduzida a 0 ou menos PV, rende-se (caso você tenha usado Diplomacia) ou fica apavorada (caso tenha usado Intimidação), em vez de cair inconsciente.",
    requirements: [],
  },
  {
    name: "Presença Aristocrática",
    text: "Sempre que uma criatura inteligente (Int 3 ou mais) tentar machucá-lo (causar dano com um ataque, magia ou habilidade) você pode gastar 2 PM. Se fizer isso, a criatura deve fazer um teste de Vontade (CD Car). Se falhar, não conseguirá machucá-lo e perderá a ação. Você só pode usar esta habilidade uma vez por cena contra cada criatura.",
    requirements: [],
  },
  {
    name: "Presença Majestosa",
    text: "Você impõe respeito a todos. A habilidade Presença Aristocrática passa a funcionar contra criaturas com Int 1 ou mais (passa a afetar até mesmo animais, embora continue não funcionando contra criaturas sem valor de Inteligência). Além disso, você pode usá-la mais de uma vez contra uma mesma criatura na mesma cena.",
    requirements: [
      [
        { type: "PODER", name: "Presença Aristocrática" },
        { type: "NIVEL", value: 16 },
      ],
    ],
  },
  {
    name: "Título",
    text: "Você adquire um título de nobreza. Converse com o mestre para definir os benefícios exatos de seu título. Como regra geral, você recebe 10 TO por nível de nobre no início de cada aventura (rendimentos dos impostos) ou a ajuda de um aliado veterano (um membro de sua corte).",
    requirements: [
      [
        { type: "PODER", name: "Autoridade Feudal" },
        { type: "NIVEL", value: 10 },
      ],
    ],
  },
  {
    name: "Voz Poderosa",
    text: "Você recebe +2 em Diplomacia e Intimidação. Suas habilidades de nobre com alcance curto passam para alcance médio.",
    requirements: [],
  },
];
