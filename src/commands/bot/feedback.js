const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1091159871447109742/",
    token: "SeuQPzZIh5SZxN12k1oKazuD73e0b1HmYiX_icIaoRj0gRPLlNB6RnDAkQXsXymK7z6p",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Feedback successfully sent to the developers`,
        type: 'editreply'
    }, interaction);
}

 