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

export async function getPostsOf(username: string) {
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
      `*[_type == "post" && *[_type == "user" && username == "${username}"][0]._id in likes[]._ref]
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
