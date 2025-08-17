require('dotenv').config();
const nodemailer = require('nodemailer');

(async () => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Jolu Group Security" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "SMTP Test ✔",
      html: `<p>This is a test from the Node server.</p>`,
    });

    console.log("✅ Test email sent:", info.messageId);
    process.exit(0);
  } catch (err) {
    console.error("❌ SMTP test failed:", err);
    process.exit(1);
  }
})();

