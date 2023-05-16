"use client";
import { useState, FormEvent } from "react";
import nodemailer from "nodemailer";
import axios from "axios";

type EmailContentt = {
  email: string;
  subject: string;
  message: string;
};

export default function Email() {
  const [emailContent, setEmailContent] = useState({
    email: "",
    subject: "",
    message: "",
  });

  //   const transporter = nodemailer.createTransport({
  //     host: "smtp.gmail.com",
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: process.env.NEXT_PUBLIC_AUTH_EMAIL,
  //       pass: process.env.NEXT_PUBLIC_AUTH_PASS,
  //     },
  //   });

  //   const mailOptions = {
  //     from: emailContent.email,
  //     to: process.env.NEXT_PUBLIC_AUTH_EMAIL,
  //     subject: "Test Email",
  //     text: "This is a test email.",
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setEmailContent({
  //       email: "",
  //       subject: "",
  //       message: "",
  //     });
  //   };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("handle submit");

    e.preventDefault();

    const payload = {
      email: emailContent.email,
      message: emailContent.message,
      subject: emailContent.subject,
    };
    console.log("payload", payload);

    if (emailContent.email && emailContent.message && emailContent.subject) {
     try {
        const response = await fetch('/api/mail', 
        {method: "POST",}
        )
     }
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">Your Email</label>
        <input
          value={emailContent.email}
          type="text"
          placeholder="user@mail.com"
          onChange={(e) =>
            setEmailContent((prev) => ({ ...prev, email: e.target.value }))
          }
        />

        <label htmlFor="">Subject</label>
        <input
          type="text"
          placeholder="제목"
          value={emailContent.subject}
          onChange={(e) =>
            setEmailContent((prev) => ({ ...prev, subject: e.target.value }))
          }
        />

        <label htmlFor="">Message</label>
        <input
          type="text"
          placeholder="메일 내용"
          value={emailContent.message}
          onChange={(e) =>
            setEmailContent((prev) => ({ ...prev, message: e.target.value }))
          }
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
