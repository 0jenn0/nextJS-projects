import ContactButton from "@/components/ContactButton";
import Image from "next/image";
import profileImage from "/public/images/profile.jpg";

export default function Profile() {
  return (
    <section className="text-center">
      <Image
        className="m-auto rounded-full"
        src={profileImage}
        width={250}
        alt="Profile"
      />
      <h1 className="font-semibold text-2xl">{`Hi, I'm Jenn`}</h1>
      <p>Full-stack engineer</p>
      <p className="text-sm">꿈을 코딩하는 사람, 드림코더 젠</p>
      <ContactButton />
    </section>
  );
}
