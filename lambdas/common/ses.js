const { SendEmailCommand, SESClient } = require("@aws-sdk/client-ses");

const sesClient = new SESClient({});
const createSendEmailCommand = (toAddress, fromAddress, html, subject) => {
  return new SendEmailCommand({
    Destination: {
      /* required */
      CcAddresses: [
        /* more items */
      ],
      ToAddresses: [
        toAddress,
        /* more To-email addresses */
      ],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: "UTF-8",
          Data: html,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [
      /* more items */
    ],
  });
};

const ses = {
  send: async (from, to, html, subject) => {
    console.log("sending email, ", { from, to, html, subject });
    const command = createSendEmailCommand(to, from, html, subject);
    await sesClient.send(command).catch((e) => {
      console.log(e);
      throw new Error(e);
    });
  },
};

module.exports = ses;
