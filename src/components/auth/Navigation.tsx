"use client";

import Link from "next/link";

// ナビゲーション
const Navigation = () => {
  return (
    <header className="mb-10 shadow-lg shadow-gray-100">
      <div className="container mx-auto flex max-w-screen-md items-center justify-between px-2 py-3">
        <Link href="/" className="cursor-pointer text-xl font-bold">
          将棋研究会記録帳
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
