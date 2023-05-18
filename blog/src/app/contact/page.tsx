import Email from "@/components/Email";
import { BsGithub } from "react-icons/bs";

export default async function ContactPage() {
  return (
    <section className="text-center pt-20  box-border">
      <h1 className="text-2xl m-2 text-slate-700 mb-5">Contact me 📨</h1>

      <a
        href="https://github.com/0jenn0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub className="m-auto text-7xl text-gray-300 trasition ease-in-out duration-150 mb-10 hover:text-rose-300" />
      </a>

      <Email />
    </section>
  );
}
