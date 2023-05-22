import { PortableTextBlock, insert } from "sanity";
import { createClient, groq } from "next-sanity";
import { Project } from "../types/Post";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { client } from "@/lib/sanity";
import { v4 as uuid } from "uuid";
import { log } from "console";

// user = email,image,name,follow,liked,bookmark

type Obj = {
  _ref: string;
  _type: string;
  _key?: string;
};

export async function isFollow(
  mailOfUser: string,
  mailToFollow: string
): Promise<boolean> {
  console.log(mailOfUser, mailToFollow);

  const followQuery1 = `*[_type == 'userCustom' && email==$mailOfUser1].following`;
  const params2 = { mailOfUser1: mailOfUser };
  const following1 = await client.fetch(followQuery1, params2);
  console.log("is Foloow following", following1);
  const idToFollow: string = await get_IdByEmail(mailToFollow);

  // const followingQuery = `*[_type == 'userCustom' && email==$mailOfUser].following`;
  // const params = { mailOfUser: mailOfUser };
  // const following = await client.fetch(followingQuery, params);

  if (following1[1] == null) {
    console.log("following은 null이다");
    console.log("isFollow함수", mailOfUser, mailToFollow);
    return false;
  }
  console.log("following은 null이 아니다 ㅎ");

  const result = following1[1].some((obj: Obj) => obj._ref == idToFollow);
  return result;
}

export async function getPosts(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project" ]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}

export async function postPosts(data: any) {
  const result = client.create(data);

  return result;
}

async function get_IdByEmail(email: string) {
  const userQuery = `*[_type == 'userCustom' && email==$emailValue]._id`;
  const params = { emailValue: email };
  const userId: string = await client.fetch(userQuery, params);

  return userId;
}

export async function followUser(mailOfUser: string, mailToFollow: string) {
  const userId = await get_IdByEmail(mailOfUser);
  const idToFollow = await get_IdByEmail(mailToFollow);
  const followingQuery = `*[_type == 'userCustom' && email==$mailOfUser].following`;
  const params = { mailOfUser: mailOfUser };
  const following = await client.fetch(followingQuery, params);
  //const isFollow = following[0].some((obj: any) => obj._ref == userId);
  console.log("follll", following);

  if (following[0] == null) {
    console.log("팔로우 하나도 없다가 시도");
    try {
      const email = mailToFollow;
      console.log("email", email);

      const userIdToFollow = await get_IdByEmail(email);
      console.log("userIdToFollow", userIdToFollow); // null !!!

      if (!userId) {
        console.error("No user found with the specified email");
        return null;
      }

      const result = await client
        .patch(userId)
        .setIfMissing({ following: [] })
        .insert("after", "following[-1]", [
          { _type: "reference", _ref: userIdToFollow },
        ])
        .commit();
      console.log("following success");
      return result;
    } catch (error) {
      console.error("An error occurred 으랴랴랴랴:", error);
    }
  } else {
    // const isFollow = following[1].some((obj: Obj) => obj._ref === idToFollow);
    const result = await isFollow(mailOfUser, mailToFollow);
    console.log("중간체쿠ㅡ", following[1]);
    if (result == true) {
      console.log("이미 follow중 입니다.");
    } else {
      try {
        const email = mailToFollow; // replace with the email of the user you want to modify
        // const followingUserId = "user-id-to-follow"; // replace with the ID of the user you want to add to following
        const userIdToFollow: string = await get_IdByEmail(mailToFollow);

        if (!userId) {
          console.error("No user found with the specified email");
          return null;
        }

        const result = await client
          .patch(userId)
          .insert("after", "following[-1]", [
            { _type: "reference", _ref: userIdToFollow },
          ])
          .commit();
        console.log("following success");
        return result;
      } catch (error) {
        console.error("An error occurred ㅇㅇㅇㅇ:", error);
      }
    }
  }
}

// export async function followUser() {
//   try {
//     // 사용자의 _id를 가져오는 쿼리 실행
//     const userQuery = `*[_type == "userCustom" && email == "jenn0.6n@gmail.com"][0]._id`;
//     const userId = await client.fetch(userQuery);

//     console.log("follow follow follow follow❌❌❌❌❌❌❌❌❌❌❌");

//     const mutation = client
//       .patch(userId) // 사용자 문서의 ID를 전달
//       .insert("after", "following[-1]") // 삽입할 위치를 지정
//       .setIfMissing({ following: [] }) // `following` 배열이 없는 경우 초기화
//       .insert("following", [{ _type: "reference", _ref: "person123" }]); // 레퍼런스 삽입

//     // 문서 업데이트 실행
//     const result = await mutation.commit();

//     console.log("Followed user successfully");
//     return result;
//   } catch (error) {
//     console.error('Error following user:', error.message);
//     return null;
//   }
// }
