import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { SendMailOptions } from 'nodemailer';

const port = process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT, 10) : 465;
const secure = port === 465;

const htmlFullMail = (mailContent: string) => {
  const devName = process.env.MAIL_NAME;

  return `<!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="x-apple-disable-message-reformatting"><title></title> <!--[if mso]><style>table{border-collapse:collapse;border-spacing:0;border:none;margin:0}div,td{padding:0}div{margin:0 !important}</style><noscript> <xml> <o:OfficeDocumentSettings> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> </noscript> <![endif]--><style>table,td,div,h1,p{font-family:Arial,sans-serif}@media screen and (max-width: 530px){.unsub{display:block;padding:8px;margin-top:14px;border-radius:6px;background-color:#555;text-decoration:none !important;font-weight:bold}.col-lge{max-width:100% !important}}@media screen and (min-width: 531px){.col-sml{max-width:27% !important}.col-lge{max-width:73% !important}}</style></head><body style="margin:0;padding:0;word-spacing:normal;background-color:#FFFFFF;"><div role="article" aria-roledescription="email" lang="en" style="text-size-adjust:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#FFFFFF;"><table role="presentation" style="width:100%;border:none;border-spacing:0; margin-bottom: 50px;"><tr><td align="center" style="padding:0;"> <!--[if mso]><table role="presentation" align="center" style="width:600px;"><tr><td> <![endif]--><table role="presentation" style="width:94%;max-width:600px;border:none;border-spacing:0;text-align:left;font-family:Arial,sans-serif;font-size:16px;line-height:22px;color:#363636;"><tr><td style="padding:40px 30px 30px 30px;text-align:center;font-size:24px;font-weight:bold;">&nbsp;</td></tr><tr><td style="padding:30px;background-color:#E7E9EF; border-radius: 10px 10px 0 0">${mailContent}</td></tr><tr><td style="padding:30px;text-align:center;font-size:12px;background-color:#222A3F;color:#cccccc; border-radius: 0 0 10px 10px"><p style="margin:0;font-size:12px;line-height:20px; padding: 0 10px; color: #9EA5B5"><font color="#9EA5B5">This email was sent to you because you used the Contact Us Form on ${devName}'s Website. I'll get back to you as soon as possible.</font></p></td></tr><tr><td>&nbsp;</td></tr></table> <!--[if mso]></td></tr></table> <![endif]--></td></tr></table></div></body></html>`;
};

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_SERVER,
  port: port,
  secure, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_ADDRESS, // generated user
    pass: process.env.MAIL_PASSWORD, // generated password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendMail = (options: SendMailOptions) =>
  new Promise((resolve) => {
    transporter.sendMail(options, (error) => {
      if (error) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // User Options
    const mailOptionsUser = {
      from: `"${process.env.MAIL_NAME}" <${process.env.MAIL_ADDRESS}>`,
      to: req.body.email,
      subject: `Contact Form  - ${process.env.WEBSITE_DOMAIN}`,
      text: `Hello ${
        req.body.name
      },\r\n\r\nThank you for reaching out to me.\r\nI'll get in touch with you as soon as possible.\r\n\r\n${
        req.body.how
          ? `How you learned About Me:\r\n${req.body.how}\r\n\r\n`
          : ''
      }Message:\r\n${req.body.message}`,
      html: htmlFullMail(`Hello <b>${
        req.body.name
      }</b>,<br/><br/>Thank you for reaching out to me.<br/>I'll get in touch with you as soon as possible.<br/><br/><hr/><br/>
${
  req.body.how
    ? `<b>How you learned About Me:</b><br/>${req.body.how}<br/><br/>`
    : ''
}<b>Message:</b><br/>${req.body.message.replace(/(?:\r\n|\r|\n)/g, '<br>')}`),
    };

    // Dev Options
    const mailOptionsDev = {
      from: `"${process.env.MAIL_NAME}" <${process.env.MAIL_ADDRESS}>`,
      to: process.env.DEV_EMAIL,
      subject: `Contact Form Message  - ${process.env.WEBSITE_DOMAIN}`,
      text: `A Website Visitor has just sent you a Message. See Details Below:\r\n\r\nName:\r\n${
        req.body.name
      }\r\n\r\nE-mail Address:\r\n${req.body.email}\r\n\r\n${
        req.body.how
          ? `How they learned About You:\r\n${req.body.how}\r\n\r\n`
          : ''
      }Message:\r\n${req.body.message}`,
      html: htmlFullMail(`A Website Visitor has just sent you a Message. See Details Below:<br/><br/><hr/><br/>
<b>Name:</b><br/>${req.body.name}<br/><br/><b>E-mail Address:</b>\r\n${
        req.body.email
      }<br/><br/>${
        req.body.how
          ? `<b>How they learned About You:</b><br/>${req.body.how}<br/><br/>`
          : ''
      }<b>Message:</b><br/>${req.body.message.replace(
        /(?:\r\n|\r|\n)/g,
        '<br>'
      )}`),
    };

    // Notify User
    const successUser = await sendMail(mailOptionsUser);

    if (!successUser) {
      return res.status(400).end();
    }

    // Notify Dev
    const successDev = await sendMail(mailOptionsDev);

    if (!successDev) {
      return res.status(400).end();
    }

    return res.status(200).end();
  } catch (e) {
    return res.status(400).end();
  }
};

export default contact;
