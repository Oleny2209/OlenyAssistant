const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Return an embed.'),
    async execute(interaction, client) { // Ensure client is passed as an argument
        const embed = new EmbedBuilder()
            .setTitle('This is an EMBED!')
            .setDescription('display your action in a fancy way')
            .setColor(0x18e1ee)
            .setImage(client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .setAuthor({
                url: 'https://github.com/Oleny2209',
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.username
            })
            .setFooter({
                text: client.user.username,
                iconURL: client.user.displayAvatarURL()
            })
            .setURL('https://github.com/Oleny2209')
            .addFields(
                {
                    name: `Field 1`,
                    value: `value 1`,
                    inline: true,
                },
                {
                    name: `Field 2`,
                    value: `value 2`,
                    inline: true,
                }
            );

        await interaction.reply({
            embeds: [embed]
        });

        console.log('Embed Command has been executed');
    }
};