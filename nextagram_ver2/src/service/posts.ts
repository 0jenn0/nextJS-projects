import { Menu } from "./../app/user/[username]/page";
import { SimplePost } from "@/model/post";
import { client, urlFor } from "./sanity";

const simplePostProjection = `
...,
'username': author -> username,
'userImage' : author -> image,
'image': photo,
'likes': likes[]-> username,
'text' : comments[0].comment,
'comments' : count(comments),
'id':_id,
'createdAt':_createdAt
`;

// post의 likes 안에 username인 user가 있어야됨.

export async function getFollowingPostOf(username: string) {
  return client
    .fetch(
      `*[_type == "post" && author->username == "${username}"
     || author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
     | order(_createdAt desc){${simplePostProjection}}`
    )
    .then((posts) =>
      posts.map((post: SimplePost) => ({ ...post, image: urlFor(post.image) }))
    );
}

//2cb72bce-9d38-460f-a913-dce4677cbfbd

export async function getPost(id: string) {
  return client
    .fetch(
      `*[_type == "post" && _id == "${id}"][0]{
      ...,
      "username": author->username,
      "userImage": author->image,
      "image": photo,
      "likes": likes[]->username,
      comments[]{comment, "username": author->username, "image": author->image},
      "id":_id,
      "createdAt":_creatdAt
    }`
    )
    .then((post) => ({ ...post, image: urlFor(post.image) }));
}

export async function getPostByMenu(menu: Menu, username: string) {
  console.log("getPostbymnene", menu, username);
  return client
    .fetch(
      `
  *[_type == "post" && author->username == "${username}"]{${simplePostProjection}}
  `
    )
    .then((posts) =>
      posts.map((post: SimplePost) => ({ ...post, image: urlFor(post.image) }))
    );
}

export async function getLikedPosts(username: string) {
  return client
    .fetch(
      `*[_type == "post" && *[_type == "user" && username == "cuty.cat"][0]._id in likes[]._ref]
     | order(_createdAt desc){${simplePostProjection}}`
    )
    .then((posts) =>
      posts.map((post: SimplePost) => ({ ...post, image: urlFor(post.image) }))
    );
}

export async function getSavedPosts(username: string) {
  return client
    .fetch(
      `
  *[_type == "post" &&  _id in *[_type == "user" && username == "${username}"].bookmarks[]._ref]
  | order(_createdAt desc){${simplePostProjection}}
  `
    )
    .then((posts) =>
      posts.map((post: SimplePost) => ({ ...post, image: urlFor(post.image) }))
    );
}
