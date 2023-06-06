import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getUsersBySearch } from "@/service/user";

type Context = {
  params: {
    keyword: string;
  };
};

export async function GET(request: Request, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }
  console.log("api 발동");
  return getUsersBySearch(context.params.keyword) //
    .then((data) => NextResponse.json(data));
}
