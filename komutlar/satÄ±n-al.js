const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 
const db = require('quick.db')
exports.run = async (client, message, args, member, send) => {
    var prefix = ayarlar.prefix;
  const yanliskullanim = new Discord.RichEmbed()
    .setColor('BLUE') 
    .setTitle('Yanlış kullanım ❌')
    .addField('**Doğru kullanım:**', '`?satın-al [Ürün Kodu]` 📝 ')
    .setTimestamp(message.createdAt)
    .setFooter('Kullanan: ' + message.author.tag, message.author.displayAvatarURL)
  const parayetersiz = new Discord.RichEmbed()
    .setColor('BLUE') 
    .setTitle('Bu ürünü satın almak için coinin yetmiyo. ❌')
    .setTimestamp(message.createdAt)
    .setFooter('Kullanan: ' + message.author.tag, message.author.displayAvatarURL)  
  const birgbvds = new Discord.RichEmbed()
    .setColor('BLUE') 
    .setTitle('Başarıyla ürün satın alındı. ✅')
    .setDescription('Ürün siparişlerine yollandı. Siparişlerini görmek için: `?siparişler`')
    .addField('Satın alınan ürün:', '1GB VDS')
    .setTimestamp(message.createdAt)
    .setFooter('Kullanan: ' + message.author.tag, message.author.displayAvatarURL)    
  const ikirgbvds = new Discord.RichEmbed()
    .setColor('BLUE') 
    .setTitle('Başarıyla ürün satın alındı. ✅')
    .setDescription('Ürün siparişlerine yollandı. Siparişlerini görmek için: `?siparişler`')
    .addField('Satın alınan ürün:', '2GB VDS')
    .setTimestamp(message.createdAt)
    .setFooter('Kullanan: ' + message.author.tag, message.author.displayAvatarURL)    
  const dortgbvds = new Discord.RichEmbed()
    .setColor('BLUE') 
    .setTitle('Başarıyla ürün satın alındı. ✅')
    .setDescription('Ürün siparişlerine yollandı. Siparişlerini görmek için: `?siparişler`')
    .addField('Satın alınan ürün:', '4GB VDS')
    .setTimestamp(message.createdAt)
    .setFooter('Kullanan: ' + message.author.tag, message.author.displayAvatarURL)   
  const sekizgbvds = new Discord.RichEmbed()
    .setColor('BLUE') 
    .setTitle('Başarıyla ürün satın alındı. ✅')
    .setDescription('Ürün siparişlerine yollandı. Siparişlerini görmek için: `?siparişler`')
    .addField('Satın alınan ürün:', '8GB VDS')
    .setTimestamp(message.createdAt)
    .setFooter('Kullanan: ' + message.author.tag, message.author.displayAvatarURL)          
  const siparislog = db.fetch(`siparişkanal_${message.guild.id}`)
  
      let purchase = args.join(" ");
        if(!purchase) return message.channel.send(yanliskullanim)
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`davet_${message.author.id}`)

        if(purchase === '1GB-VDS'){
            if(amount < 25) return message.channel.send(parayetersiz);
            db.subtract(`davet_${message.author.id}`, 25);
            db.push(message.author.id, "1GB-VDS");
            message.channel.send(birgbvds)
              const channel = await client.channels.get("859769453260832818")
    channel.send(`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
<@${message.author.id}> adlı kullanıcı bir ürün satın aldı.
Satın alınan ürün: \`1GB-VDS\`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
        }
        if(purchase === '2GB-VDS'){
            if(amount < 50) return message.channel.send(parayetersiz);
            db.subtract(`davet_${message.author.id}`, 50);
            db.push(message.author.id, "2GB-VDS");
            message.channel.send(ikirgbvds)
const channel = await client.channels.get("859769453260832818")
    channel.send(`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
<@${message.author.id}> adlı kullanıcı bir ürün satın aldı.
Satın alınan ürün: \`2GB-VDS\`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)          
          }
          if(purchase === '4GB-VDS'){
            if(amount < 75) return message.channel.send(parayetersiz);
            db.subtract(`davet_${message.author.id}`, 75);
            db.push(message.author.id, "4GB-VDS");
            message.channel.send(dortgbvds)
const channel = await client.channels.get("859769453260832818")
    channel.send(`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
<@${message.author.id}> adlı kullanıcı bir ürün satın aldı.
Satın alınan ürün: \`4GB-VDS\`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
          }
            if(purchase === '8GB-VDS'){
            if(amount < 100) return message.channel.send(parayetersiz);
            db.subtract(`davet_${message.author.id}`, 100);
            db.push(message.author.id, "8GB-VDS");
            message.channel.send(sekizgbvds)
const channel = await client.channels.get("859769453260832818")
    channel.send(`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
<@${message.author.id}> adlı kullanıcı bir ürün satın aldı.
Satın alınan ürün: \`8GB-VDS\`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
          }
}
    
  exports.conf = {
    aliases: ['satın-al'], 
    permLevel: 0, 
    kategori: "Genel" 
  };

  exports.help = {
    name: 'satın-al',  
    description: 'satın-al ', 
    usage: 'satın-al', 
  };