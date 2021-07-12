const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;
  
  let embed = new Discord.RichEmbed()
  .setTitle('📝 Yardım paneli')
  .setThumbnail(client.user.avatarURL)
  .setColor('BLUE')
  .setTimestamp(message.createdAt)
  .addField('`?coin`', 'Mevcut bulunan coin sayısını gösterir.')
  .addField('`?sil`', 'Belirli mesaj siler.')
  .addField('`?ping`', 'Botun pingini görüntülersiniz.')
  .addField('`?market`', 'Marketi açar.')
  .addField('`siparişler`', 'Satın alınan siparişleri gösterir.')
  .addField('`?satın-al`', 'Bişi satın alır.')
  .addField('`?coin-ekle`', 'Belirten kişiye coin ekler.')
  .addField('`?coin-sil`', 'Belirten kişinin coini siler.')
  .addField('`?coin-kanal`', 'Coin kanalını ayarlar.')
  .addField('`?coin-kanal-sıfırla`', 'Coin kanalını sıfırlar.')
  .addField('`?coin-sil`', 'Belirten kişinin coini siler.')  
  .setFooter('Kullanan: ' + message.author.tag, message.author.displayAvatarURL)
  message.channel.send(embed)

  
}
    
  exports.conf = {
    aliases: ['y'], 
    permLevel: 0, 
    kategori: "Genel" 
  };

  exports.help = {
    name: 'yardım',  
    description: 'yardım', 
    usage: 'yardım', 
  };