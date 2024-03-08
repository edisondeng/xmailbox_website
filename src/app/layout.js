import { Inter } from "next/font/google";
import "./globals.css";
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
      </body>
    </html>
  );
}
