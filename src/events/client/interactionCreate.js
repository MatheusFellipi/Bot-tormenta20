module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
    if (interaction.isAutocomplete()) {
      const command = client.commands.get(interaction.commandName);
      if (!command || !command.autocomplete) return;

      try {
        await command.autocomplete(interaction);
      } catch (err) {
        console.error('Erro no autocomplete:', err);
      }
      return; 
    }

    if (interaction.isChatInputCommand()) {
      const { commands } = client;
      const { commandName } = interaction;
      const command = commands.get(commandName);
      if (!command) return;

      try {
        await command.execute(interaction, client);
      } catch (error) {
        if (!interaction.replied && !interaction.deferred) {
          await interaction.reply({
            content: 'Algo deu errado ao executar este comando…',
            ephemeral: true,
          });
        }
      }
    }
  },
};
