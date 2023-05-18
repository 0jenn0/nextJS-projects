"use client";
import { useState, useEffect } from "react";
import Form from "./Form";
import mailer from "@/service/mail";
import { RiMailSendLine } from "react-icons/ri";

export type EmailContent = {
  email: string;
  subject: string;
  message: string;
};

export type EmailStatus = "success" | "fail" | "sending" | "default";

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
    }, 3000);
    return () => clearInterval(timer);
  }, [emailStatus]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mailer({ emailContent, setIsShow, setEmailStatus });
    setEmailContent({ email: "", subject: "", message: "" });
  };

  return (
    <>
      <div className="bg-red-50 w-3/4 rounded-2xl p-5 m-auto md:w-5/12 drop-shadow-md">
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
            className="flex items-center gap-2  bg-rose-200 rounded-full w-min px-4 py-2 m-auto mt-5
            trasition ease-in-out duration-200 hover:bg-rose-300 hover:text-white
            "
            type="submit"
          >
            Send
            <RiMailSendLine />
          </button>
        </form>
      </div>
      {emailStatus === "success" && isShow ? (
        <div className="bg-sky-100 rounded-lg p-3 mb-10 w-1/3 m-auto mt-6">
          메일 보내기 성공했습니다 💌
        </div>
      ) : emailStatus === "fail" && isShow ? (
        <div className="bg-red-300 rounded-lg p-3 mb-10 w-1/3 m-auto mt-6">
          메일 보내기 실패했습니다.다시 시도해주세요.😲
        </div>
      ) : emailStatus === "sending" ? (
        <div className="bg-sky-50 rounded-lg p-3 mb-10 w-1/3 m-auto">
          메일을 보내는 중입니다 📨 ==3
        </div>
      ) : (
        ""
      )}
    </>
  );
}
