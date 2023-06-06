import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getUsers } from "@/service/user";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return getUsers().then((data) => NextResponse.json(data));
  }

  return getUsers(user.username).then((data) => NextResponse.json(data));
}
