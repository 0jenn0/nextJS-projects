import { NextResponse } from "next/server";
import { getUsersBySearch } from "@/service/user";
import { getLikedPosts, getPostByMenu, getSavedPosts } from "@/service/posts";
import { Menu } from "@/app/user/[username]/page";

type Context = {
  params: {
    slug: [username: string, menu: Menu];
  };
};

export async function GET(request: Request, context: Context) {
  switch (context.params.slug[1]) {
    case "POST":
      return getPostByMenu(context.params.slug[1], context.params.slug[0]) //
        .then((data) => NextResponse.json(data));
    case "LIKED":
      return getLikedPosts(context.params.slug[0]) //
        .then((data) => NextResponse.json(data));
    case "SAVED":
      return getSavedPosts(context.params.slug[0]) //
        .then((data) => NextResponse.json(data));
  }
}
