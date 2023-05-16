import { Email } from "@/components/Email";
//import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

type EmailPayload = {
  email: string;
  subject: string;
  message: string;
};

const toEmail = process.env.NEXT_PUBLIC_AUTH_EMAIL;

export async function POST(req: NextRequest) {
  const { email, subject, message }: EmailPayload = await req.json();
  // console.log("req.body:", email, subject, message);

  const emailParam = {
    toEmail: toEmail, // 수신할 이메일
    subject: `[blog] ${subject}`, // 메일 제목
    text: `
    <div>
        <h2>Message Details</h2>
        <div class="email" style="font-size: 1.1em;">Email : ${email}</div>
        <div class="phone" style="font-size: 1.1em;">Title : ${subject}</div>
        <div class="message" style="font-size: 1.1em;">message : </div>
        <pre class="message" style="font-size: 1.2em;">${message}</pre>
    </div>
    `,
  };

  type EmailParam = {
    toEmail: string | undefined;
    subject: string;
    text: string;
  };

  // 메일발송 객체
  const mailSender = {
    // 메일발송 함수
    sendGmail: function (param: EmailParam) {
      let transporter = nodemailer.createTransport({
        port: 587,
        host: "smtp.gmail.com",
        auth: {
          user: toEmail, // 보내는 메일의 주소
          pass: process.env.NEXT_PUBLIC_AUTH_PASS, // 보내는 메일의 비밀번호
        },
      });
      // 메일 옵션
      let mailOptions = {
        from: email, // 보내는 메일의 주소
        to: toEmail, // 수신할 이메일
        subject: param.subject, // 메일 제목
        html: param.text, // 메일 내용
        // attachments: param.attachments, //첨부파일
      };

      return transporter.sendMail(mailOptions);
    },
  };

  await mailSender
    .sendGmail(emailParam)
    // .then((res) => res.status)
    .catch((res) => res.status(500).send("에러"));
  //  catch (err) {
  // console.error(err);
  // // next(err);
  // }

  return new Response("성공", { status: 200 });
}
