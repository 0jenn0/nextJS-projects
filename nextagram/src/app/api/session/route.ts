// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
// import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return new NextResponse(
//       JSON.stringify({ status: "fail", message: "You are not logged in" }),
//       { status: 401 }
//     );
//   }

//   return NextResponse.json({
//     authenticated: !!session,
//     session,
//   });
// }

import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]"
import { authOptions } from "@/lib/auth";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  res.send(JSON.stringify(session, null, 2));
}
