import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getUserForProfile, getUsersBySearch } from "@/service/user";

type Context = {
  params: {
    username: string;
  };
};

export async function GET(request: Request, context: Context) {
  return getUserForProfile(context.params.username) //
    .then((data) => NextResponse.json(data));
}
