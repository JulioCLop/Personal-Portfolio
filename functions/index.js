const functions = require("firebase-functions");
const config = functions.config();
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true});



admin.initializeApp();

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "julio.mail.dev@gmail.com",
        pass: 'Joey@2468'
    }
});

let mailOptions = {
    from: 'Joey Portfolio',
};





// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const { name, email, phone, message } = request.query;
        mailOptions = {
            ...mailOptions,
            to: "julio.email.dev@gmail.com",
            subject: 'Message Received!',
            html:
                `
                <p style='font-size: 16px'>From: ${name}</p>
                <p style='font-size: 16px'>Email: ${email}</p>
                <p style='font-size: 16px'>Phone Number:${phone}</p>
                <p style='font-size: 16px'>Message: ${message}</p>
                `
        };
        transporter.sendMail(mailOptions, error => {

            if (error) {
                response.send(error);
            } else {
                response.send('Message sent successfully');
            }
        });
        mailOptions = {

            ...mailOptions,
            to: email,
            subject: 'I have received your message!!',
            html:
                `
                <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
                <head>
                <title></title>
                <meta charset="utf-8"/>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
                <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
                <style>
                        * {
                            box-sizing: border-box;
                        }
                
                        body {
                            margin: 0;
                            padding: 0;
                        }
                
                        th.column {
                            padding: 0
                        }
                
                        a[x-apple-data-detectors] {
                            color: inherit !important;
                            text-decoration: inherit !important;
                        }
                
                        #MessageViewBody a {
                            color: inherit;
                            text-decoration: none;
                        }
                
                        p {
                            line-height: inherit
                        }
                
                        @media (max-width:500px) {
                            .icons-inner {
                                text-align: center;
                            }
                
                            .icons-inner td {
                                margin: 0 auto;
                            }
                
                            .fullMobileWidth,
                            .row-content {
                                width: 100% !important;
                            }
                
                            .image_block img.big {
                                width: auto !important;
                            }
                
                            .stack .column {
                                width: 100%;
                                display: block;
                            }
                        }
                    </style>
                </head>
                <body style="margin: 0; background-color: #0f0e0e; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
                <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0f0e0e;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0f0e0e;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0f0e0e;" width="480">
                <tbody>
                <tr>
                <th class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; background-color: #0f0e0e; padding-top: 5px; padding-bottom: 5px;" width="100%">
                <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="width:100%;text-align:center;padding-top:60px;">
                <h1 style="margin: 0; color: #555555; font-size: 23px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: normal; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"></h1>
                </td>
                </tr>
                </table>
                </th>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0f0e0e;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0f0e0e; background-position: top center;" width="480">
                <tbody>
                <tr>
                <th class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px;" width="100%">
                <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="width:100%;padding-right:0px;padding-left:0px;">
                <div align="center" style="line-height:10px"><img class="fullMobileWidth big" src="images/top-rounded.png" style="display: block; height: auto; border: 0; width: 480px; max-width: 100%;" width="480"/></div>
                </td>
                </tr>
                </table>
                </th>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0f0e0e;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-position: center top;" width="480">
                <tbody>
                <tr>
                <th class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 10px;" width="100%">
                <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="padding-bottom:5px;padding-left:20px;padding-right:20px;padding-top:35px;width:100%;">
                <div align="center" style="line-height:10px"><img src="images/newLogoNoBackround.png" style="display: block; height: auto; border: 0; width: 240px; max-width: 100%;" width="240"/></div>
                </td>
                </tr>
                </table>
                </th>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0f0e0e;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="480">
                <tbody>
                <tr>
                <th class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px;" width="100%">
                <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="padding-bottom:5px;padding-top:25px;text-align:center;width:100%;">
                <h1 style="margin: 0; color: #555555; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 36px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;">Thanks for sending me a message! I'll get back to you as soon as possible.</h1>
                </td>
                </tr>
                </table>
                </th>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0f0e0e;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: center top;" width="480">
                <tbody>
                <tr>
                <th class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px;" width="100%">
                <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="width:100%;padding-right:0px;padding-left:0px;">
                <div align="center" style="line-height:10px"><img class="fullMobileWidth big" src="images/bottom-rounded.png" style="display: block; height: auto; border: 0; width: 480px; max-width: 100%;" width="480"/></div>
                </td>
                </tr>
                </table>
                <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                <tr>
                <td style="padding-bottom:20px;padding-left:5px;padding-right:5px;padding-top:30px;">
                <div style="font-family: sans-serif">
                <div style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; color: #ffffff; line-height: 1.2;">
                <p style="margin: 0; font-size: 14px; text-align: center;"><span style="font-size:12px;">© 2021 Julio Lopez  |   <a href="http://www.example.com" rel="noopener" style="color: #262b30;" target="_blank">click here to unsubscribe</a>.</span></p>
                </div>
                </div>
                </td>
                </tr>
                </table>
                </th>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="480">
                <tbody>
                <tr>
                <th class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px;" width="100%">
                <table border="0" cellpadding="0" cellspacing="0" class="icons_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="color:#9d9d9d;font-family:inherit;font-size:15px;padding-bottom:5px;padding-top:5px;text-align:center;">
                <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tr>
                <td style="text-align:center;">
                <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                <!--[if !vml]><!-->
                <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
                <!--<![endif]-->
                <tr>
                <td style="text-align:center;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:6px;"><a href="https://www.designedwithbee.com/"><img align="center" alt="Designed with BEE" class="icon" height="32" src="images/bee.png" style="display: block; height: auto; border: 0;" width="34"/></a></td>
                <td style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:15px;color:#9d9d9d;vertical-align:middle;letter-spacing:undefined;text-align:center;"><a href="https://www.designedwithbee.com/" style="color:#9d9d9d;text-decoration:none;">Designed with BEE</a></td>
                </tr>
                </table>
                </td>
                </tr>
                </table>
                </td>
                </tr>
                </table>
                </th>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table><!-- End -->
                </body>
                </html>
                `
        };
        transporter.sendMail(mailOptions)
    });
});
