let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Status : *_sc yg bot gunakan!!_* 

╭═[ *SCRIPT* ]═────···
┴
📮: https://github.com/Botynyakamu/zifabotz-V12
╭═[ [❗] Jangan diperjual belikan tanpa seizin pemilik sc ]═────···
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'SCRIPT')).buffer(), ext, '©zifabotz', 'MENU', '.menu', 'SC LAIN', '.sclain', m)

}
handler.customPrefix = /^(sc|.sc|script|.script)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
