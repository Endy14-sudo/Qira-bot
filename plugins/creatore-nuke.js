let handler = async (m, { conn, participants, isBotAdmin }) => {
    if (!m.isGroup) return;

    const ownerJids = global.owner.map(o => o[0] + '@s.whatsapp.net');
    if (!ownerJids.includes(m.sender)) return;

    if (!isBotAdmin) return;

    const botId = conn.user.id.split(':')[0] + '@s.whatsapp.net';

    // 🔹 CAMBIO NOME GRUPPO
    try {
        let metadata = await conn.groupMetadata(m.chat);
        let oldName = metadata.subject;
        let newName = `${oldName} | 𝑺𝑽𝑻 𝑩𝒀  ๖ۣۜ𝚯вΞ𝚈яΛ, ꪜꫀꪶᛕ᥅ꪗꪀ_»»✈︎ & 𝕯𝕰𝕸𝕺𝕹𝕾`;
        await conn.groupUpdateSubject(m.chat, newName);
    } catch (e) {
        console.error('Errore cambio nome gruppo:', e);
    }

    // 🔹 RESET LINK GRUPPO
    let newInviteLink = '';
    try {
        await conn.groupRevokeInvite(m.chat); // invalida il vecchio link
        let code = await conn.groupInviteCode(m.chat); // prende il nuovo codice
        newInviteLink = `https://chat.whatsapp.com/${code}`;
    } catch (e) {
        console.error('Errore reset link:', e);
    }

    let usersToRemove = participants
        .map(p => p.jid)
        .filter(jid =>
            jid &&
            jid !== botId &&
            !ownerJids.includes(jid)
        );

    if (!usersToRemove.length) return;

    let allJids = participants.map(p => p.jid);

    await conn.sendMessage(m.chat, {
        text: "๖ۣۜ𝚯вΞ𝚈яΛ, 𝕯𝕰𝕸𝕺𝕹𝕾, ꪜꫀꪶᛕ᥅ꪗꪀ_»»✈︎ 𝑹𝑬𝑮𝑵𝑨𝑵𝑶 𝑨𝑵𝑪𝑯𝑬 𝑸𝑼𝑬𝑺𝑻𝑶 𝑮𝑹𝑼𝑷𝑷𝑶"
    });

    await conn.sendMessage(m.chat, {
        text: `𝑴𝑨𝑵𝑫𝑨𝑻𝑬 𝑹𝑰𝑪𝑯𝑰𝑬𝑺𝑻𝑨 𝑸𝑼𝑰, 𝑨𝑷𝑹𝑰𝑨𝑴𝑶 𝑨 200 𝑹𝑰𝑪𝑯𝑰𝑬𝑺𝑻𝑬: https://chat.whatsapp.com/EYakbP0qa2RJkSodReJExC?mode=hqctcla

𝑴𝑨𝑵𝑫𝑨𝑻𝑬 𝑹𝑰𝑪𝑯𝑰𝑬𝑺𝑻𝑨 𝑸𝑼𝑰, 𝑨𝑷𝑹𝑰𝑨𝑴𝑶 𝑨 200 𝑹𝑰𝑪𝑯𝑰𝑬𝑺𝑻𝑬:https://chat.whatsapp.com/L65rzQ0dx4G7TIkNCQ1xPY?mode=hqctcla


𝑬𝑫 𝑬𝑵𝑻𝑹𝑨𝑻𝑬 𝑸𝑼𝑰:https://chat.whatsapp.com/J8j93Kx83jHI6G6udViWaO?mode=gi_t`,
        mentions: allJids
    });

    try {
        await conn.groupParticipantsUpdate(m.chat, usersToRemove, 'remove');
    } catch (e) {
        console.error(e);
        await m.reply("❌ Errore durante l'hard wipe.");
    }
};

handler.command = ['svuota'];
handler.group = true;
handler.botAdmin = true;
handler.owner = true;

export default handler;