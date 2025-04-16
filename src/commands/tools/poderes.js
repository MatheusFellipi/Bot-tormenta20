const { SlashCommandBuilder } = require("discord.js");
const poderes = require("../../shared/dados/poderes.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("poderes")
    .setDescription("Escolha um poder e veja os detalhes!")
    .addStringOption((option) =>
      option
        .setName("poder")
        .setDescription("Escolha um poder")
        .setAutocomplete(true)
    ),

  async autocomplete(interaction) {
    const focusedValue = interaction.options.getFocused().toLowerCase();

    const prefixMatches = poderes.filter(
      (p) => p.name.toLowerCase().startsWith(focusedValue) );

    const containsMatches = poderes.filter(
      (p) => !p.name.toLowerCase().startsWith(focusedValue));

    const combined = prefixMatches
      .concat(containsMatches)
      .slice(0, 25)
      .map((p) => ({
        name: p.name,
        value: p.name,
      }));

    await interaction.respond(combined);
  },

  async execute(interaction) {
    if (!interaction.isCommand()) return;

    const selectedKey = interaction.options.getString("poder");
    if (selectedKey) {
      const poderSelecionado = poderes.find((p) => p.name === selectedKey);
      if (poderSelecionado) {
        await interaction.reply(
          `**${poderSelecionado.name}**:\n${poderSelecionado.description}`
        );
      } else {
        await interaction.reply("Poder não encontrado!");
      }
    } else {
      await interaction.reply("Você não selecionou nenhum poder.");
    }
  },
};
