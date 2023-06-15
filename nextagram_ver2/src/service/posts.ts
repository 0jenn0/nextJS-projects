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

export async function getFollowingPostOf(username: string) {
  return client
    .fetch(
      `*[_type == "post" && author->username == "${username}"
     || author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
     | order(_createdAt desc){${simplePostProjection}}`
    )
    .then((posts) =>
      posts.map((post: SimplePost) => ({
        ...post,
        image: urlFor(post.image),
        likes: post.likes ?? [],
      }))
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
      posts.map((post: SimplePost) => ({
        ...post,
        image: urlFor(post.image),
        likes: post.likes ?? [],
      }))
    );
}

export async function getLikedPosts(username: string) {
  return client
    .fetch(
      `*[_type == "post" && *[_type == "user" && username == "${username}"][0]._id in likes[]._ref]
     | order(_createdAt desc){${simplePostProjection}}`
    )
    .then((posts) =>
      posts.map((post: SimplePost) => ({
        ...post,
        image: urlFor(post.image),
        likes: post.likes ?? [],
      }))
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
      posts.map((post: SimplePost) => ({
        ...post,
        image: urlFor(post.image),
        likes: post.likes ?? [],
      }))
    );
}

export async function likePost(postId: string, userId: string) {
  return client
    .patch(postId) //
    .setIfMissing({ likes: [] })
    .append("likes", [
      {
        _ref: userId,
        _type: "reference",
      },
    ])
    .commit({ autoGenerateArrayKeys: true });
}

export async function dislikePost(postId: string, userId: string) {
  return client
    .patch(postId)
    .unset([`likes[_ref=="${userId}"]`])
    .commit();
}
