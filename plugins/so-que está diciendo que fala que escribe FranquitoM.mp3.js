let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/que está diciendo que fala que escribe FranquitoM.mp3'
conn.sendFile(m.chat, vn, 'que está diciendo que fala que escribe FranquitoM.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /que dice?|que dice|que escribe?|que escribe|que fala?|que fala|😐/i 
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler