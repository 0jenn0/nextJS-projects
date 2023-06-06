import { UserBySearch } from "@/model/user";
import { client } from "./sanity";

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

export async function addUser({ id, username, email, name, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}

export const SimpleUserProjection = `
...,
'id' : _id,
'following' : count(following),
'followers' : count(followers),
`;

export async function getUserByUsername(username: string) {
  return client.fetch(`*[_type == "user" && username == "${username}"][0]{
    ...,
    'id' : _id,
    following[] -> {username,image},
    followers[] -> {username,image},
    'bookmarks' : bookmarks[] -> _id
  }`);
}

export async function getUsers(username?: string) {
  if (username) {
    return client
      .fetch(
        `
      { "me":*[_type == "user" && username == "${username}"][0]{...,
        'id' : _id,
        'following' : count(following),
        'followers' : count(followers)},
          "other":*[_type == "user" && username != "${username}"] | order(username asc){...,
        'id' : _id,
        'following' : count(following),
        'followers' : count(followers),}
        }
      `
      )
      .then((data) => {
        const newData = JSON.parse(JSON.stringify(data)); // Deep copy

        newData.me = Object.assign({}, newData.me, {
          following: newData.me.following || 0,
          followers: newData.me.followers || 0,
        });

        newData.other = newData.other.map((user: UserBySearch) =>
          Object.assign({}, user, {
            following: user.following || 0,
            followers: user.followers || 0,
          })
        );

        return newData;
      });
  }
  return client
    .fetch(
      `
    *[_type == "user"] | order(username asc){
      ...,
      'id' : _id,
      'following' : count(following),
      'followers' : count(followers),}
    `
    )
    .then((users) =>
      users.map((user: UserBySearch) => ({
        ...user,
        following: user.following ?? 0,
        followers: user.followers ?? 0,
      }))
    );
}

export async function getUsersBySearch(keyword: string) {
  return client
    .fetch(
      `
  *[_type == "user" && (username match "*${keyword}*" || name match "*${keyword}*")]{
    ...,'id' : _id,
    'following' : count(following),
    'followers' : count(followers),
  }
  `
    )
    .then((users) =>
      users.map((user: UserBySearch) => ({
        ...user,
        following: user.following ?? 0,
        followers: user.followers ?? 0,
      }))
    );
}
