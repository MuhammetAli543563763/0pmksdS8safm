const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;
  let embed = new Discord.RichEmbed()
  .setColor('BLUE')
	.setTitle('Benim Pingim')
  .addField('**Pingim:**', client.ping + ' ms')
	.setThumbnail(client.user.avatarURL)
  .setTimestamp(message.createdAt)
  .setFooter('Kullanan: ' + message.author.tag, message.author.displayAvatarURL)
  message.channel.send(embed)

  
}
    
  exports.conf = {
    aliases: ['ping'], 
    requiredChannel: ['🤖bot-komut'],
    permLevel: 0, 
    kategori: "Genel" 
  };
  exports.help = {
    name: 'ping',  
    description: 'ping', 
    usage: 'ping', 
  };