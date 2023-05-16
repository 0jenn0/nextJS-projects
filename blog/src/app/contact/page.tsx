import Email from "@/components/Email";
import { BsGithub } from "react-icons/bs";

export default async function ContactPage() {
  return (
    <section className="text-center">
      <h1 className="text-2xl m-2">Contact me</h1>

      <a
        href="https://github.com/0jenn0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub className="m-auto text-5xl mb-10" />
      </a>

      <Email />
    </section>
  );
}
