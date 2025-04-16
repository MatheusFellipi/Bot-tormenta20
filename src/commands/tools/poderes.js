const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('poderes')
    .setDescription('Escolha um poder e veja os detalhes!')
    .addStringOption((option) =>
      option
        .setName('poderes')
        .setDescription('Escolha um poder')
        .setRequired(true)
        .addChoices(
          { name: 'Fogo', value: 'fogo' },
          { name: 'Água', value: 'agua' },
          { name: 'Terra', value: 'terra' },
          { name: 'Ar', value: 'ar' },
        )
    ),

  async execute(interaction, client) {
    // Defer the reply to allow time for processing
    await interaction.deferReply();

    // Captura a escolha do usuário
    const poderEscolhido = interaction.options.getString('poderes');

    // Define os detalhes para cada poder
    const poderesDetalhes = {
      fogo: {
        title: '🔥 Poder do Fogo',
        description: 'O poder do fogo representa destruição e paixão.',
        color: 0xff4500, // Vermelho fogo
      },
      agua: {
        title: '💧 Poder da Água',
        description: 'O poder da água representa fluidez e adaptação.',
        color: 0x1e90ff, // Azul água
      },
      terra: {
        title: '🌍 Poder da Terra',
        description: 'O poder da terra representa força e estabilidade.',
        color: 0x228b22, // Verde terra
      },
      ar: {
        title: '🌬️ Poder do Ar',
        description: 'O poder do ar representa liberdade e movimento.',
        color: 0x87ceeb, // Azul claro
      },
    };

    // Obtém os detalhes do poder escolhido
    const poder = poderesDetalhes[poderEscolhido];

    // Cria a embed com os detalhes do poder
    const embed = new EmbedBuilder()
      .setTitle(poder.title)
      .setDescription(poder.description)
      .setColor(poder.color)
      .setFooter({ text: 'Escolha feita com sabedoria!' });

    // Envia a embed como resposta
    await interaction.editReply({ embeds: [embed] });
  },
};