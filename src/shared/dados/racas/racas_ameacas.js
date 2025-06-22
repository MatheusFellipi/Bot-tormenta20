export const racaAmeacas = [
  {
    name: "Bugbear",
    type: "Raça",
    attributes: {
      força: 2,
      destreza: 1,
      carisma: -1,
    },
    abilities: [
      {
        name: "Empunhadura Poderosa",
        text: "Ao usar uma arma feita para uma categoria de tamanho maior que a sua (por exemplo, uma arma aumentada para uma criatura Pequena ou Média), a penalidade que você sofre nos testes de ataque diminui para –2. Caso receba esta habilidade novamente, a penalidade diminui para 0 e você pode também usar armas de até duas categorias de tamanho maiores que a sua com uma penalidade de –5 nos testes de ataque.",
      },
      {
        name: "Saborear Pavor",
        text: "Você pode usar Força como atributo-chave de Intimidação (em vez de Carisma). Além disso, se estiver em alcance curto de outra criatura abalada ou apavorada, você recebe um bônus em testes de ataque igual à penalidade causada pela condição.",
      },
      {
        name: "Sentidos de Predador",
        text: "Você recebe faro e visão no escuro.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: ["Arsenal", "Megalokk", "Tenebra"],
  },
  {
    name: "Centauro",
    type: "Raça",
    attributes: {
      sabedoria: 2,
      força: 1,
      inteligência: -1,
    },
    abilities: [
      {
        name: "Avantajado",
        text: "Seu tamanho é Grande e seu deslocamento é 12m.",
      },
      {
        name: "Cascos",
        text: "Você possui uma arma natural de cascos (dano 1d8, crítico x2, impacto). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com os cascos.",
      },
      {
        name: "Ginete Natural",
        text: "Você é considerado montado para efeito de fazer investidas e para benefícios das armas que empunha, e pode escolher o poder Carga de Cavalaria mesmo sem cumprir seus pré-requisitos.",
      },
      {
        name: "Medo de Altura",
        text: "Se estiver adjacente a uma queda de 3m ou mais (como um buraco ou penhasco), você fica abalado.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: ["Allihanna", "Hippion", "Megalokk"],
  },
  {
    name: "Ceratops",
    type: "Raça",
    attributes: {
      constituição: 2,
      força: 1,
      destreza: -1,
      inteligência: -1,
    },
    abilities: [
      {
        name: "Chifres",
        text: "Você possui uma arma natural de chifres (dano 1d8, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com os chifres.",
      },
      {
        name: "Papel Tribal",
        text: "Você é treinado em uma perícia à sua escolha entre Cura, Intimidação, Ofício ou Sobrevivência.",
      },
      {
        name: "Paquidérmico",
        text: "Seu tamanho é Grande. Você recebe +1 na Defesa e pode usar Força como atributo-chave de Intimidação (em vez de Carisma).",
      },
      {
        name: "Medo de Altura",
        text: "Se estiver adjacente a uma queda de 3m ou mais (como um buraco ou penhasco), você fica abalado.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: ["Allihanna", "Arsenal", "Azgher", "Lena", "Megalokk"],
  },
  {
    name: "Elfo-do-Mar",
    type: "Raça",
    attributes: {
      destreza: 2,
      constituição: 1,
      inteligência: -1,
    },
    abilities: [
      {
        name: "Arsenal do Oceano",
        text: "Você recebe proficiência em arpão, rede e tridente e +2 em testes de ataque com essas armas. Se receber proficiência em uma dessas armas novamente, pode considerá-la uma arma leve.",
      },
      {
        name: "Cria das Águas",
        text: "Você possui deslocamento de natação igual a seu deslocamento em terra e visão na penumbra. Quando dentro d'água, você recebe percepção às cegas e +2 na Defesa e em Furtividade e Sobrevivência.",
      },
      {
        name: "Dependência de Água",
        text: "Se permanecer mais de um dia sem contato com água, você não recupera PM com descanso até voltar para a água (ou, pelo menos, tomar um banho!).",
      },
      {
        name: "Longevidade",
        text: "x2",
      },
    ],
    devotos: ["Allihanna", "Arsenal", "Hyninn", "Megalokk", "Oceano"],
  },
  {
    name: "Finntroll",
    type: "Raça",
    attributes: {
      inteligência: 2,
      constituição: 1,
      força: -1,
    },
    abilities: [
      {
        name: "Corpo Vegetal",
        text: "Você é uma criatura do tipo monstro e recebe natureza vegetal e visão no escuro.",
      },
      {
        name: "Presença Arcana",
        text: "Você recebe +2 em Misticismo e resistência a magia +2.",
      },
      {
        name: "Regeneração Vegetal",
        text: "Uma vez por rodada, você pode gastar 1 PM para recuperar 5 PV. Esta habilidade não cura dano de ácido ou fogo.",
      },
      {
        name: "Intolerância a Luz",
        text: "Você recebe sensibilidade a luz e, quando exposto à luz do sol ou similar, não consegue ativar sua Regeneração Vegetal.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: ["Kallyanadroch", "Megalokk", "Sszzaas", "Tenebra"],
  },
  {
    name: "Gnoll",
    type: "Raça",
    attributes: {
      constituição: 2,
      sabedoria: 1,
      inteligência: -1,
    },
    abilities: [
      {
        name: "Faro",
        text: "Você tem olfato apurado. Contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.",
      },
      {
        name: "Mordida",
        text: "Você possui uma arma natural de mordida (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.",
      },
      {
        name: "Oportunista",
        text: "Você recebe +2 nas rolagens de dano contra criaturas que tenham sofrido dano de outras criaturas desde seu último turno.",
      },
      {
        name: "Rendição",
        text: "Quando um inimigo se rende, você recebe 1d4 PM temporários cumulativos. Da mesma forma, quando é reduzido a um quarto de seus PV ou menos, seu instinto é se render. Caso continue lutando, fica alquebrado.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: ["Allihanna", "Hyninn", "Marah", "Megalokk", "Nimb", "Tenebra"],
  },
  {
    name: "Golem",
    type: "Raça",
    attributes: {
      base: {
        força: 1,
        carisma: -1,
      },
      chassis: {
        Barro: {
          constituição: 2,
        },
        Bronze: {
          bonus: "+1 em dois atributos",
        },
        Carne: {
          constituição: 2,
          força: 1,
          carisma: -1,
        },
        Espelhos: {
          carisma: 2,
          sabedoria: 1,
          constituição: -1,
        },
        Ferro: {
          força: 1,
          constituição: 1,
        },
        "Gelo Eterno": {
          constituição: 2,
        },
        Pedra: {
          constituição: 2,
        },
        Sucata: {
          força: 1,
          constituição: 1,
        },
      },
      size: {
        Pequeno: {
          destreza: 1,
        },
        Médio: {},
        Grande: {
          destreza: -1,
        },
      },
    },
    abilities: [
      {
        name: "Chassi",
        text: "Você leva um dia para vestir ou remover uma armadura (pois precisa acoplar as peças dela a seu chassi). Entretanto, por ser acoplada, sua armadura não conta no limite de itens que você pode usar (mas você só pode usar uma armadura).",
      },
      {
        name: "Criatura Artificial",
        text: "Você é uma criatura do tipo construto. Recebe visão no escuro e imunidade a cansaço, efeitos metabólicos e veneno. Além disso, não precisa respirar, alimentar-se ou dormir, mas não se beneficia de cura mundana e de itens da categoria alimentação. Você precisa ficar inerte por 8 horas por dia para recarregar sua fonte de energia.",
      },
      {
        name: "Fonte de Energia",
        text: "Escolha sua fonte de energia: Alquímica (recupera 1 PM ao ingerir item alquímico), Elemental (imunidade e cura com um tipo de dano), Sagrada (pode lançar magia divina de 1º círculo) ou Vapor (imunidade a fogo, pode soprar jato de vapor).",
      },
      {
        name: "Propósito de Criação",
        text: "Você foi construído 'pronto' para um propósito específico e não teve uma infância. Você não tem direito a escolher uma origem, mas recebe um poder geral a sua escolha.",
      },
      {
        name: "Longevidade",
        text: "Indefinida",
      },
    ],
    devotos: "Qualquer",
    chassis_options: {
      Barro:
        "Seu deslocamento não é afetado por terreno difícil e você passa automaticamente em testes de Acrobacia para passar por espaços apertados. Se permanecer mais de um dia sem contato com água, você não recupera PM com descanso até voltar para a água.",
      Bronze:
        "Seu deslocamento não é reduzido por armaduras pesadas ou excesso de carga. Sua armadura não é acoplada ao seu corpo.",
      Carne:
        "Seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Você recebe imunidade a metamorfose e trevas, mas não pode escolher elemental (água ou fogo) ou vapor como sua fonte de energia, e dano mágico de fogo e frio o deixa lento por 1d4 rodadas.",
      Espelhos:
        "Quando uma criatura em alcance curto usa uma habilidade de classe que você possa ver, você pode gastar 1 PM para copiar essa habilidade. Até o fim do seu próximo turno, você pode usá-la como uma habilidade de raça (usando Carisma como atributo).",
      Ferro:
        "Seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Você recebe +2 na Defesa, mas possui penalidade de armadura -2.",
      "Gelo Eterno":
        "Seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Você recebe imunidade a frio e redução de fogo 10, mas não pode escolher elemental (fogo) ou vapor como sua fonte de energia.",
      Pedra:
        "Você não pode correr e seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Você recebe redução de corte, fogo e perfuração 5.",
      Sucata:
        "Seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Quando recebe cuidados prolongados com Ofício (artesão), sua recuperação de PV aumenta em +2 por nível nesse dia.",
    },
  },
  {
    name: "Harpia",
    type: "Raça",
    attributes: {
      destreza: 2,
      carisma: 1,
      inteligência: -1,
    },
    abilities: [
      {
        name: "Asas de Abutre",
        text: "Você possui asas no lugar dos braços e das mãos. Você pode pairar a 1,5m do chão com deslocamento 12m. Isso permite que você ignore terreno difícil e o torna imune a dano por queda (a menos que esteja inconsciente). Se não estiver usando armadura pesada, você pode gastar 1 PM por rodada para voar com deslocamento de 12m.",
      },
      {
        name: "Cria de Masmorra",
        text: "Você é uma criatura do tipo monstro e recebe visão no escuro e +2 em Intimidação e Sobrevivência.",
      },
      {
        name: "Grito Aterrorizante",
        text: "Você pode gastar uma ação padrão e 1 PM para emitir um grito estridente. Criaturas em alcance curto ficam abaladas (Von CD Car evita).",
      },
      {
        name: "Pés Rapinantes",
        text: "Seus pés podem ser usados como mãos ou como duas armas naturais de garras (dano 1d6 cada, crítico x2, corte). Uma vez por rodada, quando usa a ação agredir para atacar com uma arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com uma das garras, desde que ela esteja livre e não tenha sido usada para atacar neste turno.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: ["Hyninn", "Megalokk", "Tenebra"],
  },
  {
    name: "Hobgoblin",
    type: "Raça",
    attributes: {
      constituição: 2,
      destreza: 1,
      carisma: -1,
    },
    abilities: [
      {
        name: "Arte da Guerra",
        text: "Você é treinado em Guerra e recebe proficiência em armas marciais. Se receber essa proficiência novamente, recebe +2 em rolagens de dano com essas armas.",
      },
      {
        name: "Metalurgia Hobgoblin",
        text: "Você recebe +2 em Ofício (armeiro) e, se for treinado nesta perícia, pode fabricar armas e armaduras superiores com uma melhoria.",
      },
      {
        name: "Táticas de Guerrilha",
        text: "Você recebe visão no escuro e +2 em Furtividade.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: ["Arsenal", "Megalokk", "Tenebra"],
  },
  {
    name: "Kallyanach",
    type: "Raça",
    attributes: {
      bonus:
        "+2 em um atributo a sua escolha ou +1 em dois atributos a sua escolha",
    },
    abilities: [
      {
        name: "Herança Dracônica",
        text: "Você é uma criatura do tipo monstro e recebe redução 5 contra um tipo de dano a sua escolha entre ácido, eletricidade, fogo, frio, luz ou trevas.",
      },
      {
        name: "Bênção de Kallyadranoch",
        text: "Escolha dois dos poderes a seguir. Uma vez por patamar, você pode escolher uma bênção no lugar de um poder de classe.",
      },
      {
        name: "Longevidade",
        text: "x2",
      },
    ],
    devotos: ["Arsenal", "Kallyadranoch", "Megalokk", "Wynna"],
    bênçãos: [
      {
        name: "Armamento Kallyanach",
        text: "Você possui uma arma natural (dano 1d6, crítico x2) escolhida entre cauda (impacto), chifres (perfuração) ou mordida (perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com essa arma.",
      },
      {
        name: "Asas Dracônicas",
        text: "Você pode gastar 1 PM por rodada para voar com deslocamento de 9m. Enquanto estiver voando desta forma, você fica vulnerável.",
      },
      {
        name: "Escamas Elementais",
        text: "Sua pele é recoberta de escamas resistentes e brilhantes, que fornecem +2 na Defesa e aumentam a RD de sua Herança Dracônica para 10.",
      },
      {
        name: "Prática Arcana",
        text: "Escolha uma magia arcana de 1º círculo que cause dano do mesmo tipo de sua Herança Dracônica. Você pode lançar essa magia (atributo-chave Inteligência).",
      },
      {
        name: "Sentidos Dracônicos",
        text: "Seus sentidos são impregnados com poder dracônico. Você recebe faro e visão no escuro.",
      },
      {
        name: "Sopro de Dragão",
        text: "Você pode gastar uma ação padrão e 1 PM para soprar um cone de 6m que causa 1d12 pontos de dano do tipo de sua Herança Dracônica (Ref CD Constituição reduz à metade).",
      },
    ],
  },
  {
    name: "Kaijin",
    type: "Raça",
    attributes: {
      força: 2,
      constituição: 1,
      carisma: -2,
    },
    abilities: [
      {
        name: "Couraça Rubra",
        text: "Você recebe redução de dano 2. Sua couraça conta como um poder da Tormenta, exceto para perda de Carisma.",
      },
      {
        name: "Cria da Tormenta",
        text: "Você é uma criatura do tipo monstro e recebe +5 em testes de resistência contra efeitos causados por lefeu e pela Tormenta.",
      },
      {
        name: "Disforme",
        text: "Por sua anatomia anômala, você não pode empunhar nem vestir itens, a menos que sejam mágicos ou especialmente adaptados para você.",
      },
      {
        name: "Terror Vivo",
        text: "Você pode usar Força como atributo-chave de Intimidação (em vez de Carisma) e recebe um poder da Tormenta a sua escolha.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: ["Arsenal", "Lin-Wu"],
  },
  {
    name: "Kappa",
    type: "Raça",
    attributes: {
      destreza: 2,
      constituição: 1,
      carisma: -1,
    },
    abilities: [
      {
        name: "Alma da Água",
        text: "Você é uma criatura do tipo espírito e tem deslocamento de natação igual ao seu deslocamento terrestre.",
      },
      {
        name: "Carapaça Kappa",
        text: "Você não pode ser flanqueado e recebe cobertura leve se estiver submerso ou caído.",
      },
      {
        name: "Cura das Águas",
        text: "Você pode lançar a magia Curar Ferimentos (atributo-chave Sabedoria).",
      },
      {
        name: "Tigela D'água",
        text: "Sempre que falhar por 5 ou mais em um teste para evitar ser agarrado, derrubado ou empurrado, você derrama a água de sua cabeça.",
      },
      {
        name: "Longevidade",
        text: "x2",
      },
    ],
    devotos: ["Hyninn", "Lena", "Lin-Wu", "Oceano"],
  },
  {
    name: "Kobolds",
    type: "Raça",
    attributes: {
      destreza: 2,
      força: -1,
    },
    abilities: [
      {
        name: "Ajuntamento Escamoso",
        text: "Embora sejam um grupo de kobolds, para todos os efeitos vocês são uma única criatura Média com dois braços. Entretanto, contam como Pequenos para efeitos dos espaços por onde podem passar e, quando fazem um teste de resistência contra um efeito que afeta apenas uma criatura e não causa dano, rolam dois dados e usam o melhor resultado. Por fim, têm vulnerabilidade a dano de área.",
      },
      {
        name: "Praga Monstruosa",
        text: "Vocês são criaturas do tipo monstro e recebem visão no escuro e +2 em Sobrevivência.",
      },
      {
        name: "Sensibilidade a Luz",
        text: "Quando expostos à luz do sol ou similar, vocês ficam ofuscados.",
      },
      {
        name: "Talentos do Bando",
        text: "Escolham dois dos poderes a seguir. Uma vez por patamar, vocês podem escolher outro desses poderes no lugar de um poder de classe.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: ["Kallyadranoch", "Khalmyr", "Lena", "Megalokk", "Tenebra"],
    talentos: [
      {
        name: "Amontoados",
        text: "Vocês são considerados uma criatura Grande para efeitos de espaço ocupado e modificadores de manobras de combate.",
      },
      {
        name: "Armadilha Terrível",
        text: "Escolham uma magia de 1º círculo que tenha como alvo uma criatura ou que tenha um efeito em área e que cause dano ou um efeito negativo.",
      },
      {
        name: "Diferentão",
        text: "Escolham um poder de outra classe cujos requisitos vocês cumpram.",
      },
      {
        name: "Ex-Familiar",
        text: "Vocês recebem +2 PM e os benefícios de um tipo de familiar.",
      },
      {
        name: "O Ousado",
        text: "Uma vez por cena, vocês podem gastar 1 PM e uma ação de movimento para que um membro do bando se afaste e aja sozinho.",
      },
      {
        name: "Os do Fundo",
        text: "Vocês conseguem formar o equivalente a um terceiro braço, que pode empunhar um objeto (mas não concede ações extras).",
      },
      {
        name: "Organizadinhos",
        text: "Vocês podem usar Destreza para estabelecer seu limite de carga (em vez de Força) e podem se beneficiar de um item vestido adicional.",
      },
      {
        name: "Pestes Oportunistas",
        text: "Uma vez por rodada, quando causam dano em uma criatura que já sofreu dano nessa rodada, vocês causam +1d6 pontos de dano do mesmo tipo.",
      },
      {
        name: "Somos Explosivos",
        text: "Vocês podem gastar uma ação completa, 1 PM e uma quantidade de PV (limitado pelo seu nível) para arremessar um kobold explosivo em um ponto em alcance curto.",
      },
      {
        name: "Tática de Enxame",
        text: "Vocês podem gastar 2 PM para assumir uma forma de enxame com duração sustentada.",
      },
    ],
  },
  {
    name: "Mashin",
    type: "Raça",
    attributes: {
      bonus: "+1 em dois atributos a sua escolha",
    },
    abilities: [
      {
        name: "Mashin (chassi)",
        text: "Você se torna treinado em duas perícias a sua escolha e pode substituir uma dessas perícias por uma maravilha mecânica. Entretanto, você é sempre Médio.",
      },
      {
        name: "Maravilha Mecânica",
        text: "Se escolher uma maravilha mecânica, você recebe um dos poderes a seguir. Uma vez por patamar, você pode escolher uma maravilha mecânica no lugar de um poder de classe.",
      },
      {
        name: "Longevidade",
        text: "Indefinida",
      },
    ],
    maravilhas: [
      {
        name: "Adaptação Elemental",
        text: "Quando sofre dano de ácido, eletricidade, fogo, frio, luz ou trevas, você pode gastar 2 PM para receber redução 10 contra esse tipo de dano até o fim da cena.",
      },
      {
        name: "Arma Acoplada",
        text: "Você possui uma arma acoplada ao seu corpo. Ela fica recolhida em um compartimento e não pode ser desarmada.",
      },
      {
        name: "Arma Elemental",
        text: "Você pode gastar uma ação de movimento e 2 PM para fazer uma arma que esteja empunhando causar +1d6 pontos de dano do tipo de sua fonte elemental até o fim da cena.",
      },
      {
        name: "Auxílio de Mira",
        text: "Quando faz um ataque à distância, você pode pagar 1 PM para aumentar em +2 a margem de ameaça desse ataque.",
      },
      {
        name: "Caminho da Perfeição",
        text: "Escolha uma de suas perícias treinadas. Você recebe +2 nessa perícia.",
      },
      {
        name: "Canalizar Reparos",
        text: "Como uma ação completa, você pode gastar pontos de mana para recuperar pontos de vida, à taxa de 5 PV por PM.",
      },
      {
        name: "Canhão Energético",
        text: "Se sua arma acoplada for uma arma de fogo, você pode gastar uma ação de movimento e 1 PM para energizá-la.",
      },
      {
        name: "Dínamo de Mana",
        text: "Escolha uma de suas habilidades com um custo em PM. Você pode gastar uma ação de movimento para canalizar seu mana.",
      },
      {
        name: "Pernas Aprimoradas",
        text: "Você pode gastar 2 PM para receber +6m em seu deslocamento e +5 em Atletismo até o fim da cena.",
      },
      {
        name: "Reservatório Alquímico",
        text: "Você possui um reservatório em seu corpo que pode armazenar até duas doses de preparados alquímicos.",
      },
    ],
  },
  {
    name: "Meio-Orc",
    type: "Raça",
    attributes: {
      força: 2,
      bonus: "+1 em outro atributo (exceto Carisma)",
    },
    abilities: [
      {
        name: "Adaptável",
        text: "Você recebe +2 em Intimidação e se torna treinado em uma perícia a sua escolha.",
      },
      {
        name: "Criatura das Profundezas",
        text: "Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo.",
      },
      {
        name: "Sangue Orc",
        text: "Você recebe +1 em rolagens de dano com armas corpo a corpo e de arremesso e é considerado um orc para efeitos relacionados a raça.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: "Qualquer",
  },
  {
    name: "Minauro",
    type: "Raça",
    attributes: {
      força: 1,
      bonus: "+1 em dois atributos",
    },
    abilities: [
      {
        name: "Faro",
        text: "Você tem olfato apurado. Contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.",
      },
      {
        name: "Mente Aberta",
        text: "Você recebe +2 em Diplomacia e Investigação.",
      },
      {
        name: "Plurivalente",
        text: "Você recebe um poder geral a sua escolha.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: "Qualquer",
  },
  {
    name: "Moreau",
    type: "Raça",
    attributes: {
      herança:
        "Escolha uma das heranças descritas a seguir. Ela representa sua ascendência e determina suas demais habilidades de raça.",
    },
    abilities: [
      {
        name: "Herança",
        text: "Escolha uma das heranças descritas a seguir. Ela representa sua ascendência e determina suas demais habilidades de raça. Além disso, você é considerado também um humano para quaisquer fins.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: "Qualquer",
    heranças: [
      {
        name: "Herança da Coruja",
        attributes: {
          sabedoria: 1,
          bonus: "+1 em dois atributos",
        },
        abilities: [
          {
            name: "Espreitador",
            text: "Você recebe visão no escuro e +2 em Percepção e Vontade.",
          },
          {
            name: "Garras",
            text: "Você tem duas armas naturais de garra (dano 1d6, crítico x2, corte), uma em cada mão.",
          },
          {
            name: "Sapiência",
            text: "Você pode lançar uma magia de 1º círculo de adivinhação a sua escolha (atributo-chave Sabedoria).",
          },
        ],
      },
      {
        name: "Herança da Hiena",
        attributes: {
          sabedoria: 1,
          bonus: "+1 em dois atributos",
        },
        abilities: [
          {
            name: "Destemor",
            text: "Você recebe +2 em rolagens de dano e em testes de resistência contra criaturas maiores que você.",
          },
          {
            name: "Faro",
            text: "Você tem olfato apurado. Contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.",
          },
          {
            name: "Mordida",
            text: "Você possui uma arma natural de mordida (dano 1d6, crítico x2, perfuração).",
          },
        ],
      },
      {
        name: "Herança da Raposa",
        attributes: {
          inteligência: 1,
          bonus: "+1 em dois atributos",
        },
        abilities: [
          {
            name: "Agarra-me Se Puderes",
            text: "Seu deslocamento é 12m (em vez de 9m) e você tem visão na penumbra.",
          },
          {
            name: "Esperteza Vulpina",
            text: "Você recebe +2 em duas perícias originalmente baseadas em Inteligência ou Carisma, a sua escolha.",
          },
          {
            name: "Faro",
            text: "Você tem olfato apurado. Contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.",
          },
        ],
      },
      {
        name: "Herança da Serpente",
        attributes: {
          inteligência: 1,
          bonus: "+1 em dois atributos",
        },
        abilities: [
          {
            name: "Arborícola",
            text: "Você recebe deslocamento de escalada 6m e +2 em Furtividade.",
          },
          {
            name: "Constritor",
            text: "Você recebe +2 em testes para agarrar e em rolagens de dano contra criaturas que estiver agarrando.",
          },
          {
            name: "Instintos Traiçoeiros",
            text: "Você recebe visão no escuro e +2 em Diplomacia e na CD de seus efeitos mentais.",
          },
        ],
      },
      {
        name: "Herança do Búfalo",
        attributes: {
          força: 1,
          bonus: "+1 em dois atributos",
        },
        abilities: [
          {
            name: "Chifres",
            text: "Você possui uma arma natural de chifres (dano 1d6, crítico x2, perfuração).",
          },
          {
            name: "Faro",
            text: "Você tem olfato apurado. Contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.",
          },
          {
            name: "Marrada Impressionante",
            text: "Você recebe +2 em ataques em investida e em testes para empurrar, e pode usar Força como atributo-chave de Intimidação (em vez de Carisma).",
          },
        ],
      },
      {
        name: "Herança do Coelho",
        attributes: {
          destreza: 1,
          bonus: "+1 em dois atributos",
        },
        abilities: [
          {
            name: "Patas Ligeiras",
            text: "Seu deslocamento é 12m e, quando faz uma investida ou um teste de Atletismo para correr, você não precisa percorrer uma linha reta.",
          },
          {
            name: "Pé de Coelho",
            text: "Quando faz um teste de uma perícia baseada em Destreza (exceto testes de ataque), você pode gastar 1 PM para rolar dois dados e usar o melhor resultado.",
          },
          {
            name: "Senso de Preservação",
            text: "Você recebe visão na penumbra e +2 em Percepção e Reflexos.",
          },
        ],
      },
      {
        name: "Herança do Crocodilo",
        attributes: {
          constituição: 1,
          bonus: "+1 em dois atributos",
        },
        abilities: [
          {
            name: "Mordida Poderosa",
            text: "Você possui uma arma natural de mordida (dano 1d6, crítico x2, perfuração), com a qual recebe +2 em testes de agarrar.",
          },
          {
            name: "Predador Aquático",
            text: "Você tem deslocamento de natação 6m e recebe +1 na Defesa e +2 em Furtividade.",
          },
          {
            name: "Surto Reptiliano",
            text: "Uma vez por cena, você pode gastar 1 PM para realizar uma ação de movimento adicional em seu turno.",
          },
        ],
      },
      {
        name: "Herança do Gato",
        attributes: {
          carisma: 1,
          bonus: "+1 em dois atributos",
        },
        abilities: [
          {
            name: "As Muitas Vidas de um Gato",
            text: "Você soma seu Carisma em testes de Constituição para estabilizar sangramento e em Acrobacia e, se estiver consciente em uma queda, reduz o dano dela em 3d6.",
          },
          {
            name: "Garras",
            text: "Você tem duas armas naturais de garra (dano 1d6, crítico x2, corte), uma em cada mão.",
          },
          {
            name: "Sentidos Felinos",
            text: "Você recebe visão na penumbra e +2 em Furtividade e Percepção.",
          },
        ],
      },
      {
        name: "Herança do Leão",
        attributes: {
          força: 1,
          bonus: "+1 em dois atributos",
        },
        abilities: [
          {
            name: "Mordida",
            text: "Você possui uma arma natural de mordida (dano 1d8, crítico x2, perfuração).",
          },
          {
            name: "Rugido Imponente",
            text: "Você pode gastar uma ação de movimento e 1 PM para emitir um rugido assustador. Todos os inimigos em alcance curto sofrem -2 em rolagens de dano por 1 rodada. Medo.",
          },
          {
            name: "Sentidos da Realeza",
            text: "Você recebe visão na penumbra e +2 em Intimidação e Percepção.",
          },
        ],
      },
      {
        name: "Herança do Lobo",
        attributes: {
          carisma: 1,
          bonus: "+1 em dois atributos",
        },
        abilities: [
          {
            name: "Faro",
            text: "Você tem olfato apurado. Contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.",
          },
          {
            name: "Mordida",
            text: "Você possui uma arma natural de mordida (dano 1d6, crítico x2, perfuração).",
          },
          {
            name: "Táticas de Matilha",
            text: "Você recebe +2 nas rolagens de dano e na margem de ameaça em ataques contra oponentes que esteja flanqueando.",
          },
        ],
      },
    ],
  },
  {
    name: "Nagah",
    type: "Raça",
    attributes: {
      macho: {
        força: 1,
        destreza: 1,
        constituição: 1,
      },
      fêmea: {
        inteligência: 1,
        sabedoria: 1,
        carisma: 1,
      },
    },
    abilities: [
      {
        name: "Cauda",
        text: "Você possui uma arma natural de cauda (dano 1d6, crítico x2, impacto). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a cauda.",
      },
      {
        name: "Inocência Dissimulada",
        text: "Você recebe +2 em Enganação e pode gastar 2 PM para substituir um teste de perícia originalmente baseada em Inteligência, Sabedoria ou Carisma por Enganação.",
      },
      {
        name: "Presentes de Sszzaas",
        text: "Você recebe visão na penumbra, +1 na Defesa e resistência a veneno +5.",
      },
      {
        name: "Fraquezas Ofídicas",
        text: "Você sofre 1 ponto de dano adicional para cada dado de dano de frio e –5 em testes de resistência contra Músicas de bardo.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: [
      "Allihanna",
      "Hyninn",
      "Kally",
      "Megalokk",
      "Sszzaas",
      "Tenebra",
      "Wynna",
    ],
  },
  {
    name: "Nezumi",
    type: "Raça",
    attributes: {
      constituição: 2,
      destreza: 1,
      inteligência: -1,
    },
    abilities: [
      {
        name: "Empunhadura Poderosa",
        text: "Ao usar uma arma feita para uma categoria de tamanho maior que a sua (por exemplo, uma arma aumentada para uma criatura Pequena ou Média), a penalidade que você sofre nos testes de ataque diminui para –2.",
      },
      {
        name: "Pequeno, Mas Não Metade",
        text: "Seu tamanho é Pequeno, mas seu deslocamento se mantém 9m e você recebe resistência a medo +5 contra criaturas maiores que você e +2 em Intimidação.",
      },
      {
        name: "Roedor",
        text: "Você possui uma arma natural de mordida (dano 1d6, crítico x2, corte). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.",
      },
      {
        name: "Sentidos Murídeos",
        text: "Você recebe faro e visão na penumbra.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: ["Arsenal", "Megalokk", "Tenebra"],
  },
  {
    name: "Ogro",
    type: "Raça",
    attributes: {
      força: 3,
      constituição: 2,
      inteligência: -1,
      carisma: -1,
    },
    abilities: [
      {
        name: "Quanto Maior o Tamanho...",
        text: "Você é um humanoide do subtipo gigante; seu tamanho é Grande e você recebe visão na penumbra.",
      },
      {
        name: "...Maior a Porrada!",
        text: "Quando acerta um ataque corpo a corpo, você pode gastar 1 PM para causar +1d8 pontos de dano do mesmo tipo.",
      },
      {
        name: "Camada de Ingenuidade",
        text: "Você sofre –5 em Intuição e Vontade.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: ["Allihanna", "Arsenal", "Megalokk", "Tenebra"],
  },
  {
    name: "Orc",
    type: "Raça",
    attributes: {
      força: 2,
      constituição: 1,
      inteligência: -1,
    },
    abilities: [
      {
        name: "Feroz",
        text: "Você recebe +2 em rolagens de dano com armas corpo a corpo e de arremesso. Quando sofre dano de um inimigo, esse bônus se torna +4 até o fim de seu próximo turno.",
      },
      {
        name: "Habitante das Cavernas",
        text: "Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo. Entretanto, recebe sensibilidade a luz.",
      },
      {
        name: "Vigor Brutal",
        text: "Você recebe +2 em Fortitude e soma sua Força em seu total de pontos de vida.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: ["Allihanna", "Arsenal", "Megalokk", "Nimb", "Tenebra"],
  },
  {
    name: "Pteros",
    type: "Raça",
    attributes: {
      sabedoria: 2,
      destreza: 1,
      inteligência: -1,
    },
    abilities: [
      {
        name: "Ligação Natural",
        text: "Você possui uma ligação mental com uma criatura inteligente (Int –3 ou mais). Vocês podem se comunicar mentalmente em alcance longo e sempre sabem em que direção e distância podem encontrar o outro.",
      },
      {
        name: "Mãos Rudimentares",
        text: "Suas mãos não permitem que você empunhe itens, a menos que sejam mágicos ou especialmente adaptados para você.",
      },
      {
        name: "Pés Rapinantes",
        text: "Seus pés são duas armas naturais de garras (dano 1d6 cada, crítico x2, corte). Uma vez por rodada, quando usa a ação agredir para atacar com uma arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com uma das garras.",
      },
      {
        name: "Senhor dos Céus",
        text: "Você pode pairar a 1,5m do chão com deslocamento 9m. Isso permite que você ignore terreno difícil e o torna imune a dano por queda (a menos que esteja inconsciente).",
      },
      {
        name: "Sentidos Rapinantes",
        text: "Você recebe visão na penumbra e +2 em Percepção e Sobrevivência.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: ["Allihanna", "Lena", "Marah", "Wynna"],
  },
  {
    name: "Tabrachi",
    type: "Raça",
    attributes: {
      constituição: 2,
      força: 1,
      carisma: -1,
    },
    abilities: [
      {
        name: "Batráquio",
        text: "Você recebe visão na penumbra e deslocamento de natação igual ao seu deslocamento terrestre.",
      },
      {
        name: "Linguarudo",
        text: "Sua língua é uma arma natural que pode atacar inimigos a até 3m (dano 1d4, crítico x2, impacto).",
      },
      {
        name: "Saltador",
        text: "Você recebe +10 em testes de Atletismo para saltar.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: ["Allihanna", "Megalokk", "Nimb", "Sszzaas", "Tenebra"],
  },
  {
    name: "Velocis",
    type: "Raça",
    attributes: {
      destreza: 2,
      sabedoria: 1,
      inteligência: -1,
    },
    abilities: [
      {
        name: "Através de Espinheiros",
        text: "Você recebe redução de corte e perfuração 2 e não sofre redução em seu deslocamento por terreno difícil natural.",
      },
      {
        name: "Sentidos Selvagens",
        text: "Você recebe +2 em Sobrevivência, visão na penumbra e faro (contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha).",
      },
      {
        name: "Velocista da Planície",
        text: "Seu deslocamento é 12m. Você pode usar Destreza como atributo-chave de Atletismo (em vez de Força) e, quando faz testes de Atletismo para correr ou saltar, pode rolar dois dados e usar o melhor resultado.",
      },
      {
        name: "Longevidade",
        text: "Normal",
      },
    ],
    devotos: ["Allihanna", "Lena", "Marah"],
  },
  {
    name: "Yidishan",
    type: "Raça",
    attributes: {
      bonus: "+1 em três atributos diferentes (exceto Carisma)",
      carisma: -2,
    },
    abilities: [
      {
        name: "Híbrido Mecânico",
        text: "Você é uma criatura do tipo construto. Recebe visão no escuro e imunidade a cansaço, efeitos metabólicos e veneno. Além disso, não precisa respirar, alimentar-se ou dormir, mas não se beneficia de itens da categoria alimentação e efeitos de cura mundana são reduzidos pela metade em você.",
      },
      {
        name: "Natureza Orgânica",
        text: "Você se torna treinado em uma perícia (que não precisa ser da sua classe) ou recebe um poder geral a sua escolha.",
      },
      {
        name: "Peças Metálicas",
        text: "As partes mecânicas que complementam seu corpo fornecem +2 na Defesa, mas impõem uma penalidade de armadura de –2.",
      },
      {
        name: "Longevidade",
        text: "x5",
      },
    ],
    devotos: ["Arsenal", "Megalokk", "Nimb"],
  },
];
