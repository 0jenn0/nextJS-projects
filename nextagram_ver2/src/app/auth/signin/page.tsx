import SignIn from "@/components/SignIn";

import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};
  return (
    <section className="flex justify-center mt-[10%]">
      <SignIn providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}
