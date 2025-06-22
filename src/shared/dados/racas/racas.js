export const racas = [
  {
    name: "Humano",
    type: "Raça",
    attributes: {
      bonus: "+1 em três atributos diferentes",
    },
    abilities: [
      {
        name: "Versátil",
        text: "Você se torna treinado em duas perícias a sua escolha (não precisam ser da sua classe). Você pode trocar uma dessas perícias por um poder geral a sua escolha.",
      },
    ],
  },
  {
    name: "Anão",
    type: "Raça",
    attributes: {
      constituição: 2,
      sabedoria: 1,
      destreza: -1,
    },
    abilities: [
      {
        name: "Conhecimento das Rochas",
        text: "Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo.",
      },
      {
        name: "Devagar e Sempre",
        text: "Seu deslocamento é 6m (em vez de 9m). Porém, seu deslocamento não é reduzido por uso de armadura ou excesso de carga.",
      },
      {
        name: "Duro como Pedra",
        text: "Você recebe +3 pontos de vida no 1º nível e +1 por nível seguinte.",
      },
      {
        name: "Tradição de Heredrimm",
        text: "Para você, todos os machados, martelos, marretas e picaretas são armas simples. Você recebe +2 em ataques com essas armas.",
      },
    ],
  },
  {
    name: "Dahllan",
    type: "Raça",
    attributes: {
      sabedoria: 2,
      destreza: 1,
      inteligência: -1,
    },
    abilities: [
      {
        name: "Amiga das Plantas",
        text: "Você pode lançar a magia Controlar Plantas (atributo-chave Sabedoria). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
      },
      {
        name: "Armadura de Allihanna",
        text: "Você pode gastar uma ação de movimento e 1 PM para transformar sua pele em casca de árvore, recebendo +2 na Defesa até o fim da cena.",
      },
      {
        name: "Empatia Selvagem",
        text: "Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento para mudar atitude e persuasão com animais.",
      },
    ],
  },
  {
    name: "Elfo",
    type: "Raça",
    attributes: {
      inteligência: 2,
      destreza: 1,
      constituição: -1,
    },
    abilities: [
      {
        name: "Graça de Glórienn",
        text: "Seu deslocamento é 12m (em vez de 9m).",
      },
      {
        name: "Sangue Mágico",
        text: "Você recebe +1 ponto de mana por nível.",
      },
      {
        name: "Sentidos Élficos",
        text: "Você recebe visão na penumbra e +2 em Misticismo e Percepção.",
      },
    ],
  },
  {
    name: "Goblin",
    type: "Raça",
    attributes: {
      destreza: 2,
      inteligência: 1,
      carisma: -1,
    },
    abilities: [
      {
        name: "Engenhoso",
        text: "Você não sofre penalidades em testes de perícia por não usar ferramentas. Se usar a ferramenta necessária, recebe +2 no teste de perícia.",
      },
      {
        name: "Espelunqueiro",
        text: "Você recebe visão no escuro e deslocamento de escalada igual ao seu deslocamento terrestre.",
      },
      {
        name: "Peste Esguia",
        text: "Seu tamanho é Pequeno, mas seu deslocamento se mantém 9m.",
      },
      {
        name: "Rato das Ruas",
        text: "Você recebe +2 em Fortitude e sua recuperação de PV e PM nunca é inferior ao seu nível.",
      },
    ],
  },
  {
    name: "Lefou",
    type: "Raça",
    attributes: {
      bonus: "+1 em três atributos diferentes (exceto Carisma)",
      carisma: -1,
    },
    abilities: [
      {
        name: "Cria da Tormenta",
        text: "Você é uma criatura do tipo monstro e recebe +5 em testes de resistência contra efeitos causados por lefeu e pela Tormenta.",
      },
      {
        name: "Deformidade",
        text: "Você recebe +2 em duas perícias a sua escolha. Cada um desses bônus conta como um poder da Tormenta (exceto para perda de Carisma). Você pode trocar um desses bônus por um poder da Tormenta a sua escolha.",
      },
    ],
  },
  {
    name: "Minotauro",
    type: "Raça",
    attributes: {
      força: 2,
      constituição: 1,
      sabedoria: -1,
    },
    abilities: [
      {
        name: "Chifres",
        text: "Você possui uma arma natural de chifres (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com os chifres.",
      },
      {
        name: "Couro Rígido",
        text: "Sua pele é dura como a de um touro. Você recebe +1 na Defesa.",
      },
      {
        name: "Faro",
        text: "Você tem olfato apurado. Contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.",
      },
    ],
  },
  {
    name: "Qareen",
    type: "Raça",
    attributes: {
      carisma: 2,
      inteligência: 1,
      sabedoria: -1,
    },
    abilities: [
      {
        name: "Desejos",
        text: "Se lançar uma magia que alguém tenha pedido desde seu último turno, o custo da magia diminui em –1 PM.",
      },
      {
        name: "Resistência Elemental",
        text: "Você recebe redução 10 a um tipo de dano. Escolha uma: frio (qareen da água), eletricidade (do ar), fogo (do fogo), ácido (da terra), luz (da luz) ou trevas (qareen das trevas).",
      },
      {
        name: "Tatuagem Mística",
        text: "Você pode lançar uma magia de 1º círculo a sua escolha (atributo-chave Carisma). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
      },
    ],
  },
  {
    name: "Hynne",
    type: "Raça",
    attributes: {
      destreza: 2,
      carisma: 1,
      força: -1,
    },
    abilities: [
      {
        name: "Arremessador",
        text: "Quando faz um ataque à distância com uma funda ou uma arma de arremesso, seu dano aumenta em um passo.",
      },
      {
        name: "Pequeno e Rechonchudo",
        text: "Seu tamanho é Pequeno e seu deslocamento é 6m. Você recebe +2 em Enganação e pode usar Destreza como atributo-chave de Atletismo (em vez de Força).",
      },
      {
        name: "Sorte Salvadora",
        text: "Quando faz um teste de resistência, você pode gastar 1 PM para rolar este teste novamente.",
      },
    ],
  },
  {
    name: "Kliren",
    type: "Raça",
    attributes: {
      inteligência: 2,
      carisma: 1,
      força: -1,
    },
    abilities: [
      {
        name: "Híbrido",
        text: "Você se torna treinado em uma perícia a sua escolha (não precisa ser da sua classe).",
      },
      {
        name: "Engenhosidade",
        text: "Quando faz um teste de perícia, você pode gastar 2 PM para somar sua Inteligência no teste. Você não pode usar esta habilidade em testes de ataque.",
      },
      {
        name: "Ossos Frágeis",
        text: "Você sofre 1 ponto de dano adicional por dado de dano de impacto.",
      },
      {
        name: "Vanguardista",
        text: "Você recebe proficiência em armas de fogo e +2 em Ofício (um qualquer, a sua escolha).",
      },
    ],
  },
  {
    name: "Medusa",
    type: "Raça",
    attributes: {
      destreza: 2,
      carisma: 1,
    },
    abilities: [
      {
        name: "Cria de Megalokk",
        text: "Você é uma criatura do tipo monstro e recebe visão no escuro.",
      },
      {
        name: "Natureza Venenosa",
        text: "Você recebe resistência a veneno +5 e pode gastar uma ação de movimento e 1 PM para envenenar uma arma que esteja usando.",
      },
      {
        name: "Olhar Atordoante",
        text: "Você pode gastar uma ação de movimento e 1 PM para forçar uma criatura em alcance curto a fazer um teste de Fortitude (CD Car). Se a criatura falhar, fica atordoada por uma rodada (apenas uma vez por cena).",
      },
    ],
  },
  {
    name: "Osteon",
    type: "Raça",
    attributes: {
      bonus: "+1 em três atributos diferentes (exceto Constituição)",
      constituição: -1,
    },
    abilities: [
      {
        name: "Armadura Óssea",
        text: "Você recebe redução de corte, frio e perfuração 5.",
      },
      {
        name: "Memória Póstuma",
        text: "Você se torna treinado em uma perícia (não precisa ser da sua classe) ou recebe um poder geral a sua escolha. Como alternativa, você pode ser um osteon de outra raça humanoide que não humano.",
      },
      {
        name: "Natureza Esquelética",
        text: "Você é uma criatura do tipo morto-vivo. Recebe visão no escuro e imunidade a efeitos de cansaço, metabólicos, de trevas e de veneno.",
      },
      {
        name: "Preço da Não Vida",
        text: "Você precisa passar oito horas sob a luz de estrelas ou no subterrâneo. Se fizer isso, recupera PV e PM por descanso em condições normais.",
      },
    ],
  },
  {
    name: "Sereia/Tritão",
    type: "Raça",
    attributes: {
      bonus: "+1 em três atributos diferentes",
    },
    abilities: [
      {
        name: "Canção dos Mares",
        text: "Você pode lançar duas das magias a seguir: Amedrontar, Comando, Despedaçar, Enfeitiçar, Hipnotismo ou Sono (atributo-chave Carisma).",
      },
      {
        name: "Mestre do Tridente",
        text: "Para você, o tridente é uma arma simples. Além disso, você recebe +2 em rolagens de dano com azagaias, lanças e tridentes.",
      },
      {
        name: "Transformação Anfíbia",
        text: "Você pode respirar debaixo d'água e possui uma cauda que fornece deslocamento de natação 12m. Quando fora d'água, sua cauda desaparece e dá lugar a pernas (deslocamento 9m).",
      },
    ],
  },
  {
    name: "Sílfide",
    type: "Raça",
    attributes: {
      carisma: 2,
      destreza: 1,
      força: -2,
    },
    abilities: [
      {
        name: "Asas de Borboleta",
        text: "Seu tamanho é Minúsculo. Você pode pairar a 1,5m do chão com deslocamento 9m. Você pode gastar 1 PM por rodada para voar com deslocamento de 12m.",
      },
      {
        name: "Espírito da Natureza",
        text: "Você é uma criatura do tipo espírito, recebe visão na penumbra e pode falar com animais livremente.",
      },
      {
        name: "Magia das Fadas",
        text: "Você pode lançar duas das magias a seguir (atributo-chave Carisma): Criar Ilusão, Enfeitiçar, Luz (como uma magia arcana) e Sono.",
      },
    ],
  },
  {
    name: "Suraggel",
    type: "Raça",
    variants: [
      {
        name: "Aggelus",
        attributes: {
          sabedoria: 2,
          carisma: 1,
        },
        abilities: [
          {
            name: "Luz Sagrada",
            text: "Você recebe +2 em Diplomacia e Intuição. Além disso, pode lançar Luz (como uma magia divina; atributo-chave Carisma).",
          },
        ],
      },
      {
        name: "Sulfure",
        attributes: {
          destreza: 2,
          inteligência: 1,
        },
        abilities: [
          {
            name: "Sombras Profanas",
            text: "Você recebe +2 em Enganação e Furtividade. Além disso, pode lançar Escuridão (como uma magia divina; atributo-chave Inteligência).",
          },
        ],
      },
    ],
    shared_abilities: [
      {
        name: "Herança Divina",
        text: "Você é uma criatura do tipo espírito e recebe visão no escuro.",
      },
    ],
  },
  {
    name: "Trog",
    type: "Raça",
    attributes: {
      constituição: 2,
      força: 1,
      inteligência: -1,
    },
    abilities: [
      {
        name: "Mau Cheiro",
        text: "Você pode gastar uma ação padrão e 2 PM para expelir um gás fétido. Todas as criaturas (exceto trogs) em alcance curto devem passar em um teste de Fortitude contra veneno (CD Con) ou ficarão enjoadas durante 1d6 rodadas.",
      },
      {
        name: "Mordida",
        text: "Você possui uma arma natural de mordida (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.",
      },
      {
        name: "Reptiliano",
        text: "Você é uma criatura do tipo monstro e recebe visão no escuro, +1 na Defesa e, se estiver sem armadura ou roupas pesadas, +5 em Furtividade.",
      },
      {
        name: "Sangue Frio",
        text: "Você sofre 1 ponto de dano adicional por dado de dano de frio.",
      },
    ],
  },
  {
    name: "Golem",
    type: "Raça",
    attributes: {
      força: 2,
      constituição: 1,
      carisma: -1,
    },
    abilities: [
      {
        name: "Chassi",
        text: "Seu corpo artificial é resistente, mas rígido. Seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Você recebe +2 na Defesa, mas possui penalidade de armadura –2.",
      },
      {
        name: "Criatura Artificial",
        text: "Você é uma criatura do tipo construto. Recebe visão no escuro e imunidade a efeitos de cansaço, metabólicos e de veneno.",
      },
      {
        name: "Fonte Elemental",
        text: "Você possui um espírito elemental preso em seu corpo. Escolha entre água (frio), ar (eletricidade), fogo (fogo) e terra (ácido). Você é imune a dano desse tipo.",
      },
      {
        name: "Propósito de Criação",
        text: "Você foi construído 'pronto' para um propósito específico e não teve uma infância. Você não tem direito a escolher uma origem, mas recebe um poder geral a sua escolha.",
      },
    ],
  },
];
