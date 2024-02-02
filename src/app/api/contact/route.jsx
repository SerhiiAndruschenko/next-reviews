import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const { name, email, message } = bodyJSON;
    console.log(name);
    // Configure nodemailer with your email service credentials
    const transporter = nodemailer.createTransport({
      host: "mail.adm.tools",
      port: 465,
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },

      auth: {
        user: "noreply@bookwormhaven.space",
        pass: "8pR2SbK7e7",
      },
    });

    // Set up email data
    const mailOptions = {
      from: "noreply@bookwormhaven.space",
      to: "contact@bookwormhaven.space", // Change to your recipient's email
      subject: "New Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
