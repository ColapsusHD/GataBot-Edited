let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Bienvenido.mp3'
conn.sendFile(m.chat, vn, 'Bienvenido.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /bienvenido|bienvenida|🤗/i 
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler
