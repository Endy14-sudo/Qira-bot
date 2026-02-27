let handler = async (m, { conn, command, usedPrefix }) => {
    let staff = `
ㅤㅤ⋆｡˚『 ╭ \`STAFF ZEYNOBOT PIÙ IMPORTANTI\` ╯ 』˚｡⋆\n╭\n│
│ 『 🤖 』 \`Bot:\` *${global.nomebot}*
│ 『 🍥 』 \`Versione:\` *${global.versione}*
│
│⭒─ׄ─『 👑 \`Sviluppatore\` 』 ─ׄ─⭒
│
│ • \`Nome:\` *endy*
│ • \`Ruolo:\` *Creatore / dev*
│ • \`Contatto:\` @212679283897
│
│⭒─ׄ─『 🛡️ \`Moderatori\` 』 ─ׄ─⭒
│
│ • \`Nome:\` *medalis*
│ • \`Ruolo:\` *Moderatore*
│ • \`Contatto:\` @212722652082
│
│ • \`Nome:\` *ksav*
│ • \`Ruolo:\` *Moderatore*
│ • \`Contatto:\` @5511967898841
│
│─ׄ─『 📌 \`Info Utili\` 』 ─ׄ─⭒
│
│ • \`GitHub:\` *https://github.com/Endy14-sudo*
│ • \`Supporto:\` @212679283897
│ • \`Whatsapphttps:\` *https://chat.whatsapp.com/EYakbP0qa2RJkSodReJExC?mode=hqctcla*
│ • *https://www.instagram.com/endy.2011_?igsh=aGZycG90b3BhNzBi*
│
*╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*`;
    await conn.reply(
        m.chat, 
        staff.trim(), 
        m, 
        { 
            ...global.fake,
            contextInfo: {
                ...global.fake,
                mentionedJid: ['212679283897@s.whatsapp.net', '212722652082@s.whatsapp.net', '5511967898841@s.whatsapp.net'],
                externalAdReply: {
                    renderLargerThumbnail: true,
                    title: 'STAFF - UFFICIALE',
                    body: 'Supporto e Moderazione',
                    mediaType: 1,
                    sourceUrl: 'zeynobot',
                    thumbnailUrl: 'https://ibb.co/8nYSP5sz/aizenginnigga.jpg'
                }
            }
        }
    );

    await conn.sendMessage(m.chat, {
        contacts: {
            contacts: [
                {
                    vcard: `BEGIN:VCARD
VERSION:1.2
FN: Endy
ORG:ZeynoBot - Creatore
TEL;type=CELL;type=VOICE;waid=212679283897:+212679283897
END:VCARD`
                },
                {
                    vcard: `BEGIN:VCARD
VERSION:1.2
KV:ksav
ORG:ZeynoBot - Moderatore
TEL;type=CELL;type=VOICE;waid=5511967898841:+5511967898841
END:VCARD`
                },
                {
                    vcard: `BEGIN:VCARD
VERSION:1.2
FN:medalis
ORG:ZeynoBot - Moderatore
TEL;type=CELL;type=VOICE;waid=212722652082:+212722652082
END:VCARD`
                }
            ]
        }
    }, { quoted: m });

    m.react('🉐');
};

handler.help = ['staff'];
handler.tags = ['main'];
handler.command = ['staff', 'moderatori', 'collaboratori'];

export default handler;