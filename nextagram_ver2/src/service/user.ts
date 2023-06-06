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
    return client.fetch(
      `
      { "me":*[_type == "user" && username == "${username}"][0]{...,
        'id' : _id,
        'following' : count(following),
        'followers' : count(followers)},
          "other":*[_type == "user" && username != "jenn0.6n"] | order(username asc){...,
        'id' : _id,
        'following' : count(following),
        'followers' : count(followers),}
        }
      `
    );
  }
  return client.fetch(
    `
    *[_type == "user"] | order(username asc){...,
      'id' : _id,
      'following' : count(following),
      'followers' : count(followers),}
    `
  );
}

export async function getUsersBySearch(keyword: string) {
  return client.fetch(`
  *[_type == "user" && (username match "*${keyword}*" || name match "*${keyword}*")]{
    ...,'id' : _id,
    'following' : count(following),
    'followers' : count(followers),
  }
  `);
}
