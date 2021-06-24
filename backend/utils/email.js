import { createTransport } from "nodemailer";
import { Welcome } from "../public/views/email/welcome.js";
import { passwordReset } from "../public/views/passwordReset.js";

export default class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.url = url;
    this.from = "Nadav <Hikeable@gmail.com>";
  }

  newTransport() {
    if (process.env.NODE_ENV === "production") {
      //sendgrid
      return 1;
    }
    return createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(template, subject) {
    const html = template;
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send(Welcome(this.firstName, this.url), "Welcome to Hikeable!");
  }

  async sendPasswordReset() {
    await this.send(
      passwordReset(this.firstName, this.url),
      "Your Password Reset Request"
    );
  }
}

// const sendEmail = async (options) => {
//   const transporter = createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: "Nadav <Hikeable@gmail.com>",
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   await transporter.sendMail(mailOptions);
// };

// export default sendEmail;
