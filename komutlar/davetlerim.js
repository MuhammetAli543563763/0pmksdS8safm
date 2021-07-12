const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args, tools) => {
  let kişi;
  if (message.mentions.members.first()) {
    kişi = message.mentions.members.first();
  } else {
    kişi = message.author;
  }

  let bilgi = await db.fetch(`davet_${kişi.id}`);
  let sayı2;
  if (!bilgi) {
    sayı2 = 0;
  } else {
    sayı2 = await db.fetch(`davet_${kişi.id}`);
  }
  let veri = await db.fetch(`rol1_${message.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${message.guild.id}`);
  let veri21 = await db.fetch(`roldavet2_${message.guild.id}`);
  let veri2 = await db.fetch(`rol2_${message.guild.id}`);
  if (!veri) {
    const embed = new Discord.RichEmbed()
      .addField(`Coinlerin Sahibi`, `<@` + kişi.id + `>`, true)
      .addField(`Total Coin:`, sayı2, true)
    .setColor("#0BF3B7")
  .setAuthor(`Coin İstatistik`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
    message.channel.send(embed);
  }
  if (message.member.roles.has(veri2)) {
    const embed = new Discord.RichEmbed()
      .addField(`Coinlerin Sahibi`, `<@` + kişi.id + `>`, true)
      .addField(`Total Coin:`, sayı2, true)
    .setColor("#0BF3B7")
  .setAuthor(`Coin İstatistik`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()   
    message.channel.send(embed);
    return;
  }
  if (!message.member.roles.has(veri)) {
    const embed = new Discord.RichEmbed()
      .addField(`Coinlerin Sahibi`, `<@` + kişi.id + `>`, true)
      .addField(`Total Coin:`, sayı2, true)
    .setColor("#0BF3B7")
      .setDescription(
        `${message.guild.roles.get(veri).name} rolü için son ${-sayı2 -
          -veri12} coin!`
      )
      .setAuthor(`Coin İstatistik`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()   
    message.channel.send(embed);
    return;
  }
  if (message.member.roles.has(veri)) {
    if (!veri2) {
      const emirhansarac1 = new Discord.RichEmbed()
        .addField(`Coinlerin Sahibi`, `<@` + kişi.id + `>`, true)
        .addField(`Total Coin:`, sayı2, true)
    .setColor("#0BF3B7")
  .setAuthor(`Coin İstatistik`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()   
      message.channel.send(emirhansarac1);
      return;
    }
    if (veri2) {
      const emirhansarac = new Discord.RichEmbed()
        .addField(`Coinlerin Sahibi`, `<@` + kişi.id + `>`, true)
        .addField(`Total Coin:`, sayı2, true)
    .setColor("#0BF3B7")
        .setDescription(
          `${message.guild.roles.get(veri2).name} rolü için son ${-sayı2 -
            -veri21} coin!`
        )
        .setAuthor(`Coin İstatistik`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()   
      message.channel.send(emirhansarac);
      return;
    }
  }
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["coinlerim", "c"],
  permLevel: 0
};

exports.help = {
  name: "coin"
};
