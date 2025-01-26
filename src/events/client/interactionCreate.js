module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction.isCommand());{
            const { commands } = client;
            const { commandName } = interaction;
            const command = commands.get(commandName);
            if (!command) return;

            try {
                await command.execute(interaction, client);
            }catch (error) {
                console.error(error);
                await interaction.reply({
                    content: 'Some thing when wrong!',
                    ephemeral: true
                });
            }
        }


    },
}