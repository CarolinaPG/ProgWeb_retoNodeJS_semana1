//const User = require('../models/user');

module.exports = {
    sendEmail: async (req, res, next) => {
        try{
            const sgMail = require('@sendgrid/mail');
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            const sender = 'carolinarpulidog@gmail.com'
            const receiver = req.body.destino
            const title = req.body.asunto
            const mensaje = req.body.contenido
            const msg = {
                to: receiver, // Change to your recipient
                from: sender, // Change to your verified sender
                subject: title,
                text: mensaje,
                html: '<strong>'+mensaje+'</strong>'
            }
            sgMail.send(msg).then(() => {
                console.log('Email sent')
                res.status(200).json({success: true})
            })
            .catch((error) => {
                console.error(error)
            })
        } catch(e){
            console.log(e);
        }
    }
};