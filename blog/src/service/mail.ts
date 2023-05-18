import { EmailContent, EmailStatus } from "@/components/Email";
import { Dispatch, SetStateAction } from "react";
import { object, string, number, date, InferType } from "yup";

type Props = {
  emailContent: EmailContent;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  setEmailStatus: Dispatch<SetStateAction<EmailStatus>>;
};

export default async function mailer({
  emailContent,
  setIsShow,
  setEmailStatus,
}: Props) {
  const payload = {
    email: emailContent.email,
    message: emailContent.message,
    subject: emailContent.subject,
  };

  const mailSchema = object({
    email: string().email().required(),
    message: string().required(),
    subject: string().required(),
  });

  const isValid = await mailSchema.isValid(payload);
  if (isValid) {
    try {
      const jsonMail = JSON.stringify(payload, null, 3);
      await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonMail,
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
      console.log("에러!!!!!", error);
    }
  } else {
    setIsShow(true);
    setEmailStatus("fail");
    console.log("안됨");
  }
}
