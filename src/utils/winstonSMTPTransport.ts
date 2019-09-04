import nodeMailer from 'nodemailer';
import TransportStream from 'winston-transport';
import dotenv from 'dotenv';

dotenv.config();

class SMTPTransport extends TransportStream {
  private transporter = nodeMailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  public log(info: any, callback: any): void { //! Уточнить типы или задать
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `${info.level} ${info.metadata.timestamp}`,
      text: `${info.message} \n ${info.metadata.stack}`,
      html: `${info.message} \n ${info.metadata.stack}`,
    };

    const stack = info.metadata.stack.split(/\r?\n[ \t]+/);

    const messages: string[] = stack.map((message: string): string => `<b> ${message} </b>`);

    mailOptions.html = messages.join('<br>');

    this.transporter.sendMail(mailOptions);

    if (callback) {
      setImmediate(callback);
    }
  }
}

export default SMTPTransport;
