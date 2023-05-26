import SignIn from "@/components/SignIn";

import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function SignPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/new");
  }

  const providers = (await getProviders()) ?? {};
  return <SignIn providers={providers} />;
}
