import SignOutButton from "@/components/auth/sign-out-button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return <div>Not authenticated</div>;
  }

  return (
    <section className="grid place-content-center min-h-screen">
      <SignOutButton />
      <div>
        <h1>Welcome {session.user.name}</h1>
      </div>
    </section>
  );
}
