let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '❰ ⚠️ ❱ *Función Nsfw Desactivada*\n*Escriba #on nsfw para activar esta Función.*'  

  let pp = './+18.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
┏━━━━━━━━━━━━━━━━━━┓    
┃ *Hola ${username}, aqui tienes el menu +18*
┃ *Usar bajo su responsabilidad*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *MENU +18*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ 🔥 *IMÁGENES* 🔥
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃»🔞 _${usedPrefix}boobs_
┃»🔞 _${usedPrefix}futanari|futa|futasolo|futanarisolo | futanarisolo_
┃»🔞 _${usedPrefix}futanarionboy | PRONTO!_
┃»🔞 _${usedPrefix}futanariongirl | PRONTO!_
┃»🔞 _${usedPrefix}futanarivideos | PRONTO!_
┃»🔞 _${usedPrefix}futanarivideos2 | PRONTO!_
┃»🔞 _${usedPrefix}futanarivideos3 | PRONTO_
┃»🔞 _${usedPrefix}hentai_
┃»🔞 _${usedPrefix}htrap | trapito_
┃»🔞 _${usedPrefix}nsfwcum | cum_
┃»🔞 _${usedPrefix}xnxxsearch *texto*_
┃»🔞 _${usedPrefix}xnxx *link de xnxx*_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ 🔥 *GIF-STICKERS* 🔥
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃»🔞 _${usedPrefix}nekogif_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ 🔥 *VÍDEOS* 🔥
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃_*PRONTO*_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┗━━━━━━━━━━━━━━━━━━┛
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['labiblia']
handler.tags = ['General']
handler.command = /^(labiblia|Labiblia|menu18|Menu18|Menú18)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
