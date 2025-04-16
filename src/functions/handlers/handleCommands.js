const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync('./src/commands');
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith('.js'));

      const { commands, commandArray } = client;

      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        
        let commandData;
        if (typeof command.data === 'function') {
          commandData = await command.data();
        } else {
          commandData = command.data;
        }

        commands.set(commandData.name, command);
        commandArray.push(commandData.toJSON());
        console.log(`Command: ${commandData.name} has been registered`);
      }
    }

    const CLIENT_ID = process.env.CLIENT_ID;

    const rest = new REST({ version: '9' }).setToken(
      process.env.DISCORD_BOT_TOKEN
    );

    try {
      console.log('Started refreshing application (/) commands');
      
      await rest.put(Routes.applicationCommands(CLIENT_ID), {
        body: client.commandArray,
      });

      console.log(`Successfully reloaded application (/) commands for guild`);
    } catch (error) {
      console.error(error);
    }
  };
};