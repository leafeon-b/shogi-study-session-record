import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

const session = await getServerAuthSession();

// ナビゲーション
const Navigation = () => {
  return (
    <header className="mb-10 shadow-lg shadow-gray-100">
      <div className="container mx-auto flex max-w-screen-md items-center justify-between px-2 py-3">
        <Link href="/" className="cursor-pointer text-xl font-bold">
          将棋研究会記録帳
        </Link>
        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        >
          {session ? "Sign out" : "Sign in"}
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
