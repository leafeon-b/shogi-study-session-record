import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navigation from "~/components/auth/Navigation";
import "~/styles/globals.css";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "将棋研究会記録帳",
  description: "将棋研究会記録帳",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

// レイアウト
const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <div className="flex min-h-screen flex-col">
            <Navigation />

            <main className="container mx-auto max-w-screen-md flex-1 px-2">
              {children}
            </main>

            {/* フッター */}
            <footer className="py-5">
              <div className="text-center text-sm">
                Copyright © All rights reserved |{" "}
                <Link
                  href="https://github.com/leafeon-b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
              </div>
            </footer>
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
