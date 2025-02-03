require('dotenv').config();

const { token } = process.env;
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync('src/functions');
for (const folder of functionFolders) {
    const functionFiles = fs.readdirSync(`src/functions/${folder}`)
        .filter(file => file.endsWith('.js'));
    for (const file of functionFiles) {
        require(`./functions/${folder}/${file}`)(client);
        {
            const func = require(`./functions/${folder}/${file}`);

        }
    }
}

// client.once(Events.ClientReady, readyClient => {
//     console.log(`Ready! Logged in as ${readyClient.user.tag}`);
// });

console.log('Client is starting up...');
client.handleEvents();
client.handleCommands();
client.login(token);
