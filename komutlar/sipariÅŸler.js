const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 
const db = require('quick.db')

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;
  
        let items = await db.fetch(message.author.id);
        if(items === null) items = "Bişi satın alınmamış"

        const Embed = new Discord.RichEmbed()
        .addField('Siparişlerin', items)
        .setColor('BLUE')
        .setFooter('Kullanan: ' + message.author.tag, message.author.displayAvatarURL)   
        .setTimestamp(message.createdAt)    

        message.channel.send(Embed);

  
}
    
  exports.conf = {
    aliases: ['siparişler'], 
    permLevel: 0, 
    kategori: "Genel" 
  };

  exports.help = {
    name: 'siparişler',  
    description: 'siparişler', 
    usage: 'siparişler', 
  };