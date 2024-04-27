export class EmailService {
  constructor() {
    // this.transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });
  }
  async sendEmail(email, signupVerifytoken) {
    console.log(
      `Sending email to ${email} with signupVerifytoken ${signupVerifytoken}`,
    );
    // const mailOptions = {
    //   from: process.env.EMAIL_USER,
    //   to: email,
    //   subject,
    //   text,
    // };
    // return this.transporter.sendMail(mailOptions);
  }
}
