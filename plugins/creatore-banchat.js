let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('𝑮𝒓𝒖𝒑𝒑𝒐 𝑪𝒉𝒊𝒖𝒔𝒐,𝒐𝒓𝒂 𝒑𝒂𝒓𝒍𝒂𝒏𝒐 𝒊 𝒗𝒐𝒔𝒕𝒓𝒊 𝒑𝒂𝒅𝒓𝒐𝒏𝒊')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^fanculo$/i
handler.rowner = true
export default handler