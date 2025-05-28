const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Log the environment variables to check if they are loaded correctly
console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Pass:', process.env.EMAIL_PASS);

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Replace with your email provider
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS,
    port: 5000, // Your email password
  },
});

// Route to handle form submission
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact form submission from ${name}`,
    text: `You have a new message from:
    Name: ${name}
    Email: ${email}
    Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error); // Log the error if email fails to send
      return res.status(500).json({ error: 'Failed to send email' });
    }
    console.log('Email sent:', info.response); // Log the response if successful
    res.status(200).json({ success: 'Email sent successfully!' });
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
