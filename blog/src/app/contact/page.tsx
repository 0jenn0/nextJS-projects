import Email from "@/components/Email";
import nodemailer from "nodemailer";
import { BsGithub } from "react-icons/bs";

type EmailData = {
  from: string;
  subject: string;
  message: string;
};

export default async function ContactPage() {
  const mailData = {};
  return (
    <section className="text-center">
      <h1 className="text-2xl m-2">Contact me</h1>
      <BsGithub className="m-auto text-5xl mb-10" />
      <Email />
    </section>
  );
}
