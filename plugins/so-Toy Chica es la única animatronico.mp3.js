let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Toy Chica es la única animatronico.mp3'
conn.sendFile(m.chat, vn, 'Toy Chica es la única animatronico.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Toy Chica/i 
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler