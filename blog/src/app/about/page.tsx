import Profile from "../profile/profile";

export default function AboutPage() {
  return (
    <>
      <Profile />
      <article className="text-center bg-pink-50 p-6 text-mediun flex justify-evenly h-64">
        <div className="m-5">
          <h1 className="text-2xl font-semibold m-2">Who am ?</h1>
          <p>개발을 사랑하는 풀스택 개발자</p>
          <p>사람과 디자인을 담는 웹앱을 만들고 있음</p>
        </div>

        <div className="m-5">
          <h1 className="text-2xl font-semibold m-2">Career</h1>
          <p>쓰앵님콘</p>
          <p>댕댕커플</p>
        </div>

        <div className="m-5">
          <h1 className="text-2xl font-semibold m-2">Skills</h1>
          <p>React,NextJS,Typescript</p>
          <p>ClipStudio,Git,VS Code</p>
        </div>
      </article>
    </>
  );
}
