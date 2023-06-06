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
  console.log("api 발동");
  return getUsersBySearch(context.params.keyword) //
    .then((data) => NextResponse.json(data));
}
