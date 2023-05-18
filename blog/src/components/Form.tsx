import { Dispatch, SetStateAction } from "react";
import { EmailContentt } from "./Email";

type Value = "email" | "subject" | "message";

type Props = {
  emailContent: EmailContentt;
  setEmailContent: Dispatch<SetStateAction<EmailContentt>>;
  value: Value;
};

export default function Form({ emailContent, setEmailContent, value }: Props) {
  return (
    <>
      <label className="m-2" htmlFor="">
        {value === "email"
          ? `Your Emial`
          : value === "subject"
          ? `Subject`
          : `Message`}
      </label>
      <input
        className="px-4 py-2 rounded-full"
        value={emailContent[value]}
        type="text"
        placeholder={
          value === "email"
            ? `user@mail.com`
            : value === "subject"
            ? `제목`
            : `메일 내용`
        }
        onChange={(e) =>
          setEmailContent((prev) => ({ ...prev, [value]: e.target.value }))
        }
      />
    </>
  );
}
