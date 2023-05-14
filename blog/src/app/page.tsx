import Image from "next/image";
import Profile from "./profile/profile";

export default function Home() {
  return (
    <>
      <Profile />
      <section>
        <h3>Featured Posts</h3>
      </section>
      <section>
        <h3>You may like</h3>
      </section>
    </>
  );
}
