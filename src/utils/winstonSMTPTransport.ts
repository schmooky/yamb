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

  // eslint-disable-next-line no-useless-constructor
  public constructor(options: TransportStream.TransportStreamOptions) {
    super(options);
  }

  // eslint-disable-next-line no-explicit-any
  public log(info: any, callback: any): void {
    const mailOptions = {
      from: '"discord-yamusic" <discord-yamusic@yandex.ru>',
      to: 'discord-yamusic@yandex.ru',
      subject: `${info.level}`,
      text: info.message,
      html: info.message,
    };

    this.transporter.sendMail(mailOptions);

    if (callback) {
      setImmediate(callback);
    }
  }
}

export default SMTPTransport;
