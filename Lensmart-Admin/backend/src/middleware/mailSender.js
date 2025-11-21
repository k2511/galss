
import nodemailer from 'nodemailer';


  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "maddison53@ethereal.email",
      pass: "jn7jnAPss4f63QBp6D",
    },
  });
export  const mailSender = async({title,  body}) => {

    try{

        const info = await transporter.sendMail({
            from: 'Lensmart.com',
            to: "bar@example.com, baz@example.com",
            subject: body,
            text: "Hello world?", // plain‑text body
            html: "<b>Hello world?</b>", // HTML body
          });
       

    }catch(err){

    }
}