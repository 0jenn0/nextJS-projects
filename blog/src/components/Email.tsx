"use client";
import { useState, useEffect } from "react";
import Form from "./Form";
import mailer from "@/service/mail";

export type EmailContent = {
  email: string;
  subject: string;
  message: string;
};

export type EmailStatus = "success" | "fail" | "sending";

export default function Email() {
  const [emailContent, setEmailContent] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [emailStatus, setEmailStatus] = useState<EmailStatus>("default");
  const [isShow, setIsShow] = useState<boolean>(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsShow(false);
    }, 4000);
    return () => clearInterval(timer);
  }, [emailStatus]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mailer({ emailContent, setIsShow, setEmailStatus });
    setEmailContent({ email: "", subject: "", message: "" });
  };

  return (
    <>
      {emailStatus === "success" && isShow ? (
        <div className="bg-sky-100 rounded-lg p-3 mb-10 w-1/3 m-auto">
          메일 보내기 성공했습니다 💌
        </div>
      ) : emailStatus === "fail" && isShow ? (
        <div className="bg-red-400 rounded-lg p-3 mb-10 w-1/3 m-auto">
          메일 보내기 실패했습니다.다시 시도해주세요.😲
        </div>
      ) : emailStatus === "sending" ? (
        <div className="bg-sky-50 rounded-lg p-3 mb-10 w-1/3 m-auto">
          메일을 보내는 중입니다 📨 ==3
        </div>
      ) : (
        ""
      )}
      <div className="bg-red-50 w-3/4 rounded-lg p-5 m-auto md:w-5/12">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col text-left m-auto justify-center"
        >
          <Form
            emailContent={emailContent}
            setEmailContent={setEmailContent}
            value="email"
          />
          <Form
            emailContent={emailContent}
            setEmailContent={setEmailContent}
            value="subject"
          />

          <Form
            emailContent={emailContent}
            setEmailContent={setEmailContent}
            value="message"
          />

          <button
            className="bg-violet-300 rounded-xl w-min px-4 py-2 m-auto mt-5"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
