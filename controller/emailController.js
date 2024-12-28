import nodemailer from "nodemailer";

export const Email = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        res.json({ success: false, message: "all fields are required." });
        return ;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "sjsaurabh082@gmail.com",
      to: email,
      subject: subject,
      text: message,
      html:`<h3>Hello This is ${name}</h3>
      <h4>Subject: ${subject}</h4>
      <p>message:${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.json({ success: false, message: "Failed to send email." });
  }
};
