import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');
a
export async function POST(req) {
  try {
    const { name, email, message } = req.body;

    // Configure nodemailer with your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'andruschenko033@gmail.com',
        pass: 'Nothingistruth23698741',
      },
    });

    // Set up email data
    const mailOptions = {
      from: 'andruschenko033@gmail.com',
      to: 'serg.web@acceptance.ltd', // Change to your recipient's email
      subject: 'New Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success: email was sent" })
  } catch (error) {
    console.error(error);
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
  }
}
