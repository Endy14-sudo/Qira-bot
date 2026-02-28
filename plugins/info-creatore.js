let handler = async (m, { conn }) => {
    try {
        let username = await conn.getName(m.sender)
        let samakavare = `ㅤㅤ⋆｡˚『 ╭ \`CREATORE\` ╯ 』˚｡⋆\n╭\n`
        endy += `『 👋 』 *Hey ${username}!*\n`
        samakavare += `- \`Ecco tutte le informazioni  per contattarmi:\`\n\n`
        endy += `『 📌 』 _*CONTATTI:*_\n`
        samakavare += `┌─⭓ \`Nome:\`\n  *˙⋆✮*     *Endy Aka Zeyno*\n`
        endy += `├─⭓ \`Numero:\`\n  *˙⋆✮*     *wa.me/212679283897*\n`
        samakavare += `├─⭓ \`Email:\`\n  *˙⋆✮*     *3ndyq1111@gmail.com*\n`
        endy += `├─⭓ \`Instagram:\`\n  *˙⋆✮*     *endy*\n`
        endy += `├─⭓ \`GitHub:\`\n  *˙⋆✮*     *endy*`

        const creatorCard = {
            image: { url: 'https://i.ibb.co/B29rgfjZ/sam.png' },
            body: endy,
            footer: '',
            buttons: [
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: '💻 GitHub',
                        url: 'https://github.com/realvare'
                    })
                },
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: '💬 WhatsApp',
                        url: 'https://wa.me/212679283897'
                    })
                },
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: '📸 Instagram',
                        url: 'https://instagram.com/samakavare'
                    })
                },
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: '📧 Email',
                        url: 'mailto:3ndyq1111@gmail.com'
                    })
                },
            ]
        }

        await conn.sendMessage(
            m.chat,
            {
                text: `ㅤ⋆｡˚『 ╭ \`𝘾𝙍𝙀𝘼𝙏𝙊𝙍𝙀\` ╯ 』˚｡⋆\n╭\n│ 『 👨‍💻 』 \`Sviluppatore:\` \n│ ➤  _*Endy Aka zeyno*_\n*╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*`,
                footer: '',
                cards: [creatorCard]
            },
            { quoted: m }
        )
    } catch (error) {
        console.error('Errore invio messaggio creatore:', error);
        
        try {
            let username = await conn.getName(m.sender)
            let endy = `ㅤㅤ⋆｡˚『 ╭ \`CREATORE\` ╯ 』˚｡⋆\n╭\n`
            endy += `『 👋 』 *Hey ${username}!*\n`
            endy += `- \`Ecco tutte le mie info per contattarmi:\`\n\n`
            endy += `『 📌 』 _*CONTATTI:*_\n`
            endy += `┌─⭓ \`Nome:\`\n  *˙⋆✮*     *endy aka zeyno*\n`
            samakavare += `├─⭓ \`Numero:\`\n  *˙⋆✮*     *wa.me/212679283897*\n`
            endy += `├─⭓ \`Email:\`\n  *˙⋆✮*     *3ndyq1111@gmail.com*\n`
            endy += `├─⭓ \`Instagram:\`\n  *˙⋆✮*     *endy*\n`
            endy += `├─⭓ \`GitHub:\`\n  *˙⋆✮*     *Qira-bot*`
            
            const buttons = [
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: '『 💻 』 GitHub',
                        url: 'https://github.com/realvare'
                    })
                },
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: '『 📱 』 WhatsApp',
                        url: 'https://wa.me/212679283897'
                    })
                },
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: '『 📸 』 Instagram',
                        url: 'https://instagram.com/samakavare'
                    })
                },
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: '『 📧 』 Email',
                        url: 'mailto: 3ndyq1111@gmail.com'
                    })
                }
            ]
            
            await conn.sendMessage(m.chat, {
                image: { url: 'https://i.ibb.co/B29rgfjZ/sam.png' },
                caption: samakavare.trim(),
                footer: ``,
                interactiveButtons: buttons
            }, { quoted: m })
            
            await conn.sendMessage(
                m.chat,
                {
                    text: 'by samakavare', // non visualizzabile, lascia i credits
                    interactiveButtons: [
                        {
                            name: 'payment_info',
                            buttonParamsJson: JSON.stringify({
                                payment_settings: [
                                    {
                                        type: 'pix_static_code',
                                        pix_static_code: {
                                            merchant_name: 'samakavare',
                                            key: '+393476686131',
                                            key_type: 'PHONE',
                                        }
                                    }
                                ]
                            })
                        }
                    ]
                },
                { quoted: m }
            )
            
        } catch (fallbackError) {
            console.error('Errore anche nel fallback:', fallbackError);
            // Ultimo tentativo: solo testo
            let username = await conn.getName(m.sender)
            await conn.reply(m.chat, `👋 Hey ${username}!\n\n👨‍💻 *Creatore: Sam aka Vare*\n\n📱 WhatsApp: wa.me/393476686131\n📧 Email: samakavare1@gmail.com\n📸 Instagram: samakavare\n💻 GitHub: realvare`, m);
        }
    }
}

handler.help = ['creatore']
handler.tags = ['info']
handler.command = /^(owner|creatore)$/i

export default handler