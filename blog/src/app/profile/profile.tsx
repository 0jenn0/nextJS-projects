import ContactButton from "@/components/ContactButton";
import Image from "next/image";
import profileImage from "/public/images/profile.jpg";
import headerImage from "/public/images/header.jpeg";

export default function Profile() {
  return (
    <section className="text-center flex  items-center bg-[url('/images/header5.jpeg')] bg-cover bg-no-repeat w-full inset-0 pt-16 pb-6 bg-center pl-10">
      <Image
        className="m-5 rounded-full"
        src={profileImage}
        width={200}
        alt="Profile"
      />
      <div>
        <div className="backdrop-blur-xl p-4 rounded-2xl">
          <h1 className="font-semibold text-2xl">{`Hi, I'm Jenn`}</h1>
          <p>Full-stack engineer</p>
          <p className="text-sm">꿈을 코딩하는 사람, 드림코더 젠</p>
        </div>

        <ContactButton />
      </div>
    </section>
  );
}
