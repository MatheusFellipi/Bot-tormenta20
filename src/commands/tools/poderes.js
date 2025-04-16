const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const knex = require('../../../db/db.js');

module.exports = {
  data: async () => {
    const poderes = await knex('poderes').select('name', 'type');

    // Limita as escolhas a no máximo 25
    const limitedPoderes = poderes.slice(0, 25);

    const builder = new SlashCommandBuilder()
      .setName('poderes')
      .setDescription('Escolha um poder e veja os detalhes!')
      .addStringOption((option) => {
        limitedPoderes.forEach((poder) => {
          option.addChoices({ name: poder.name, value: poder.type });
        });
        return option
          .setName('poderes')
          .setDescription('Escolha um poder')
          .setRequired(true);
      });
    return builder;
  },

  async execute(interaction, client) {
    await interaction.deferReply();

    const poderEscolhido = interaction.options.getString('poderes');
    const poder = await knex('poderes').where('type', poderEscolhido).first();

    if (!poder) {
      return interaction.editReply({
        content: 'Poder não encontrado!',
        ephemeral: true,
      });
    }

    const embed = new EmbedBuilder()
      .setTitle(`🌟 ${poder.name}`)
      .setDescription(poder.description)
      .setColor(0x00ff00)
      .addFields(
        { name: 'Tipo', value: poder.type, inline: true },
        { name: 'Text', value: poder.description, inline: true },
        { name: 'Requisitos', value: poder.requirements || 'Nenhum', inline: true }
      )
      .setFooter({ text: 'Escolha feita com sabedoria!' });

    await interaction.editReply({ embeds: [embed] });
  },
};