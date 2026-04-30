// require("dotenv").config();
import dotenv from 'dotenv';
dotenv.config();

// const express = require("express");
import express from 'express';

// const cors = require("cors");
import cors from 'cors';

// const bodyParser = require("body-parser");
import bodyParser from 'body-parser';

import { Resend } from "resend"; 

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ INIT RESEND
const resend = new Resend(process.env.RESEND_API_KEY);

// Contact Form Route
app.post("/send-email", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [process.env.EMAIL_USER], // Still uses your email env
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
