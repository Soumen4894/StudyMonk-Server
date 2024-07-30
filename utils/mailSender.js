const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try{
            let transporter = nodemailer.createTransport({
                //host:process.env.MAIL_HOST,
                service:process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })

            //console.log("wkhejcfqjefcqojech ")
            let info = await transporter.sendMail({
                //from: 'StudyNotion || CodeHelp - by Babbar',
                from: "soumen4894@gmail.com",
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log(info);
            return info;
    }
    catch(error) {
        console.log(error.message);
    }
}


module.exports = mailSender;