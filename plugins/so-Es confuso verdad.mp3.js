let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Es confuso verdad.mp3'
conn.sendFile(m.chat, vn, 'Es confuso verdad.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Es confuso verdad|Depresion/i 
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler