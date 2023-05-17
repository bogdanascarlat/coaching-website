app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const express = require("express");
  const nodemailer = require("nodemailer");

  const app = express();
  app.use(express.json());

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "bogdana.scarlat@gmail.com",
          pass: "Bogdana10foreverandever10$",
        },
      });

      // Construct the email message
      const mailOptions = {
        from: email,
        to: "bogdana.scarlat@gmail.com",
        subject: "New form submission",
        text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
          `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      // Send a success response
      res.json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error(error);
      // Send an error response
      res
        .status(500)
        .json({ error: "An error occurred while submitting the form" });
    }
  });

  // Start the server
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });

  res.status(200).json({ message: "Email sent successfully!" });
});
