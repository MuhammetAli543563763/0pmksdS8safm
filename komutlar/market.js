const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;
  
  let embed = new Discord.RichEmbed()
  .setTitle('🛒 Vds Ürünler')
  .setThumbnail(client.user.avatarURL)
  .setColor('BLUE')
  .setTimestamp(message.createdAt)
  .addField('1 GB VDS (25 Coin)', '`1GB-VDS`')
  .addField('2 GB VDS (50 Coin)', '`2GB-VDS`')
  .addField('4 GB VDS (75 Coin)', '`4GB-VDS`')
  .addField('8 GB VDS (100 Coin)', '`8GB-VDS`')  
  .setDescription(`Ürün kodları ürünün altındadır.
  Ürünü satın almak için: **?satın-al [Ürün kodu]**
  
  **Ürünler:**`)
  .setFooter('Kullanan: ' + message.author.tag, message.author.displayAvatarURL)
  message.channel.send(embed)

  
}
    
  exports.conf = {
    aliases: ['ürünler'], 
    permLevel: 0, 
    kategori: "Genel" 
  };

  exports.help = {
    name: 'market',  
    description: 'market', 
    usage: 'market', 
  };