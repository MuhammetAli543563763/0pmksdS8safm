const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription("```Ne yazık ki bu komutu kullanmaya yetkin yok.```")
  .setAuthor(`Hatalı Giriş`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
      .setColor("RED");
//emirhansaraç
    message.channel.send(embed);
    return;
  }

  let kanal = await db.fetch(`siparişkanal_${message.guild.id}`)

  if (!kanal) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("Sipariş kanalı zaten ayarlanmamış!")
  .setAuthor(`Hatalı Giriş`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
        .setColor("RED")
    );
  }
  db.delete(`siparişkanal_${message.guild.id}`)
  const emirhansarac = new Discord.RichEmbed()
    .setColor("#0BF3B7")
  .setAuthor(`Başarılı`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
    .setDescription(`Sipariş kanalı başarıyla sıfırlandı!`);
  message.channel.send(emirhansarac);
return
  
};//emirhansaraç

module.exports.conf = {
  aliases: ["siparişkanalsıfırla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "sipariş-kanal-sıfırla",
  description: "sipariş-kanal-sıfırla",
  usage: "sipariş-kanal-sıfırla"
};
//emirhansaraç