import { PortableTextBlock, insert } from "sanity";
import { createClient, groq } from "next-sanity";
import { Post } from "../types/Post";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { client } from "@/lib/sanity";
import { v4 as uuid } from "uuid";
import { log } from "console";
import { createReadStream } from "fs";

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
  // console.log(mailOfUser, mailToFollow);

  const followQuery1 = `*[_type == 'userCustom' && email==$mailOfUser1].following`;
  const params2 = { mailOfUser1: mailOfUser };

  // const following1 = await client.fetch(followQuery1, params2);
  // const idToFollow: string = await get_IdByEmail(mailToFollow);
  const following1 = client.fetch(followQuery1, params2);
  const idToFollow = get_IdByEmail(mailToFollow);
  const [res1, res2] = await Promise.all([following1, idToFollow]);
  if (res1[1] == null) {
    // console.log("following은 null이다");
    // console.log("isFollow함수", mailOfUser, mailToFollow);
    return false;
  }
  // console.log("following은 null이 아니다 ㅎ");

  const result = res1[1].some((obj: Obj) => obj._ref == res2);
  return result;

  // const followingQuery = `*[_type == 'userCustom' && email==$mailOfUser].following`;
  // const params = { mailOfUser: mailOfUser };
  // const following = await client.fetch(followingQuery, params);

  // if (following1[1] == null) {
  //   console.log("following은 null이다");
  //   console.log("isFollow함수", mailOfUser, mailToFollow);
  //   return false;
  // }
  // console.log("following은 null이 아니다 ㅎ");

  // const result = following1[1].some((obj: Obj) => obj._ref == idToFollow);
  // return result;
}

export async function getPosts(_id: string) {
  const posts = await client.fetch(
    groq`*[_type == 'post' && user._ref == ${_id}]`
  );
  posts.sort((a: any, b: any) => b._createdAt - a._createdAt);
  return posts;
}

export async function postPosts(post: any, userEmail: string) {
  const userId = await get_IdByEmail(userEmail);
  console.log("postPosts에서 받은 : ", userId);
  try {
    const result = await client.create({
      ...post,
      user: { _type: "reference", _ref: userId },
    });

    const result1 = await client
      .patch(userId)
      .setIfMissing({ posts: [] })
      .insert("after", "posts[-1]", [{ _type: "reference", _ref: post._id }])
      .commit()
      .then((updatedUser) => {
        console.log("됏나봐");
      });

    console.log("post 보내짐");
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function get_IdByEmail(email: string) {
  console.log("get_IdByemail에서 받은 email", email);
  const userQuery = `*[_type == 'userCustom' && email==$emailValue]._id`;
  const params = { emailValue: email };
  const userId: string = await client.fetch(userQuery, params);
  console.log(userId);
  return userId[0];
}

export async function followUser(mailOfUser: string, mailToFollow: string) {
  const userId = await get_IdByEmail(mailOfUser);
  const idToFollow = await get_IdByEmail(mailToFollow);
  const followingQuery = `*[_type == 'userCustom' && email==$mailOfUser].following`;
  const params = { mailOfUser: mailOfUser };
  const following = await client.fetch(followingQuery, params);
  //const isFollow = following[0].some((obj: any) => obj._ref == userId);
  // console.log("follll", following);

  if (following[1] == null || following[1].length == 0) {
    // console.log("팔로우 하나도 없다가 시도");
    try {
      const email = mailToFollow;
      // console.log("email", email);

      const userIdToFollow = await get_IdByEmail(email);
      // console.log("userIdToFollow", userIdToFollow[0]); // null !!!

      if (!userId) {
        // console.error("No user found with the specified email");
        return null;
      }

      const result = await client
        .patch(userId[1])
        // .setIfMissing({ following: [] })
        .insert("after", "following[-1]", [
          { _type: "reference", _ref: userIdToFollow[0] },
        ])
        .commit()
        .then((updatedUser) => {
          console.log("Follow : Updated user", updatedUser);
        });
      // console.log("following success");
      return result;
    } catch (error) {
      console.error("An error occurred 으랴랴랴랴:", error);
    }
  } else {
    // const isFollow = following[1].some((obj: Obj) => obj._ref === idToFollow);
    const result = await isFollow(mailOfUser, mailToFollow);
    // console.log("중간체쿠ㅡ", following[1]);
    if (result == true) {
      // console.log("이미 follow중 입니다.");
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

export async function unfollowUser(mailOfUser: string, mailToFollow: string) {
  const userId = await get_IdByEmail(mailOfUser);
  const idToUnfollow = await get_IdByEmail(mailToFollow);

  const query = `*[_type == 'userCustom' && _id == $id]`;
  const params3 = { id: userId[1] };

  client
    .fetch(query, params3)
    .then((user) => {
      const userId = user[0]._id;
      const following = user[0].following || [];

      const updatedFollowing = following.filter(
        (follow: Obj) => follow._ref !== idToUnfollow[0]
      );

      return client.patch(userId).set({ following: updatedFollowing }).commit();
    })
    .then((updatedUser) => {
      console.log("Updated user", updatedUser);
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}

// export async function sendImage() {
//   client.assets.upload('image',)
// }
