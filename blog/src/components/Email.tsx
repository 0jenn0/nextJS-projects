"use client";
import { useState, FormEvent } from "react";

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
    setEmailContent({ email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-red-50 w-5/12 rounded-lg p-5 m-auto ">
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
  );
}
