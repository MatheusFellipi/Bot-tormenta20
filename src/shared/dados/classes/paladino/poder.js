const power_paladino = [
  {
    name: "Arma Sagrada",
    text: "Se estiver empunhando a arma preferida de seu deus, o dado de dano que você rola por Golpe Divino aumenta para d12.",
    requirements: [
      [
        { type: "DEVOTO", name: "Lena", not: true },
        { type: "DEVOTO", name: "Marah", not: true },
      ],
    ],
  },
  {
    name: "Aumento de Atributo",
    text: "Você recebe +2 em um atributo a sua escolha (NÃO CONTABILIZADO). Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.",
    requirements: [],
    canRepeat: true,
  },
  {
    name: "Aura Antimagia",
    text: "Enquanto sua aura estiver ativa, você e os aliados dentro da aura podem rolar novamente qualquer teste de resistência contra magia recém realizado.",
    requirements: [[{ type: "NIVEL", value: 14 }]],
  },
  {
    name: "Aura Ardente",
    text: "Enquanto sua aura estiver ativa, no início de cada um de seus turnos, espíritos e mortos-vivos a sua escolha dentro dela sofrem dano de luz igual a 5 + seu bônus de Carisma.",
    requirements: [[{ type: "NIVEL", value: 10 }]],
  },
  {
    name: "Aura de Cura",
    text: "Enquanto sua aura estiver ativa, no início de seus turnos, você e os aliados a sua escolha dentro dela curam um número de PV igual a 5 + seu bônus de Carisma.",
    requirements: [[{ type: "NIVEL", value: 6 }]],
  },
  {
    name: "Aura de Invencibilidade",
    text: "Enquanto sua aura estiver ativa, você ignora o primeiro dano que sofrer na cena. O mesmo se aplica a seus aliados dentro da aura.",
    requirements: [[{ type: "NIVEL", value: 18 }]],
  },
  {
    name: "Aura Poderosa",
    text: "O alcance da sua aura aumenta para médio.",
    requirements: [[{ type: "NIVEL", value: 6 }]],
  },
  {
    name: "Fulgor Divino",
    text: "Quando usa Golpe Divino, todos os inimigos em alcance curto ficam ofuscados até o início do seu próximo turno.",
    requirements: [],
  },
  {
    name: "Julgamento Divino: Arrependimento",
    text: "Você pode gastar 2 PM para marcar um inimigo em alcance curto. Na próxima vez que esse inimigo acertar um ataque em você ou em um de seus aliados, deve fazer um teste de Vontade (CD Car). Se falhar, fica atordoado no próximo turno dele. Você só pode proferir este julgamento uma vez por cena contra cada criatura.",
    requirements: [],
  },
  {
    name: "Julgamento Divino: Autoridade",
    text: "Você pode gastar 1 PM para comandar uma criatura em alcance curto. Faça um teste de Diplomacia oposto pelo teste de Vontade da criatura. Se você passar, ela obedece a um comando simples como “pare” ou “largue a arma”. Se a criatura passar, fica imune a esse efeito por um dia.",
    requirements: [],
  },
  {
    name: "Julgamento Divino: Coragem",
    text: "Você pode gastar 2 PM para inspirar coragem em uma criatura em alcance curto, incluindo você mesmo. A criatura fica imune a efeitos de medo e recebe +2 em testes de ataque contra alvos de ND maior que o nível dela.",
    requirements: [],
  },
  {
    name: "Julgamento Divino: Iluminação",
    text: "Você pode marcar um inimigo em alcance curto. Quando acerta um ataque corpo a corpo nesse inimigo, você recebe 2 PM temporários. Você só pode proferir este julgamento uma vez por cena.",
    requirements: [],
  },
  {
    name: "Julgamento Divino: Justiça",
    text: "Você pode gastar 2 PM para marcar um inimigo em alcance curto. A próxima vez que esse inimigo causar dano em você ou em um de seus aliados, deve fazer um teste de Vontade (CD Car). Se falhar, sofre dano de luz igual à metade do dano que causou.",
    requirements: [],
  },
  {
    name: "Julgamento Divino: Libertação",
    text: "Você pode gastar 5 PM para cancelar uma condição negativa qualquer (como abalado, paralisado etc.) que esteja afetando uma criatura em alcance curto.",
    requirements: [],
  },
  {
    name: "Julgamento Divino: Salvação",
    text: "Você pode gastar 2 PM para marcar um inimigo em alcance curto. Até o fim da cena, quando você acerta um ataque corpo a corpo nesse inimigo, recupera 5 pontos de vida.",
    requirements: [],
  },
  {
    name: "Julgamento Divino: Vindicação",
    text: "Você pode gastar 2 PM para marcar um inimigo que tenha causado dano a você ou a seus aliados na cena. Você recebe +1 em testes de ataque e +1d8 em rolagens de dano contra o inimigo escolhido, mas sofre –5 em testes de ataque contra quaisquer outros alvos. No 5º nível, e a cada cinco níveis seguintes, você pode pagar +1 PM para aumentar o bônus de ataque em +1 e o bônus de dano em +1d8. O efeito termina caso o alvo fique inconsciente.",
    requirements: [],
  },
  {
    name: "Julgamento Divino: Zelo",
    text: "Você pode gastar 1 PM para marcar um alvo em alcance longo. Pelo restante da cena, sempre que se mover na direção desse alvo, você se move com o dobro de seu deslocamento.",
    requirements: [],
  },
  {
    name: "Orar",
    text: "Você aprende e pode lançar uma magia divina de 1º círculo a sua escolha (NÃO CONTABILIZADO). Seu atributo-chave para esta magia é Sabedoria. Você pode escolher este poder quantas vezes quiser.",
    requirements: [],
    canRepeat: true,
  },
  {
    name: "Virtude Paladinesca: Caridade",
    text: "O custo de suas habilidades de paladino que tenham um aliado como alvo é reduzido em 1 PM.",
    requirements: [],
  },
  {
    name: "Virtude Paladinesca: Castidade",
    text: "Você se torna imune a efeitos de encantamento e recebe +5 em testes de Intuição para perceber blefes.",
    requirements: [],
  },
  {
    name: "Virtude Paladinesca: Compaixão",
    text: "Você pode usar Cura pelas Mãos em alcance curto e, para cada PM que gastar, cura 2d6+1 (em vez de 1d8+1).",
    requirements: [],
  },
  {
    name: "Virtude Paladinesca: Humildade",
    text: "Na primeira rodada de um combate, você pode gastar uma ação completa para rezar e pedir orientação. Você recebe uma quantidade de PM temporários igual ao seu bônus de Carisma.",
    requirements: [],
  },
  {
    name: "Virtude Paladinesca: Temperança",
    text: "Quando ingere um alimento, item alquímico ou poção, você consome apenas metade do item. Na prática, cada item desses rende duas “doses” para você.",
    requirements: [],
  },
];
