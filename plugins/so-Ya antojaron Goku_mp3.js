let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/YA ANTOJARON.mp3'
conn.sendFile(m.chat, vn, 'YA ANTOJARON.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Ya Antojaron|Goku pervertido|pervertido/i 
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler
