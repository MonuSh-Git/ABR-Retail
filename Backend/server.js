// require("dotenv").config();
import dotenv from 'dotenv';
dotenv.config();

// const express = require("express");
import express from 'express';

// const cors = require("cors");
import cors from 'cors';

// const bodyParser = require("body-parser");
import bodyParser from 'body-parser';

// const nodemailer = require("nodemailer");
import nodemailer from 'nodemailer';
import path from 'path';

const app = express();

const _dirname = path.resolve();



// Middleware
app.use(cors());
app.use(bodyParser.json());

// Contact Form Route
app.post("/send-email", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Configure Nodemailer Transport
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or App Password
    },
  });

  // Email Content
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Your email
    subject: `New Contact Form Submission: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

// app.use(express.static(path.join(_dirname, "/Frontend/dist")));
// app.get("*", (_,res) => {
//   res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"))
// })

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
