import { SimpleUser } from "./../model/user";
import { client } from "./sanity";
import { getUserByUsername } from "./user";
import { Post } from "@/model/post";

export async function getPostsByUsername(username: string) {
  const data = await client.fetch(
    `*[_type == "post" && author._ref in *[_type=="user" && username=="${username}"]._id]{
        ...,
        'id': _id,
        author -> {username,image},
        'photo' : photo.asset._ref,
        'likes' : likes[] -> {username,image},
        'comments': comments[]{
          comment,
        author -> {username,image}
        }
      }`
  );
  return data;
}

export async function getFollowingByUsername(username: string) {
  const user = await getUserByUsername(username);
  const arr = await Promise.all(
    user.following.map((user: SimpleUser) => getPostsByUsername(user.username))
  );
  const newArr = [...arr].filter((item: Array<any>) => item.length > 0);
  const arr2 = newArr.reduce(function (acc, cur) {
    return [...acc, ...cur];
  });
  console.log(arr2);
  return arr2;
}
