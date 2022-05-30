let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Hola amigos como están que introducción épica no Dross.mp3'
conn.sendFile(m.chat, vn, 'Hola amigos como están que introducción épica no Dross.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(hola|ola|Hola🤖|ola🤖)$/i 

module.exports = handler
