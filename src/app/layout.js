import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "XMAILBOX",
  description: "企业邮箱最佳解决方案 XMAILBOX Business Email solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh_CN">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
        {/* <div className="w-screen h-screen bg-gradient-to-b from-white to-blue-300">
          <div className="h-16">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-4rem)]">
            {children}
          </div>
        </div> */}
      </body>
    </html>
  );
}
