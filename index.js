const Discord = required('discord.js');

const bot = new Discord.client();
bot.on('ready',() => {
    console.log("O bot ficou Online!");

})
bot.login('#');