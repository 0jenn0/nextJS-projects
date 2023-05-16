"use client";
import { useState, FormEvent, useEffect } from "react";

type EmailContentt = {
  email: string;
  subject: string;
  message: string;
};

type EmailStatus = "success" | "fail" | "default";

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

    const payload = {
      email: emailContent.email,
      message: emailContent.message,
      subject: emailContent.subject,
    };
    const jsonPayload = JSON.stringify(payload, null, 3);

    setEmailContent({ email: "", subject: "", message: "" });

    if (emailContent.email && emailContent.message && emailContent.subject) {
      try {
        await fetch("/api/mail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: jsonPayload,
        }).then((response) => {
          if (response.status == 200) {
            setIsShow(true);
            setEmailStatus("success");
          } else if (response.status == 400) {
            setIsShow(true);
            setEmailStatus("fail");
          }
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsShow(true);
      setEmailStatus("fail");
    }
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
      ) : (
        ""
      )}
      <div className="bg-red-50 w-3/4 rounded-lg p-5 m-auto md:w-5/12">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col text-left m-auto justify-center"
        >
          <label className="m-2" htmlFor="">
            Your Email
          </label>
          <input
            className="px-4 py-2 rounded-full"
            value={emailContent.email}
            type="text"
            placeholder="user@mail.com"
            onChange={(e) =>
              setEmailContent((prev) => ({ ...prev, email: e.target.value }))
            }
          />

          <label className="m-2" htmlFor="">
            Subject
          </label>
          <input
            className="px-4 py-2 rounded-full"
            type="text"
            placeholder="제목"
            value={emailContent.subject}
            onChange={(e) =>
              setEmailContent((prev) => ({ ...prev, subject: e.target.value }))
            }
          />

          <label className="m-2" htmlFor="">
            Message
          </label>
          <input
            className="px-4 py-2 rounded-full"
            type="text"
            placeholder="메일 내용"
            value={emailContent.message}
            onChange={(e) =>
              setEmailContent((prev) => ({ ...prev, message: e.target.value }))
            }
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
