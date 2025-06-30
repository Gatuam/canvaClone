import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});


export async function sendMail(from, to, subject, text, html) {
  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text, //can be header and info about waht are you sending about:)
      html, // actual template
    });
    console.log("Message sent:", info.messageId);
  
 } catch (error) {
    console.log(error.message);
  }
}
