const nodemailer = require("nodemailer");

async function main() {

    var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "2566bbd91ca962",
          pass: "82fc6bcf7be8d9"
        }
      });
  
  let info = await transporter.sendMail({
    from: '"Bit Crackerz" <bitcrackerz@gmail.com>',
    to: ["bitcrackerz@gmail.com", "debanga.cse@gmail.com", "test@gmail.com"],
    subject: "Testing, testing, 123",
    html: "Hello"
  });

  console.log(info.messageId); 
}

main()
.catch(err => console.log(err));