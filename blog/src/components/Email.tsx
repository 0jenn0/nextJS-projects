"use client";
import { useState, FormEvent } from "react";
import nodemailer from "nodemailer";
import axios from "axios";
import { log } from "console";

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
    const jsonPayload = JSON.stringify(payload, null, 3);
    console.log("JSONpayload : ", jsonPayload);

    if (emailContent.email && emailContent.message && emailContent.subject) {
      try {
        await fetch("/api/mail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: jsonPayload,
        }).then((response) => {
          console.log("response : ", response);
          if (response.status == 200) {
            console.log("Post 성공");
          } else if (response.status == 400) {
            console.log("post 실패");
          }
        });
      } catch (error) {
        console.log(error);
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
