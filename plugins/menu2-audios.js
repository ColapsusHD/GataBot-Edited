let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Menu2.jpg'
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
╭══〘 🐈⚡️🐈⚡️🐈⚡️🐈 〙══╮    
⎪ *_ミ💖 ¡Hola! ${username} 💖彡_*
⎪≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
⎪ *MENU DE AUDIOS*
⎪≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
⎪ ✢ Solo escriba la palabra/frase. sin prefijo ⎪ (/ . # etc...) 
⎪≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
⎪➫🔊 _A_
⎪➫🔊 _Atencion grupo_
⎪➫🔊 _Audio hentai_
⎪➫🔊 _A nadie le importa_
⎪➫🔊 _Ara ara_
⎪➫🔊 _Among us_
⎪➫🔊 _Abduzcan_
⎪➫🔊 _Buenos dias_
⎪➫🔊 _Baneado_
⎪➫🔊 _Bañate_
⎪➫🔊 _Bot puto_
⎪➫🔊 _Bv_
⎪➫🔊 _Basado_
⎪➫🔊 _Basada_
⎪➫🔊 _Bien pensado Woody_
⎪➫🔊 _Bueno si_
⎪➫🔊 _Buenas noches_
⎪➫🔊 _Bueno Master | 🫂_
⎪➫🔊 _Bienvenido/a | 🤗_
⎪➫🔊 _Buen día grupo | 🙌_
⎪➫🔊 _Blackpink in your area_
⎪➫🔊 _Corte corte_
⎪➫🔊 _Calla Fan de BTS_
⎪➫🔊 _Cambiate a Movistar_
⎪➫🔊 _Contexto_
⎪➫🔊 _Callate | 🤫_
⎪➫🔊 _Como??? | 🚨_
⎪➫🔊 _Chau | 👋_
⎪➫🔊 _DIVINO | 💋_
⎪➫🔊 _Depresion_
⎪➫🔊 _Diablos Señorita | 😈_
⎪➫🔊 _En caso de una investigación_
⎪➫🔊 _Elmo sabe donde vives_
⎪➫🔊 _Eres Fuerte_
⎪➫🔊 _El rap de Fernanfloo_
⎪➫🔊 _Está Zzzz_
⎪➫🔊 _El tóxico_
⎪➫🔊 _Esto va para ti_
⎪➫🔊 _El pepe_
⎪➫🔊 _Esto va ser épico papus_
⎪➫🔊 _Entrada épica_ 
⎪➫🔊 _Estoy triste_
⎪➫🔊 _Enojada_
⎪➫🔊 _Enojado_
⎪➫🔊 _Es puto_
⎪➫🔊 _Fino señores_
⎪➫🔊 _Feliz cumpleaños | 🥳 | 🎉_
⎪➫🔊 _Feliz navidad_
⎪➫🔊 _Fiesta del admin_
⎪➫🔊 _Fiesta del admin 2_
⎪➫🔊 _Hablar primos_
⎪➫🔊 _Hablame_
⎪➫🔊 _Hentai_
⎪➫🔊 _Hey_
⎪➫🔊 _Homero chino_
⎪➫🔊 _Hola_
⎪➫🔊 _Ingresa épicamente_
⎪➫🔊 _Jijija | 😂_
⎪➫🔊 _Joder_
⎪➫🔊 _Jesucristo_
⎪➫🔊 _Leche | 🥛_
⎪➫🔊 _La roca | 🤨_
⎪➫🔊 _Las reglas del grupo_
⎪➫🔊 _La voz de hombre_
⎪➫🔊 _La biblia_
⎪➫🔊 _LESS GO_
⎪➫🔊 _Motivación_
⎪➫🔊 _Muchachos_
⎪➫🔊 _Moshi moshi_
⎪➫🔊 _Momento equisde | Momento XD_
⎪➫🔊 _Me anda buscando anonymous_
⎪➫🔊 _Mmm_
⎪➫🔊 _Ma ma masivo_
⎪➫🔊 _Masivo_
⎪➫🔊 _Me voy_
⎪➫🔊 _Me pican los cocos_
⎪➫🔊 _Murio el grupo_
⎪➫🔊 _Marica quien_
⎪➫🔊 _Me olvidé_
⎪➫🔊 _Nya | 🐱_
⎪➫🔊 _Noche de paz_
⎪➫🔊 _Noche de paz_
⎪➫🔊 _No Rompas más | 💔_
⎪➫🔊 _Nico nico_
⎪➫🔊 _No me hagas usar esto_
⎪➫🔊 _No chu_
⎪➫🔊 _No me hables_
⎪➫🔊 _Nadie te preguntó_
⎪➫🔊 _Niconico_
⎪➫🔊 _No digas eso papu_
⎪➫🔊 _Nyanpasu_
⎪➫🔊 _Odio a Chile_
⎪➫🔊 _Orale_
⎪➫🔊 _Omaiga_
⎪➫🔊 _Ohayo_
⎪➫🔊 _Oh me vengo_
⎪➫🔊 _Onichan_
⎪➫🔊 _Porque me excita tanto | 🥵_
⎪➫🔊 _Porque ta tite_
⎪➫🔊 _Potaxio | 🥑_
⎪➫🔊 _Pokémon_
⎪➫🔊 _Pikachu_
⎪➫🔊 _Pero esto_
⎪➫🔊 _Pasa pack Bot_
⎪➫🔊 _Puta que rico | 🍑_
⎪➫🔊 _Que dice? | 😐_
⎪➫🔊 _Que tal grupo_
⎪➫🔊 _Que sucede_
⎪➫🔊 _Quien es tu sempai botsito 7w7_
⎪➫🔊 _Rawr_
⎪➫🔊 _Salimo en caravana_
⎪➫🔊 _Sexo_
⎪➫🔊 _Su nivel de pendejo_
⎪➫🔊 _Se están riendo de mí_
⎪➫🔊 _Siuuu_
⎪➫🔊 _Troleado_
⎪➫🔊 _Toy Chica_
⎪➫🔊 _Traiganle una falda_
⎪➫🔊 _Tal vez_
⎪➫🔊 _Te gusta el Pepino | 🥒_
⎪➫🔊 _Todo bien | 🧐_
⎪➫🔊 _Tengo los calzones del admin_
⎪➫🔊 _Triste_
⎪➫🔊 _Te diagnostico con gay_
⎪➫🔊 _Te amo_
⎪➫🔊 _Tunometecabrasaramambiche_
⎪➫🔊 _UwU_
⎪➫🔊 _Un pato_
⎪➫🔊 _Una pregunta_
⎪➫🔊 _Usted está detenido_
⎪➫🔊 _Viernes_
⎪➫🔊 _Vete a la vrg_
⎪➫🔊 _Verdad que te engañe_
⎪➫🔊 _Vivan los novios_
⎪➫🔊 _Wenomechainsama | 🐹_
⎪➫🔊 _Wtf_
⎪➫🔊 _Yumbi yumbi | 🤠_
⎪➫🔊 _Y Digo Wo_
⎪➫🔊 _Yamete_
⎪➫🔊 _Yoshi_
⎪➫🔊 _Yokese_
⎪➫🔊 _Ya antojaron_
⎪➫🔊 _Y este quien es_
⎪➫🔊 _:c_
╰══〘 🐈⚡️🐈⚡️🐈⚡️🐈 〙══╯

╭════• ೋ•✧๑♡๑✧•ೋ •════╮
                      🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈
         0:40 ━❍──────── -8:39
         ↻     ⊲  Ⅱ  ⊳     ↺
         VOLUMEN: ▁▂▃▄▅▆▇ 100%
╰════• ೋ•✧๑♡๑✧•ೋ •════╯`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu2']
handler.tags = ['General']
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
