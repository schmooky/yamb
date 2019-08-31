import nodeMailer from 'nodemailer';
import TransportStream from 'winston-transport';

class SMTPTransport extends TransportStream {
  private transporter = nodeMailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'discord-yamusic@yandex.ru',
      pass: '{discord-yamusic}',
    },
  });

  private mailOptions = {
    from: '"discord-yamusic" <discord-yamusic@yandex.ru>',
    to: 'discord-yamusic@yandex.ru',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>',
  };

  // eslint-disable-next-line no-useless-constructor
  public constructor(options: TransportStream.TransportStreamOptions) {
    super(options);
  }

  public log(info: string, callback: any): void {
    this.transporter.sendMail(this.mailOptions);

    if (callback) {
      setImmediate(callback);
    }
  }
}

export default SMTPTransport;
