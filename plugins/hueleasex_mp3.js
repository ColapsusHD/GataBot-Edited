let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/huele a sexo Dross.mp3'
conn.sendFile(m.chat, vn, 'huele a sexo Dross.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /🔥|sexo|Sexo|huele a sexo/ 
handler.command = new RegExp
module.exports = handler
