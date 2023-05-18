import { EmailContent, EmailStatus } from "@/components/Email";
import { Dispatch, SetStateAction } from "react";

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
  const jsonPayload = JSON.stringify(payload, null, 3);

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
          setIsShow(false);
          setEmailStatus("fail");
        }
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    setIsShow(false);
    setEmailStatus("fail");
  }
}
