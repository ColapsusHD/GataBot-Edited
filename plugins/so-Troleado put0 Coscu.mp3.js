let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Troleado put0 Coscu.mp3'
conn.sendFile(m.chat, vn, 'Troleado put0 Coscu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Trolleado|Troleado|Troleado puto|trollface|trolface|troll/i 
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler