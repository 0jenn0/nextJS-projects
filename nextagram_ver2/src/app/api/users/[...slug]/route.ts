import { NextResponse } from "next/server";
import { getLikedPosts, getPostsOf, getSavedPosts } from "@/service/posts";
import { Tab } from "@/components/UserPosts";

type Context = {
  params: {
    // slug: [username: string, menu: Menu];
    slug: string[];
  };
};

export async function GET(_: Request, context: Context) {
  const { slug } = context.params;

  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const [username, query] = slug;
  let request = getPostsOf;

  switch (query) {
    case "POST":
      request = getPostsOf;
      break;

    case "LIKED":
      request = getLikedPosts;
      break;

    case "SAVED":
      request = getSavedPosts;
      break;
  }

  return request(username).then((data) => NextResponse.json(data));
}
