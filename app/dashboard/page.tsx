import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import MyPosts from "./MyPosts";
import { authOptions } from "../api/auth/[...nextauth]";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main>
      <h1 className="text-2xl font-bold">Welcome back {session?.user?.name}</h1>
      <MyPosts />
    </main>
  );
}
