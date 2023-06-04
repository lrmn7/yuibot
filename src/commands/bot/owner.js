const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `L RMN`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `</L RMN>#6666`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `LRMN`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[L RMN](https://www.lrmn.is-a.dev/)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 